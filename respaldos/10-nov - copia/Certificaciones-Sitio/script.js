

// ------------------------- GESTIÓN MENÚ HAMBURGUESA-----------------------------------

// Función para visualizar y ocultar barra de menú en pantallas pequeñas
function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

// ------------------------- BASE DATOS PARA TABLAS-----------------------------------

// Texto y enlace de la imagen
const ENLACE_TEXTO = "ver certificado";
const ENLACE_IMAGEN = "./img/Buscar.png";

// Encabezados fijos
const header_fijos = ["Nivel Formativo", "Nombre de la formación", "Capacitador", "Horas", "Certificado"];

// Estructura de datos para contenedores y enlaces específicos por fila
const colection_tablas = {
    DIV_TABLA1_SEC1: {
        header_dinamicos: ["Carrera", "Institución académica", "Periodo académico", "Año de titulación", "Certificado"],
        rows: [
            {
                Celdas_de_fila: ["Ingeniería de Ejecución en Informática", "IP Chile", "2011 - 2015", "2016"],
                enlace: "./Certificados/Titulo/Certificado-de-tItulo.jpg"
            }
        ]
    },
    DIV_TABLA1_SEC2: {
        rows: [
            {
                Celdas_de_fila: ["Diplomado", "Gestión de la Seguridad y Marco Legal", "Universidad internacional de la Rioja", "432"],
                enlace: "./Certificados/Hard_Skills/SI - Diplomado - Gestión de la Seguridad y Marco Legal.pdf"
            }
        ]
    },
    DIV_TABLA2_SEC2: {
        rows: [
            {
                Celdas_de_fila: ["Curso", "Curador de Datos", "Fundación Carlos Slim", "30"],
                enlace: "./Certificados/Hard_Skills/DT - Curador de datos.pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Data analytic", "Coderhouse", "22"],
                enlace: "./Certificados/Hard_Skills/DT - Data_Analytics.jpg"
            },
            {
                Celdas_de_fila: ["Curso", "FInder", "Fundación Carlos Slim", "26"],
                enlace: "./Certificados/Hard_Skills/DT - Finder.pdf"
            }
        ]
    },
    DIV_TABLA3_SEC2: {
        rows: [
            {
                Celdas_de_fila: ["Diplomado", "Diseño y programción web", "Aiep - Sense - Telefónica Movistar", "100"],
                enlace: "./Certificados/Hard_Skills/DW - Diplomado - Diseño y Programación Web.pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Diseño Web con HTML5+CSS", "Aiep - Telefónica Movistar", "30"],
                enlace: "./Certificados/Hard_Skills/DW - Diseño Web con HTML5+CSS.pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Desarrollo Web", "Coderhouse", "45"],
                enlace: "./Certificados/Hard_Skills/DW - Desarrollo_web.jpg"
            },
            {
                Celdas_de_fila: ["Curso", "JavaScript (Aiep)", "Aiep - Telefónica Movistar", "40"],
                enlace: "./Certificados/Hard_Skills/DW - JavaScript (Aiep).pdf"
            },
            {
                Celdas_de_fila: ["Curso", "JavaScript (CoderHouse)", "Coderhouse", "34"],
                enlace: "./Certificados/Hard_Skills/DW - JavaScript (Coderhouse).jpg"
            },
            {
                Celdas_de_fila: ["Curso", "Programador orientado a objetos", "Fundación Carlos Slim", "82"],
                enlace: "./Certificados/Hard_Skills/DW - Programador (orientado a objetos).pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Wordpress", "Aiep -Telefónica Movistar", "30"],
                enlace: "./Certificados/Hard_Skills/DW - WordPress.pdf"
            }
        ]
    },
    DIV_TABLA4_SEC2: {
        rows: [
            {
                Celdas_de_fila: ["Diplomado", "Marketing Digital y Gestión Estratégica", "Aiep - Sense - Telefónica Movistar", "100"],
                enlace: "./Certificados/Hard_Skills/MK - Diplomado Marketing Digital y Gestion Estrategica.pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Growth Hacking", "Aiep - Sense - Telefónica Movistar", "30"],
                enlace: "./Certificados/Hard_Skills/MK - Growth_Hacking.pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Analítica Web", "Aiep - Sense - Telefónica Movistar", "30"],
                enlace: "./Certificados/Hard_Skills/MK - Analítica Web.pdf"
            },
            {
                Celdas_de_fila: ["Curso", "Marketing_Digital", "Aiep - Sense - Telefónica Movistar", "30"],
                enlace: "./Certificados/Hard_Skills/MK - Marketing_Digital.pdf"
            },
        ]
    },
    DIV_TABLA1_SEC3: {
        rows: [
            {
                Celdas_de_fila: ["Capacitación Sence", "Trabajo En Equipo", "Growth Factor S.A.", "5"],
                enlace: "./Certificados/Soft_Skills/Trabajo en equipo/1_Trabajo en equipo.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Desarrollo de habilidades de trabajo en equipo", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Trabajo en equipo/2_Desarrollo de habilidades de trabajo en equipo.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Desarrollo de habilidades directivas", "Growth Factor S.A.", "41"],
                enlace: "./Certificados/Soft_Skills/Trabajo en equipo/4_Desarrollo de habilidades Directivas - (Metodología Lean).pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Desarrollo de conductas para el trabajo en equipos de alta integración", "Sprint Consultores", "5"],
                enlace: "./Certificados/Soft_Skills/Trabajo en equipo/3_Conductas para el Trabajo en equipo de alta Integración.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Tecnicas de Liderazgo efectivo desde el autoconocimiento", "Fundacion de Capacitacion Sofofa", "8"],
                enlace: "./Certificados/Soft_Skills/Trabajo en equipo/5_Liderazgo desde el autoconocimiento.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Marketing Interno", "Sprint Consultores", "8"],
                enlace: "./Certificados/Soft_Skills/Trabajo en equipo/6_Marketing Interno.pdf"
            }
        ]
    },
    DIV_TABLA2_SEC3: {
        rows: [
            {
                Celdas_de_fila: ["Capacitación Sence", "Administración del tiempo en Funcion de los objetivos I", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Eficiencia Operacional/ef_Admin del Tiempo en funcion de los objetivos - I.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Administración del tiempo en Funcion de los objetivos - II", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Eficiencia Operacional/ef_Admin del Tiempo en funcion de los objetivos - II.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Implementación de Planogramas", "Learning plus Capacitación S.A.", "16"],
                enlace: "./Certificados/Soft_Skills/Eficiencia Operacional/ef_Implementación de Planogramas.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Prevención de pérdidas", "Quinta Disciplina", "28"],
                enenlace: "./Certificados/Soft_Skills/Eficiencia Operacional/ef_Pevención de Pérdidas.pdf"
            }
        ]
    },
    DIV_TABLA3_SEC3: {
        rows: [
            {
                Celdas_de_fila: ["Capacitación Sence", "Calidad en la atención al cliente", "Neuralis Capacitación Limitada", "10"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Calidad en la atención al cliente.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Desarrollo de competencias para la excelencia en el servicio", "Growth Factor S.A.", "16"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Desarrollo de competencias para la Excelencia del servicio.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Desarrollo de Habilidades en contacto con clientes", "Growth Factor S.A.", "8"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Desarrollo de Habilidades de venta en el contacto con clientes.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Habilidades para la calidad de Servicios", "Growth Factor S.A.", "8"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Habilidades para la calidad de Servicios.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Actualización en el manejo de productos para la efectividad del servicio al cliente I", "Sprint Consultores S.A.", "8"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Actualización en el manejo de productos para la efectividad del servicio al cliente -1.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Actualización en el manejo de productos para la efectividad del servicio al cliente II", "Sprint Consultores S.A.", "8"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Actualización en el manejo de productos para la efectividad del servicio al cliente - 2.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Técnicas de venta en el contacto con clientes", "Growth Factor S.A.", "8"],
                enenlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Técnicas de venta en contacto con clientes.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Manejo de productos en la atención integral de clientes", "Sprint Consultores S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Servicio al cliente/sac_Manejo de productos en la atención integral de clientes.pdf"
            }
        ]
    },
    DIV_TABLA4_SEC3: {
        rows: [
            {
                Celdas_de_fila: ["Capacitación Sence", "Desarrollo De Habilidades De Retail", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Gestión de Retail/gr_Desarrollo de Habilidades de Retail.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Estrategias del Retail y Control de Gestión", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Gestión de Retail/gr_Estrategias del Retail y Control de Gestión.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Gestion efectiva de locales en retail - I", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Gestión de Retail/gr_Gestion efectiva de locales en retail - I.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Gestion efectiva de locales en retail - II", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Gestión de Retail/gr_Gestion efectiva de locales en retail - II.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Gestión efectiva de Tienda", "Growth Factor S.A.", "8"],
                enlace: "./Certificados/Soft_Skills/Gestión de Retail/gr_Gestión efectiva e Tienda.pdf"
            }
        ]
    },
    DIV_TABLA5_SEC3: {
        rows: [
            {
                Celdas_de_fila: ["Capacitación Sence", "Técnicas de primeros auxilios y manejo de emergencias", "Granvía Capacitación Limitada", "8"],
                enlace: "./Certificados/Soft_Skills/Recursos Humanos/3_Primeros Auxilios Y Manejo De Emergencias.pdf"
            },
            {
                Celdas_de_fila: ["Capacitación Sence", "Tutela de derechos fundamentales Cencosud", "Fundación de Capacitación Sofofa", "5"],
            }
        ]
    }
};

