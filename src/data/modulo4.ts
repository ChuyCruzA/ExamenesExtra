import { Submodulo } from '../types.ts';

export const submoduloIV1: Submodulo = {
  nombre: "IV.1 · Administra sistemas operativos",
  modulo: "Módulo IV",
  semestre: "5°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué es un sistema operativo según el glosario?", keywords: ["gestiona", "recursos", "hardware", "aplicaciones", "interfaz", "software base"], puntos: 1 },
      { p: "¿Qué es el kernel de un sistema operativo?", keywords: ["núcleo", "hardware", "procesos", "directamente", "gestiona"], puntos: 1 },
      { p: "¿Qué hace el comando 'chmod' en Linux?", keywords: ["permisos", "change", "mode", "archivo", "directorio"], puntos: 1 },
      { p: "¿Qué significa sudo en Linux?", keywords: ["superusuario", "root", "privilegios", "administrador", "ejecutar"], puntos: 1 },
      { p: "¿Qué es la memoria virtual en un SO?", keywords: ["disco", "RAM", "extensión", "swap", "procesos"], puntos: 1 },
      { p: "¿Qué es un demonio (daemon) en Linux?", keywords: ["segundo plano", "servicio", "proceso", "background", "automático"], puntos: 1 },
      { p: "¿Qué hace systemctl en Linux?", keywords: ["servicios", "iniciar", "detener", "reiniciar", "habilitar", "systemd"], puntos: 1 },
      { p: "¿Qué es la virtualización?", keywords: ["múltiples", "SO", "hardware", "aislada", "hipervisor"], puntos: 1 },
      { p: "¿Cuál es el sistema de archivos nativo de Linux?", keywords: ["ext4", "ext3", "ext2", "linux filesystem"], puntos: 1 },
      { p: "¿Qué son las redes según el glosario?", keywords: ["dispositivos", "interconectados", "recursos", "información", "compartir"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Qué hace el comando 'ps aux' en Linux?", o: ["Apaga el servidor", "Muestra todos los procesos en ejecución con detalles", "Lista archivos del directorio", "Muestra el uso de disco"], r: 1 },
      { p: "¿Qué hace 'kill' en Linux?", o: ["Apaga el sistema", "Envía una señal a un proceso para terminarlo", "Lista procesos", "Muestra estadísticas de red"], r: 1 },
      { p: "¿Qué hace 'df -h' en Linux?", o: ["Lista procesos", "Muestra el uso de espacio en disco de forma legible", "Muestra la RAM usada", "Lista usuarios conectados"], r: 1 },
      { p: "¿Qué hace 'top' o 'htop' en Linux?", o: ["Lista archivos", "Muestra en tiempo real procesos y uso de CPU/memoria", "Muestra espacio en disco", "Lista usuarios del sistema"], r: 1 },
      { p: "¿Qué hace el comando 'useradd' en Linux?", o: ["Elimina un usuario", "Crea una nueva cuenta de usuario en el sistema", "Modifica un usuario", "Lista usuarios activos"], r: 1 },
      { p: "¿Qué representan los permisos rwx en Linux?", o: ["Read, Write, eXec en octal", "Read (leer), Write (escribir), eXecute (ejecutar)", "Remote, Web, eXternal", "Root, Worker, eXtra"], r: 1 },
      { p: "¿Qué valor octal representa permisos 'rwxr-xr-x'?", o: ["644", "755", "777", "700"], r: 1 },
      { p: "¿Qué es SSH?", o: ["Tipo de sistema de archivos", "Protocolo de red con cifrado para administrar servidores remotamente", "Tipo de proceso", "Tipo de usuario"], r: 1 },
      { p: "¿Qué es Docker?", o: ["Tipo de VM completa", "Plataforma de contenedores para empaquetar y ejecutar apps en cualquier entorno", "Tipo de SO", "Tipo de partición"], r: 1 },
      { p: "¿Cuál es la diferencia entre contenedor Docker y VM?", o: ["Son idénticos", "Los contenedores comparten el kernel del anfitrión; las VMs incluyen un SO completo", "Las VMs son más ligeras", "Los contenedores son más pesados"], r: 1 },
      { p: "¿Qué es un cron job?", o: ["Tipo de proceso interactivo", "Tarea automatizada que se ejecuta en fechas y horas programadas", "Tipo de daemon", "Tipo de sistema de archivos"], r: 1 },
      { p: "¿Qué hace 'grep' en Linux?", o: ["Modifica archivos", "Busca patrones de texto en archivos o flujos de datos", "Lista directorios", "Comprime archivos"], r: 1 },
      { p: "¿Qué es RAID?", o: ["Tipo de protocolo de red", "Tecnología que combina múltiples discos para rendimiento o tolerancia a fallos", "Tipo de sistema de archivos", "Tipo de proceso"], r: 1 },
      { p: "¿Cuál es el sistema de archivos nativo de Windows?", o: ["ext4", "NTFS", "HFS+", "APFS"], r: 1 },
      { p: "¿Qué hace 'free -h' en Linux?", o: ["Libera memoria manualmente", "Muestra el uso de RAM y swap de forma legible", "Lista procesos", "Muestra espacio en disco"], r: 1 },
      { p: "Según el glosario, ¿cómo se clasifican las redes por tamaño?", o: ["Solo LAN y WAN", "PAN, LAN, MAN, WAN e Internet", "Bus, estrella y anillo", "Solo LAN y Internet"], r: 1 },
      { p: "¿Qué es una dirección IP según el glosario?", o: ["Nombre del servidor", "Identificador numérico único de cada dispositivo en una red", "Tipo de protocolo", "Nombre del dominio"], r: 1 },
      { p: "¿Qué hace 'chmod 755 archivo' en Linux?", o: ["Da permisos totales a todos", "Da rwx al propietario y rx a grupo y otros", "Elimina todos los permisos", "Da permisos solo al propietario"], r: 1 },
      { p: "¿Qué es un hipervisor tipo 1 (bare metal)?", o: ["VirtualBox", "VMware Workstation", "VMware ESXi o Hyper-V", "Parallels Desktop"], r: 2 },
      { p: "¿Qué es Samba en Linux?", o: ["Tipo de daemon de seguridad", "Implementación de SMB/CIFS para compartir archivos entre Linux y Windows", "Tipo de sistema de archivos", "Tipo de firewall"], r: 1 },
    ],
    falso_verdadero: [
      { p: "El sistema operativo gestiona los recursos de hardware y provee interfaz para aplicaciones.", r: true },
      { p: "ext4 es el sistema de archivos nativo de Windows.", r: false },
      { p: "sudo en Linux permite ejecutar comandos con privilegios de superusuario.", r: true },
      { p: "Los contenedores Docker incluyen un sistema operativo completo igual que las VMs.", r: false },
      { p: "SSH cifra la comunicación para administrar servidores de forma remota.", r: true },
      { p: "cron permite programar tareas automáticas en Linux en fechas y horas específicas.", r: true },
      { p: "El comando 'df -h' muestra el uso de memoria RAM.", r: false },
      { p: "RAID 1 crea un espejo de los datos entre dos discos para redundancia.", r: true },
      { p: "Un daemon es un proceso interactivo que espera input del usuario.", r: false },
      { p: "Las redes se clasifican por tamaño en: PAN, LAN, MAN, WAN e Internet.", r: true },
    ],
    cloze: [
      { texto: "El ___ gestiona hardware y proporciona servicios; su ___ es el núcleo que gestiona directamente el hardware.", banco: ["sistema operativo", "kernel", "compilador", "driver"], r: [0, 1] },
      { texto: "En Linux, ___ modifica permisos, ___ cambia el propietario y ___ permite acceso root.", banco: ["chmod", "chown", "sudo", "kill"], r: [0, 1, 2] },
      { texto: "Los permisos en Linux se representan como ___ (leer), ___ (escribir) y x (ejecutar).", banco: ["r", "w", "e", "x"], r: [0, 1] },
      { texto: "___ protege la comunicación remota y ___ envía una señal a un proceso para terminarlo.", banco: ["SSH", "kill", "sudo", "top"], r: [0, 1] },
      { texto: "___ es una plataforma de ___ que empaqueta apps con sus dependencias para ejecutarlas en cualquier entorno.", banco: ["Docker", "contenedores", "VMs", "imágenes"], r: [0, 1] },
      { texto: "Las redes se clasifican por tamaño: ___ (local), ___ (metropolitana) y WAN (amplia).", banco: ["LAN", "MAN", "PAN", "Internet"], r: [0, 1] },
      { texto: "___ muestra el uso de disco y ___ muestra el uso de memoria RAM en Linux.", banco: ["df -h", "free -h", "top", "ps aux"], r: [0, 1] },
      { texto: "Un ___ se ejecuta en segundo plano prestando servicios; ___ administra los servicios en sistemas con systemd.", banco: ["daemon", "systemctl", "proceso", "cron"], r: [0, 1] },
      { texto: "___ combina discos para rendimiento o redundancia; ___ permite crear máquinas virtuales completas.", banco: ["RAID", "virtualización", "partición", "compresión"], r: [0, 1] },
      { texto: "La dirección ___ identifica cada dispositivo en red; ___ conecta redes distintas entre sí.", banco: ["IP", "el router", "el switch", "el modem"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada comando Linux con su función:",
        columnaA: ["ps aux", "kill", "df -h", "free -h", "chmod", "grep"],
        columnaB: ["Busca patrones de texto", "Modifica permisos de archivos", "Muestra uso de RAM y swap", "Muestra procesos en ejecución", "Muestra uso de espacio en disco", "Termina un proceso por PID"],
        r: [3, 5, 4, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada tipo de red con su alcance:",
        columnaA: ["PAN", "LAN", "MAN", "WAN", "Internet"],
        columnaB: ["Red global de redes", "Red local (edificio, campus)", "Red personal (Bluetooth)", "Red de ciudad o metrópolis", "Red amplia entre ciudades o países"],
        r: [2, 1, 3, 4, 0]
      },
      {
        instruccion: "Relaciona cada permiso Linux con su valor octal:",
        columnaA: ["rwx", "rw-", "r-x", "r--", "---"],
        columnaB: ["4 (solo lectura)", "7 (lectura, escritura, ejecución)", "0 (sin permisos)", "6 (lectura y escritura)", "5 (lectura y ejecución)"],
        r: [1, 3, 4, 0, 2]
      },
      {
        instruccion: "Relaciona cada tecnología de virtualización con su descripción:",
        columnaA: ["Máquina Virtual (VM)", "Contenedor Docker", "Hipervisor tipo 1", "Hipervisor tipo 2"],
        columnaB: ["VirtualBox ejecutado sobre un SO", "SO completo aislado en hardware", "Comparte el kernel del anfitrión", "Bare metal: VMware ESXi o Hyper-V"],
        r: [1, 2, 3, 0]
      },
      {
        instruccion: "Relaciona cada sistema de archivos con su SO nativo:",
        columnaA: ["ext4", "NTFS", "APFS", "FAT32"],
        columnaB: ["Compatible con casi todos los SO (USB, etc.)", "Linux", "macOS", "Windows"],
        r: [1, 3, 2, 0]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada comando de gestión de archivos en la terminal Linux:",
        columnaA: ["ls -la", "cd ..", "cp -r", "mv", "rm -rf"],
        columnaB: ["Mueve o renombra archivos o carpetas", "Copia carpetas con todo su contenido", "Lista detallada incluyendo archivos ocultos", "Elimina de forma recursiva y forzada", "Sube al directorio padre superior"],
        r: [2, 4, 1, 0, 3]
      },
      {
        instruccion: "Relaciona cada estado del ciclo de vida de un proceso en el SO:",
        columnaA: ["Nuevo (New)", "Listo (Ready)", "Ejecución (Running)", "Bloqueado (Waiting)", "Terminado"],
        columnaB: ["Instrucciones ejecutándose en CPU", "Proceso recién instanciado en memoria", "Completó su tarea y libera recursos", "Esperando turno de asignación de CPU", "En espera de evento de E/S o recurso"],
        r: [1, 3, 0, 4, 2]
      },
      {
        instruccion: "Relaciona cada nivel de arreglo RAID con su configuración de discos:",
        columnaA: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        columnaB: ["Combina espejado y división en 4 discos", "División por bandas sin tolerancia a fallas", "Paridad distribuida en 3 o más discos", "Espejado idéntico en 2 discos para redundancia"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada demonio y servicio fundamental de Linux:",
        columnaA: ["systemd", "cron / crond", "sshd", "rsyslog"],
        columnaB: ["Servicio de conexión remota segura", "Demonio de tareas programadas", "Gestor de registro de eventos y logs", "Proceso inicial de arranque (PID 1)"],
        r: [3, 1, 0, 2]
      },
      {
        instruccion: "Relaciona cada herramienta de diagnóstico de redes en el SO:",
        columnaA: ["ping", "traceroute / tracert", "ip a / ifconfig", "netstat / ss"],
        columnaB: ["Muestra sockets y puertos en escucha", "Prueba latencia y respuesta ICMP", "Muestra saltos por routers intermediarios", "Muestra IPs asignadas a las interfaces"],
        r: [1, 2, 3, 0]
      }
    ]
  }
};

export const submoduloIV2: Submodulo = {
  nombre: "IV.2 · Instala y configura aplicaciones y servicios",
  modulo: "Módulo IV",
  semestre: "5°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué es un servidor web según el glosario?", keywords: ["software", "HTTP", "peticiones", "páginas web", "clientes", "procesa"], puntos: 1 },
      { p: "¿Qué es un servidor según el glosario?", keywords: ["computadora", "servicios", "clientes", "red", "ofrece"], puntos: 1 },
      { p: "¿Qué es DNS y para qué sirve?", keywords: ["dominio", "IP", "traduce", "nombres", "dirección"], puntos: 1 },
      { p: "¿Qué es DHCP?", keywords: ["asigna", "automáticamente", "IP", "configuración", "red"], puntos: 1 },
      { p: "¿Cuáles son los protocolos de correo más comunes?", keywords: ["SMTP", "POP3", "IMAP", "envío", "recepción"], puntos: 1 },
      { p: "¿Qué es un stack LAMP?", keywords: ["Linux", "Apache", "MySQL", "PHP", "servidor"], puntos: 1 },
      { p: "¿Qué es un Virtual Host en Apache?", keywords: ["múltiples", "sitios", "servidor", "configuración", "dominio"], puntos: 1 },
      { p: "¿Qué hace fail2ban en Linux?", keywords: ["bloquea", "IPs", "intentos", "fallidos", "acceso", "seguridad"], puntos: 1 },
      { p: "¿Qué es Let's Encrypt?", keywords: ["certificado", "TLS", "SSL", "gratuito", "HTTPS", "autoridad"], puntos: 1 },
      { p: "¿Qué es un contenedor Docker según el glosario?", keywords: ["empaqueta", "dependencias", "aislado", "portable", "ejecuta"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuál es el servidor web más usado en Linux junto con Nginx?", o: ["IIS", "Tomcat", "Apache", "Node.js"], r: 2 },
      { p: "¿Qué hace 'apt install nginx' en Ubuntu?", o: ["Elimina nginx", "Instala nginx desde los repositorios", "Actualiza nginx", "Lista paquetes nginx"], r: 1 },
      { p: "¿Qué hace 'ufw allow 80/tcp' en Ubuntu?", o: ["Bloquea el puerto 80", "Permite tráfico HTTP entrante en el puerto 80", "Redirige el puerto 80", "Cierra el puerto 80"], r: 1 },
      { p: "¿Qué es un proxy inverso?", o: ["Proxy del cliente", "Servidor que recibe peticiones y las reenvía a servidores backend ocultando su existencia", "Tipo de firewall", "Tipo de VPN"], r: 1 },
      { p: "¿Cuál es la diferencia entre FTP y SFTP?", o: ["Son idénticos", "SFTP cifra la transferencia con SSH; FTP transmite en texto claro", "FTP es más seguro", "SFTP no existe como protocolo"], r: 1 },
      { p: "¿Qué hace 'systemctl status apache2'?", o: ["Instala Apache", "Muestra el estado actual del servicio Apache2", "Reinicia Apache", "Elimina Apache"], r: 1 },
      { p: "¿Qué es Nginx?", o: ["Tipo de base de datos", "Servidor web y proxy inverso de alto rendimiento", "Tipo de firewall", "Lenguaje de programación"], r: 1 },
      { p: "¿Qué es phpMyAdmin?", o: ["Lenguaje de programación", "Interfaz web para administrar bases de datos MySQL visualmente", "Tipo de servidor web", "Tipo de firewall"], r: 1 },
      { p: "¿Qué hace Certbot?", o: ["Gestiona usuarios", "Obtiene y renueva certificados SSL de Let's Encrypt automáticamente", "Gestiona DNS", "Gestiona backups"], r: 1 },
      { p: "¿Qué hace 'rsync' en Linux?", o: ["Tipo de servidor web", "Sincroniza y hace backup de archivos local o remotamente", "Tipo de DNS", "Tipo de firewall"], r: 1 },
      { p: "¿Qué es un registro A en DNS?", o: ["Alias de dominio", "Mapea un nombre de dominio a una dirección IPv4", "Registro de correo", "Registro de texto"], r: 1 },
      { p: "¿Qué es un registro MX en DNS?", o: ["Dirección IPv4", "Especifica el servidor de correo para un dominio", "Alias CNAME", "Registro de texto"], r: 1 },
      { p: "¿Qué hace docker-compose?", o: ["Tipo de Dockerfile", "Define y ejecuta apps multi-contenedor con un archivo YAML", "Tipo de imagen Docker", "Tipo de red Docker"], r: 1 },
      { p: "¿Qué es el stack LEMP?", o: ["Solo para Linux", "Linux + Nginx + MySQL/MariaDB + PHP, alternativa a LAMP", "Tipo de lenguaje", "Tipo de firewall"], r: 1 },
      { p: "¿Qué hace 'apt update && apt upgrade'?", o: ["Reinstala el SO", "Actualiza la lista de paquetes y luego actualiza los instalados", "Elimina paquetes obsoletos", "Instala nuevos paquetes"], r: 1 },
      { p: "¿Qué es isc-dhcp-server?", o: ["Servidor web alternativo", "Implementación del servidor DHCP del ISC para Linux", "Tipo de firewall", "Tipo de DNS"], r: 1 },
      { p: "¿Qué es NFS en administración de sistemas?", o: ["Tipo de firewall", "Network File System: comparte sistemas de archivos entre computadoras en red", "Tipo de proceso", "Tipo de partición"], r: 1 },
      { p: "¿Qué es Redis?", o: ["Servidor web", "Almacén de datos en memoria tipo clave-valor para caché", "Tipo de DNS", "Tipo de firewall"], r: 1 },
      { p: "¿Qué es Jenkins?", o: ["Servidor web", "Servidor CI/CD para automatizar build, test y deploy", "Tipo de DNS", "Tipo de firewall"], r: 1 },
      { p: "¿Qué es un host según el glosario?", o: ["Solo el servidor web", "Cualquier dispositivo conectado a una red que envía o recibe datos", "Solo el router", "Solo la PC principal"], r: 1 },
    ],
    falso_verdadero: [
      { p: "Apache y Nginx son los servidores web más usados en Linux.", r: true },
      { p: "SFTP es más seguro que FTP porque cifra la transferencia usando SSH.", r: true },
      { p: "ufw es el firewall predeterminado de CentOS/RHEL.", r: false },
      { p: "phpMyAdmin es una interfaz web para administrar bases de datos MySQL.", r: true },
      { p: "Let's Encrypt es una autoridad certificadora de pago para HTTPS.", r: false },
      { p: "Docker empaqueta aplicaciones con sus dependencias para ejecutarlas en cualquier entorno.", r: true },
      { p: "DNS traduce nombres de dominio a direcciones IP.", r: true },
      { p: "El stack LAMP incluye Linux, Apache, MySQL y PHP.", r: true },
      { p: "Un registro MX en DNS especifica el servidor web del dominio.", r: false },
      { p: "DHCP asigna automáticamente direcciones IP a los dispositivos de una red.", r: true },
    ],
    cloze: [
      { texto: "El stack ___ combina Linux, ___, MySQL y PHP para desarrollo web en servidor.", banco: ["LAMP", "Apache", "Nginx", "PHP"], r: [0, 1] },
      { texto: "___ y ___ son los servidores web más usados en Linux para servir páginas.", banco: ["Apache", "Nginx", "IIS", "Tomcat"], r: [0, 1] },
      { texto: "___ traduce nombres de dominio a ___ y DHCP asigna ___ automáticamente.", banco: ["DNS", "IPs", "direcciones IP", "dominios"], r: [0, 1, 2] },
      { texto: "___ cifra la transferencia de archivos usando SSH, más seguro que ___.", banco: ["SFTP", "FTP", "SCP", "rsync"], r: [0, 1] },
      { texto: "___ permite obtener certificados ___ gratuitos para habilitar HTTPS.", banco: ["Let's Encrypt", "SSL/TLS", "Certbot", "OpenSSL"], r: [0, 1] },
      { texto: "___ empaqueta apps y sus ___ en contenedores portables que corren en cualquier entorno.", banco: ["Docker", "dependencias", "VMs", "imágenes"], r: [0, 1] },
      { texto: "___ bloquea IPs tras múltiples intentos fallidos y ___ configura las reglas del firewall en Ubuntu.", banco: ["fail2ban", "ufw", "iptables", "Samba"], r: [0, 1] },
      { texto: "Un ___ permite que Apache sirva múltiples ___ desde un solo servidor.", banco: ["Virtual Host", "sitios web", "Virtual Machine", "dominios"], r: [0, 1] },
      { texto: "___ actualiza la lista de paquetes y ___ los instala desde los repositorios en Ubuntu.", banco: ["apt update", "apt install", "apt upgrade", "apt get"], r: [0, 1] },
      { texto: "Un ___ en DNS mapea el dominio a IPv4 y un ___ especifica el servidor de correo.", banco: ["registro A", "registro MX", "CNAME", "TXT"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada servicio con su protocolo/puerto principal:",
        columnaA: ["Servidor web HTTP", "Servidor web HTTPS", "FTP", "SSH", "SMTP correo"],
        columnaB: ["Puerto 22", "Puerto 21", "Puerto 443", "Puerto 25", "Puerto 80"],
        r: [4, 2, 1, 0, 3]
      },
      {
        instruccion: "Relaciona cada registro DNS con su función:",
        columnaA: ["Registro A", "Registro AAAA", "Registro MX", "Registro CNAME", "Registro TXT"],
        columnaB: ["Alias de un dominio a otro dominio", "Texto arbitrario (verificación, SPF)", "Nombre de host a dirección IPv6", "Servidor de correo del dominio", "Nombre de host a dirección IPv4"],
        r: [4, 2, 3, 0, 1]
      },
      {
        instruccion: "Relaciona cada componente del stack LAMP con su función:",
        columnaA: ["Linux", "Apache", "MySQL", "PHP"],
        columnaB: ["Lenguaje del servidor para páginas dinámicas", "Sistema operativo base", "SGBD para almacenar datos", "Servidor web que atiende peticiones HTTP"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada herramienta de seguridad con su función:",
        columnaA: ["ufw", "fail2ban", "Let's Encrypt", "SSH", "iptables"],
        columnaB: ["Configura reglas del kernel de Linux", "Acceso remoto cifrado", "Bloquea IPs con muchos intentos fallidos", "Certificados SSL gratuitos para HTTPS", "Firewall simplificado de Ubuntu"],
        r: [4, 2, 3, 1, 0]
      },
      {
        instruccion: "Relaciona cada protocolo de correo con su función:",
        columnaA: ["SMTP", "POP3", "IMAP"],
        columnaB: ["Recepción manteniendo correos en servidor sincronizados", "Envío de correo entre servidores", "Descarga correos al cliente y los elimina del servidor"],
        r: [1, 2, 0]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada software de servidor web y proxy con su perfil:",
        columnaA: ["Apache", "Nginx", "Microsoft IIS", "Squid Proxy"],
        columnaB: ["Servidor web de Windows Server", "Caché de navegación y filtrado web", "Arquitectura asíncrona ideal para proxy", "Servidor modular tradicional con .htaccess"],
        r: [3, 2, 0, 1]
      },
      {
        instruccion: "Relaciona cada protocolo de red con su propósito operativo:",
        columnaA: ["TCP", "UDP", "DHCP", "NTP"],
        columnaB: ["Garantiza entrega confiable sin pérdidas", "Sincroniza la hora del reloj del sistema", "Entrega rápida sin conexión (streaming)", "Asigna parámetros de red e IPs automáticas"],
        r: [0, 2, 3, 1]
      },
      {
        instruccion: "Relaciona cada gestor de paquetes con su distribución Linux asociada:",
        columnaA: ["APT", "DNF / YUM", "Pacman", "Snap"],
        columnaB: ["Formato universal de paquetes autocontenidos", "Arch Linux y derivados", "Debian, Ubuntu y Linux Mint", "Fedora, Red Hat y CentOS"],
        r: [2, 3, 1, 0]
      },
      {
        instruccion: "Relaciona cada subcomando de 'systemctl' con su acción sobre servicios:",
        columnaA: ["start", "stop", "restart", "enable", "status"],
        columnaB: ["Habilita inicio automático al encender el servidor", "Detiene el servicio en ejecución", "Muestra estado, PID y registros del servicio", "Inicia el servicio en segundo plano", "Reinicia el servicio aplicando nuevas configuraciones"],
        r: [3, 1, 4, 0, 2]
      },
      {
        instruccion: "Relaciona cada protocolo de compartición de archivos en red:",
        columnaA: ["Samba (SMB)", "NFS", "SFTP", "FTP"],
        columnaB: ["Compartición nativa entre máquinas Linux/Unix", "Transmisión tradicional en texto claro sin cifrar", "Compartición de carpetas e impresoras entre Linux y Windows", "Transferencia segura cifrada sobre SSH"],
        r: [2, 0, 3, 1]
      }
    ]
  }
};

export const submoduloIV3: Submodulo = {
  nombre: "IV.3 · Desarrolla soluciones de comercio electrónico",
  modulo: "Módulo IV",
  semestre: "5°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué es el e-Commerce según el glosario?", keywords: ["compra", "venta", "digital", "internet", "electrónico", "bienes"], puntos: 1 },
      { p: "¿Cuáles son los modelos de negocio del e-Commerce según el glosario?", keywords: ["B2C", "B2B", "C2C", "C2G", "negocio", "consumidor"], puntos: 1 },
      { p: "¿Qué es una pasarela de pago?", keywords: ["proceso", "autoriza", "pagos", "cliente", "tienda", "banco"], puntos: 1 },
      { p: "¿Qué es WooCommerce?", keywords: ["WordPress", "plugin", "tienda", "e-commerce"], puntos: 1 },
      { p: "¿Qué es PCI-DSS?", keywords: ["estándar", "seguridad", "tarjetas", "pago", "datos"], puntos: 1 },
      { p: "¿Qué es la tasa de conversión en e-Commerce?", keywords: ["porcentaje", "visitantes", "compra", "compradores"], puntos: 1 },
      { p: "¿Qué es el dropshipping?", keywords: ["proveedor", "stock", "envía", "directamente", "cliente", "sin inventario"], puntos: 1 },
      { p: "¿Qué es una plataforma web según el glosario?", keywords: ["entorno", "servicios", "CMS", "LMS", "e-commerce", "SaaS"], puntos: 1 },
      { p: "¿Qué es el pago electrónico según el glosario?", keywords: ["transacciones", "digitales", "tarjetas", "pasarela", "transferencias"], puntos: 1 },
      { p: "¿Qué es el abandono del carrito en e-Commerce?", keywords: ["usuario", "agrega", "no completa", "compra", "carrito"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuáles son los modelos de e-Commerce según el glosario?", o: ["Solo B2C", "B2C, B2B, C2C y C2G", "Solo B2B y C2C", "B2C y B2G solo"], r: 1 },
      { p: "¿Qué es WooCommerce?", o: ["Plataforma independiente", "Plugin de WordPress que convierte el sitio en tienda en línea", "Tipo de pasarela de pago", "Lenguaje de programación"], r: 1 },
      { p: "¿Cuáles son ejemplos de pasarelas de pago?", o: ["Apache y Nginx", "PayPal, Stripe, MercadoPago, Conekta", "MySQL y PostgreSQL", "Google Drive y Dropbox"], r: 1 },
      { p: "¿Qué es el SKU en e-Commerce?", o: ["Código de descuento", "Código único que identifica cada producto en el inventario", "Tipo de categoría", "Tipo de pasarela"], r: 1 },
      { p: "¿Qué es SSL/TLS en e-Commerce?", o: ["Tipo de pasarela", "Protocolo de cifrado que protege datos del cliente (HTTPS)", "Tipo de carrito", "Tipo de producto"], r: 1 },
      { p: "¿Qué es la omnicanalidad en e-Commerce?", o: ["Solo ventas en línea", "Integrar tienda física, web, app y redes sociales para experiencia unificada", "Tipo de SEO", "Tipo de pasarela"], r: 1 },
      { p: "¿Qué es el upselling?", o: ["Ofrecer productos más baratos", "Técnica de ofrecer una versión de mayor valor del producto que el cliente ve", "Tipo de descuento", "Tipo de SEO"], r: 1 },
      { p: "¿Qué es el cross-selling?", o: ["Vender a clientes de la competencia", "Sugerir productos complementarios al que el cliente compra", "Tipo de descuento", "Tipo de upselling"], r: 1 },
      { p: "¿Qué es PrestaShop?", o: ["Plugin de WordPress", "Plataforma de e-Commerce de código abierto con panel de administración completo", "Tipo de pasarela", "Lenguaje de programación"], r: 1 },
      { p: "¿Qué es Google Shopping?", o: ["Motor de búsqueda de imágenes", "Servicio de Google que muestra productos en resultados de búsqueda", "Tipo de pasarela", "Tipo de SSL"], r: 1 },
      { p: "¿Qué es el SEO en e-Commerce?", o: ["Tipo de anuncio pagado", "Optimización para motores de búsqueda que aumenta el tráfico orgánico", "Tipo de pasarela", "Tipo de carrito"], r: 1 },
      { p: "¿Qué es el chargeback?", o: ["Tipo de descuento", "Reversión de cargo iniciada por el cliente ante su banco al disputar una transacción", "Tipo de envío", "Tipo de cupón"], r: 1 },
      { p: "¿Qué es Shopify?", o: ["CMS gratuito de código abierto", "Plataforma de e-Commerce SaaS (de pago, en la nube) con todo incluido", "Plugin de WordPress", "Tipo de pasarela"], r: 1 },
      { p: "¿Qué es el comercio móvil (m-commerce)?", o: ["Solo apps de redes sociales", "Compra y venta de productos mediante dispositivos móviles", "Tipo de pasarela", "Tipo de SSL"], r: 1 },
      { p: "¿Qué son los metadatos de producto en SEO?", o: ["Tipo de imagen", "Título, descripción y palabras clave que mejoran el ranking del producto", "Tipo de carrito", "Tipo de pasarela"], r: 1 },
      { p: "Según el glosario, ¿qué es MercadoPago?", o: ["Tienda en línea", "Plataforma de pagos de MercadoLibre para cobrar en tiendas virtuales", "Tipo de SEO", "Tipo de SSL"], r: 1 },
      { p: "¿Qué es el CFDI en México?", o: ["Tipo de pasarela", "Comprobante Fiscal Digital por Internet: factura electrónica del SAT", "Tipo de SSL", "Tipo de carrito"], r: 1 },
      { p: "¿Qué es A/B testing en e-Commerce?", o: ["Tipo de pasarela", "Comparar dos versiones de una página para determinar cuál convierte mejor", "Tipo de SSL", "Tipo de SEO"], r: 1 },
      { p: "¿Qué es la arquitectura headless en e-Commerce?", o: ["Tienda sin imágenes", "Separación del frontend del backend conectados mediante APIs", "Tipo de carrito", "Tipo de SEO"], r: 1 },
      { p: "¿Qué es un marketplace?", o: ["Tipo de pasarela", "Plataforma donde múltiples vendedores ofrecen productos (Amazon, MercadoLibre)", "Tipo de SEO", "Tipo de carrito"], r: 1 },
    ],
    falso_verdadero: [
      { p: "El modelo B2C es de negocio a negocio (Business to Business).", r: false },
      { p: "SSL/TLS cifra la comunicación entre el navegador y el servidor para proteger datos del cliente.", r: true },
      { p: "El dropshipping requiere que la tienda mantenga un inventario físico de productos.", r: false },
      { p: "WooCommerce es un plugin de WordPress para crear tiendas en línea.", r: true },
      { p: "PCI-DSS es un estándar de seguridad para proteger datos de tarjetas de pago.", r: true },
      { p: "El abandono del carrito ocurre cuando el usuario completa la compra.", r: false },
      { p: "El upselling sugiere productos complementarios al que el cliente está comprando.", r: false },
      { p: "Shopify es una plataforma de e-Commerce en la nube (SaaS) de pago.", r: true },
      { p: "El CFDI es el comprobante fiscal electrónico requerido por el SAT en México.", r: true },
      { p: "Google Shopping solo muestra resultados pagados de anunciantes.", r: false },
    ],
    cloze: [
      { texto: "El e-Commerce incluye los modelos ___, ___, C2C y C2G según el tipo de participantes.", banco: ["B2C", "B2B", "P2P", "G2G"], r: [0, 1] },
      { texto: "___ y ___ son plataformas de código abierto para crear tiendas en línea.", banco: ["WooCommerce", "PrestaShop", "Shopify", "Magento"], r: [0, 1] },
      { texto: "Las pasarelas de pago como ___, Stripe y ___ procesan y autorizan los pagos en línea.", banco: ["PayPal", "MercadoPago", "Bitcoin", "Conekta"], r: [0, 1] },
      { texto: "___ cifra la comunicación de la tienda con HTTPS y ___ es el estándar de seguridad para tarjetas.", banco: ["SSL/TLS", "PCI-DSS", "HTTPS", "Firewall"], r: [0, 1] },
      { texto: "El ___ ocurre cuando el usuario agrega productos pero no ___ la compra.", banco: ["abandono del carrito", "completa", "error de pago", "cancela"], r: [0, 1] },
      { texto: "___ ofrece una versión de mayor valor (upselling) y ___ sugiere productos complementarios.", banco: ["El upselling", "el cross-selling", "el descuento", "la oferta"], r: [0, 1] },
      { texto: "___ en México es el comprobante fiscal digital requerido por el ___ para ventas en línea.", banco: ["CFDI", "SAT", "RFC", "IVA"], r: [0, 1] },
      { texto: "El ___ integra tienda física, web, app y redes sociales para una experiencia ___.", banco: ["modelo omnicanal", "unificada", "digital", "B2C"], r: [0, 1] },
      { texto: "El ___ es el código único que identifica un producto en inventario y el ___ agrupa productos similares.", banco: ["SKU", "categoría", "precio", "tag"], r: [0, 1] },
      { texto: "___ permite comprar desde dispositivos móviles y ___ integra múltiples vendedores en una plataforma.", banco: ["M-commerce", "marketplace", "e-commerce", "B2C"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada modelo de e-Commerce con su descripción:",
        columnaA: ["B2C", "B2B", "C2C", "C2G"],
        columnaB: ["Consumidor a consumidor (MercadoLibre entre particulares)", "Empresa a consumidor (Amazon vendiendo a personas)", "Empresa a empresa (Alibaba mayorista)", "Consumidor/empresa a gobierno (facturación SAT)"],
        r: [1, 2, 0, 3]
      },
      {
        instruccion: "Relaciona cada plataforma de e-Commerce con su característica:",
        columnaA: ["WooCommerce", "PrestaShop", "Shopify", "OpenCart", "Magento"],
        columnaB: ["Plataforma empresarial avanzada de Adobe", "Plugin de WordPress", "SaaS en la nube, fácil de usar", "Plataforma ligera de código abierto", "Plataforma completa de código abierto con panel propio"],
        r: [1, 4, 2, 3, 0]
      },
      {
        instruccion: "Relaciona cada estrategia de venta con su definición:",
        columnaA: ["Upselling", "Cross-selling", "Cupón de descuento", "Abandono de carrito", "A/B Testing"],
        columnaB: ["Comparar dos versiones para ver cuál convierte mejor", "Ofrecer versión de mayor valor del producto", "Código para obtener descuento en la compra", "Sugerir productos complementarios", "Usuario agrega productos pero no compra"],
        r: [1, 3, 2, 4, 0]
      },
      {
        instruccion: "Relaciona cada pasarela de pago con su origen/empresa:",
        columnaA: ["PayPal", "Stripe", "MercadoPago", "Conekta"],
        columnaB: ["Empresa mexicana para pagos locales", "Filial de MercadoLibre para Latinoamérica", "Empresa de San Francisco, favorita de startups", "Empresa de San José, pionera del pago digital"],
        r: [3, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada estándar/concepto de seguridad en e-Commerce con su función:",
        columnaA: ["SSL/TLS", "PCI-DSS", "CFDI", "Chargeback", "HTTPS"],
        columnaB: ["HTTP con capa de cifrado visible en el navegador", "Reversión de cargo por disputa del cliente", "Estándar de seguridad para datos de tarjetas bancarias", "Comprobante Fiscal Digital del SAT en México", "Protocolo de cifrado de comunicación web"],
        r: [4, 2, 3, 1, 0]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada indicador clave de rendimiento (KPI) en e-Commerce:",
        columnaA: ["Tasa de conversión", "Ticket promedio (AOV)", "CAC (Costo de Adquisición)", "LTV (Customer Lifetime Value)"],
        columnaB: ["Valor total estimado que un cliente aporta a lo largo del tiempo", "Porcentaje de visitantes que realizan una compra", "Inversión necesaria para captar un nuevo comprador", "Importe monetario promedio gastado en cada pedido"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada canal de venta digital:",
        columnaA: ["M-commerce", "Social Commerce", "Marketplace", "Live Shopping"],
        columnaB: ["Transmisiones en vivo donde se interactúa y compra al instante", "Transacciones realizadas desde dispositivos móviles", "Venta integrada en redes como Instagram o TikTok", "Plataforma multimarcas con múltiples vendedores"],
        r: [1, 2, 3, 0]
      },
      {
        instruccion: "Relaciona cada modelo logístico de entrega de pedidos:",
        columnaA: ["Dropshipping", "Fulfillment", "Click and Collect", "Logística inversa"],
        columnaB: ["El cliente compra en línea y recoge en tienda física", "Gestión de devoluciones y cambios de producto", "El mayorista envía directamente al cliente sin inventario en tienda", "Centro logístico que almacena, empaca y envía los pedidos"],
        r: [2, 3, 0, 1]
      },
      {
        instruccion: "Relaciona cada elemento de una ficha de producto en tienda virtual:",
        columnaA: ["SKU", "Call to Action (CTA)", "Galería multimedia", "Prueba social (Reviews)"],
        columnaB: ["Fotografías y videos de alta resolución del artículo", "Identificador de inventario único por producto o variante", "Opiniones y valoraciones de clientes previos", "Botón destacado como 'Añadir al carrito' o 'Comprar'"],
        r: [1, 3, 0, 2]
      },
      {
        instruccion: "Relaciona cada aspecto legal y fiscal del e-Commerce en México:",
        columnaA: ["CFDI 4.0", "Aviso de Privacidad", "Términos y Condiciones", "PROFECO"],
        columnaB: ["Organismo que vigila y defiende los derechos de los consumidores", "Documento que informa sobre el tratamiento de datos personales", "Reglamento contractual de compra, envíos y devoluciones", "Comprobante fiscal digital obligatorio del SAT"],
        r: [3, 1, 2, 0]
      }
    ]
  }
};
