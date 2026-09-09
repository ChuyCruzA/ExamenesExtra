import { Submodulo } from '../types.ts';

export const submoduloII1: Submodulo = {
  nombre: "II.1 · Desarrolla software con programación orientada a objetos",
  modulo: "Módulo II",
  semestre: "3°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Cuáles son los cuatro pilares de la Programación Orientada a Objetos?", keywords: ["encapsulamiento", "herencia", "polimorfismo", "abstracción"], puntos: 1 },
      { p: "¿Qué es una clase en POO?", keywords: ["plantilla", "molde", "define", "atributos", "métodos"], puntos: 1 },
      { p: "¿Qué es un objeto en POO?", keywords: ["instancia", "clase", "concreto", "estado", "comportamiento"], puntos: 1 },
      { p: "¿Qué es la herencia en POO?", keywords: ["hereda", "clase hija", "padre", "reutilización", "subclase"], puntos: 1 },
      { p: "¿Cuál es el lenguaje de programación principal de Android según el glosario?", keywords: ["java", "kotlin"], puntos: 1 },
      { p: "¿Qué es un método en POO?", keywords: ["función", "clase", "acción", "comportamiento", "pertenece"], puntos: 1 },
      { p: "¿Qué significa POO?", keywords: ["programación orientada a objetos"], puntos: 1 },
      { p: "¿Qué diferencia hay entre un atributo y un método?", keywords: ["atributo", "dato", "variable", "método", "función", "acción"], puntos: 1 },
      { p: "¿Qué es el encapsulamiento en POO?", keywords: ["oculta", "acceso", "privado", "protege", "datos"], puntos: 1 },
      { p: "¿Qué es un sistema de información?", keywords: ["personas", "procesos", "datos", "tecnología", "organización", "decisiones"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuál modificador de acceso en Java hace que un atributo solo sea accesible dentro de la misma clase?", o: ["public", "protected", "private", "static"], r: 2 },
      { p: "¿Qué es un constructor en POO?", o: ["Método que destruye el objeto", "Método especial que inicializa un objeto al crearse", "Tipo de herencia", "Atributo estático"], r: 1 },
      { p: "¿Qué hace la palabra clave 'super' en Java?", o: ["Crea un objeto nuevo", "Llama al constructor o método de la clase padre", "Elimina la herencia", "Declara un atributo público"], r: 1 },
      { p: "¿Qué es el polimorfismo en POO?", o: ["Crear muchas clases", "Capacidad de objetos distintos de responder al mismo mensaje de forma diferente", "Ocultar atributos", "Heredar de múltiples clases"], r: 1 },
      { p: "¿Qué es la abstracción en POO?", o: ["Copiar código de otra clase", "Representar solo las características esenciales ocultando detalles innecesarios", "Crear objetos iguales", "Usar solo atributos públicos"], r: 1 },
      { p: "En Java, ¿qué lenguaje se destaca por ser portable gracias a la JVM?", o: ["Python", "C++", "Java", "PHP"], r: 2 },
      { p: "¿Cuál es la diferencia entre una clase abstracta y una interfaz?", o: ["No hay diferencia", "La clase abstracta puede tener implementaciones; la interfaz solo define contratos sin implementación", "La interfaz tiene implementaciones; la clase abstracta no", "Solo la interfaz puede heredarse"], r: 1 },
      { p: "¿Qué hace la anotación @Override en Java?", o: ["Crea un método nuevo", "Indica que el método sobrescribe uno de la superclase", "Declara un método estático", "Marca el constructor"], r: 1 },
      { p: "¿Qué es un IDE según el glosario?", o: ["Solo un editor de texto", "Entorno de desarrollo integrado con editor, compilador y depurador", "Un tipo de algoritmo", "Un lenguaje de programación"], r: 1 },
      { p: "¿Cuál es un ejemplo de IDE para Java?", o: ["Notepad", "Google Chrome", "Eclipse o NetBeans", "MySQL Workbench"], r: 2 },
      { p: "¿Qué es la sobrescritura (override) de métodos?", o: ["Eliminar un método de la clase padre", "Redefinir en la subclase un método heredado de la superclase", "Crear un método con el mismo nombre en la misma clase", "Hacer privado un método"], r: 1 },
      { p: "¿Qué es un paradigma de programación?", o: ["Un tipo de variable", "Estilo o enfoque para resolver problemas con código", "Un lenguaje específico", "Un tipo de bucle"], r: 1 },
      { p: "¿Qué paradigma usa SQL?", o: ["Imperativo", "Orientado a objetos", "Funcional", "Declarativo"], r: 3 },
      { p: "¿Qué es la serialización de objetos?", o: ["Imprimir los atributos", "Convertir un objeto a formato almacenable (bytes, JSON, XML)", "Eliminar atributos", "Crear copias exactas"], r: 1 },
      { p: "¿Qué es la cohesión en POO?", o: ["Cuántas clases se relacionan", "Grado en que los elementos de una clase están relacionados entre sí", "Número de métodos", "Tipo de herencia"], r: 1 },
      { p: "Según el glosario, ¿qué sistema operativo usa Java como lenguaje principal para sus apps?", o: ["iOS", "Windows Phone", "Android", "HarmonyOS"], r: 2 },
      { p: "¿Qué es una clase abstracta?", o: ["Clase con muchos métodos", "Clase que no puede instanciarse directamente", "Clase sin atributos", "Clase final"], r: 1 },
      { p: "¿Qué representa la relación 'is-a' (es-un) en POO?", o: ["Composición", "Herencia", "Agregación", "Encapsulamiento"], r: 1 },
      { p: "¿Qué significa instanciar una clase?", o: ["Eliminar la clase", "Crear un objeto a partir de la clase", "Modificar la clase", "Heredar la clase"], r: 1 },
      { p: "En el glosario, ¿qué significa la sigla JVM?", o: ["Java Virtual Machine", "Java Version Manager", "Joint Verification Method", "JavaScript Visual Mode"], r: 0 },
    ],
    falso_verdadero: [
      { p: "Una clase es una instancia concreta de un objeto.", r: false },
      { p: "El encapsulamiento oculta los detalles internos de un objeto usando modificadores de acceso.", r: true },
      { p: "En Java, 'class Estudiante extends Persona' indica que Estudiante hereda de Persona.", r: true },
      { p: "El polimorfismo permite que objetos de la misma clase respondan al mismo mensaje de formas distintas.", r: false },
      { p: "Un método abstracto en una clase abstracta debe tener implementación completa.", r: false },
      { p: "Los cuatro pilares de la POO son: encapsulamiento, herencia, polimorfismo y abstracción.", r: true },
      { p: "La palabra clave 'private' hace que un atributo sea accesible desde cualquier clase.", r: false },
      { p: "Un IDE integra editor, compilador y depurador en un solo entorno.", r: true },
      { p: "Java compila a bytecode que se ejecuta en la JVM, lo que lo hace portable.", r: true },
      { p: "La herencia múltiple directa de clases está soportada en Java.", r: false },
    ],
    cloze: [
      { texto: "Los cuatro pilares de la POO son: ___, ___, ___ y abstracción.", banco: ["encapsulamiento", "herencia", "polimorfismo", "recursividad"], r: [0, 1, 2] },
      { texto: "Una ___ es la plantilla que define atributos y métodos; un ___ es la instancia concreta.", banco: ["clase", "objeto", "método", "constructor"], r: [0, 1] },
      { texto: "El ___ permite que una clase hija adquiera atributos y métodos de la clase ___.", banco: ["herencia", "padre", "polimorfismo", "hijo"], r: [0, 1] },
      { texto: "El modificador ___ limita el acceso a los atributos solo dentro de la misma clase.", banco: ["private", "public", "protected", "static"], r: [0] },
      { texto: "En Java, la palabra clave ___ indica que una clase hereda de otra.", banco: ["extends", "implements", "super", "this"], r: [0] },
      { texto: "Un ___ especial que inicializa los atributos cuando se crea un objeto se llama ___.", banco: ["método", "constructor", "clase", "interfaz"], r: [0, 1] },
      { texto: "La ___ representa solo las características esenciales de un objeto, ocultando los detalles ___.", banco: ["abstracción", "innecesarios", "herencia", "privados"], r: [0, 1] },
      { texto: "Eclipse y NetBeans son ejemplos de ___ para el lenguaje de programación ___.", banco: ["IDEs", "Java", "editores", "Python"], r: [0, 1] },
      { texto: "En POO, los paradigmas incluyen: estructurado, ___, funcional y ___.", banco: ["orientado a objetos", "declarativo", "imperativo", "recursivo"], r: [0, 1] },
      { texto: "La relación ___ indica herencia (perro es-un animal), mientras que ___ indica composición (coche tiene-un motor).", banco: ["is-a", "has-a", "extends", "implements"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada pilar de la POO con su definición:",
        columnaA: ["Encapsulamiento", "Herencia", "Polimorfismo", "Abstracción"],
        columnaB: ["Representa solo lo esencial ocultando detalles", "Oculta detalles internos con modificadores de acceso", "Una clase hija adquiere atributos de la clase padre", "Misma interfaz, comportamientos distintos según el objeto"],
        r: [1, 2, 3, 0]
      },
      {
        instruccion: "Relaciona cada modificador de acceso con su nivel de visibilidad:",
        columnaA: ["public", "private", "protected"],
        columnaB: ["Accesible en la clase y sus subclases", "Accesible solo dentro de la misma clase", "Accesible desde cualquier clase"],
        r: [2, 1, 0]
      },
      {
        instruccion: "Relaciona cada término de POO con su ejemplo en Java:",
        columnaA: ["Clase", "Objeto", "Herencia", "Método"],
        columnaB: ["miPerro = new Perro()", "class Perro extends Animal", "void ladrar() { }", "class Perro { }"],
        r: [3, 0, 1, 2]
      },
      {
        instruccion: "Relaciona cada paradigma de programación con su lenguaje representativo:",
        columnaA: ["Orientado a objetos", "Estructurado", "Funcional", "Declarativo"],
        columnaB: ["SQL", "Haskell", "C", "Java"],
        r: [3, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada tipo de relación entre clases con su significado:",
        columnaA: ["is-a (es-un)", "has-a (tiene-un)", "implements"],
        columnaB: ["Una clase implementa los contratos de una interfaz", "Herencia: Estudiante es-un Persona", "Composición: Coche tiene-un Motor"],
        r: [1, 2, 0]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada concepto avanzado de clases y métodos:",
        columnaA: ["Clase abstracta", "Interfaz", "Constructor", "Sobrecarga (Overload)"],
        columnaB: ["Método especial para inicializar objetos", "Contrato que declara métodos que deben implementarse", "Clase que no puede instanciarse directamente", "Mismo nombre de método pero con diferentes firmas"],
        r: [2, 1, 0, 3]
      },
      {
        instruccion: "Relaciona cada palabra clave reservada de Java:",
        columnaA: ["super", "this", "static", "final"],
        columnaB: ["Perteneciente a la clase y compartido entre instancias", "Constante inmutable o clase no heredable", "Referencia al objeto o instancia actual", "Acceso al constructor o métodos de la clase padre"],
        r: [3, 2, 0, 1]
      },
      {
        instruccion: "Relaciona cada bloque del manejo de excepciones en Java:",
        columnaA: ["try", "catch", "finally", "throw"],
        columnaB: ["Lanza explícitamente una excepción", "Bloque que se ejecuta incondicionalmente", "Contiene el código que puede generar error", "Maneja la excepción si se produce"],
        r: [2, 3, 1, 0]
      },
      {
        instruccion: "Relaciona cada estructura de la API de Colecciones en Java:",
        columnaA: ["ArrayList", "HashMap", "HashSet", "Iterator"],
        columnaB: ["Almacena pares clave-valor únicos", "Lista de tamaño dinámico indexada", "Permite recorrer los elementos de una colección", "Conjunto que no admite elementos duplicados"],
        r: [1, 0, 3, 2]
      },
      {
        instruccion: "Relaciona cada principio de diseño SOLID con su propósito:",
        columnaA: ["Responsabilidad Única (S)", "Abierto/Cerrado (O)", "Sustitución de Liskov (L)", "Inversión de Dependencias (D)"],
        columnaB: ["Depender de abstracciones y no de clases concretas", "Una clase debe tener una sola tarea bien delimitada", "Abierto para extensión, cerrado para modificación", "Subclases sustituibles por sus superclases sin fallas"],
        r: [1, 2, 3, 0]
      }
    ]
  }
};

export const submoduloII2: Submodulo = {
  nombre: "II.2 · Diseña y administra bases de datos avanzadas",
  modulo: "Módulo II",
  semestre: "3°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué es un procedimiento almacenado?", keywords: ["instrucciones", "guardadas", "base de datos", "llama", "ejecuta", "nombre"], puntos: 1 },
      { p: "¿Qué es un trigger (disparador) en SQL?", keywords: ["automáticamente", "evento", "INSERT", "UPDATE", "DELETE", "dispara"], puntos: 1 },
      { p: "¿Qué son las propiedades ACID en bases de datos?", keywords: ["atomicidad", "consistencia", "aislamiento", "durabilidad", "transacción"], puntos: 1 },
      { p: "¿Qué es la Forma Normal de Boyce-Codd (FNBC)?", keywords: ["tercera", "estricta", "superclave", "dependencia", "3FN"], puntos: 1 },
      { p: "¿Qué es MySQL según el glosario?", keywords: ["SGBD", "código abierto", "web", "PHP", "SQL"], puntos: 1 },
      { p: "¿Qué es un índice en bases de datos avanzadas?", keywords: ["acelera", "consultas", "búsqueda", "rendimiento", "velocidad"], puntos: 1 },
      { p: "¿Qué es un deadlock (interbloqueo)?", keywords: ["bloquean", "mutuamente", "transacciones", "espera", "recursos"], puntos: 1 },
      { p: "¿Qué es un cursor en SQL?", keywords: ["recorre", "fila", "resultado", "consulta", "uno a uno"], puntos: 1 },
      { p: "¿Qué es la replicación de bases de datos?", keywords: ["copia", "sincroniza", "servidores", "múltiples", "datos"], puntos: 1 },
      { p: "¿Qué es la inyección SQL?", keywords: ["malicioso", "ataque", "consulta", "manipular", "código SQL"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuáles son los momentos en que puede ejecutarse un trigger?", o: ["Solo AFTER", "Solo BEFORE", "BEFORE o AFTER del evento", "Solo DURING"], r: 2 },
      { p: "¿Qué garantiza la Atomicidad en ACID?", o: ["La transacción es rápida", "La transacción se completa completamente o no ejecuta nada", "Los datos son consistentes", "Varias transacciones coexisten sin interferir"], r: 1 },
      { p: "¿Qué es la desnormalización?", o: ["Llevar tablas a 3FN", "Introducir redundancia controlada para mejorar rendimiento", "Eliminar todas las tablas", "Agregar triggers automáticamente"], r: 1 },
      { p: "¿Qué hace la instrucción EXPLAIN en MySQL?", o: ["Muestra la estructura de la tabla", "Muestra el plan de ejecución de una consulta", "Explica la sintaxis SQL", "Lista todas las tablas"], r: 1 },
      { p: "¿Cuál es la diferencia entre replicación maestro-esclavo y maestro-maestro?", o: ["Son idénticas", "En maestro-esclavo solo el maestro escribe; en maestro-maestro ambos pueden escribir", "Maestro-maestro es más lenta", "Maestro-esclavo permite escritura en esclavos"], r: 1 },
      { p: "¿Qué hace ROLLBACK en una transacción?", o: ["Confirma los cambios", "Deshace los cambios de la transacción actual", "Elimina la tabla", "Crea una copia de seguridad"], r: 1 },
      { p: "¿Qué es un data warehouse?", o: ["Base de datos operacional diaria", "BD optimizada para análisis e informes con datos históricos de múltiples fuentes", "Tipo de índice compuesto", "Tipo de trigger automático"], r: 1 },
      { p: "¿Qué es ETL en bases de datos?", o: ["Tipo de JOIN avanzado", "Extraer, Transformar y Cargar datos hacia un data warehouse", "Tipo de índice", "Replicación automática"], r: 1 },
      { p: "¿Cómo se previene la inyección SQL?", o: ["Usando solo SELECT", "Usando consultas parametrizadas y validación de entradas", "Eliminando todos los permisos", "Usando solo stored procedures sin parámetros"], r: 1 },
      { p: "Según el glosario, ¿qué SGBD es el más usado con PHP en aplicaciones web?", o: ["Oracle", "SQLite", "MySQL", "MongoDB"], r: 2 },
      { p: "¿Qué es una ventana (window function) en SQL?", o: ["Función de texto avanzada", "Función que calcula sobre filas relacionadas sin agruparlas en una sola", "Tipo de JOIN", "Tipo de cursor"], r: 1 },
      { p: "¿Qué hace PARTITION BY en una función de ventana?", o: ["Divide la tabla físicamente", "Divide el conjunto de resultados en particiones para la función", "Ordena los resultados", "Filtra filas"], r: 1 },
      { p: "¿Qué es una CTE (expresión de tabla común)?", o: ["Tipo de vista permanente", "Resultado temporal con nombre definido con WITH referenciable en la consulta", "Tipo de índice", "Stored procedure"], r: 1 },
      { p: "¿Qué garantiza el Aislamiento en ACID?", o: ["Los datos se guardan permanentemente", "Las transacciones concurrentes no interfieren entre sí", "La transacción es completa o nada", "Los datos son correctos"], r: 1 },
      { p: "¿Qué es una base de datos NoSQL?", o: ["BD sin SQL", "BD que no usa el modelo relacional, maneja datos no estructurados", "BD sin tablas ni claves", "BD solo para texto"], r: 1 },
      { p: "¿Cuál es un ejemplo de BD NoSQL de tipo documento?", o: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], r: 2 },
      { p: "¿Qué hace GRANT en SQL?", o: ["Quita permisos", "Otorga permisos específicos a usuarios o roles", "Crea usuarios", "Elimina la base de datos"], r: 1 },
      { p: "¿Qué es la partición horizontal de tablas?", o: ["Divide columnas entre servidores", "Divide filas para mejorar rendimiento", "Tipo de normalización", "Replicación de tablas"], r: 1 },
      { p: "¿Qué es la función COALESCE() en SQL?", o: ["Une tablas", "Devuelve el primer valor no NULL de una lista", "Convierte tipos de datos", "Ordena resultados"], r: 1 },
      { p: "¿Qué hace COMMIT en SQL?", o: ["Deshace cambios", "Confirma permanentemente los cambios de una transacción", "Crea un índice", "Elimina datos"], r: 1 },
    ],
    falso_verdadero: [
      { p: "Un trigger se ejecuta automáticamente en respuesta a un evento como INSERT, UPDATE o DELETE.", r: true },
      { p: "ROLLBACK confirma permanentemente los cambios de una transacción.", r: false },
      { p: "La desnormalización aumenta redundancia para mejorar el rendimiento de consultas.", r: true },
      { p: "Un deadlock ocurre cuando dos transacciones se bloquean mutuamente esperando recursos.", r: true },
      { p: "MongoDB es un ejemplo de base de datos relacional.", r: false },
      { p: "Las propiedades ACID son: Atomicidad, Consistencia, Aislamiento y Durabilidad.", r: true },
      { p: "Un procedimiento almacenado se guarda en la base de datos y se ejecuta con una llamada.", r: true },
      { p: "EXPLAIN muestra el plan de ejecución de una consulta SQL.", r: true },
      { p: "La inyección SQL se previene usando consultas con formato string directamente.", r: false },
      { p: "Un data warehouse está optimizado para transacciones operativas diarias del negocio.", r: false },
    ],
    cloze: [
      { texto: "Las propiedades ___ garantizan transacciones fiables: Atomicidad, Consistencia, ___ y Durabilidad.", banco: ["ACID", "Aislamiento", "CRUD", "Integridad"], r: [0, 1] },
      { texto: "Un trigger puede ejecutarse ___ o ___ del evento INSERT, UPDATE o DELETE.", banco: ["BEFORE", "AFTER", "DURING", "INSTEAD OF"], r: [0, 1] },
      { texto: "___ confirma cambios en una transacción y ___ los deshace.", banco: ["COMMIT", "ROLLBACK", "GRANT", "REVOKE"], r: [0, 1] },
      { texto: "La ___ introduce redundancia controlada para mejorar el rendimiento, contrario a la ___.", banco: ["desnormalización", "normalización", "partición", "replicación"], r: [0, 1] },
      { texto: "Un ___ almacena instrucciones SQL en la BD para ejecutarlas con una ___.", banco: ["procedimiento almacenado", "llamada", "trigger", "consulta"], r: [0, 1] },
      { texto: "ETL significa ___, ___ y Cargar, proceso usado para alimentar un ___.", banco: ["Extraer", "Transformar", "data warehouse", "índice"], r: [0, 1, 2] },
      { texto: "La inyección SQL se previene usando ___ parametrizadas y ___ de entradas.", banco: ["consultas", "validación", "triggers", "índices"], r: [0, 1] },
      { texto: "En bases de datos ___ como MongoDB los datos se almacenan como ___ JSON.", banco: ["NoSQL", "documentos", "relacionales", "tablas"], r: [0, 1] },
      { texto: "___ otorga permisos a usuarios y ___ los revoca en una base de datos.", banco: ["GRANT", "REVOKE", "COMMIT", "ROLLBACK"], r: [0, 1] },
      { texto: "Un ___ recorre fila a fila el resultado de una consulta y un ___ acelera las búsquedas.", banco: ["cursor", "índice", "trigger", "procedimiento"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada propiedad ACID con su garantía:",
        columnaA: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"],
        columnaB: ["Los datos cambian de un estado válido a otro", "Transacciones concurrentes no interfieren", "Cambios confirmados persisten ante fallos", "Todo se completa o nada se ejecuta"],
        r: [3, 0, 1, 2]
      },
      {
        instruccion: "Relaciona cada instrucción de transacción con su efecto:",
        columnaA: ["COMMIT", "ROLLBACK", "SAVEPOINT", "BEGIN"],
        columnaB: ["Inicia una transacción", "Punto de retorno parcial", "Confirma cambios permanentemente", "Deshace los cambios"],
        r: [2, 3, 1, 0]
      },
      {
        instruccion: "Relaciona cada tipo de BD con su característica principal:",
        columnaA: ["Relacional", "NoSQL documental", "Data Warehouse", "BD en memoria"],
        columnaB: ["Velocidad extrema almacenando en RAM", "Datos históricos para análisis", "Documentos JSON sin esquema fijo", "Tablas relacionadas con SQL estándar"],
        r: [3, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada instrucción de seguridad SQL con su función:",
        columnaA: ["GRANT", "REVOKE", "EXPLAIN"],
        columnaB: ["Muestra el plan de ejecución de una consulta", "Otorga permisos a usuarios", "Quita permisos previamente otorgados"],
        r: [1, 2, 0]
      },
      {
        instruccion: "Relaciona cada tipo de índice con su característica:",
        columnaA: ["PRIMARY KEY", "UNIQUE", "Índice compuesto", "Índice de texto completo"],
        columnaB: ["Abarca dos o más columnas", "No permite valores NULL y es único por tabla", "Permite búsquedas avanzadas en campos de texto", "No permite valores duplicados pero admite NULL"],
        r: [1, 3, 0, 2]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada evento de un trigger (disparador) con su momento de disparo:",
        columnaA: ["BEFORE INSERT", "AFTER UPDATE", "BEFORE DELETE", "INSTEAD OF"],
        columnaB: ["Audita cambios una vez guardados", "Reemplaza la acción original sobre una vista", "Valida los datos antes de insertarse en la tabla", "Verifica condiciones previas a eliminar un registro"],
        r: [2, 0, 3, 1]
      },
      {
        instruccion: "Relaciona cada concepto de Business Intelligence y Data Warehouse:",
        columnaA: ["Proceso ETL", "Cubo OLAP", "Data Mart", "Minería de datos (Data Mining)"],
        columnaB: ["Descubrimiento de patrones ocultos y tendencias", "Subconjunto de Data Warehouse para un departamento", "Extracción, transformación y carga", "Estructura multidimensional para análisis veloz"],
        r: [2, 3, 1, 0]
      },
      {
        instruccion: "Relaciona cada concepto de concurrencia y control de acceso:",
        columnaA: ["Interbloqueo (Deadlock)", "Bloqueo compartido", "Bloqueo exclusivo", "Lectura sucia (Dirty read)"],
        columnaB: ["Lectura de datos modificados no confirmados", "Permite lectura múltiple sin escritura", "Dos procesos se bloquean mutuamente", "Impide a cualquier otro proceso leer o escribir"],
        r: [2, 1, 3, 0]
      },
      {
        instruccion: "Relaciona cada familia de base de datos NoSQL con su representante:",
        columnaA: ["Documental", "Clave-Valor", "Grafos", "Columnar"],
        columnaB: ["Apache Cassandra", "MongoDB", "Neo4j", "Redis"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada función SQL avanzada con su utilidad:",
        columnaA: ["ROW_NUMBER()", "PARTITION BY", "RANK()", "COALESCE()"],
        columnaB: ["Retorna el primer valor no nulo", "Asigna número correlativo a cada fila", "Divide el conjunto en grupos para ventana", "Asigna ranking con saltos si hay empates"],
        r: [1, 2, 3, 0]
      }
    ]
  }
};
