import { Submodulo } from '../types.ts';

export const submoduloIII1: Submodulo = {
  nombre: "III.1 · Desarrolla aplicaciones Web",
  modulo: "Módulo III",
  semestre: "4°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué significan las siglas HTML?", keywords: ["hypertext", "markup", "language", "lenguaje", "marcado", "hipertexto"], puntos: 1 },
      { p: "¿Para qué sirve CSS según el glosario?", keywords: ["estilos", "presentación", "visual", "colores", "tipografía", "cascading"], puntos: 1 },
      { p: "¿Qué es el frontend según el glosario?", keywords: ["navegador", "HTML", "CSS", "JavaScript", "usuario", "ve"], puntos: 1 },
      { p: "¿Qué es el backend según el glosario?", keywords: ["servidor", "lógica", "base de datos", "autenticación", "no ve"], puntos: 1 },
      { p: "¿Qué es PHP y para qué se usa principalmente?", keywords: ["servidor", "dinámicas", "MySQL", "páginas web", "lenguaje"], puntos: 1 },
      { p: "¿Qué es una API REST?", keywords: ["interfaz", "HTTP", "comunicación", "recursos", "sin estado"], puntos: 1 },
      { p: "¿Qué es GitHub Pages?", keywords: ["sitios", "estáticos", "repositorio", "gratuito", "alojar", "hosting"], puntos: 1 },
      { p: "¿Qué es Visual Studio Code según el glosario?", keywords: ["editor", "Microsoft", "gratuito", "extensiones", "código"], puntos: 1 },
      { p: "¿Cuál es la diferencia entre una página estática y una dinámica?", keywords: ["fijo", "genera", "tiempo real", "servidor", "usuario"], puntos: 1 },
      { p: "¿Qué es el hosting y el dominio?", keywords: ["alojamiento", "nombre", "servidor", "internet", "identificador", "accesible"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "Según el glosario, ¿qué lenguaje define la estructura y contenido semántico de la web?", o: ["CSS", "PHP", "HTML", "JavaScript"], r: 2 },
      { p: "¿Cuál es la etiqueta HTML para crear un hipervínculo?", o: ["<link>", "<href>", "<a>", "<url>"], r: 2 },
      { p: "¿Qué hace un media query en CSS?", o: ["Consulta la base de datos", "Aplica estilos según características del dispositivo", "Tipo de selector avanzado", "Tipo de animación"], r: 1 },
      { p: "¿Qué es Flexbox en CSS?", o: ["Tipo de fuente", "Sistema de diseño unidimensional para distribuir elementos", "Tipo de animación", "Framework CSS completo"], r: 1 },
      { p: "¿Qué hace fetch() en JavaScript?", o: ["Descarga archivos al servidor", "Realiza peticiones HTTP asíncronas desde el navegador", "Manipula el DOM", "Crea cookies"], r: 1 },
      { p: "¿Qué es el DOM (Document Object Model)?", o: ["Tipo de servidor", "Representación en árbol del HTML que JS puede manipular", "Protocolo de red", "Base de datos del navegador"], r: 1 },
      { p: "¿Qué es Bootstrap?", o: ["Framework de JavaScript", "Framework CSS con componentes y grid responsivo predefinido", "Lenguaje de programación", "Tipo de servidor web"], r: 1 },
      { p: "¿Cuáles son los métodos HTTP principales en una API REST?", o: ["GET, POST solo", "GET, POST, PUT/PATCH, DELETE", "GET, SEND, REMOVE, CHANGE", "READ, WRITE, UPDATE, DELETE"], r: 1 },
      { p: "¿Qué es una SPA (Single Page Application)?", o: ["Página con un solo párrafo", "Aplicación web que carga una sola página y actualiza dinámicamente", "Página sin CSS", "Sitio con una sola imagen"], r: 1 },
      { p: "Según el glosario, ¿qué hace PHP del lado del servidor?", o: ["Da estilos a la página", "Genera páginas web dinámicas e interactúa con MySQL", "Maneja el DOM del navegador", "Establece la estructura HTML"], r: 1 },
      { p: "¿Qué es localStorage en el navegador?", o: ["Servidor de archivos", "Almacenamiento persistente en el navegador sin fecha de expiración", "Base de datos del servidor", "Tipo de cookie con expiración"], r: 1 },
      { p: "¿Qué es una Promise en JavaScript?", o: ["Tipo de variable", "Objeto que representa un valor disponible ahora o en el futuro (asincronía)", "Función síncrona", "Tipo de clase"], r: 1 },
      { p: "¿Qué hace async/await en JavaScript?", o: ["Crea loops", "Sintaxis para escribir código asíncrono de forma legible", "Declara variables", "Maneja eventos del DOM"], r: 1 },
      { p: "¿Qué es el SEO?", o: ["Tipo de servidor web", "Optimización para motores de búsqueda que mejora el ranking en Google", "Framework CSS", "Protocolo de seguridad"], r: 1 },
      { p: "¿Qué es npm?", o: ["Servidor web", "Gestor de paquetes de Node.js para instalar bibliotecas JavaScript", "Base de datos", "Protocolo HTTP"], r: 1 },
      { p: "¿Qué hace 'display: none' en CSS?", o: ["Muestra el elemento en rojo", "Oculta completamente el elemento sin ocupar espacio", "Hace el elemento transparente", "Mueve el elemento"], r: 1 },
      { p: "¿Qué es el Box Model en CSS?", o: ["Modelo de color", "Modelo: content, padding, border, margin que describe el espacio de un elemento", "Tipo de posicionamiento", "Tipo de selector"], r: 1 },
      { p: "¿Qué hace querySelector() en JavaScript?", o: ["Crea un elemento HTML", "Selecciona el primer elemento del DOM que coincide con el selector CSS", "Agrega un evento", "Modifica el CSS"], r: 1 },
      { p: "¿Qué es HTTPS?", o: ["HTTP más rápido", "HTTP con cifrado TLS/SSL que protege la comunicación", "Protocolo de email", "Tipo de servidor"], r: 1 },
      { p: "Según el glosario, ¿qué extensión de VS Code permite ver el sitio en tiempo real?", o: ["GitLens", "Prettier", "Live Server", "IntelliSense"], r: 2 },
    ],
    falso_verdadero: [
      { p: "CSS define la estructura semántica de una página web.", r: false },
      { p: "PHP es un lenguaje de programación que se ejecuta del lado del servidor.", r: true },
      { p: "Una página estática genera contenido dinámico según el usuario.", r: false },
      { p: "GitHub Pages permite alojar sitios web estáticos de forma gratuita.", r: true },
      { p: "El frontend incluye HTML, CSS y JavaScript que se ejecutan en el navegador.", r: true },
      { p: "fetch() realiza peticiones HTTP síncronas bloqueando el navegador.", r: false },
      { p: "HTTPS cifra la comunicación entre el navegador y el servidor con TLS/SSL.", r: true },
      { p: "El DOM es la representación en árbol del HTML que JavaScript puede manipular.", r: true },
      { p: "Bootstrap es un framework de JavaScript para crear interfaces.", r: false },
      { p: "Una API REST usa métodos HTTP como GET, POST, PUT y DELETE.", r: true },
    ],
    cloze: [
      { texto: "HTML define la ___, CSS los ___ y JavaScript la interactividad de una página web.", banco: ["estructura", "estilos", "animaciones", "contenido"], r: [0, 1] },
      { texto: "El ___ es la parte visible en el navegador y el ___ la lógica en el servidor.", banco: ["frontend", "backend", "DOM", "API"], r: [0, 1] },
      { texto: "___ es un lenguaje de servidor que genera páginas ___ conectándose a MySQL.", banco: ["PHP", "dinámicas", "JavaScript", "estáticas"], r: [0, 1] },
      { texto: "Una ___ permite comunicación entre sistemas usando HTTP; los métodos principales son GET, POST, ___ y DELETE.", banco: ["API REST", "PUT", "UPDATE", "JSON"], r: [0, 1] },
      { texto: "___ es el editor gratuito de Microsoft con extensiones como ___ para previsualizar el sitio.", banco: ["Visual Studio Code", "Live Server", "Notepad++", "Prettier"], r: [0, 1] },
      { texto: "El ___ permite alojar sitios estáticos en GitHub con una URL del tipo ___.github.io.", banco: ["GitHub Pages", "TU_USUARIO", "hosting", "dominio"], r: [0, 1] },
      { texto: "La propiedad CSS ___ establece el diseño de una dimensión y ___ para dos dimensiones.", banco: ["Flexbox", "Grid", "padding", "margin"], r: [0, 1] },
      { texto: "___ realiza peticiones HTTP asíncronas y retorna una ___ que se resuelve con el resultado.", banco: ["fetch()", "Promise", "async", "await"], r: [0, 1] },
      { texto: "___ protege la comunicación web con TLS/SSL y es indispensable en sitios con ___.", banco: ["HTTPS", "pagos", "HTTP", "autenticación"], r: [0, 1] },
      { texto: "El ___ es la representación del HTML en árbol que JavaScript puede ___ para cambiar el contenido.", banco: ["DOM", "manipular", "CSS", "modificar"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada tecnología web con su función principal:",
        columnaA: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        columnaB: ["Interactividad del lado del cliente", "Base de datos del servidor", "Estructura y contenido semántico", "Lógica del lado del servidor", "Presentación y estilos visuales"],
        r: [2, 4, 0, 3, 1]
      },
      {
        instruccion: "Relaciona cada método HTTP con su operación CRUD:",
        columnaA: ["GET", "POST", "PUT/PATCH", "DELETE"],
        columnaB: ["Eliminar (Delete)", "Leer (Read)", "Crear (Create)", "Actualizar (Update)"],
        r: [1, 2, 3, 0]
      },
      {
        instruccion: "Relaciona cada concepto de CSS con su descripción:",
        columnaA: ["Flexbox", "Grid", "Media query", "Box Model"],
        columnaB: ["Content, padding, border, margin", "Diseño bidimensional de filas y columnas", "Diseño unidimensional (fila o columna)", "Estilos según características del dispositivo"],
        r: [2, 1, 3, 0]
      },
      {
        instruccion: "Relaciona cada herramienta de desarrollo web con su uso:",
        columnaA: ["Visual Studio Code", "GitHub Pages", "Bootstrap", "npm"],
        columnaB: ["Gestor de paquetes de Node.js", "Hosting gratuito para sitios estáticos", "Editor de código con extensiones", "Framework CSS con componentes responsivos"],
        r: [2, 1, 3, 0]
      },
      {
        instruccion: "Relaciona cada concepto de JavaScript con su descripción:",
        columnaA: ["DOM", "Promise", "fetch()", "async/await", "localStorage"],
        columnaB: ["Almacenamiento persistente en el navegador", "Árbol del HTML manipulable con JS", "Valor disponible ahora o en el futuro", "Sintaxis para código asíncrono legible", "Petición HTTP asíncrona desde el navegador"],
        r: [1, 2, 4, 3, 0]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada código de estado HTTP con su significado oficial:",
        columnaA: ["200 OK", "301 Moved Permanently", "400 Bad Request", "404 Not Found", "500 Internal Error"],
        columnaB: ["Error de sintaxis del cliente", "Redirección permanente de URL", "Petición procesada exitosamente", "Error imprevisto en el servidor", "Recurso no encontrado"],
        r: [2, 1, 0, 4, 3]
      },
      {
        instruccion: "Relaciona cada etiqueta semántica de HTML5 con su área en la página:",
        columnaA: ["<header>", "<nav>", "<main>", "<article>", "<footer>"],
        columnaB: ["Enlaces de navegación", "Pie con autor y copyright", "Encabezado o cabecera", "Contenido central de la página", "Contenido independiente o post"],
        r: [2, 0, 3, 4, 1]
      },
      {
        instruccion: "Relaciona cada unidad de medida en CSS con su referencia:",
        columnaA: ["px", "rem", "%", "vw"],
        columnaB: ["Relativa a la fuente del <html> raíz", "1% del ancho del viewport de pantalla", "Medida absoluta en píxeles", "Proporcional respecto al contenedor padre"],
        r: [2, 0, 3, 1]
      },
      {
        instruccion: "Relaciona cada mecanismo de seguridad web con su función:",
        columnaA: ["HTTPS con TLS", "CORS", "XSS", "JWT (JSON Web Token)"],
        columnaB: ["Token cifrado para autenticación", "Cifrado del canal de transmisión", "Control de peticiones entre dominios cruzados", "Ataque de inyección de scripts en el navegador"],
        r: [1, 2, 3, 0]
      },
      {
        instruccion: "Relaciona cada término de arquitectura web moderna:",
        columnaA: ["JSON", "REST", "SPA (Single Page App)", "SSR (Server Side Rendering)"],
        columnaB: ["Renderizado previo en servidor", "Formato de intercambio clave-valor", "Carga una página y actualiza con JS", "Arquitectura basada en verbos HTTP"],
        r: [1, 3, 2, 0]
      }
    ]
  }
};

