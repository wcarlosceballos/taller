// Base de datos de contenidos del taller basada en la infografía
const infoCurso = {
    inicio: `
    
    <div class="accordion">
    <!-- Bienvenida -->
         <img src="img/0.png" alt="Introducción a la informática" 
            style="width:100%;border-radius:12px;
            margin-top:15px;margin-bottom:20px;"> 

    <button class="accordion-btn">
        📌 Bienvenida al Curso
    </button>
    <div class="accordion-content">
        <p>
            Bienvenidos al Taller de Informática Básica con Software Libre.
            Este curso busca desarrollar competencias digitales básicas
            que permitan utilizar el computador de manera autónoma,
            segura y eficiente en la vida cotidiana.
        </p>
    </div>

    <!-- Perfil Docente -->
    <button class="accordion-btn">
        👨‍🏫 Perfil del Docente
    </button>

    <div class="accordion-content">

        <div class="perfil-docente">

            <img
                src="img/docente.png"
                alt="Fotografía del docente"
                class="foto-docente">

            <div class="datos-docente">

                <h3>Maria Villadiego Diaz</h3>

                <p>
                    Educadora.
                </p>

                <ul>
                    <li>Ingeniero de Sistemas</li>
                    <li>Especialista en Gestion de Proyectos</li>
                    <li>Docente de aula con mas de 15 años de experiencia</li>
                    <li>Instructor SENATIC</li>
                    
                </ul>

                <p>
                    Aspirante a Magister en Educación, Universidad Pontificia Bolivariana.
                </p>

            </div>

        </div>

    </div>

    <!-- Video -->
    <button class="accordion-btn">
        🎥 Video de Presentación
    </button>

    <div class="accordion-content">

        <video controls width="100%">
            <source src="/videos/Taller_de_Informática.mp4" type="video/mp4">
            Tu navegador no soporta videos HTML5.
        </video>

    </div>

    <!-- Metodología -->
    <button class="accordion-btn">
        📚 Metodología
    </button>

    <div class="accordion-content">

        <ul>
            <li>Aprendizaje participativo.</li>
            <li>Prácticas guiadas.</li>
            <li>Uso de software libre.</li>
            <li>Aplicación a situaciones reales.</li>
            <li>Evaluación continua.</li>
        </ul>

    </div>

    <!-- Objetivos -->
    <button class="accordion-btn">
        🎯 Objetivos del Curso
    </button>

    <div class="accordion-content">

        <p>
            Capacitar a padres de familia en el uso adecuado
            del computador y herramientas libres para fortalecer
            sus competencias digitales.
        </p>

    </div>

    <!-- Competencias -->
    <button class="accordion-btn">
        🏆 Competencias a Desarrollar
    </button>

    <div class="accordion-content">

        <ul>
            <li>Manejo básico del computador.</li>
            <li>Creación de documentos.</li>
            <li>Uso de presentaciones.</li>
            <li>Manejo de hojas de cálculo.</li>
            <li>Navegación segura en Internet.</li>
        </ul>

    </div>

    <!-- Contacto -->
    <button class="accordion-btn">
        📞 Información de Contacto
    </button>

    <div class="accordion-content">

        <p><strong>Correo:</strong> mayos10@gmail.com</p>
        <p><strong>WhatsApp:</strong> 3103280483</p>

    </div>

</div>
    `,
    u1: `
        <h2>Unidad 1: Introducción a la Informática</h2>
        <img src="img/1.png" 
            alt="Introducción a la informática" 
            style="width:100%;border-radius:12px;
            margin-top:15px;margin-bottom:20px;">
        <span class="badge"
        style="background-color: var(--u1-color);">
        Duración: 8 Horas | Evaluación: 10%
        </span>

        <p style="margin-top:15px;">
        <strong>Software Libre:</strong> Linux (Sistema Operativo)
        </p>

        <div class="accordion">
            <button class="accordion-btn">
              📋 Información General
         </button>

    <div class="accordion-content">

        <p><strong>Unidad:</strong> Introducción a la Informática</p>
        <p><strong>Duración:</strong> 8 Horas</p>
        <p><strong>Modalidad:</strong> Teórico - Práctica</p>
        <p><strong>Herramienta:</strong> Linux</p>

    </div>

    <button class="accordion-btn">
        🎯 Competencia
    </button>

    <div class="accordion-content">

        <p>
        Reconocer los componentes físicos y lógicos
        de un sistema informático, identificando
        su funcionamiento básico mediante el uso
        de un sistema operativo libre.
        </p>

    </div>

    <button class="accordion-btn">
        🏆 Resultados de Aprendizaje
    </button>

    <div class="accordion-content">

        <ul>
            <li>Identificar componentes del hardware.</li>
            <li>Diferenciar hardware y software.</li>
            <li>Reconocer tipos de software.</li>
            <li>Comprender el software libre.</li>
            <li>Utilizar funciones básicas de Linux.</li>
            <li>Manipular ventanas y elementos del escritorio.</li>
        </ul>

    </div>

    <button class="accordion-btn">
        📚 Parte Teórica
    </button>

    <div class="accordion-content">
        <div class="tabs-container" id="tabs-u1-teoria">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="t1-u1-teoria">🖥️ ¿Qué es un Computador?</button>
                <button class="tab-btn" data-tab="t2-u1-teoria">⚙️ Hardware</button>
                <button class="tab-btn" data-tab="t3-u1-teoria">💻 Software</button>
                <button class="tab-btn" data-tab="t4-u1-teoria">🐧 Sistema Operativo Linux</button>
                <button class="tab-btn" data-tab="t5-u1-teoria">🗂️ El Escritorio Linux</button>
                <button class="tab-btn" data-tab="t6-u1-teoria">🪟 Manejo de Ventanas</button>
            </div>
            <div class="tabs-content">
                <div class="tab-pane active" id="t1-u1-teoria">
                    <img src="img/computador.png" class="imagen-tema">
                    <h3>Observa</h3>
                    <p>¿Dónde ha utilizado usted un computador?</p>
                    <ul>
                        <li>🏦 Banco</li>
                        <li>🏥 Hospital</li>
                        <li>🏫 Escuela</li>
                        <li>🏠 Casa</li>
                    </ul>
                    <h3>Aprende</h3>
                    <p>Un computador es una máquina electrónica que recibe datos, los procesa y genera información útil.</p>
                    <div class="concepto-box">ENTRADA → PROCESO → SALIDA</div>
                </div>
                <div class="tab-pane" id="t2-u1-teoria">
                    <img src="img/hardware.png" class="imagen-tema">
                    <h3>¿Qué es?</h3>
                    <p>El hardware corresponde a todas las partes físicas del computador.</p>
                    <div class="grid-mini">
                        <div class="card-mini">⌨️<br>Teclado</div>
                        <div class="card-mini">🖱️<br>Mouse</div>
                        <div class="card-mini">🖥️<br>Monitor</div>
                        <div class="card-mini">💾<br>USB</div>
                    </div>
                    <h3>Recuerda</h3>
                    <p>El hardware es el cuerpo del computador.</p>
                </div>
                <div class="tab-pane" id="t3-u1-teoria">
                    <img src="img/software.png" class="imagen-tema">
                    <h3>¿Qué es?</h3>
                    <p>El software son los programas que permiten que el computador funcione.</p>
                    <div class="grid-mini">
                        <div class="card-mini">🐧 Linux</div>
                        <div class="card-mini">📝 Writer</div>
                        <div class="card-mini">📊 Calc</div>
                        <div class="card-mini">🌐 Firefox</div>
                    </div>
                    <p>El software es como el cerebro del computador.</p>
                </div>
                <div class="tab-pane" id="t4-u1-teoria">
                    <img src="img/linux.png" class="imagen-tema">
                    <h3>¿Qué hace Linux?</h3>
                    <ul>
                        <li>Controla el hardware.</li>
                        <li>Ejecuta programas.</li>
                        <li>Administra archivos.</li>
                        <li>Gestiona usuarios.</li>
                    </ul>
                    <div class="concepto-box">
                        🔒 Seguro<br>
                        💰 Gratuito<br>
                        ⚡ Rápido<br>
                        🌎 Libre
                    </div>
                </div>
                <div class="tab-pane" id="t5-u1-teoria">
                    <img src="img/escritorio-linux.png" class="imagen-tema">
                    <h3>Elementos principales</h3>
                    <ul>
                        <li>📁 Carpetas</li>
                        <li>🗑️ Papelera</li>
                        <li>📋 Menú de aplicaciones</li>
                        <li>📌 Barra de tareas</li>
                    </ul>
                </div>
                <div class="tab-pane" id="t6-u1-teoria">
                    <img src="img/ventanas.png" class="imagen-tema">
                    <h3>Botones de una ventana</h3>
                    <div class="concepto-box">
                        ➖ Minimizar<br>
                        ⬜ Maximizar<br>
                        ❌ Cerrar
                    </div>
                    <p>Las ventanas permiten trabajar con programas y documentos.</p>
                </div>
            </div>
        </div>
    </div>

    <button class="accordion-btn">
        💻 Parte Práctica
    </button>

    <div class="accordion-content">
        <div class="tabs-container" id="tabs-u1-practica">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="p1-u1">🖥️ Práctica 1: Encendido y Apagado</button>
                <button class="tab-btn" data-tab="p2-u1">🔍 Práctica 2: Identificar Componentes</button>
                <button class="tab-btn" data-tab="p3-u1">🎨 Práctica 3: Explorar el Escritorio</button>
                <button class="tab-btn" data-tab="p4-u1">🪟 Práctica 4: Manejo de Ventanas</button>
            </div>
            <div class="tabs-content">
                <div class="tab-pane active" id="p1-u1">
                    <h3>🖥️ Práctica 1: Encendido y Apagado Correcto del Equipo</h3>
                    <p>Aprenderemos la forma adecuada de encender y apagar el computador para evitar daños en el sistema operativo y los componentes.</p>
                    <h4>Instrucciones:</h4>
                    <ol>
                        <li>Localiza el botón de encendido en el CPU (generalmente un círculo con una línea vertical).</li>
                        <li>Presiona el botón una vez y espera a que el sistema operativo cargue completamente.</li>
                        <li>Para apagar: Ve al menú de inicio → Apagar → Confirmar.</li>
                        <li><strong>Importante:</strong> Nunca apagues presionando el botón de encendido directamente a menos que el sistema esté congelado.</li>
                    </ol>
                    <div class="concepto-box">
                        💡 <strong>Tip:</strong> Espera siempre a que el sistema operativo termine de cargar antes de comenzar a trabajar.
                    </div>
                </div>
                <div class="tab-pane" id="p2-u1">
                    <h3>🔍 Práctica 2: Identificar Componentes del Computador</h3>
                    <p>Reconoceremos cada parte física del computador y su función principal.</p>
                    <h4>Instrucciones:</h4>
                    <ol>
                        <li>Identifica el monitor, teclado, mouse y CPU en tu equipo.</li>
                        <li>Localiza los puertos USB y prueba conectando un dispositivo (memoria USB).</li>
                        <li>Observa los cables de conexión: poder, VGA/HDMI, USB del teclado y mouse.</li>
                        <li>Dibuja o escribe en tu cuaderno los componentes identificados.</li>
                    </ol>
                    <div class="grid-mini">
                        <div class="card-mini">⌨️ Teclado<br><small>Entrada de datos</small></div>
                        <div class="card-mini">🖱️ Mouse<br><small>Navegación</small></div>
                        <div class="card-mini">🖥️ Monitor<br><small>Visualización</small></div>
                        <div class="card-mini">💾 CPU<br><small>Procesamiento</small></div>
                    </div>
                </div>
                <div class="tab-pane" id="p3-u1">
                    <h3>🎨 Práctica 3: Explorar el Escritorio Linux y Personalizarlo</h3>
                    <p>Conoceremos los elementos del escritorio y aprenderemos a personalizarlo.</p>
                    <h4>Instrucciones:</h4>
                    <ol>
                        <li>Observa los iconos del escritorio (Papelera, Carpeta Personal).</li>
                        <li>Haz clic derecho en un área vacía del escritorio.</li>
                        <li>Selecciona "Cambiar fondo de escritorio" y elige una imagen.</li>
                        <li>Explora el menú de aplicaciones (esquina inferior izquierda).</li>
                        <li>Identifica la barra de tareas y los iconos de notificación.</li>
                    </ol>
                    <div class="concepto-box">
                        🎯 <strong>Objetivo:</strong> Familiarizarse con el entorno gráfico de Linux.
                    </div>
                </div>
                <div class="tab-pane" id="p4-u1">
                    <h3>🪟 Práctica 4: Abrir, Mover y Organizar Ventanas</h3>
                    <p>Aprenderemos a manejar las ventanas para trabajar con múltiples programas simultáneamente.</p>
                    <h4>Instrucciones:</h4>
                    <ol>
                        <li>Abre dos o tres programas diferentes (Firefox, Calculadora, Editor de texto).</li>
                        <li>Practica minimizar, maximizar y restaurar ventanas usando los botones: ➖ ⬜ ❌</li>
                        <li>Mueve una ventana arrastrándola desde la barra de título.</li>
                        <li>Cambia entre ventanas usando <strong>Alt + Tab</strong>.</li>
                        <li>Organiza las ventanas en el escritorio (mitad izquierda y derecha).</li>
                    </ol>
                    <div class="concepto-box">
                        ⌨️ <strong>Atajos útiles:</strong> Alt+Tab (cambiar ventana) | Ctrl+W (cerrar ventana activa)
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button class="accordion-btn">
        📝 Evaluación Interactiva
    </button>
    <div class="accordion-content" id="evaluacion-u1">
        <!-- La evaluación se generará dinámicamente -->
    </div>

    <button class="accordion-btn">
        🏅 Producto Final
    </button>

    <div class="accordion-content">

        <p>
        Elaborar una ficha donde se identifiquen:
        </p>

        <ul>
            <li>Componentes físicos del computador.</li>
            <li>Funciones de cada componente.</li>
            <li>Sistema operativo instalado.</li>
            <li>Tres programas utilizados.</li>
        </ul>

    </div>

</div>
`,
u2: `
    <h2>Unidad 2: Procesador de Palabras</h2>
    <img src="img/2.png" 
         alt="Logo y entorno de LibreOffice Writer" 
         style="width:100%; border-radius:12px; margin-top:15px; margin-bottom:20px;">
    <span class="badge" style="background-color: var(--u2-color);">
        📝 Duración: 8 Horas | Evaluación: 25%
    </span>
    <p style="margin-top:15px;">
        <strong>Software Libre:</strong> LibreOffice Writer (Procesador de palabras)
    </p>

    <div class="accordion">

        <!-- 1. Información General -->
        <button class="accordion-btn">
            📋 Información General de la Unidad
        </button>
        <div class="accordion-content">
            <p>En esta unidad aprenderemos a crear y editar documentos de texto profesionales, como cartas, currículos, tareas escolares y oficios, utilizando una herramienta gratuita y potente: LibreOffice Writer.</p>
            <p><strong>Objetivo:</strong> Elaborar documentos de texto con formato, tablas e imágenes para mejorar la comunicación escrita en el ámbito personal y educativo.</p>
        </div>

        <!-- 2. Competencia -->
        <button class="accordion-btn">
            🎯 Competencia
        </button>
        <div class="accordion-content">
            <p>Crear y editar documentos de texto utilizando las funciones básicas del procesador de palabras LibreOffice Writer, aplicando formato, organización y elementos visuales para producir comunicaciones efectivas.</p>
        </div>

        <!-- 3. Resultados de Aprendizaje -->
        <button class="accordion-btn">
            🏆 Resultados de Aprendizaje
        </button>
        <div class="accordion-content">
            <ul>
                <li>Identificar la interfaz de LibreOffice Writer y sus partes.</li>
                <li>Aplicar formato de fuente (tamaño, color, estilo) y párrafo (alineación, interlineado).</li>
                <li>Insertar y editar tablas para organizar información.</li>
                <li>Insertar y ajustar imágenes dentro de un documento.</li>
                <li>Guardar documentos en diferentes formatos (.odt, .pdf, .docx).</li>
            </ul>
        </div>

        <!-- 4. Parte Teórica (con pestañas) -->
        <button class="accordion-btn">
            📚 Parte Teórica: Fundamentos de Writer
        </button>
        <div class="accordion-content">
            <div class="tabs-container" id="tabs-u2-teoria">
                <div class="tabs-header">
                    <button class="tab-btn active" data-tab="t1-u2-teoria">🖥️ ¿Qué es LibreOffice Writer?</button>
                    <button class="tab-btn" data-tab="t2-u2-teoria">🧭 Interfaz de Writer</button>
                    <button class="tab-btn" data-tab="t3-u2-teoria">✨ Formato de Texto y Párrafo</button>
                    <button class="tab-btn" data-tab="t4-u2-teoria">📊 Insertar y Editar Tablas</button>
                    <button class="tab-btn" data-tab="t5-u2-teoria">🖼️ Insertar y Ajustar Imágenes</button>
                </div>
                <div class="tabs-content">
                    <div class="tab-pane active" id="t1-u2-teoria">
                        <img src="img/writer-logo.png" class="imagen-tema" alt="Logo de LibreOffice Writer">
                        <p>Writer es el procesador de palabras incluido en la suite ofimática LibreOffice. Es <strong>libre y gratuito</strong>, y te permite crear desde una simple nota hasta libros completos.</p>
                        <div class="concepto-box">
                            ✍️ Redactar cartas<br>
                            📄 Hacer tareas<br>
                            📑 Elaborar currículos<br>
                            🖨️ Imprimir documentos
                        </div>
                    </div>
                    <div class="tab-pane" id="t2-u2-teoria">
                        <img src="img/interfaz-writer.png" class="imagen-tema" alt="Interfaz de LibreOffice Writer">
                        <ul>
                            <li><strong>Barra de título:</strong> Muestra el nombre del documento.</li>
                            <li><strong>Menús:</strong> Archivo, Editar, Ver, Insertar, Formato, etc.</li>
                            <li><strong>Barras de herramientas:</strong> Iconos para acciones rápidas (guardar, imprimir, negrita, etc.).</li>
                            <li><strong>Regla:</strong> Para ajustar márgenes y tabulaciones.</li>
                            <li><strong>Área de trabajo:</strong> Donde escribes el contenido.</li>
                            <li><strong>Barra de estado:</strong> Muestra el número de página, idioma, etc.</li>
                        </ul>
                    </div>
                    <div class="tab-pane" id="t3-u2-teoria">
                        <img src="img/formato-texto.png" class="imagen-tema" alt="Ejemplo de formato de texto">
                        <p><strong>Formato de fuente (caracteres):</strong></p>
                        <ul>
                            <li><strong>Negrita</strong> (Ctrl+N)</li>
                            <li><em>Cursiva</em> (Ctrl+K)</li>
                            <li><u>Subrayado</u> (Ctrl+U)</li>
                            <li><span style="font-size: 1.2rem;">Tamaño</span> y <span style="color: blue;">color</span> de letra.</li>
                        </ul>
                        <p><strong>Formato de párrafo:</strong></p>
                        <ul>
                            <li>Alineación: Izquierda, Centro, Derecha, Justificar.</li>
                            <li>Interlineado: Espacio entre líneas (sencillo, 1.5, doble).</li>
                            <li>Sangría: Espacio antes de la primera línea.</li>
                        </ul>
                        <div class="concepto-box">
                            💡 <strong>Tip:</strong> Selecciona el texto y luego aplica el formato.
                        </div>
                    </div>
                    <div class="tab-pane" id="t4-u2-teoria">
                        <img src="img/tablas-writer.png" class="imagen-tema" alt="Ejemplo de tabla en Writer">
                        <p>Las tablas sirven para organizar información en filas y columnas (ej. horarios, facturas, listados).</p>
                        <p><strong>¿Cómo insertar una tabla?</strong></p>
                        <ol>
                            <li>Menú <strong>Tabla → Insertar → Tabla</strong>.</li>
                            <li>Elegir número de columnas y filas.</li>
                            <li>Hacer clic en "Aceptar".</li>
                        </ol>
                        <p><strong>Editar tabla:</strong> Puedes añadir bordes, colores de fondo, combinar celdas, etc., desde el menú contextual (clic derecho).</p>
                    </div>
                    <div class="tab-pane" id="t5-u2-teoria">
                        <img src="img/imagenes-writer.png" class="imagen-tema" alt="Insertar imágenes en Writer">
                        <p><strong>Pasos para insertar una imagen:</strong></p>
                        <ol>
                            <li>Ubicar el cursor donde va la imagen.</li>
                            <li>Menú <strong>Insertar → Imagen → Desde archivo</strong>.</li>
                            <li>Buscar la imagen en tu computador y seleccionarla.</li>
                        </ol>
                        <p><strong>Ajustar imagen:</strong> Al hacer clic en la imagen aparecen manejadores para cambiar su tamaño. También puedes hacer clic derecho → <strong>Anclar</strong> (como carácter, al párrafo o a la página) para controlar cómo se mueve con el texto.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 5. Parte Práctica (con pestañas) -->
        <button class="accordion-btn">
            💻 Parte Práctica: ¡Manos a la obra!
        </button>
        <div class="accordion-content">
            <div class="tabs-container" id="tabs-u2-practica">
                <div class="tabs-header">
                    <button class="tab-btn active" data-tab="p1-u2">📝 Ejercicio 1: Carta de presentación</button>
                    <button class="tab-btn" data-tab="p2-u2">📊 Ejercicio 2: Horario de tareas</button>
                    <button class="tab-btn" data-tab="p3-u2">🖼️ Ejercicio 3: Documento con imagen</button>
                </div>
                <div class="tabs-content">
                    <div class="tab-pane active" id="p1-u2">
                        <h3>📝 Ejercicio 1: Carta de presentación</h3>
                        <p>Crea un documento nuevo y escribe una carta de presentación personal (para un trabajo o para la escuela).</p>
                        <h4>Requisitos:</h4>
                        <ul>
                            <li>Aplica <strong>negritas</strong> en el nombre.</li>
                            <li>Usa <em>cursiva</em> en la fecha.</li>
                            <li>Justifica el texto del cuerpo de la carta.</li>
                            <li>Agrega un saludo y una despedida formales.</li>
                        </ul>
                        <div class="concepto-box">
                            💡 <strong>Ejemplo de estructura:</strong> Fecha → Destinatario → Saludo → Cuerpo → Despedida → Firma
                        </div>
                    </div>
                    <div class="tab-pane" id="p2-u2">
                        <h3>📊 Ejercicio 2: Horario de tareas semanal</h3>
                        <p>Inserta una tabla para organizar tus actividades diarias.</p>
                        <h4>Requisitos:</h4>
                        <ul>
                            <li>Tabla de <strong>6 columnas x 5 filas</strong>.</li>
                            <li>Primera fila: días de la semana (Lunes a Viernes).</li>
                            <li>Primera columna: materias o actividades.</li>
                            <li>Aplica un <strong>color de fondo</strong> a la fila de los días.</li>
                            <li>Agrega bordes a toda la tabla.</li>
                        </ul>
                        <div class="concepto-box">
                            📅 <strong>Tip:</strong> Puedes combinar celdas si una actividad ocupa varias horas.
                        </div>
                    </div>
                    <div class="tab-pane" id="p3-u2">
                        <h3>🖼️ Ejercicio 3: Documento con imagen</h3>
                        <p>Escribe un texto descriptivo sobre tu familia o tu barrio.</p>
                        <h4>Requisitos:</h4>
                        <ul>
                            <li>Texto de mínimo 5 líneas.</li>
                            <li>Inserta una imagen relacionada (puede ser un dibujo o una foto).</li>
                            <li>Ajusta la imagen para que quede centrada.</li>
                            <li>La imagen debe tener un tamaño adecuado (no más del 50% del ancho).</li>
                            <li>Guarda el documento en formato <strong>.odt</strong> y también como <strong>.pdf</strong>.</li>
                        </ul>
                        <div class="concepto-box">
                            ✅ <strong>Recuerda:</strong> Archivo → Guardar como → Elige el formato deseado.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 6. Evaluación Interactiva -->
        <button class="accordion-btn">
            📝 Evaluación Interactiva
        </button>
        <div class="accordion-content" id="evaluacion-u2">
            <!-- La evaluación se generará dinámicamente -->
        </div>

        <!-- 7. Producto Final -->
        <button class="accordion-btn">
            🏅 Producto Final: Mi Recetario Familiar
        </button>
        <div class="accordion-content">
            <p>Elaborar un documento que incluya:</p>
            <ul>
                <li><strong>Portada:</strong> Título "Mi Recetario Familiar", una imagen alusiva, tu nombre y fecha.</li>
                <li><strong>Receta 1:</strong> Escribe la receta de un plato típico de tu región (ingredientes y preparación). Usa viñetas para los ingredientes y numeración para la preparación.</li>
                <li><strong>Tabla de resumen:</strong> Crea una tabla con 3 columnas: "Receta", "Tiempo de preparación", "Dificultad (Alta/Media/Baja)". Llena la tabla con 3 recetas.</li>
                <li><strong>Formato general:</strong> El documento debe tener un título principal con formato llamativo, interlineado 1.5 y márgenes de 2.5 cm.</li>
            </ul>
            <p><strong>Entrega:</strong> Guarda el archivo en formato PDF y súbelo a la plataforma o envíalo al correo del docente.</p>
        </div>
    </div>
`,
    u3: `
        <h2>Unidad 3: Editor de Presentaciones</h2>
        <img src="img/3.png" alt="LibreOffice Impress" style="width:100%; border-radius:12px; margin-top:15px; margin-bottom:20px;">
        <span class="badge" style="background-color: var(--u3-color);">🎨 Duración: 8 Horas | Evaluación: 20%</span>
        <p style="margin-top:15px;"><strong>Software Libre:</strong> LibreOffice Impress</p>

        <div class="accordion">
            <button class="accordion-btn">📋 Información General</button>
            <div class="accordion-content">
                <p>Aprenderemos a crear presentaciones visuales y atractivas para exponer ideas, proyectos o tareas escolares.</p>
                <p><strong>Objetivo:</strong> Diseñar presentaciones efectivas usando diapositivas, imágenes, animaciones y transiciones.</p>
            </div>

            <button class="accordion-btn">🎯 Competencia</button>
            <div class="accordion-content">
                <p>Elaborar presentaciones digitales que comuniquen mensajes de manera clara y creativa, utilizando las herramientas básicas de Impress.</p>
            </div>

            <button class="accordion-btn">🏆 Resultados de Aprendizaje</button>
            <div class="accordion-content">
                <ul>
                    <li>Reconocer la interfaz de Impress.</li>
                    <li>Crear y organizar diapositivas.</li>
                    <li>Insertar texto, imágenes, formas y otros objetos.</li>
                    <li>Aplicar animaciones a objetos y transiciones entre diapositivas.</li>
                    <li>Ejecutar una presentación en modo pantalla completa.</li>
                </ul>
            </div>

            <button class="accordion-btn">📚 Parte Teórica</button>
            <div class="accordion-content">
                <div class="tabs-container" id="tabs-u3-teoria">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="t1-u3-teoria">🎭 ¿Qué es Impress?</button>
                        <button class="tab-btn" data-tab="t2-u3-teoria">🧭 Interfaz de Impress</button>
                        <button class="tab-btn" data-tab="t3-u3-teoria">➕ Crear y organizar diapositivas</button>
                        <button class="tab-btn" data-tab="t4-u3-teoria">🖼️ Insertar objetos</button>
                        <button class="tab-btn" data-tab="t5-u3-teoria">✨ Animaciones y Transiciones</button>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" id="t1-u3-teoria">
                            <p>Es el editor de presentaciones de LibreOffice. Te permite crear diapositivas con texto, imágenes, videos y animaciones. Es ideal para exposiciones orales.</p>
                        </div>
                        <div class="tab-pane" id="t2-u3-teoria">
                            <ul>
                                <li><strong>Panel de diapositivas:</strong> Muestra miniaturas de todas tus diapositivas.</li>
                                <li><strong>Área de trabajo:</strong> Donde diseñas la diapositiva actual.</li>
                                <li><strong>Panel de propiedades:</strong> Para cambiar estilos, animaciones y transiciones.</li>
                                <li><strong>Barra de herramientas:</strong> Insertar formas, imágenes, cuadros de texto.</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="t3-u3-teoria">
                            <p><strong>Crear:</strong> Diapositiva → Nueva diapositiva o clic derecho en el panel → Nueva diapositiva.</p>
                            <p><strong>Organizar:</strong> Arrastra las miniaturas para cambiar el orden. Usa "Eliminar diapositiva" para borrar.</p>
                            <p><strong>Diseños:</strong> Puedes elegir entre "Título", "Título y contenido", "En blanco", etc.</p>
                        </div>
                        <div class="tab-pane" id="t4-u3-teoria">
                            <ul>
                                <li><strong>Texto:</strong> Insertar → Cuadro de texto o usar el diseño predeterminado.</li>
                                <li><strong>Imagen:</strong> Insertar → Imagen → Desde archivo.</li>
                                <li><strong>Formas:</strong> En la barra inferior, elige rectángulos, flechas, diagramas de flujo.</li>
                                <li><strong>Tablas y gráficos:</strong> Insertar → Tabla o Gráfico.</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="t5-u3-teoria">
                            <p><strong>Animaciones (efectos en objetos):</strong> Selecciona un objeto → Presentación → Animación personalizada → Agregar efecto (Entrada, Énfasis, Salida).</p>
                            <p><strong>Transiciones (efecto entre diapositivas):</strong> Selecciona una diapositiva → Presentación → Transición de diapositiva → Elige efecto y velocidad.</p>
                            <div class="concepto-box">💡 Usa animaciones con moderación. Menos es más.</div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="accordion-btn">💻 Parte Práctica</button>
            <div class="accordion-content">
                <div class="tabs-container" id="tabs-u3-practica">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="p1-u3">📁 Ejercicio 1: Presentación personal</button>
                        <button class="tab-btn" data-tab="p2-u3">🎬 Ejercicio 2: Animando mi historia</button>
                        <button class="tab-btn" data-tab="p3-u3">📊 Ejercicio 3: Datos visuales</button>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" id="p1-u3">
                            <h3>📁 Ejercicio 1: Mi presentación personal</h3>
                            <p>Crea una presentación de 3 diapositivas sobre ti mismo.</p>
                            <h4>Requisitos:</h4>
                            <ul>
                                <li><strong>Diapositiva 1:</strong> Título con tu nombre y una foto tuya.</li>
                                <li><strong>Diapositiva 2:</strong> "Mis hobbies" (texto y una imagen relacionada).</li>
                                <li><strong>Diapositiva 3:</strong> "Mi familia" (texto descriptivo y otra imagen).</li>
                                <li>Aplica una <strong>transición suave</strong> entre todas las diapositivas.</li>
                            </ul>
                            <div class="concepto-box">
                                🎯 <strong>Tip:</strong> Usa diseños predefinidos para ahorrar tiempo.
                            </div>
                        </div>
                        <div class="tab-pane" id="p2-u3">
                            <h3>🎬 Ejercicio 2: Animando mi historia</h3>
                            <p>Crea una diapositiva animada que cuente una pequeña historia.</p>
                            <h4>Requisitos:</h4>
                            <ul>
                                <li>Usa una diapositiva <strong>en blanco</strong>.</li>
                                <li>Crea 3 objetos: por ejemplo, un sol ☀️, una nube ☁️ y una flor 🌸.</li>
                                <li>Anímalos para que aparezcan <strong>en orden al hacer clic</strong>.</li>
                                <li>Elige efectos de entrada diferentes para cada objeto.</li>
                            </ul>
                            <div class="concepto-box">
                                ✨ <strong>Pro tip:</strong> Usa Presentación → Animación personalizada para controlar el orden.
                            </div>
                        </div>
                        <div class="tab-pane" id="p3-u3">
                            <h3>📊 Ejercicio 3: Datos visuales</h3>
                            <p>Crea una diapositiva que muestre información de tu familia en formato tabla y gráfico.</p>
                            <h4>Requisitos:</h4>
                            <ul>
                                <li>Inserta una tabla con 2 columnas: "Familiar" y "Edad".</li>
                                <li>Ingresa datos de mínimo 3 familiares.</li>
                                <li>Selecciona la tabla y crea un <strong>gráfico de barras</strong> (Insertar → Gráfico).</li>
                                <li>Edita el gráfico para que muestre las edades correctamente.</li>
                            </ul>
                            <div class="concepto-box">
                                📈 <strong>Tip:</strong> Los gráficos se actualizan automáticamente si cambias los datos de la tabla.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="accordion-btn">📝 Evaluación Interactiva</button>
            <div class="accordion-content" id="evaluacion-u3">
                <!-- La evaluación se generará dinámicamente -->
            </div>

            <button class="accordion-btn">🏅 Producto Final: Exposición de mi comunidad</button>
            <div class="accordion-content">
                <p>Elaborar una presentación de <strong>mínimo 6 diapositivas</strong> sobre "Los atractivos de mi barrio o vereda". Debe incluir:</p>
                <ul>
                    <li>Diapositiva de título con nombre y lugar.</li>
                    <li>Mínimo 4 diapositivas con imágenes y descripciones cortas (parques, tiendas, iglesia, escuela, río, etc.).</li>
                    <li>Una diapositiva final con un mapa o croquis sencillo (puedes dibujarlo en una diapositiva usando formas).</li>
                    <li>Transiciones suaves en todas las diapositivas.</li>
                    <li>Animación en al menos 3 objetos.</li>
                </ul>
                <p>💡 <strong>Consejo:</strong> Ensaya tu presentación antes de mostrarla a la familia o al docente.</p>
            </div>
        </div>
    `,

    u4: `
        <h2>Unidad 4: Hoja de Cálculo</h2>
        <img src="img/4.png" alt="LibreOffice Calc" style="width:100%; border-radius:12px; margin-top:15px; margin-bottom:20px;">
        <span class="badge" style="background-color: var(--u4-color);">📊 Duración: 8 Horas | Evaluación: 20%</span>
        <p style="margin-top:15px;"><strong>Software Libre:</strong> LibreOffice Calc</p>

        <div class="accordion">
            <button class="accordion-btn">📋 Información General</button>
            <div class="accordion-content">
                <p>Las hojas de cálculo sirven para organizar números, hacer cuentas automáticas y crear gráficos. Son ideales para presupuestos familiares, control de gastos o inventarios.</p>
                <p><strong>Objetivo:</strong> Aplicar operaciones básicas y crear tablas con fórmulas en Calc.</p>
            </div>

            <button class="accordion-btn">🎯 Competencia</button>
            <div class="accordion-content">
                <p>Manejar datos numéricos en una hoja de cálculo, usando fórmulas sencillas y gráficos para facilitar la toma de decisiones cotidianas.</p>
            </div>

            <button class="accordion-btn">🏆 Resultados de Aprendizaje</button>
            <div class="accordion-content">
                <ul>
                    <li>Identificar celdas, filas, columnas y rangos.</li>
                    <li>Ingresar y editar datos.</li>
                    <li>Usar fórmulas básicas: SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN.</li>
                    <li>Aplicar formato a números y texto.</li>
                    <li>Crear gráficos de barras o pastel.</li>
                </ul>
            </div>

            <button class="accordion-btn">📚 Parte Teórica</button>
            <div class="accordion-content">
                <div class="tabs-container" id="tabs-u4-teoria">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="t1-u4-teoria">🧮 ¿Qué es Calc?</button>
                        <button class="tab-btn" data-tab="t2-u4-teoria">🧭 Interfaz de Calc</button>
                        <button class="tab-btn" data-tab="t3-u4-teoria">🔢 Fórmulas básicas</button>
                        <button class="tab-btn" data-tab="t4-u4-teoria">📊 Crear gráficos</button>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" id="t1-u4-teoria">
                            <p>Es la hoja de cálculo de LibreOffice. Organiza la información en una cuadrícula de <strong>celdas</strong> (intersección de fila y columna). Cada celda tiene una dirección como A1, B2, C5.</p>
                        </div>
                        <div class="tab-pane" id="t2-u4-teoria">
                            <ul>
                                <li><strong>Barra de fórmulas:</strong> Muestra y permite editar el contenido de la celda seleccionada.</li>
                                <li><strong>Encabezados de columnas (Letras A, B, C...)</strong> y <strong>filas (Números 1, 2, 3...)</strong>.</li>
                                <li><strong>Etiquetas de hojas:</strong> Abajo puedes tener múltiples hojas (Hoja1, Hoja2...).</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="t3-u4-teoria">
                            <p>Toda fórmula empieza con el signo <strong>=</strong>.</p>
                            <ul>
                                <li><strong>SUMA:</strong> =SUMA(A1:A5)  (suma los valores de A1 hasta A5)</li>
                                <li><strong>RESTA:</strong> =A1-B1</li>
                                <li><strong>MULTIPLICACIÓN:</strong> =A1*B1</li>
                                <li><strong>DIVISIÓN:</strong> =A1/B1</li>
                                <li><strong>PROMEDIO:</strong> =PROMEDIO(A1:A5)</li>
                            </ul>
                            <div class="concepto-box">✅ <strong>Tip:</strong> También puedes sumar con el botón Σ (AutoSuma) en la barra de herramientas.</div>
                        </div>
                        <div class="tab-pane" id="t4-u4-teoria">
                            <ol>
                                <li>Selecciona los datos (incluyendo los títulos de las columnas).</li>
                                <li>Menú <strong>Insertar → Gráfico</strong>.</li>
                                <li>Elige tipo de gráfico (barras, pastel, líneas).</li>
                                <li>Agrega título y nombres a los ejes.</li>
                                <li>Haz clic en "Finalizar".</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <button class="accordion-btn">💻 Parte Práctica</button>
            <div class="accordion-content">
                <div class="tabs-container" id="tabs-u4-practica">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="p1-u4">💰 Ejercicio 1: Presupuesto semanal</button>
                        <button class="tab-btn" data-tab="p2-u4">📈 Ejercicio 2: Gráfico de gastos</button>
                        <button class="tab-btn" data-tab="p3-u4">🧸 Ejercicio 3: Inventario con formato condicional</button>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" id="p1-u4">
                            <h3>💰 Ejercicio 1: Presupuesto semanal</h3>
                            <p>Crea una hoja de cálculo para controlar tus gastos de la semana.</p>
                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Crea una tabla con las columnas: Producto, Valor unitario, Cantidad.</li>
                                <li>Agrega una columna "Subtotal" que calcule =Valor unitario * Cantidad.</li>
                                <li>Al final de la tabla, calcula el "Gasto total" usando =SUMA(rango de subtotales).</li>
                                <li>Agrega mínimo 5 productos diferentes.</li>
                            </ol>
                            <div class="concepto-box">
                                💡 <strong>Ejemplo:</strong> Pan → $2,000 → 3 unidades → Subtotal = $6,000
                            </div>
                        </div>
                        <div class="tab-pane" id="p2-u4">
                            <h3>📈 Ejercicio 2: Gráfico de gastos</h3>
                            <p>Usando los datos del presupuesto anterior, crea una visualización de tus gastos.</p>
                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Selecciona las columnas "Producto" y "Subtotal".</li>
                                <li>Ve a Insertar → Gráfico.</li>
                                <li>Elige un <strong>gráfico de pastel</strong> (tarta o circular).</li>
                                <li>Agrega el título "Distribución de gastos semanales".</li>
                                <li>Haz clic en Finalizar.</li>
                            </ol>
                            <div class="concepto-box">
                                📊 <strong>Tip:</strong> El gráfico de pastel muestra qué producto representa el mayor porcentaje de gasto.
                            </div>
                        </div>
                        <div class="tab-pane" id="p3-u4">
                            <h3>🧸 Ejercicio 3: Inventario con formato condicional</h3>
                            <p>Crea un inventario de juguetes o útiles escolares.</p>
                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Crea una tabla con: Producto, Cantidad actual, Cantidad mínima.</li>
                                <li>Ingresa datos de 5 productos diferentes.</li>
                                <li>Selecciona la columna "Cantidad actual".</li>
                                <li>Aplica <strong>Formato condicional</strong> (Formato → Formato condicional).</li>
                                <li>Configura una regla: Si el valor es <span style="color: red;">menor</span> que la cantidad mínima, que se ponga en <strong style="color: red;">rojo</strong>.</li>
                            </ol>
                            <div class="concepto-box">
                                🎯 <strong>Objetivo:</strong> Identificar automáticamente productos que necesitan reposición.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="accordion-btn">📝 Evaluación Interactiva</button>
            <div class="accordion-content" id="evaluacion-u4">
                <!-- La evaluación se generará dinámicamente -->
            </div>

            <button class="accordion-btn">🏅 Producto Final: Control de gastos familiares</button>
            <div class="accordion-content">
                <p>Elabora un archivo de Calc que contenga:</p>
                <ul>
                    <li><strong>Hoja 1:</strong> Registro de ingresos y gastos de un mes (mínimo 10 movimientos) con columnas: Fecha, Descripción, Ingreso, Gasto.</li>
                    <li><strong>Hoja 2:</strong> Resumen automático: Total ingresos, Total gastos, Saldo final (Ingresos - Gastos).</li>
                    <li><strong>Hoja 3:</strong> Un gráfico de barras que compare los gastos por categoría (comida, transporte, servicios, etc.).</li>
                </ul>
                <p>💡 <strong>Tip:</strong> Usa =SUMA() para totalizar y referencias entre hojas (=Hoja1.A1).</p>
            </div>
        </div>
    `,
    u5: `
        <h2>Unidad 5: Internet y Comunicación</h2>
        <img src="img/5.png" alt="Internet y comunicación segura" style="width:100%; border-radius:12px; margin-top:15px; margin-bottom:20px;">
        <span class="badge" style="background-color: var(--u5-color);">🌐 Duración: 8 Horas | Evaluación: 25%</span>
        <p style="margin-top:15px;"><strong>Software Libre:</strong> Firefox (Navegador) y Thunderbird (Correo)</p>

        <div class="accordion">
            <button class="accordion-btn">📋 Información General</button>
            <div class="accordion-content">
                <p>Aprenderemos a navegar por Internet de forma segura, buscar información confiable y comunicarnos por correo electrónico. Habilidades esenciales para el mundo actual.</p>
                <p><strong>Objetivo:</strong> Utilizar Internet como herramienta de información y comunicación responsablemente.</p>
            </div>

            <button class="accordion-btn">🎯 Competencia</button>
            <div class="accordion-content">
                <p>Navegar en la web y gestionar correo electrónico aplicando criterios de seguridad, veracidad de la información y normas de netiqueta.</p>
            </div>

            <button class="accordion-btn">🏆 Resultados de Aprendizaje</button>
            <div class="accordion-content">
                <ul>
                    <li>Explicar qué es Internet y sus servicios principales.</li>
                    <li>Navegar usando el navegador Firefox.</li>
                    <li>Buscar información usando palabras clave y evaluar fuentes.</li>
                    <li>Identificar riesgos en línea (phishing, fake news).</li>
                    <li>Crear y usar una cuenta de correo electrónico.</li>
                    <li>Redactar correos con netiqueta y adjuntar archivos.</li>
                </ul>
            </div>

            <button class="accordion-btn">📚 Parte Teórica</button>
            <div class="accordion-content">
                <div class="tabs-container" id="tabs-u5-teoria">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="t1-u5-teoria">🌍 ¿Qué es Internet?</button>
                        <button class="tab-btn" data-tab="t2-u5-teoria">🦊 Navegador Firefox</button>
                        <button class="tab-btn" data-tab="t3-u5-teoria">🔍 Búsqueda efectiva</button>
                        <button class="tab-btn" data-tab="t4-u5-teoria">✉️ Correo electrónico y Netiqueta</button>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" id="t1-u5-teoria">
                            <p>Es una red mundial de computadoras conectadas entre sí. Permite compartir información, comunicarse y acceder a servicios como la web, correo electrónico, redes sociales, etc.</p>
                        </div>
                        <div class="tab-pane" id="t2-u5-teoria">
                            <ul>
                                <li><strong>Barra de direcciones:</strong> Escribe una URL (ej. www.google.com) o una búsqueda.</li>
                                <li><strong>Pestañas:</strong> Abre múltiples páginas en la misma ventana.</li>
                                <li><strong>Marcadores (favoritos):</strong> Guarda páginas importantes.</li>
                                <li><strong>Modo privado:</strong> No guarda historial ni cookies.</li>
                            </ul>
                        </div>
                        <div class="tab-pane" id="t3-u5-teoria">
                            <ul>
                                <li>Usa palabras clave concretas: "receta arepa colombiana" en lugar de "arepas".</li>
                                <li>Usa comillas para frases exactas: "colegio Simón Bolívar".</li>
                                <li>Evalúa la fuente: ¿quién escribió? ¿cuándo? ¿es un sitio oficial (.edu, .gov, o conocido)?</li>
                            </ul>
                            <div class="concepto-box">⚠️ Desconfía de títulos sensacionalistas o que pidan datos personales.</div>
                        </div>
                        <div class="tab-pane" id="t4-u5-teoria">
                            <p><strong>Partes de un correo:</strong> Para (destinatario), Asunto (breve y claro), Cuerpo (mensaje), Adjuntos (archivos).</p>
                            <p><strong>Netiqueta (normas de educación en línea):</strong></p>
                            <ul>
                                <li>Escribe un asunto descriptivo.</li>
                                <li>Saluda y despídete cordialmente.</li>
                                <li>No escribas TODO EN MAYÚSCULAS (equivale a gritar).</li>
                                <li>Revisa la ortografía antes de enviar.</li>
                                <li>No reenvíes cadenas ni información falsa.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button class="accordion-btn">💻 Parte Práctica</button>
            <div class="accordion-content">
                <div class="tabs-container" id="tabs-u5-practica">
                    <div class="tabs-header">
                        <button class="tab-btn active" data-tab="p1-u5">🔎 Ejercicio 1: Búsqueda guiada</button>
                        <button class="tab-btn" data-tab="p2-u5">📧 Ejercicio 2: Crear correo y enviar mensaje</button>
                        <button class="tab-btn" data-tab="p3-u5">🛡️ Ejercicio 3: Identificar noticias falsas</button>
                    </div>
                    <div class="tabs-content">
                        <div class="tab-pane active" id="p1-u5">
                            <h3>🔎 Ejercicio 1: Búsqueda guiada</h3>
                            <p>Practica cómo buscar información confiable en Internet.</p>
                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Abre el navegador Firefox.</li>
                                <li>Busca: "alcaldía de [tu municipio] horario de atención".</li>
                                <li>Identifica cuál es el sitio web <strong>oficial</strong> (generalmente .gov.co).</li>
                                <li>Anota en tu cuaderno: horario de atención y dirección.</li>
                                <li>Guarda la página en <strong>Marcadores</strong> (Favoritos) para acceso rápido.</li>
                            </ol>
                            <div class="concepto-box">
                                🎯 <strong>Objetivo:</strong> Aprender a distinguir sitios oficiales de páginas no confiables.
                            </div>
                        </div>
                        <div class="tab-pane" id="p2-u5">
                            <h3>📧 Ejercicio 2: Crear correo y enviar mensaje</h3>
                            <p>Aprende a comunicarte por correo electrónico profesionalmente.</p>
                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Si no tienes, crea una cuenta de correo gratuita (Gmail, Outlook o ProtonMail).</li>
                                <li>Redacta un correo electrónico dirigido al docente (simula la dirección).</li>
                                <li>Asunto: "Presentación - [Tu nombre completo]".</li>
                                <li>Cuerpo: Preséntate, cuenta por qué estás tomando el curso.</li>
                                <li><strong>Adjunta</strong> una imagen relacionada con tu comunidad o familia.</li>
                                <li>Revisa la ortografía y envía (o guarda como borrador si es simulado).</li>
                            </ol>
                            <div class="concepto-box">
                                ✉️ <strong>Netiqueta básica:</strong> Saludo inicial, cierre cordial, y revisa antes de enviar.
                            </div>
                        </div>
                        <div class="tab-pane" id="p3-u5">
                            <h3>🛡️ Ejercicio 3: Identificar noticias falsas (Fake News)</h3>
                            <p>Desarrolla pensamiento crítico para detectar información engañosa.</p>
                            <h4>Instrucciones:</h4>
                            <ol>
                                <li>Busca una noticia que parezca sospechosa (puede ser una cadena de WhatsApp o un titular extraño).</li>
                                <li>Aplica la regla de verificación:
                                    <ul>
                                        <li>📰 ¿Quién publicó la información? (¿es un medio reconocido?)</li>
                                        <li>🔍 ¿Hay otras fuentes que confirmen la misma noticia?</li>
                                        <li>📅 ¿La fecha es actual o es una noticia vieja reciclada?</li>
                                    </ul>
                                </li>
                                <li>Escribe una breve conclusión (3-5 líneas) sobre cómo identificarías una noticia falsa.</li>
                            </ol>
                            <div class="concepto-box">
                                ⚠️ <strong>Recuerda:</strong> No compartas información que no puedas verificar. Ante la duda, ¡no la reenvíes!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="accordion-btn">📝 Evaluación Interactiva</button>
            <div class="accordion-content" id="evaluacion-u5">
                <!-- La evaluación se generará dinámicamente -->
            </div>

            <button class="accordion-btn">🏅 Producto Final: Guía de navegación segura</button>
            <div class="accordion-content">
                <p>Elaborar un documento (en Writer) titulado "Consejos para navegar seguro en Internet". Debe incluir:</p>
                <ul>
                    <li>Portada con título, tu nombre y fecha.</li>
                    <li>5 recomendaciones para proteger la información personal (contraseñas, qué no publicar).</li>
                    <li>3 señales para identificar una noticia falsa o un fraude.</li>
                    <li>Un párrafo sobre la importancia de la netiqueta en el correo electrónico.</li>
                    <li>Un enlace (URL) a una página confiable sobre ciberseguridad para padres de familia.</li>
                </ul>
                <p><strong>Entrega:</strong> Guarda el documento como PDF y envía por correo electrónico (puede ser simulado) al docente.</p>
            </div>
        </div>
    `
};

