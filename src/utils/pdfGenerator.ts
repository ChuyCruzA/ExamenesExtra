import { jsPDF } from 'jspdf';
import { ResultadoExamen } from '../types.ts';
import { SUBMODULOS } from '../data/submodulos.ts';

export function generarReportePDF(resultado: ResultadoExamen): void {
  const sub = SUBMODULOS[resultado.subId];
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' });
  const W = 215.9;
  const M = 16;
  const ancho = W - M * 2;
  const VERDE: [number, number, number] = [26, 92, 54];
  const ROJO: [number, number, number] = [192, 57, 43];
  const GRIS: [number, number, number] = [74, 85, 72];
  let y = 0;

  // Header Banner
  doc.setFillColor(...VERDE);
  doc.rect(0, 0, W, 34, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('CBT CHAPA DE MOTA', W / 2, 12, { align: 'center' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(
    `Reporte Oficial de Examen · ${sub?.nombre || resultado.subId}`,
    W / 2,
    20,
    { align: 'center' }
  );
  doc.text('Técnico en Informática · Plan NEM 2025 · Ciclo Escolar 2025-2026', W / 2, 27, {
    align: 'center',
  });
  y = 42;

  // Badge Estado
  const aprobado = resultado.aprobado;
  const colorEstado: [number, number, number] = aprobado ? [39, 174, 96] : ROJO;
  doc.setFillColor(colorEstado[0], colorEstado[1], colorEstado[2]);
  doc.roundedRect(M, y, ancho, 15, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  const estadoTexto = aprobado
    ? `✓ APROBADO — ${resultado.aciertos} aciertos de ${resultado.total} (${resultado.porcentaje}%)`
    : `✗ NO APROBADO — ${resultado.aciertos} aciertos de ${resultado.total} (${resultado.porcentaje}%)`;
  doc.text(estadoTexto, W / 2, y + 10, { align: 'center' });
  y += 22;

  // Tarjeta de Metadatos
  doc.setFillColor(240, 250, 245);
  doc.rect(M, y, ancho, 25, 'F');
  doc.setTextColor(...GRIS);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);

  doc.text('ALUMNO', M + 4, y + 6);
  doc.text('SEMESTRE', M + ancho / 2 + 4, y + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(28, 33, 25);
  doc.text(resultado.nombre || '—', M + 4, y + 12);
  doc.text(resultado.semestre || '—', M + ancho / 2 + 4, y + 12);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...GRIS);
  doc.text('FECHA', M + 4, y + 18);
  doc.text('TIEMPO EMPLEADO', M + ancho / 2 + 4, y + 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(28, 33, 25);
  doc.text(resultado.fecha, M + 4, y + 23);

  const min = Math.floor(resultado.duracionSegundos / 60);
  const seg = resultado.duracionSegundos % 60;
  doc.text(
    `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')} min`,
    M + ancho / 2 + 4,
    y + 23
  );
  y += 32;

  // Desglose por tipo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...VERDE);
  doc.text('Desglose de aciertos por tipo de reactivo', M, y);
  y += 4;
  doc.setDrawColor(...VERDE);
  doc.line(M, y, M + ancho, y);
  y += 6;

  const desgloseConfig = [
    { label: '✍️ Respuesta corta', key: 'respuesta_corta' },
    { label: '🔘 Opción múltiple', key: 'opcion_multiple' },
    { label: '⚖️ Falso / Verdadero', key: 'falso_verdadero' },
    { label: '🧩 Cañevá (Cloze)', key: 'cloze' },
    { label: '🔗 Relación de columnas', key: 'relacion' },
  ] as const;

  desgloseConfig.forEach((item) => {
    const data = resultado.desglose[item.key];
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(28, 33, 25);
    const pct = data.total > 0 ? Math.round((data.aciertos / data.total) * 100) : 0;
    doc.text(`${item.label}: ${data.aciertos} de ${data.total} (${pct}%)`, M + 2, y);
    y += 5;
  });
  y += 5;

  // Lista de fallidas
  const fallidas = resultado.detalles.filter((d) => !d.ok);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...VERDE);
  doc.text(`Preguntas con respuesta incorrecta o sin contestar (${fallidas.length})`, M, y);
  y += 4;
  doc.setDrawColor(...VERDE);
  doc.line(M, y, M + ancho, y);
  y += 6;

  if (fallidas.length === 0) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(39, 174, 96);
    doc.text('¡Excelente! Todas las 60 preguntas fueron contestadas con éxito.', W / 2, y + 5, {
      align: 'center',
    });
    y += 14;
  } else {
    fallidas.forEach((det) => {
      if (y > 250) {
        doc.addPage();
        y = 16;
      }

      doc.setFillColor(254, 242, 242);
      const txt = det.preg?.p || det.preg?.instruccion || det.preg?.texto || '';
      const lines = doc.splitTextToSize(`P.${det.pos} [${det.tipo.replace('_', ' ')}]: ${txt}`, ancho - 6);
      const blockHeight = Math.max(8, lines.length * 4.2 + 4);

      doc.rect(M, y, ancho, blockHeight, 'F');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(28, 33, 25);
      doc.text(lines, M + 3, y + 4.5);
      y += blockHeight + 2;
    });
  }

  // Número de páginas al pie
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(154, 170, 150);
    doc.text(
      `CBT Chapa de Mota · ${sub?.nombre || ''} · Página ${i} de ${totalPages}`,
      W / 2,
      274,
      { align: 'center' }
    );
  }

  const cleanName = (resultado.nombre || 'alumno')
    .substring(0, 20)
    .replace(/[^a-zA-Z0-9]/g, '_');
  doc.save(`Examen_${resultado.subId}_${cleanName}.pdf`);
}