export const submoduloIII2: Submodulo = {
  nombre: "III.2 · Desarrolla aplicaciones móviles",
  modulo: "Módulo III",
  semestre: "4°",
  preguntas: {
    respuesta_corta: [
      { p: "Según el glosario, ¿qué es Android?", keywords: ["Linux", "Google", "sistema operativo", "móvil", "Kotlin", "Java", "smartphones"], puntos: 1 },
      { p: "¿Qué es App Inventor según el glosario?", keywords: ["MIT", "visual", "bloques", "Android", "sin código", "arrastrar"], puntos: 1 },
      { p: "¿Cuáles son los tipos de aplicaciones móviles según el glosario?", keywords: ["nativa", "híbrida", "web app", "browser"], puntos: 1 },
      { p: "¿Qué es una API según el glosario?", keywords: ["interfaz", "aplicaciones", "comunicación", "reglas", "programación"], puntos: 1 },
      { p: "¿Qué es Flutter?", keywords: ["Google", "multiplataforma", "Dart", "iOS", "Android", "framework"], puntos: 1 },
      { p: "¿Qué es un Intent en Android?", keywords: ["mensaje", "componente", "actividad", "comunicación", "inicia"], puntos: 1 },
      { p: "¿Qué es Firebase?", keywords: ["Google", "backend", "tiempo real", "autenticación", "base de datos", "servicios"], puntos: 1 },
      { p: "¿Qué es un APK?", keywords: ["Android", "paquete", "instalación", "archivo", "aplicación"], puntos: 1 },
      { p: "¿Cuál es la diferencia entre una app nativa y una híbrida?", keywords: ["nativa", "específico", "lenguaje", "híbrida", "web", "código"], puntos: 1 },
      { p: "¿Qué es Material Design?", keywords: ["Google", "diseño", "componentes", "visuales", "principios", "Android"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Qué lenguajes se usan para desarrollo nativo en Android?", o: ["Swift y Objective-C", "Java y Kotlin", "Python y R", "C y C++"], r: 1 },
      { p: "¿Cuál es el lenguaje principal de iOS según el glosario?", o: ["Java", "Kotlin", "Swift", "C#"], r: 2 },
      { p: "¿Qué es App Inventor según el glosario?", o: ["IDE de Android Studio completo", "Plataforma visual MIT con bloques para apps Android", "Framework iOS", "Lenguaje para apps"], r: 1 },
      { p: "¿Qué es un Activity en Android?", o: ["Tipo de base de datos", "Componente que representa una pantalla con interfaz de usuario", "Tipo de sensor", "Método del ciclo de vida"], r: 1 },
      { p: "¿Qué es un Intent en Android?", o: ["Tipo de layout", "Objeto de mensajería para iniciar componentes o comunicar apps", "Base de datos local", "Tipo de sensor"], r: 1 },
      { p: "¿Qué es SQLite en Android?", o: ["Motor de BD externo", "BD relacional ligera integrada para almacenamiento local", "Tipo de Intent", "Framework de red"], r: 1 },
      { p: "¿Qué es Firebase según el glosario?", o: ["Solo almacenamiento de archivos", "Plataforma de Google con servicios backend para apps móviles y web", "Lenguaje de programación", "IDE de Android"], r: 1 },
      { p: "¿Qué hace el archivo AndroidManifest.xml?", o: ["Archivo de estilos", "Declara componentes, permisos y características esenciales de la app", "Base de datos de la app", "Recursos de imágenes"], r: 1 },
      { p: "¿Qué es Kotlin?", o: ["Lenguaje de Apple", "Lenguaje moderno interoperable con Java, oficial para Android desde 2017", "Framework de React", "Tipo de layout"], r: 1 },
      { p: "¿Qué es Flutter?", o: ["Lenguaje de Apple", "Framework de Google para apps multiplataforma con Dart", "IDE de Android", "Tipo de BD móvil"], r: 1 },
      { p: "¿Qué es el Material Design?", o: ["Tipo de Layout", "Sistema de diseño de Google con componentes visuales para Android y web", "Framework de iOS", "BD de diseño"], r: 1 },
      { p: "¿Qué es un RecyclerView en Android?", o: ["Tipo de Layout estático", "Vista eficiente para mostrar listas grandes reutilizando las vistas", "Tipo de BD", "Tipo de Activity"], r: 1 },
      { p: "¿Qué es Firestore en Firebase?", o: ["Almacenamiento de archivos", "BD NoSQL en tiempo real organizada en colecciones y documentos", "Servicio de autenticación", "Servicio de hosting"], r: 1 },
      { p: "¿Qué significa APK?", o: ["App Programming Kit", "Android Package: archivo de instalación de apps Android", "Application Program Kotlin", "Android Platform Kit"], r: 1 },
      { p: "¿Qué es React Native?", o: ["Versión de React para servidores", "Framework de Facebook para apps móviles con JavaScript que compilan a código nativo", "Tipo de BD", "IDE de Android"], r: 1 },
      { p: "¿Qué es SharedPreferences en Android?", o: ["BD relacional", "Mecanismo para guardar datos primitivos clave-valor de forma persistente", "Tipo de Activity", "Tipo de layout"], r: 1 },
      { p: "¿Qué es un Toast en Android?", o: ["Tipo de notificación push", "Mensaje breve que aparece en pantalla para informar al usuario", "Tipo de layout", "Tipo de diálogo"], r: 1 },
      { p: "¿Qué es Gradle en Android?", o: ["Tipo de layout", "Sistema de automatización y gestión de dependencias en Android", "Base de datos", "Tipo de Fragment"], r: 1 },
      { p: "¿Qué es la gestión de permisos en Android?", o: ["Solo permisos de root", "Mecanismo donde la app solicita al usuario acceso a recursos sensibles", "Tipo de Intent", "Tipo de Service"], r: 1 },
      { p: "¿Qué es Retrofit en Android?", o: ["Tipo de Layout", "Biblioteca para peticiones HTTP a APIs REST de forma sencilla", "Tipo de BD", "Framework de UI"], r: 1 },
    ],
    falso_verdadero: [
      { p: "Android está basado en Linux y fue desarrollado por Google.", r: true },
      { p: "App Inventor requiere escribir código Java para crear aplicaciones Android.", r: false },
      { p: "Kotlin es el lenguaje oficial de Apple para desarrollo iOS.", r: false },
      { p: "Una app nativa para Android puede ejecutarse directamente en iOS sin modificación.", r: false },
      { p: "Firebase ofrece servicios de base de datos en tiempo real, autenticación y hosting.", r: true },
      { p: "El archivo AndroidManifest.xml declara los permisos y componentes de la app.", r: true },
      { p: "SQLite es una base de datos externa que se instala por separado en Android.", r: false },
      { p: "Flutter permite crear aplicaciones para iOS y Android desde un mismo código base.", r: true },
      { p: "Un Intent en Android solo puede usarse para iniciar una nueva Activity.", r: false },
      { p: "El RecyclerView es más eficiente que ListView para mostrar grandes listas de datos.", r: true },
    ],
    cloze: [
      { texto: "Android está basado en ___ y fue desarrollado por ___; usa ___ como lenguaje oficial.", banco: ["Linux", "Google", "Kotlin", "Java"], r: [0, 1, 2] },
      { texto: "App Inventor de ___ permite crear apps con ___ gráficos sin escribir código.", banco: ["MIT", "bloques", "Google", "Java"], r: [0, 1] },
      { texto: "Los tipos de apps móviles son: ___, ___ (tecnologías web en app nativa) y web app.", banco: ["nativa", "híbrida", "progresiva", "multiplataforma"], r: [0, 1] },
      { texto: "___ de Google es un framework que usa el lenguaje ___ para crear apps para iOS y Android.", banco: ["Flutter", "Dart", "React Native", "JavaScript"], r: [0, 1] },
      { texto: "___ es la plataforma de Google con servicios como BD en ___ real y autenticación.", banco: ["Firebase", "tiempo", "Google Cloud", "inmediato"], r: [0, 1] },
      { texto: "El archivo ___ declara los componentes, ___ y características de la app Android.", banco: ["AndroidManifest.xml", "permisos", "build.gradle", "recursos"], r: [0, 1] },
      { texto: "___ es un mensaje breve en pantalla; un ___ es una ventana emergente que solicita una acción.", banco: ["Toast", "Dialog", "Snackbar", "Alert"], r: [0, 1] },
      { texto: "___ gestiona las dependencias y la construcción del proyecto Android.", banco: ["Gradle", "Maven", "npm", "pip"], r: [0] },
      { texto: "___ permite guardar datos primitivos clave-valor y ___ almacena datos estructurados con SQL.", banco: ["SharedPreferences", "SQLite", "Room", "Firestore"], r: [0, 1] },
      { texto: "___ es la biblioteca para hacer peticiones a APIs REST y el ___ es el patrón de arquitectura moderno Android.", banco: ["Retrofit", "MVVM", "MVC", "Volley"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada tecnología de desarrollo móvil con su descripción:",
        columnaA: ["App Inventor", "Flutter", "React Native", "Kotlin", "Swift"],
        columnaB: ["Lenguaje oficial de Apple para iOS", "Framework multiplataforma con JavaScript", "Lenguaje oficial de Android desde 2017", "Framework multiplataforma con Dart", "Plataforma visual con bloques (MIT)"],
        r: [4, 3, 1, 2, 0]
      },
      {
        instruccion: "Relaciona cada componente Android con su función:",
        columnaA: ["Activity", "Intent", "AndroidManifest.xml", "Gradle", "RecyclerView"],
        columnaB: ["Lista eficiente de datos reutilizando vistas", "Objeto de mensajería para iniciar componentes", "Sistema de build y dependencias", "Pantalla con interfaz de usuario", "Declara permisos y componentes de la app"],
        r: [3, 1, 4, 2, 0]
      },
      {
        instruccion: "Relaciona cada servicio de Firebase con lo que hace:",
        columnaA: ["Firestore", "Authentication", "Storage", "Hosting"],
        columnaB: ["Aloja archivos del sitio web estático", "BD NoSQL en tiempo real con colecciones", "Almacena archivos multimedia", "Gestiona usuarios y login de la app"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada tipo de almacenamiento Android con su uso:",
        columnaA: ["SharedPreferences", "SQLite", "Room", "Internal Storage"],
        columnaB: ["Archivos privados de la app", "Abstracción moderna de SQLite con Jetpack", "BD relacional local ligera", "Datos primitivos clave-valor persistentes"],
        r: [3, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada tipo de app móvil con su característica:",
        columnaA: ["Nativa", "Híbrida", "Web App", "Multiplataforma"],
        columnaB: ["Un solo código para iOS y Android (Flutter/React Native)", "HTML/CSS/JS empaquetados en un contenedor nativo", "Específica del SO en su lenguaje nativo", "Accesible desde el navegador móvil"],
        r: [2, 1, 3, 0]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada método del ciclo de vida de una Activity en Android:",
        columnaA: ["onCreate()", "onStart()", "onResume()", "onPause()", "onDestroy()"],
        columnaB: ["Pasa a primer plano lista para interactuar", "Llamada final antes de eliminarse de la RAM", "Inicializa la vista y componentes de la pantalla", "La actividad se vuelve visible en pantalla", "Pierde el foco pero continúa parcialmente visible"],
        r: [2, 3, 0, 4, 1]
      },
      {
        instruccion: "Relaciona cada sensor o componente de hardware en teléfonos móviles:",
        columnaA: ["Módulo GPS", "Acelerómetro", "Giroscopio", "Lector biométrico"],
        columnaB: ["Mide rotación y orientación angular tridimensional", "Obtiene coordenadas de latitud y longitud por satélites", "Verifica huellas o rostro para autenticación", "Detecta aceleración y movimientos lineales en ejes"],
        r: [1, 3, 0, 2]
      },
      {
        instruccion: "Relaciona cada tipo de Layout (contenedor de vistas) en Android:",
        columnaA: ["LinearLayout", "ConstraintLayout", "FrameLayout", "GridLayout"],
        columnaB: ["Distribuye elementos en cuadrícula de filas y columnas", "Posiciona vistas mediante relaciones y restricciones relativas", "Organiza vistas en una sola fila o columna secuencial", "Apila elementos uno encima del otro en capas"],
        r: [2, 1, 3, 0]
      },
      {
        instruccion: "Relaciona cada control de interfaz gráfica (UI) en Android:",
        columnaA: ["TextView", "EditText", "ImageView", "ProgressBar", "FloatingActionButton"],
        columnaB: ["Caja donde el usuario escribe texto", "Botón flotante de acción principal", "Muestra imágenes y gráficos", "Muestra texto estático no editable", "Indica progreso o carga activa"],
        r: [3, 0, 2, 4, 1]
      },
      {
        instruccion: "Relaciona cada mecanismo de ejecución en segundo plano y notificaciones:",
        columnaA: ["Service", "BroadcastReceiver", "Push Notification", "WorkManager"],
        columnaB: ["Mensaje remoto enviado desde el servidor a la barra de estado", "Receptor que atiende avisos del sistema (red, batería)", "Componente sin interfaz para tareas en segundo plano", "Programador de tareas asíncronas persistentes y diferibles"],
        r: [2, 1, 0, 3]
      }
    ]
  }
};

export const submoduloIII3: Submodulo = {
  nombre: "III.3 · Administra y configura plataformas de e-learning",
  modulo: "Módulo III",
  semestre: "4°",
  preguntas: {
    respuesta_corta: [
      { p: "¿Qué es el e-learning según el glosario?", keywords: ["enseñanza", "aprendizaje", "tecnologías", "digitales", "internet", "remota"], puntos: 1 },
      { p: "¿Qué diferencia hay entre un CMS y un LMS según el glosario?", keywords: ["CMS", "contenido", "LMS", "aprendizaje", "Moodle", "WordPress"], puntos: 1 },
      { p: "¿Qué es Moodle?", keywords: ["LMS", "código abierto", "modular", "aprendizaje", "plataforma"], puntos: 1 },
      { p: "¿Cuáles son los roles principales en Moodle?", keywords: ["administrador", "profesor", "estudiante", "gestor", "invitado"], puntos: 1 },
      { p: "¿Qué es SCORM en e-learning?", keywords: ["estándar", "contenido", "interoperable", "LMS"], puntos: 1 },
      { p: "¿Cuál es la diferencia entre una actividad y un recurso en Moodle?", keywords: ["actividad", "interacción", "recurso", "pasivo", "tarea", "PDF"], puntos: 1 },
      { p: "¿Qué es la gamificación en e-learning?", keywords: ["juego", "mecánicas", "puntos", "insignias", "motivar", "aprendizaje"], puntos: 1 },
      { p: "¿Qué es BigBlueButton en Moodle?", keywords: ["videoconferencia", "clases", "tiempo real", "código abierto"], puntos: 1 },
      { p: "¿Qué es la analítica de aprendizaje (Learning Analytics)?", keywords: ["datos", "alumnos", "mejora", "riesgo", "abandono", "análisis"], puntos: 1 },
      { p: "¿Qué es el aula invertida (Flipped Classroom)?", keywords: ["casa", "clase", "práctica", "contenido", "LMS", "presencial"], puntos: 1 },
    ],
    opcion_multiple: [
      { p: "¿Cuál es el LMS de código abierto más usado en instituciones educativas?", o: ["Zoom", "Moodle", "Google Meet", "Microsoft Teams"], r: 1 },
      { p: "¿Cuál es la diferencia entre sincrónico y asincrónico en e-learning?", o: ["No hay diferencia", "Sincrónico es en tiempo real; asincrónico en diferente tiempo", "Asincrónico es solo video", "Sincrónico es solo texto"], r: 1 },
      { p: "¿Qué es un recurso en Moodle vs una actividad?", o: ["Son lo mismo", "Recurso: contenido pasivo (PDF, URL); Actividad: interacción (tarea, quiz)", "Actividad es solo videos", "Recurso requiere entrega"], r: 1 },
      { p: "¿Qué hace un badge (insignia) en Moodle?", o: ["Calificación numérica automática", "Reconocimiento visual otorgado al completar logros en el curso", "Tipo de recurso estático", "Tipo de actividad de escritura"], r: 1 },
      { p: "¿Qué es Google Classroom?", o: ["Sistema de gestión de archivos", "Plataforma gratuita de Google para gestionar clases y tareas", "Tipo de correo institucional", "Tipo de videoconferencia"], r: 1 },
      { p: "¿Qué es un foro en Moodle?", o: ["Chat en tiempo real", "Actividad de comunicación asíncrona donde se publican y responden mensajes", "Tipo de tarea individual", "Tipo de cuestionario"], r: 1 },
      { p: "¿Qué es SCORM?", o: ["Lenguaje de programación", "Estándar para crear contenido e-learning interoperable entre distintos LMS", "Tipo de actividad Moodle", "Tipo de cuestionario avanzado"], r: 1 },
      { p: "¿Qué hace la clave de matriculación en Moodle?", o: ["Contraseña del administrador", "Contraseña que los alumnos ingresan para inscribirse a un curso", "Tipo de actividad", "Tipo de calificación"], r: 1 },
      { p: "¿Qué es BigBlueButton en Moodle?", o: ["Plugin de gamificación", "Sistema de videoconferencia de código abierto integrable para clases virtuales", "Tipo de cuestionario", "Tipo de SCORM"], r: 1 },
      { p: "¿Qué son los OVA (Objetos Virtuales de Aprendizaje)?", o: ["Solo videos educativos", "Recursos digitales reutilizables para apoyar el aprendizaje de un tema", "Tipo de LMS", "Tipo de gamificación"], r: 1 },
      { p: "¿Qué hace la condición de acceso en Moodle?", o: ["Bloquea todo el curso", "Restringe acceso a actividades según condiciones (calificación, fecha, completitud)", "Tipo de foro", "Tipo de insignia"], r: 1 },
      { p: "¿Qué es el modelo de aula invertida (Flipped Classroom)?", o: ["Invertir las calificaciones", "Alumnos estudian en casa (LMS) y usan el tiempo en clase para práctica", "Tipo de foro", "Tipo de evaluación"], r: 1 },
      { p: "¿Qué es la evaluación formativa en e-learning?", o: ["Evaluación al final del curso", "Evaluación continua durante el proceso para retroalimentar y mejorar", "Tipo de cuestionario final", "Tipo de badge"], r: 1 },
      { p: "¿Qué es el plugin H5P en Moodle?", o: ["Gestor de archivos", "Crea contenido interactivo: videos, presentaciones, flashcards", "Tipo de cuestionario", "Tipo de foro"], r: 1 },
      { p: "¿Qué es el Gradebook (libro de calificaciones) en Moodle?", o: ["Lista de libros del curso", "Sistema que centraliza y muestra calificaciones de todas las actividades", "Tipo de actividad", "Tipo de recurso"], r: 1 },
      { p: "¿Qué es la tarea (Assignment) en Moodle?", o: ["Cuestionario automático", "Actividad donde alumnos entregan archivos y el profesor califica con retroalimentación", "Tipo de foro", "Recurso estático"], r: 1 },
      { p: "¿Cuál es el formato de respaldo de Moodle?", o: [".zip", ".mbz", ".scorm", ".xml"], r: 1 },
      { p: "¿Qué es la gamificación en e-learning?", o: ["Crear videojuegos educativos", "Aplicar mecánicas de juego (puntos, insignias, niveles) para motivar el aprendizaje", "Tipo de actividad específica", "Tipo de foro avanzado"], r: 1 },
      { p: "¿Qué es xAPI (Tin Can)?", o: ["Tipo de cuestionario Moodle", "Estándar moderno que permite rastrear experiencias de aprendizaje fuera del LMS", "Versión antigua de SCORM", "Tipo de LMS"], r: 1 },
      { p: "¿Qué es TAC según el glosario?", o: ["Tecnologías de Acceso Común", "Tecnologías del Aprendizaje y el Conocimiento", "Técnicas de Asistencia Computacional", "Tecnologías de Alta Capacidad"], r: 1 },
    ],
    falso_verdadero: [
      { p: "Moodle es un LMS de código abierto muy usado en instituciones educativas.", r: true },
      { p: "En e-learning sincrónico los alumnos y docentes no coinciden en tiempo real.", r: false },
      { p: "Un recurso en Moodle requiere interacción activa del alumno.", r: false },
      { p: "SCORM permite que el contenido e-learning sea interoperable entre distintos LMS.", r: true },
      { p: "Google Classroom es más potente y personalizable que Moodle.", r: false },
      { p: "La gamificación aplica mecánicas de juego para motivar el aprendizaje.", r: true },
      { p: "BigBlueButton es una herramienta de videoconferencia integrable en Moodle.", r: true },
      { p: "Los archivos de respaldo de Moodle tienen extensión .mbz.", r: true },
      { p: "El aula invertida usa el LMS para entregar contenido en casa y practica en clase.", r: true },
      { p: "La evaluación sumativa es la que se hace de forma continua durante el proceso.", r: false },
    ],
    cloze: [
      { texto: "___ es un LMS de ___ abierto que permite gestionar cursos, actividades y calificaciones en línea.", banco: ["Moodle", "código", "Google Classroom", "libre"], r: [0, 1] },
      { texto: "En e-learning ___ significa en tiempo real (videoclase) y ___ en diferente tiempo (foros, tareas).", banco: ["sincrónico", "asincrónico", "presencial", "mixto"], r: [0, 1] },
      { texto: "En Moodle, un ___ es contenido pasivo como un PDF, y una ___ requiere participación como un cuestionario.", banco: ["recurso", "actividad", "tarea", "foro"], r: [0, 1] },
      { texto: "___ son mecánicas de juego como puntos e ___ aplicadas al aprendizaje para motivar al alumno.", banco: ["La gamificación", "insignias", "los videos", "niveles"], r: [0, 1] },
      { texto: "___ de código abierto es la herramienta de ___ integrable en Moodle para clases en vivo.", banco: ["BigBlueButton", "videoconferencia", "Zoom", "streaming"], r: [0, 1] },
      { texto: "Las TAC son ___ del Aprendizaje y el Conocimiento; las TIC son ___ de la Información y Comunicación.", banco: ["Tecnologías", "Tecnologías", "Técnicas", "Herramientas"], r: [0, 1] },
      { texto: "___ permite rastrear experiencias de aprendizaje fuera del LMS, mientras que ___ es el estándar clásico.", banco: ["xAPI (Tin Can)", "SCORM", "H5P", "OVA"], r: [0, 1] },
      { texto: "El modelo de ___ usa el LMS para estudiar en casa y el tiempo en clase para ___.", banco: ["aula invertida", "práctica", "MOOC", "evaluación"], r: [0, 1] },
      { texto: "Los archivos de respaldo de Moodle tienen extensión ___ y se usan para ___ o reutilizar cursos.", banco: [".mbz", "restaurar", ".zip", ".backup"], r: [0, 1] },
      { texto: "El ___ de calificaciones en Moodle centraliza las notas de todas las ___ del curso.", banco: ["Gradebook", "actividades", "Panel", "evaluaciones"], r: [0, 1] },
    ],
    relacion: [
      {
        instruccion: "Relaciona cada rol de Moodle con su nivel de acceso:",
        columnaA: ["Administrador", "Profesor", "Estudiante", "Invitado"],
        columnaB: ["Solo puede ver sin participar", "Gestiona todo el sistema y plataforma", "Puede inscribirse y entregar actividades", "Crea cursos y califica alumnos"],
        r: [1, 3, 2, 0]
      },
      {
        instruccion: "Relaciona cada tipo de evaluación con su momento:",
        columnaA: ["Diagnóstica", "Formativa", "Sumativa"],
        columnaB: ["Al final de una unidad para medir logros", "Al inicio para detectar conocimientos previos", "Durante el proceso para retroalimentar"],
        r: [1, 2, 0]
      },
      {
        instruccion: "Relaciona cada estándar/herramienta e-learning con su descripción:",
        columnaA: ["SCORM", "xAPI (Tin Can)", "H5P", "BigBlueButton", "OVA"],
        columnaB: ["Recurso digital reutilizable para un tema", "Videoconferencia de código abierto para LMS", "Crea contenido interactivo (videos, flashcards)", "Estándar clásico para contenido interoperable en LMS", "Rastrea aprendizaje dentro y fuera del LMS"],
        r: [3, 4, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada concepto de tecnología educativa con su sigla:",
        columnaA: ["TIC", "TAC", "TEP", "LMS", "CMS"],
        columnaB: ["Sistema para crear y gestionar contenido web", "Tecnologías del Empoderamiento y Participación", "Tecnologías de la Información y Comunicación", "Sistema de gestión del aprendizaje", "Tecnologías del Aprendizaje y Conocimiento"],
        r: [2, 4, 1, 3, 0]
      },
      {
        instruccion: "Relaciona cada actividad/recurso de Moodle con su tipo:",
        columnaA: ["Tarea (Assignment)", "Foro", "Cuestionario (Quiz)", "PDF / URL", "Badge (Insignia)"],
        columnaB: ["Recurso estático sin interacción", "Reconocimiento por logro alcanzado", "Evaluación con calificación automática", "Comunicación asíncrona en hilos", "Entrega de archivos con retroalimentación docente"],
        r: [4, 3, 2, 0, 1]
      },
      // 5 nuevas preguntas para completar 10
      {
        instruccion: "Relaciona cada tipo de pregunta en cuestionarios de Moodle:",
        columnaA: ["Opción múltiple", "Falso / Verdadero", "Ensayo", "Emparejamiento"],
        columnaB: ["Respuesta abierta con calificación manual del docente", "Elección binaria entre dos alternativas", "Asociación de pares entre conceptos y definiciones", "Elección de una o varias opciones correctas con distractores"],
        r: [3, 1, 0, 2]
      },
      {
        instruccion: "Relaciona cada modalidad de formación digital:",
        columnaA: ["B-learning (Semipresencial)", "M-learning (Móvil)", "E-learning (En línea)", "Microlearning"],
        columnaB: ["Píldoras breves de contenido de rápida asimilación", "Formación 100% a distancia mediada por internet", "Acceso formativo desde teléfonos inteligentes y tabletas", "Combinación equilibrada de clases presenciales y virtuales"],
        r: [3, 2, 1, 0]
      },
      {
        instruccion: "Relaciona cada elemento de gamificación educativa:",
        columnaA: ["Puntos de experiencia", "Tabla de líderes", "Barra de avance", "Certificado digital"],
        columnaB: ["Refleja el porcentaje cumplido de las metas formativas", "Acredita formalmente la culminación exitosa del curso", "Puntaje que premia el esfuerzo y las entregas a tiempo", "Muestra posiciones de honor fomentando superación"],
        r: [2, 3, 0, 1]
      },
      {
        instruccion: "Relaciona cada métrica de Analítica del Aprendizaje (Learning Analytics):",
        columnaA: ["Tasa de finalización", "Tiempo de permanencia", "Alerta de riesgo", "Tasa de deserción"],
        columnaB: ["Porcentaje de inscritos que aprueban satisfactoriamente", "Notificación temprana de estudiantes con bajas entregas", "Porcentaje de alumnos que abandonan la plataforma", "Duración media de conexión activa en la plataforma"],
        r: [0, 3, 1, 2]
      },
      {
        instruccion: "Relaciona cada plataforma LMS con su característica distintiva:",
        columnaA: ["Moodle", "Canvas LMS", "Google Classroom", "Chamilo"],
        columnaB: ["Herramienta ágil integrada al ecosistema Google", "LMS de código abierto líder con enorme modularidad", "LMS de código abierto orientado a simplicidad visual", "LMS en la nube con interfaz moderna muy adoptado en universidades"],
        r: [1, 3, 0, 2]
      }
    ]
  }
};