// Función para crear enlace con imagen en una celda
function crearLinkCelda(url) {
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.classList.add("MiPopup");
    enlace.textContent = ENLACE_TEXTO;

    const imagen = document.createElement("img");
    imagen.src = ENLACE_IMAGEN;
    imagen.classList.add("img_lupa");

    enlace.appendChild(imagen);

    const celda = document.createElement("td");
    celda.appendChild(enlace);
    return celda;
}

// Función para crear la tabla
function createTable(header_dinamicos, Celdas_de_fila, containerId) {
    const contenedor = document.getElementById(containerId);
    const agregar_Table = document.createElement("table");
    agregar_Table.classList.add("table", "table-hover");

    // Crear <thead> con encabezados proporcionados
    const agregar_Thead = document.createElement("thead");
    const agregar_tr_header = document.createElement("tr");

    header_dinamicos.forEach(header => {
        const agregar_th = document.createElement("th");
        agregar_th.textContent = header;
        agregar_tr_header.appendChild(agregar_th);
    });

    agregar_Thead.appendChild(agregar_tr_header);
    agregar_Table.appendChild(agregar_Thead);


    // Crear <tbody>
    const agregar_tbody = document.createElement("tbody");
    Celdas_de_fila.forEach(runFila => {
        const agregar_tr = document.createElement("tr");

        runFila.Celdas_de_fila.forEach((contenido_td, indice_celda) => {
            const agregar_td = document.createElement("td");
            agregar_td.textContent = contenido_td;
            agregar_td.setAttribute("data-label", header_dinamicos[indice_celda]);  // Agregar el atributo data-label
            
            // Agregar clase al primer elemento
            if (indice_celda === 0) {
                agregar_td.classList.add("td_inicial"); // Reemplaza "tu-clase" con la clase deseada
            }

            agregar_tr.appendChild(agregar_td);
        });

        // Agregar celda con enlace en la última columna de cada fila
        const agregar_linkCelda = crearLinkCelda(runFila.enlace);
        agregar_tr.appendChild(agregar_linkCelda);

        agregar_tbody.appendChild(agregar_tr);
    });

    agregar_Table.appendChild(agregar_tbody);
    contenedor.appendChild(agregar_Table);
}

