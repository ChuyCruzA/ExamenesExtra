import { Submodulo } from '../types.ts';

export const submoduloI1: Submodulo = {
  nombre: "I.1 · Desarrolla software utilizando programación estructurada",
  modulo: "Módulo I",
  semestre: "2°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué es un algoritmo?", keywords: ["secuencia", "pasos", "instrucciones", "problema", "finita", "ordenada"], puntos: 1 },
      { p: "¿Qué figura representa una decisión en un diagrama de flujo?", keywords: ["rombo", "diamante"], puntos: 1 },
      { p: "¿Cómo se llama la herramienta educativa que permite escribir y ejecutar pseudocódigo en español?", keywords: ["pseint", "PSeInt"], puntos: 1 },
      { p: "¿Cuáles son los tres tipos de estructuras de control en programación?", keywords: ["secuencial", "condicional", "repetición", "iterativa", "bucle"], puntos: 1 },
      { p: "¿Qué es una variable en programación?", keywords: ["memoria", "dato", "almacena", "valor", "nombre", "cambia"], puntos: 1 },
      { p: "¿Qué significa el operador % (módulo) en programación?", keywords: ["residuo", "resto", "división"], puntos: 1 },
      { p: "¿Cuál es la diferencia entre dato e información?", keywords: ["contexto", "procesado", "significado", "crudo", "raw"], puntos: 1 },
      { p: "¿Qué es el pseudocódigo?", keywords: ["lenguaje", "natural", "algoritmo", "convenciones", "sin sintaxis"], puntos: 1 },
      { p: "¿Para qué sirve el diagrama de flujo?", keywords: ["gráfica", "representación", "algoritmo", "visual", "figuras"], puntos: 1 },
      { p: "¿Qué instrucción se usa en la mayoría de lenguajes para mostrar datos en pantalla?", keywords: ["print", "cout", "echo", "escribir", "imprimir", "System.out"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuál figura se usa para representar el inicio y fin en un diagrama de flujo?", o: ["Rectángulo", "Rombo", "Óvalo o elipse", "Paralelogramo"], r: 2 },
      { p: "¿Qué tipo de estructura de control es el 'if-else'?", o: ["Repetición", "Secuencial", "Condicional", "Recursiva"], r: 2 },
      { p: "¿Cuál de estos es un ejemplo de estructura de repetición?", o: ["if-else", "switch", "while", "función"], r: 2 },
      { p: "En PSeInt, ¿cómo se escribe la instrucción para leer un dato del usuario?", o: ["INPUT", "Leer", "cin", "Scanner"], r: 1 },
      { p: "¿Cuál es la salida de: x←5; x←x+3; Escribir x?", o: ["5", "3", "8", "15"], r: 2 },
      { p: "¿Qué significa TIC?", o: ["Tecnologías de la Información y Comunicación", "Técnicas de Ingeniería Computacional", "Taller de Informática y Computación", "Tecnología, Internet y Computadoras"], r: 0 },
      { p: "¿Cuál de los siguientes NO es un componente de hardware?", o: ["Procesador CPU", "Memoria RAM", "Sistema operativo Windows", "Disco duro"], r: 2 },
      { p: "¿Qué es el software?", o: ["Componentes físicos de la computadora", "Conjunto de programas e instrucciones intangibles", "Solo el sistema operativo", "El monitor y el teclado"], r: 1 },
      { p: "¿Qué es la informática?", o: ["Solo el manejo de redes", "Ciencia que estudia el tratamiento automático de la información", "El hardware de una computadora", "Solo programación web"], r: 1 },
      { p: "¿Qué figura del diagrama de flujo representa la entrada y salida de datos?", o: ["Rectángulo", "Rombo", "Óvalo", "Paralelogramo"], r: 3 },
      { p: "¿Cuál de estos valores puede almacenar una variable de tipo entero (INT)?", o: ["'Hola'", "3.14", "42", "Verdadero"], r: 2 },
      { p: "¿Qué instrucción detiene un bucle de inmediato en la mayoría de lenguajes?", o: ["stop", "exit", "break", "return"], r: 2 },
      { p: "¿Cuál es el operador lógico que retorna verdadero solo si ambas condiciones son verdaderas?", o: ["OR", "NOT", "AND", "XOR"], r: 2 },
      { p: "¿Qué es la URL?", o: ["Un tipo de navegador", "La dirección única de un recurso en internet", "Un lenguaje de programación", "Un tipo de virus"], r: 1 },
      { p: "¿Cuál de estos es un buscador de internet?", o: ["Chrome", "WhatsApp", "Google", "Photoshop"], r: 2 },
      { p: "¿Qué hace la estructura 'for' en programación?", o: ["Toma decisiones", "Repite instrucciones un número determinado de veces", "Define funciones", "Declara variables"], r: 1 },
      { p: "¿Qué es la computación?", o: ["Solo el uso de internet", "Disciplina que estudia el procesamiento automático de información con computadoras", "Solo el diseño de hardware", "El estudio de las redes sociales"], r: 1 },
      { p: "¿Cuál es la diferencia entre un editor de código y un IDE?", o: ["No hay diferencia", "El IDE incluye compilador, depurador y herramientas integradas; el editor solo edita texto", "El editor es más potente", "El IDE no puede compilar"], r: 1 },
      { p: "¿Cuál de estos NO es un tipo de dato primitivo?", o: ["Entero (int)", "Decimal (float)", "Arreglo (array)", "Booleano (bool)"], r: 2 },
      { p: "¿Qué es el Código ASCII?", o: ["Un lenguaje de programación", "Sistema que asigna un número a cada carácter para representarlo en computadoras", "Un tipo de algoritmo", "Un protocolo de red"], r: 1 },
    ],
    falso_verdadero: [
      { p: "El rombo en un diagrama de flujo representa un proceso o cálculo.", r: false },
      { p: "PSeInt permite escribir y ejecutar pseudocódigo en español.", r: true },
      { p: "Una variable puede cambiar su valor durante la ejecución del programa.", r: true },
      { p: "La estructura 'do-while' garantiza que el bloque se ejecute al menos una vez.", r: true },
      { p: "El operador AND retorna verdadero si al menos una condición es verdadera.", r: false },
      { p: "La informática y la computación son exactamente lo mismo.", r: false },
      { p: "El hardware son los componentes físicos de la computadora.", r: true },
      { p: "Un algoritmo debe tener pasos infinitos para ser correcto.", r: false },
      { p: "La instrucción 'break' salta a la siguiente iteración del bucle.", r: false },
      { p: "Las TIC incluyen computadoras, internet y sistemas de telecomunicaciones.", r: true },
    ],
    cloze: [
      { texto: "Un ___ es una secuencia finita de pasos que resuelve un problema específico.", banco: ["algoritmo", "programa", "variable", "diagrama"], r: [0] },
      { texto: "En un diagrama de flujo, el ___ representa una decisión y el ___ representa un proceso.", banco: ["rombo", "rectángulo", "óvalo", "paralelogramo"], r: [0, 1] },
      { texto: "Las estructuras de control se dividen en: secuenciales, ___ y de ___.", banco: ["condicionales", "repetición", "variables", "funciones"], r: [0, 1] },
      { texto: "___ es una herramienta educativa que permite ejecutar pseudocódigo en español.", banco: ["PSeInt", "Python", "Java", "Scratch"], r: [0] },
      { texto: "Una ___ es un espacio en memoria con nombre que almacena un valor que puede ___.", banco: ["variable", "cambiar", "constante", "crecer"], r: [0, 1] },
      { texto: "El ___ es el conjunto de componentes físicos de la computadora, mientras que el ___ son los programas.", banco: ["hardware", "software", "internet", "algoritmo"], r: [0, 1] },
      { texto: "Las ___ son herramientas digitales para gestionar, procesar y transmitir información.", banco: ["TIC", "TAC", "TEP", "URL"], r: [0] },
      { texto: "El ___ es la representación gráfica de un algoritmo usando figuras estandarizadas.", banco: ["diagrama de flujo", "pseudocódigo", "programa", "código"], r: [0] },
      { texto: "La instrucción ___ detiene un bucle de inmediato, mientras que ___ salta a la siguiente iteración.", banco: ["break", "continue", "return", "exit"], r: [0, 1] },
      { texto: "Un ___ es una máquina electrónica capaz de procesar y almacenar datos ejecutando ___.", banco: ["computadora", "programas", "algoritmos", "variables"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada figura del diagrama de flujo con su significado:",
        columnaA: ["Óvalo", "Rombo", "Rectángulo", "Paralelogramo"],
        columnaB: ["Decisión o condición", "Proceso o cálculo", "Inicio o fin", "Entrada o salida de datos"],
        r: [2, 0, 1, 3]
      },
      {
        instruccion: "Relaciona cada estructura de control con su ejemplo:",
        columnaA: ["Condicional", "Repetición con contador", "Repetición mientras", "Secuencial"],
        columnaB: ["for(i=0;i<10;i++)", "instrucciones en orden", "if(x>0)", "while(activo)"],
        r: [2, 0, 3, 1]
      },
      {
        instruccion: "Relaciona cada término de cultura digital con su definición:",
        columnaA: ["TIC", "TAC", "TEP", "URL"],
        columnaB: ["Dirección única de un recurso en internet", "Tecnologías para el aprendizaje y conocimiento", "Tecnologías del empoderamiento y participación", "Tecnologías de la información y comunicación"],
        r: [3, 1, 2, 0]
      },
      {
        instruccion: "Relaciona cada tipo de dato con un ejemplo de valor:",
        columnaA: ["Entero (INT)", "Decimal (FLOAT)", "Texto (VARCHAR)", "Booleano (BOOL)"],
        columnaB: ["Verdadero / Falso", "'Hola mundo'", "42", "3.14"],
        r: [2, 3, 1, 0]
      },
      {
        instruccion: "Relaciona cada operador lógico con su comportamiento:",
        columnaA: ["AND", "OR", "NOT"],
        columnaB: ["Verdadero si al menos uno es verdadero", "Invierte el valor booleano", "Verdadero solo si ambos son verdaderos"],
        r: [2, 0, 1]
      },
      // 5 nuevas preguntas agregadas para completar 10
      {
        instruccion: "Relaciona cada operador aritmético con su función matemática:",
        columnaA: ["Suma (+)", "Módulo (%)", "Asignación (= ó ←)", "Incremento (++)"],
        columnaB: ["Calcula el residuo de una división entera", "Aumenta en 1 unidad el valor de la variable", "Calcula la adición entre dos operandos", "Almacena un valor o expresión en una variable"],
        r: [2, 0, 3, 1]
      },
      {
        instruccion: "Relaciona cada fase de resolución de problemas con su descripción:",
        columnaA: ["Análisis del problema", "Diseño del algoritmo", "Codificación", "Prueba y depuración"],
        columnaB: ["Traducción del algoritmo a un lenguaje formal", "Búsqueda y corrección de errores de lógica", "Identificación clara de entradas, salidas y restricciones", "Construcción paso a paso de la solución en pseudocódigo"],
        r: [2, 3, 0, 1]
      },
      {
        instruccion: "Relaciona cada componente del hardware de cómputo con su rol:",
        columnaA: ["CPU (Procesador)", "Memoria RAM", "Disco de almacenamiento", "Tarjeta madre (Motherboard)"],
        columnaB: ["Placa que conecta e intercomunica todos los circuitos", "Memoria volátil de trabajo para programas abiertos", "Almacenamiento no volátil permanente de datos", "Unidad que interpreta y ejecuta las instrucciones"],
        r: [3, 1, 2, 0]
      },
      {
        instruccion: "Relaciona cada estructura y contenedor de datos:",
        columnaA: ["Variable", "Constante", "Vector (Arreglo 1D)", "Matriz (Arreglo 2D)"],
        columnaB: ["Estructura bidimensional de filas y columnas", "Espacio de memoria fijo e inmutable", "Colección indexada de elementos del mismo tipo", "Espacio de memoria cuyo valor puede cambiar"],
        r: [3, 1, 2, 0]
      },
      {
        instruccion: "Relaciona cada concepto técnico de programación con su definición:",
        columnaA: ["Modularidad", "Código fuente", "Compilador", "Prueba de escritorio"],
        columnaB: ["Ejecución manual paso a paso en papel para validar la lógica", "División del programa en submódulos o funciones independientes", "Texto con las instrucciones redactadas según una sintaxis", "Programa que traduce el código fuente a lenguaje máquina"],
        r: [1, 2, 3, 0]
      }
    ]
  }
};