// ========== SISTEMA DE EVALUACIÓN INTERACTIVA ==========

// Base de datos de preguntas por unidad
const evaluaciones = {
    u1: {
        titulo: "📝 Evaluación - Unidad 1: Introducción a la Informática",
        preguntas: [
            {
                texto: "¿Qué es el hardware?",
                opciones: [
                    "Los programas del computador",
                    "Las partes físicas del computador",
                    "El sistema operativo",
                    "El navegador web"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! El hardware son todas las partes físicas del computador como el teclado, mouse, monitor y CPU."
            },
            {
                texto: "¿Cuál de los siguientes es un sistema operativo libre?",
                opciones: [
                    "Windows",
                    "macOS",
                    "Linux",
                    "iOS"
                ],
                correcta: 2,
                explicacion: "✅ ¡Correcto! Linux es un sistema operativo libre y gratuito."
            },
            {
                texto: "¿Qué función tiene el botón de minimizar en una ventana?",
                opciones: [
                    "Cerrar la ventana",
                    "Agrandar la ventana",
                    "Ocultar la ventana en la barra de tareas",
                    "Mover la ventana"
                ],
                correcta: 2,
                explicacion: "✅ ¡Correcto! Minimizar oculta la ventana pero la mantiene activa en la barra de tareas."
            },
            {
                texto: "¿Cuál es la función principal del software?",
                opciones: [
                    "Dar energía al computador",
                    "Permitir que el computador funcione y ejecute tareas",
                    "Conectar el computador a Internet",
                    "Enfriar el procesador"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! El software son los programas que le indican al hardware qué hacer."
            },
            {
                texto: "¿Qué dispositivo se considera de entrada?",
                opciones: [
                    "Monitor",
                    "Impresora",
                    "Teclado",
                    "Parlantes"
                ],
                correcta: 2,
                explicacion: "✅ ¡Correcto! El teclado es un dispositivo de entrada porque envía información al computador."
            }
        ]
    },
    u2: {
        titulo: "📝 Evaluación - Unidad 2: Procesador de Palabras (Writer)",
        preguntas: [
            {
                texto: "¿Cuál es la extensión predeterminada de los archivos de LibreOffice Writer?",
                opciones: [".docx", ".odt", ".txt", ".pdf"],
                correcta: 1,
                explicacion: "✅ ¡Correcto! .odt es el formato nativo de LibreOffice Writer."
            },
            {
                texto: "¿Qué combinación de teclas se usa para aplicar negrita en Writer?",
                opciones: ["Ctrl+C", "Ctrl+V", "Ctrl+N", "Ctrl+B"],
                correcta: 2,
                explicacion: "✅ ¡Correcto! Ctrl+N es para negrita en LibreOffice (Ctrl+B en otros programas)."
            },
            {
                texto: "¿Para qué sirve insertar una tabla en un documento?",
                opciones: [
                    "Solo para decorar",
                    "Para organizar información en filas y columnas",
                    "Para insertar imágenes",
                    "Para cambiar el color del texto"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Las tablas ayudan a organizar datos de forma estructurada."
            },
            {
                texto: "¿Qué formato es mejor para compartir un documento que no debe ser editado?",
                opciones: [".odt", ".docx", ".pdf", ".txt"],
                correcta: 2,
                explicacion: "✅ ¡Correcto! El PDF mantiene el formato y es difícil de modificar."
            },
            {
                texto: "¿Dónde se encuentra la opción para guardar un documento?",
                opciones: [
                    "En el menú Ver",
                    "En el menú Archivo",
                    "En el menú Formato",
                    "En el menú Herramientas"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Archivo → Guardar o Guardar como..."
            }
        ]
    },
    u3: {
        titulo: "📝 Evaluación - Unidad 3: Editor de Presentaciones (Impress)",
        preguntas: [
            {
                texto: "¿Qué es una transición en una presentación?",
                opciones: [
                    "Un efecto que se aplica a un objeto",
                    "Un efecto que ocurre entre diapositivas",
                    "Un tipo de letra especial",
                    "Un sonido de fondo"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Las transiciones son efectos visuales al cambiar de diapositiva."
            },
            {
                texto: "¿Cuál es la extensión de los archivos de LibreOffice Impress?",
                opciones: [".odp", ".odt", ".ods", ".pdf"],
                correcta: 0,
                explicacion: "✅ ¡Correcto! .odp es el formato de presentaciones de LibreOffice."
            },
            {
                texto: "¿Qué tecla se usa para iniciar una presentación desde el inicio?",
                opciones: ["F1", "F5", "F11", "Esc"],
                correcta: 1,
                explicacion: "✅ ¡Correcto! F5 inicia la presentación desde la primera diapositiva."
            },
            {
                texto: "¿Dónde se pueden ver todas las diapositivas en miniatura?",
                opciones: [
                    "Panel de diapositivas",
                    "Barra de título",
                    "Barra de estado",
                    "Área de notas"
                ],
                correcta: 0,
                explicacion: "✅ ¡Correcto! El panel de diapositivas muestra todas las miniaturas."
            },
            {
                texto: "¿Qué permite hacer la animación personalizada?",
                opciones: [
                    "Cambiar el fondo de la diapositiva",
                    "Agregar efectos a objetos específicos",
                    "Guardar la presentación",
                    "Imprimir las diapositivas"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Las animaciones personalizadas afectan objetos individuales."
            }
        ]
    },
    u4: {
        titulo: "📝 Evaluación - Unidad 4: Hoja de Cálculo (Calc)",
        preguntas: [
            {
                texto: "¿Qué símbolo debe tener una fórmula en Calc?",
                opciones: ["+", "-", "=", "*"],
                correcta: 2,
                explicacion: "✅ ¡Correcto! Todas las fórmulas en Calc comienzan con el signo ="
            },
            {
                texto: "¿Qué función se usa para sumar un rango de celdas?",
                opciones: ["=CONTAR()", "=PROMEDIO()", "=SUMA()", "=MAX()"],
                correcta: 2,
                explicacion: "✅ ¡Correcto! =SUMA(A1:A5) suma los valores de A1 hasta A5."
            },
            {
                texto: "¿Qué es una celda en una hoja de cálculo?",
                opciones: [
                    "Toda la hoja completa",
                    "La intersección de una fila y una columna",
                    "Un gráfico",
                    "Una fórmula especial"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Cada celda tiene una dirección única como A1, B2, etc."
            },
            {
                texto: "¿Cuál es la extensión de los archivos de Calc?",
                opciones: [".odt", ".odp", ".ods", ".odg"],
                correcta: 2,
                explicacion: "✅ ¡Correcto! .ods es el formato de hoja de cálculo de LibreOffice."
            },
            {
                texto: "¿Para qué sirve un gráfico de pastel?",
                opciones: [
                    "Mostrar tendencias en el tiempo",
                    "Comparar partes de un todo (porcentajes)",
                    "Mostrar relaciones de causa-efecto",
                    "Ordenar datos alfabéticamente"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! El gráfico de pastel muestra cómo se distribuye el total en porcentajes."
            }
        ]
    },
    u5: {
        titulo: "📝 Evaluación - Unidad 5: Internet y Comunicación",
        preguntas: [
            {
                texto: "¿Qué significa 'phishing'?",
                opciones: [
                    "Un tipo de virus informático",
                    "Un intento de robar información personal haciéndose pasar por una entidad confiable",
                    "Un navegador web",
                    "Un correo electrónico normal"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Phishing es una técnica de engaño para obtener datos personales."
            },
            {
                texto: "¿Qué es la netiqueta?",
                opciones: [
                    "Un tipo de Internet rápido",
                    "Las normas de comportamiento en línea",
                    "Un programa de correo",
                    "Un navegador web"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! La netiqueta son las reglas de cortesía en Internet."
            },
            {
                texto: "¿Qué debes hacer si recibes una noticia que parece falsa?",
                opciones: [
                    "Reenviarla inmediatamente a todos tus contactos",
                    "Verificarla en otras fuentes confiables antes de compartir",
                    "Ignorarla sin más",
                    "Publicarla en redes sociales"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Siempre verifica la información antes de compartirla."
            },
            {
                texto: "¿Cuál de estos es un navegador web libre?",
                opciones: ["Chrome", "Edge", "Firefox", "Safari"],
                correcta: 2,
                explicacion: "✅ ¡Correcto! Firefox es un navegador libre y de código abierto."
            },
            {
                texto: "¿Qué información NO deberías compartir en Internet?",
                opciones: [
                    "Tu comida favorita",
                    "Tu número de documento y dirección exacta",
                    "Tu deporte favorito",
                    "Una foto de tu mascota"
                ],
                correcta: 1,
                explicacion: "✅ ¡Correcto! Los datos personales sensibles deben protegerse siempre."
            }
        ]
    }
};

// Función para generar el HTML de la evaluación
function generarEvaluacion(unidadId) {
    const evaluacion = evaluaciones[unidadId];
    if (!evaluacion) return '<p>Evaluación no disponible</p>';
    
    let html = `
        <div class="quiz-container">
            <h3>${evaluacion.titulo}</h3>
            <div class="progress-bar">
                <div class="progress-fill" id="progress-fill-${unidadId}" style="width: 0%"></div>
            </div>
            <div id="quiz-${unidadId}">
    `;
    
    evaluacion.preguntas.forEach((pregunta, idx) => {
        html += `
            <div class="question-card" id="q-${unidadId}-${idx}">
                <div class="question-text">
                    <strong>Pregunta ${idx + 1}:</strong> ${pregunta.texto}
                </div>
                <div class="options" data-pregunta="${idx}">
        `;
        
        pregunta.opciones.forEach((opcion, optIdx) => {
            html += `
                <div class="option">
                    <input type="radio" name="q${unidadId}-${idx}" value="${optIdx}" id="${unidadId}-q${idx}-opt${optIdx}">
                    <label for="${unidadId}-q${idx}-opt${optIdx}">${String.fromCharCode(65 + optIdx)}. ${opcion}</label>
                </div>
            `;
        });
        
        html += `
                </div>
                <div class="feedback" id="feedback-${unidadId}-${idx}"></div>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="quiz-actions">
                <button class="btn-quiz btn-check" onclick="calificarEvaluacion('${unidadId}')">✅ Calificar Evaluación</button>
                <button class="btn-quiz btn-reset" onclick="resetearEvaluacion('${unidadId}')">🔄 Reiniciar</button>
            </div>
            <div id="score-${unidadId}" class="quiz-score" style="display: none;"></div>
        </div>
    `;
    
    return html;
}

// Función para cargar todas las evaluaciones en sus contenedores
function cargarTodasEvaluaciones() {
    const unidades = ['u1', 'u2', 'u3', 'u4', 'u5'];
    unidades.forEach(unidad => {
        const contenedor = document.getElementById(`evaluacion-${unidad}`);
        if (contenedor) {
            contenedor.innerHTML = generarEvaluacion(unidad);
        }
    });
}

// Función para calificar la evaluación
function calificarEvaluacion(unidadId) {
    const evaluacion = evaluaciones[unidadId];
    if (!evaluacion) return;
    
    let puntaje = 0;
    const total = evaluacion.preguntas.length;
    let todasRespondidas = true;
    
    evaluacion.preguntas.forEach((pregunta, idx) => {
        const selectedOption = document.querySelector(`input[name="q${unidadId}-${idx}"]:checked`);
        const questionCard = document.getElementById(`q-${unidadId}-${idx}`);
        const feedbackDiv = document.getElementById(`feedback-${unidadId}-${idx}`);
        
        if (selectedOption) {
            const respuesta = parseInt(selectedOption.value);
            const esCorrecta = (respuesta === pregunta.correcta);
            
            if (esCorrecta) {
                puntaje++;
                questionCard.classList.add('correct');
                questionCard.classList.remove('incorrect');
                feedbackDiv.innerHTML = `<strong>✅ ¡Correcto!</strong><br>${pregunta.explicacion}`;
                feedbackDiv.className = 'feedback show correct';
            } else {
                questionCard.classList.add('incorrect');
                questionCard.classList.remove('correct');
                const opcionCorrecta = String.fromCharCode(65 + pregunta.correcta);
                feedbackDiv.innerHTML = `<strong>❌ Incorrecto.</strong><br>La respuesta correcta era ${opcionCorrecta}. ${pregunta.explicacion.substring(pregunta.explicacion.indexOf('✅') + 2)}`;
                feedbackDiv.className = 'feedback show incorrect';
            }
        } else {
            todasRespondidas = false;
            questionCard.classList.remove('correct', 'incorrect');
            feedbackDiv.innerHTML = `<strong>⚠️ No has respondido esta pregunta.</strong><br>Selecciona una opción para continuar.`;
            feedbackDiv.className = 'feedback show';
            feedbackDiv.style.background = "#fef3c7";
            feedbackDiv.style.color = "#92400e";
        }
    });
    
    // Calcular porcentaje
    const porcentaje = Math.round((puntaje / total) * 100);
    let mensaje = "";
    let emoji = "";
    
    if (!todasRespondidas && puntaje < total) {
        mensaje = "📝 Recuerda responder todas las preguntas para obtener tu puntaje completo.";
    }
    
    if (porcentaje >= 90) {
        emoji = "🌟";
        mensaje = "¡Excelente! Has dominado la unidad. " + mensaje;
    } else if (porcentaje >= 70) {
        emoji = "👍";
        mensaje = "¡Muy bien! Sigue así. " + mensaje;
    } else if (porcentaje >= 50) {
        emoji = "📚";
        mensaje = "Buen intento. Te recomiendo repasar algunos temas. " + mensaje;
    } else {
        emoji = "💪";
        mensaje = "No te desanimes. Revisa el contenido y vuelve a intentarlo. " + mensaje;
    }
    
    const scoreDiv = document.getElementById(`score-${unidadId}`);
    scoreDiv.innerHTML = `${emoji} <strong>Tu puntaje: ${puntaje}/${total}</strong> (${porcentaje}%)<br>${mensaje}`;
    scoreDiv.style.display = "block";
    
    // Actualizar barra de progreso
    const progressFill = document.getElementById(`progress-fill-${unidadId}`);
    if (progressFill) {
        progressFill.style.width = `${porcentaje}%`;
    }
}

// Función para resetear la evaluación
function resetearEvaluacion(unidadId) {
    const evaluacion = evaluaciones[unidadId];
    if (!evaluacion) return;
    
    // Limpiar todas las respuestas
    evaluacion.preguntas.forEach((_, idx) => {
        const radios = document.querySelectorAll(`input[name="q${unidadId}-${idx}"]`);
        radios.forEach(radio => radio.checked = false);
        
        const questionCard = document.getElementById(`q-${unidadId}-${idx}`);
        if (questionCard) {
            questionCard.classList.remove('correct', 'incorrect');
        }
        
        const feedbackDiv = document.getElementById(`feedback-${unidadId}-${idx}`);
        if (feedbackDiv) {
            feedbackDiv.innerHTML = '';
            feedbackDiv.className = 'feedback';
            feedbackDiv.style.background = "";
            feedbackDiv.style.color = "";
        }
    });
    
    // Ocultar puntaje y resetear barra
    const scoreDiv = document.getElementById(`score-${unidadId}`);
    if (scoreDiv) {
        scoreDiv.style.display = "none";
    }
    
    const progressFill = document.getElementById(`progress-fill-${unidadId}`);
    if (progressFill) {
        progressFill.style.width = "0%";
    }
}

// Hacer las funciones globales
window.calificarEvaluacion = calificarEvaluacion;
window.resetearEvaluacion = resetearEvaluacion;

// Función para inicializar el sistema de pestañas
function inicializarTabs() {
    const tabContainers = document.querySelectorAll('.tabs-container');
    
    tabContainers.forEach(container => {
        const tabBtns = container.querySelectorAll('.tab-btn');
        const tabPanes = container.querySelectorAll('.tab-pane');
        
        tabBtns.forEach(btn => {
            // Remover listener anterior para evitar duplicados
            btn.removeEventListener('click', btn._listener);
            const handler = () => {
                // Remover clase active de todos los botones de este contenedor
                tabBtns.forEach(b => b.classList.remove('active'));
                // Agregar clase active al botón clickeado
                btn.classList.add('active');
                
                // Ocultar todos los paneles de este contenedor
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Mostrar el panel correspondiente
                const tabId = btn.getAttribute('data-tab');
                const activePane = container.querySelector(`#${tabId}`);
                if (activePane) {
                    activePane.classList.add('active');
                }
            };
            btn.addEventListener('click', handler);
            btn._listener = handler;
        });
    });
}

// Lógica de interacción principal
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenido-dinamico");
    const enlacesMenu = document.querySelectorAll(".nav-item");

    // Función para inicializar acordeones
    function inicializarAccordion() {
        const botones = document.querySelectorAll(".accordion-btn");
        botones.forEach(btn => {
            // Remover listeners anteriores para evitar duplicados
            btn.removeEventListener("click", btn._listener);
            const handler = () => {
                const contenido = btn.nextElementSibling;
                contenido.classList.toggle("active");
            };
            btn.addEventListener("click", handler);
            btn._listener = handler;
        });
    }

    // Cargar contenido inicial (Inicio)
    contenedor.innerHTML = infoCurso.inicio;
    inicializarAccordion();
    inicializarTabs();
    cargarTodasEvaluaciones();

    // Manejar clics en el menú lateral
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();

            // Quitar clase activa del menú anterior y ponérsela al actual
            enlacesMenu.forEach(item => item.classList.remove("active"));
            enlace.classList.add("active");

            // Obtener la unidad seleccionada y renderizarla
            const unidad = enlace.getAttribute("data-unidad");
            contenedor.innerHTML = infoCurso[unidad];
            inicializarAccordion();
            inicializarTabs();
            cargarTodasEvaluaciones();
        });
    });
});