// Generar todas las tablas en cada contenedor
Object.keys(colection_tablas).forEach(KontenedorId => {
    const contenedorActual = colection_tablas[KontenedorId];
    const agregar_header = contenedorActual.header_dinamicos || header_fijos; // Usa headers del contenedor o, si no existen, usa los headers fijos
    createTable(agregar_header, contenedorActual.rows, KontenedorId);
    //param 1 = colection_tablas[contenedor iterando].header_dinamicos || header_fijos, 
    //param 2 = colection_tablas[contenedor iterando].rows, 
    //param 3 = colection_tablas en iteración
});

// ----------------- FUNCIÓN PARA MOSTRAR LOS CERTIFICADOS -----------------------


// Función para abrir una ventana emergente y mostrar un archivo PDF
function openPdfInPopup(url) {
    const popupWidth = 640;
    const popupHeight = 480;

    // Cálculo para centrar la ventana emergente
    const left = (window.innerWidth - popupWidth) / 2 + window.screenX;
    const top = (window.innerHeight - popupHeight) / 2 + window.screenY;

    // Crear la ventana emergente con el visor de PDF
    const popup = window.open(
        '', // Título vacío
        '', // Usamos un nombre vacío para que no se sobreescriba ninguna ventana existente
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,resizable=no`
    );

    // Escribir contenido HTML dentro de la ventana emergente
    popup.document.write(`
        <html>
            <head>
                <title>Visor PDF</title>
            </head>
            <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100%; background-color: #f0f0f0;">
                <embed src="${url}" type="application/pdf" width="100%" height="100%" />
            </body>
        </html>
    `);
}

// Seleccionar todos los enlaces que tienen la clase 'MiPopup'
const links = document.querySelectorAll('a.MiPopup');

// Asignar evento de click a cada enlace
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar la navegación estándar del enlace
        openPdfInPopup(this.href); // Abrir el archivo PDF en el visor de la ventana emergente
    });
});