export const submoduloI2: Submodulo = {
  nombre: "I.2 · Diseña y administra bases de datos simples",
  modulo: "Módulo I",
  semestre: "2°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué significan las siglas SQL?", keywords: ["structured", "query", "language", "lenguaje", "consulta", "estructurado"], puntos: 1 },
      { p: "¿Qué es un SGBD?", keywords: ["sistema", "gestor", "bases de datos", "software", "administra", "controla"], puntos: 1 },
      { p: "¿Qué es una llave primaria (PK)?", keywords: ["identifica", "único", "registro", "primary key", "no repite"], puntos: 1 },
      { p: "¿Qué hace la instrucción SELECT en SQL?", keywords: ["consulta", "obtiene", "recupera", "muestra", "datos"], puntos: 1 },
      { p: "¿Qué es la normalización de una base de datos?", keywords: ["redundancia", "formas normales", "organizar", "eliminar", "dependencias"], puntos: 1 },
      { p: "¿Qué es el Diagrama E-R?", keywords: ["entidad", "relación", "gráfico", "conceptual", "diseño"], puntos: 1 },
      { p: "¿Cuál es la diferencia entre un campo y un registro?", keywords: ["columna", "fila", "campo", "registro", "tabla"], puntos: 1 },
      { p: "¿Qué hace la cláusula WHERE en SQL?", keywords: ["filtra", "condición", "restricción"], puntos: 1 },
      { p: "¿Qué es la cardinalidad en el Modelo E-R?", keywords: ["relaciones", "uno", "muchos", "1:1", "1:N", "N:M"], puntos: 1 },
      { p: "¿Qué es un diccionario de datos?", keywords: ["campos", "tipos", "descripción", "documento", "tabla", "restricciones"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuál instrucción SQL inserta un nuevo registro?", o: ["SELECT", "UPDATE", "INSERT INTO", "DELETE"], r: 2 },
      { p: "¿Qué instrucción SQL elimina registros según una condición?", o: ["REMOVE", "DELETE FROM", "DROP TABLE", "ERASE"], r: 1 },
      { p: "¿Qué hace ORDER BY en SQL?", o: ["Filtra registros", "Ordena los resultados", "Agrupa filas", "Elimina duplicados"], r: 1 },
      { p: "¿Cuál de estos es un SGBD de código abierto?", o: ["Oracle Database", "Microsoft SQL Server", "MySQL", "IBM DB2"], r: 2 },
      { p: "¿Qué es una llave foránea (FK)?", o: ["Contraseña de acceso", "Referencia a la PK de otra tabla", "Índice de búsqueda", "Tipo de dato especial"], r: 1 },
      { p: "¿Qué tipo de dato se usa para almacenar texto de longitud variable en SQL?", o: ["INT", "DATE", "VARCHAR", "BOOLEAN"], r: 2 },
      { p: "¿Qué hace la función COUNT() en SQL?", o: ["Suma valores", "Cuenta el número de registros", "Calcula el promedio", "Devuelve el máximo"], r: 1 },
      { p: "¿Qué hace GROUP BY en SQL?", o: ["Ordena resultados", "Agrupa filas con valores iguales", "Filtra con condición", "Crea una tabla nueva"], r: 1 },
      { p: "¿Qué representa una entidad en el Modelo E-R?", o: ["Una tabla creada", "Un objeto real sobre el que se almacena información", "Una columna de datos", "Una consulta SQL"], r: 1 },
      { p: "¿Qué hace DROP TABLE en SQL?", o: ["Vacía la tabla", "Elimina la tabla y toda su estructura", "Renombra la tabla", "Crea una copia"], r: 1 },
      { p: "¿Qué es INNER JOIN en SQL?", o: ["Combina todas las filas de dos tablas", "Retorna filas con coincidencia en ambas tablas", "Elimina duplicados", "Crea una vista"], r: 1 },
      { p: "¿Qué significa CRUD en bases de datos?", o: ["Create, Read, Update, Delete", "Copy, Remove, Use, Display", "Control, Register, Update, Drop", "Create, Remove, Undo, Deploy"], r: 0 },
      { p: "¿Qué hace la cláusula HAVING en SQL?", o: ["Filtra filas antes de agrupar", "Filtra grupos después de GROUP BY", "Ordena los grupos", "Cuenta los grupos"], r: 1 },
      { p: "¿Cuál es la función de AUTO_INCREMENT en MySQL?", o: ["Repite el valor anterior", "Incrementa automáticamente el valor con cada registro nuevo", "Convierte texto a número", "Genera fechas automáticas"], r: 1 },
      { p: "¿Qué instrucción crea una tabla nueva en SQL?", o: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "BUILD TABLE"], r: 2 },
      { p: "¿Qué es la Primera Forma Normal (1FN)?", o: ["Eliminar dependencias transitivas", "Cada campo almacena un solo valor atómico (indivisible)", "Dividir la BD en dos archivos", "Agregar índices a todas las columnas"], r: 1 },
      { p: "¿Qué hace DISTINCT en SELECT?", o: ["Ordena resultados", "Elimina filas duplicadas en el resultado", "Cuenta registros", "Agrupa por columna"], r: 1 },
      { p: "¿Qué tipo de relación existe cuando muchos registros se relacionan con muchos?", o: ["1:1", "1:N", "N:M", "0:1"], r: 2 },
      { p: "¿Qué hace la instrucción UPDATE en SQL?", o: ["Inserta registros", "Elimina registros", "Modifica registros existentes", "Crea una tabla"], r: 2 },
      { p: "¿Qué es el Modelo Relacional?", o: ["Modelo propuesto por Edgar Codd que organiza datos en tablas relacionadas", "Sistema de archivos planos", "Tipo de diagrama E-R", "Tipo de SGBD"], r: 0 },
    ],
    falso_verdadero: [
      { p: "Un registro es una fila de una tabla en una base de datos.", r: true },
      { p: "La llave primaria puede repetirse en diferentes registros de la misma tabla.", r: false },
      { p: "MySQL es un ejemplo de SGBD de código abierto.", r: true },
      { p: "La cardinalidad N:M significa que un registro de una tabla solo se relaciona con uno de otra.", r: false },
      { p: "La instrucción DROP TABLE elimina la tabla y todos sus datos permanentemente.", r: true },
      { p: "La normalización tiene como objetivo aumentar la redundancia de datos.", r: false },
      { p: "La cláusula WHERE filtra registros según una condición específica.", r: true },
      { p: "Un campo es una columna de la tabla que define el tipo y nombre de un dato.", r: true },
      { p: "INNER JOIN retorna todas las filas de ambas tablas aunque no haya coincidencia.", r: false },
      { p: "El diagrama E-R muestra entidades, atributos y relaciones entre ellas.", r: true },
    ],
    cloze: [
      { texto: "SQL significa ___ Query Language y se usa para gestionar bases de datos ___.", banco: ["Structured", "Relational", "Simple", "Sequential"], r: [0] },
      { texto: "En SQL, ___ inserta registros, ___ los modifica y ___ los elimina.", banco: ["INSERT INTO", "UPDATE", "DELETE FROM", "SELECT"], r: [0, 1, 2] },
      { texto: "La ___ identifica de forma única cada registro y la ___ referencia la PK de otra tabla.", banco: ["llave primaria", "llave foránea", "llave candidata", "índice"], r: [0, 1] },
      { texto: "El Diagrama ___ muestra entidades como rectángulos y relaciones como ___.", banco: ["E-R", "rombos", "tablas", "campos"], r: [0, 1] },
      { texto: "La normalización en ___ reduce la ___ de datos siguiendo las Formas Normales.", banco: ["bases de datos", "redundancia", "SQL", "cardinalidad"], r: [0, 1] },
      { texto: "La cláusula ___ filtra registros y ___ ordena los resultados de una consulta.", banco: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], r: [0, 1] },
      { texto: "En el Modelo E-R, la cardinalidad ___ indica que un registro se relaciona con muchos.", banco: ["1:N", "N:M", "1:1", "0:N"], r: [0] },
      { texto: "___ cuenta registros, ___ suma valores y ___ calcula el promedio en SQL.", banco: ["COUNT()", "SUM()", "AVG()", "MAX()"], r: [0, 1, 2] },
      { texto: "El ___ es el software que permite crear, consultar y controlar bases de datos.", banco: ["SGBD", "SQL", "Modelo Relacional", "Diagrama E-R"], r: [0] },
      { texto: "Un ___ es un conjunto organizado de datos, y una ___ organiza esos datos en filas y columnas.", banco: ["base de datos", "tabla", "registro", "campo"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada instrucción SQL con su función:",
        columnaA: ["SELECT", "INSERT INTO", "UPDATE", "DELETE FROM", "CREATE TABLE"],
        columnaB: ["Elimina registros según condición", "Consulta y muestra datos", "Modifica registros existentes", "Crea una nueva tabla", "Agrega nuevos registros"],
        r: [1, 4, 2, 0, 3]
      },
      {
        instruccion: "Relaciona cada tipo de clave con su descripción:",
        columnaA: ["Primary Key (PK)", "Foreign Key (FK)", "Clave candidata"],
        columnaB: ["Podría ser PK pero no fue elegida", "Identifica únicamente cada registro", "Referencia la PK de otra tabla"],
        r: [1, 2, 0]
      },
      {
        instruccion: "Relaciona cada función de agregación SQL con lo que calcula:",
        columnaA: ["COUNT()", "SUM()", "AVG()", "MAX()", "MIN()"],
        columnaB: ["Valor máximo", "Valor mínimo", "Número de registros", "Suma de valores", "Promedio"],
        r: [2, 3, 4, 0, 1]
      },
      {
        instruccion: "Relaciona cada tipo de dato SQL con un ejemplo de valor:",
        columnaA: ["INT", "VARCHAR", "DATE", "BOOLEAN", "DECIMAL"],
        columnaB: ["Verdadero / Falso", "2024-06-15", "42", "3.1416", "'Juan García'"],
        r: [2, 4, 1, 0, 3]
      },
      {
        instruccion: "Relaciona cada figura del Diagrama E-R con lo que representa:",
        columnaA: ["Rectángulo", "Elipse / Óvalo", "Rombo", "Línea de conexión"],
        columnaB: ["Atributo de la entidad", "Relación entre entidades", "Entidad", "Cardinalidad"],
        r: [2, 0, 1, 3]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada cardinalidad del Modelo E-R con su ejemplo de la vida real:",
        columnaA: ["Uno a Uno (1:1)", "Uno a Muchos (1:N)", "Muchos a Muchos (N:M)"],
        columnaB: ["Un autor publica muchos libros, cada libro tiene un autor", "Un ciudadano tiene una sola CURP y la CURP es de un ciudadano", "Varios estudiantes se inscriben en múltiples materias escolares"],
        r: [1, 0, 2]
      },
      {
        instruccion: "Relaciona cada cláusula SQL con el orden y propósito en la consulta:",
        columnaA: ["WHERE", "ORDER BY", "GROUP BY", "HAVING", "LIMIT"],
        columnaB: ["Agrupa filas para funciones agregadas", "Restringe el número total de filas devueltas", "Filtra grupos tras el GROUP BY", "Ordena los resultados (ASC/DESC)", "Filtra filas antes de agrupar"],
        r: [4, 3, 0, 2, 1]
      },
      {
        instruccion: "Relaciona cada Forma Normal (FN) con su regla principal:",
        columnaA: ["Primera FN (1FN)", "Segunda FN (2FN)", "Tercera FN (3FN)"],
        columnaB: ["Elimina dependencias transitivas entre columnas no clave", "Garantiza valores atómicos indivisibles sin grupos repetidos", "Cumple 1FN y elimina dependencias parciales de claves compuestas"],
        r: [1, 2, 0]
      },
      {
        instruccion: "Relaciona cada restricción (constraint) SQL con su validación:",
        columnaA: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
        columnaB: ["Asigna un valor predeterminado si no se ingresa dato", "Impide valores nulos en el campo", "Evalúa que el dato cumpla una condición específica", "Impide que se repita un mismo valor en la columna"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada motor de base de datos con su característica distintiva:",
        columnaA: ["MySQL", "SQLite", "PostgreSQL", "Oracle DB"],
        columnaB: ["Base de datos ligera autocontenida en un solo archivo", "Motor comercial empresarial de alta escala y soporte robusto", "Motor relacional de código abierto robusto con gran soporte SQL avanzado", "Motor web estándar muy utilizado en aplicaciones LAMP"],
        r: [3, 0, 2, 1]
      }
    ]
  }
};
