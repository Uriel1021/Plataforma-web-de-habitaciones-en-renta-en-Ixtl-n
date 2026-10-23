# MI-FORA-CHOZA Ixtlán

> AUTOR: L.I. Uriel Aguilar Mauricio

**Plataforma web demostrativa para consultar, buscar y publicar habitaciones en renta exclusivamente dentro de la localidad de Ixtlán, Oaxaca, México.**

Proyecto de ingeniería de requisitos y desarrollo front-end, documentado a partir de una Especificación de Requisitos de Software (SRS) y estructurado para evolucionar hacia una arquitectura **Modelo–Vista–Controlador (MVC)**.

> **Estado:** prototipo académico interactivo. Los usuarios, inmuebles, imágenes, contactos y datos territoriales son ficticios. No debe utilizarse como plataforma inmobiliaria de producción.

## Tecnologías

- **HTML5** para la estructura semántica.
- **Tailwind CSS 4** (hoja de estilos compilada e incluida) y CSS para el diseño responsive.
- **JavaScript ES Modules** sin framework, con módulos por responsabilidad.
- **Node.js** para ejecutar el servidor local y las pruebas.
- **`localStorage`** para almacenar datos de demostración en cada navegador.

## Funcionalidades de la demostración

| Área | Funcionalidades disponibles |
|---|---|
| Visitante | Catálogo, búsqueda, filtros combinables, detalles y mapa ilustrativo. |
| Arrendador | Inicio de sesión de prueba, creación y administración de publicaciones y edición de campos permitidos. |
| Administrador | Aprobación de publicaciones, gestión de arrendadores, moderación y controles territoriales simulados. |
| Opiniones | Comentarios y calificaciones enviados a moderación; apelaciones mediante folio. |
| Geografía | Verificación con un polígono **sintético**, versiones y simulación de fallas y reintentos locales. |
| Experiencia de usuario | Interfaz responsive, navegación consistente y criterios de diseño basados en las 10 heurísticas de Jakob Nielsen. |

La implementación está orientada al SRS, pero **no constituye una implementación integral de todos sus requisitos**. Consulta `FrontEnd_Ixtlan/docs/COBERTURA_SRS.md` para conocer el alcance y las limitaciones.

## Estructura del repositorio

```text
PROJECT/
├── README.md                              # Presentación principal para GitHub
├── FrontEnd_Ixtlan/                       # Aplicación web demostrativa
│   ├── index.html
│   ├── package.json
│   ├── assets/                             # CSS e imágenes de demostración
│   ├── src/
│   │   ├── core/                          # Estado y utilidades
│   │   ├── data/                          # Datos ficticios iniciales
│   │   ├── domain/                        # Reglas y modelos del dominio
│   │   ├── services/                      # Operaciones y persistencia
│   │   ├── controllers/                   # Coordinación de casos de uso
│   │   ├── components/                    # Componentes reutilizables
│   │   ├── views/                         # Vistas con carga bajo demanda
│   │   └── main.js                        # Inicio y navegación
│   ├── tests/                             # Pruebas automatizadas
│   ├── tools/                             # Servidor local y utilidades
│   └── docs/                              # Cobertura del SRS y heurísticas
├── 01_descripcion del proyecto.md
├── 02_stakeholders.md
├── 03_lista de deseos y necesidades.md
├── 04_lista de requisitos.md
├── 05_especificacion de requerimientos (srs).md
└── INSTRUCCIONES_Y_CREDENCIALES.md
```

## Requisitos para ejecutarlo

1. [Node.js](https://nodejs.org/es/download) **18 o posterior** (incluye `npm`).
2. [Visual Studio Code](https://code.visualstudio.com/) o cualquier editor.
3. Un navegador moderno (Chrome, Firefox, Edge o Safari).

Comprueba la instalación desde Terminal:

```bash
node -v
npm -v
```

## Ejecutar en macOS, Windows o Linux

Desde la carpeta raíz del repositorio (`PROJECT`):

```bash
cd FrontEnd_Ixtlan
npm run dev
```

Abre **http://localhost:5500**.

**No necesitas ejecutar `npm install` para iniciar la demo.** El servidor usa módulos nativos de Node.js y el CSS de Tailwind ya está compilado. Para detener el servidor, pulsa **Ctrl + C** en la terminal.

> No abras el `index.html` directamente con `file://`; utiliza el servidor local para que funcionen los módulos JavaScript.

### Ejecutar las pruebas

En `FrontEnd_Ixtlan`:

```bash
npm test
```

Las pruebas cubren reglas del dominio y flujos seleccionados; no certifican el cumplimiento de todo el SRS.

## Accesos de demostración

| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | `admin@demo.test` | `admin123` |
| Arrendador | `maria@demo.test` | `demo123` |
| Arrendador adicional | `carlos@demo.test` | `demo123` |
| Visitante | No necesita cuenta | No aplica |

**Advertencia:** las credenciales son públicas y ficticias. La autenticación y la información de esta demo se gestionan dentro del navegador. No introduzcas datos reales, contraseñas personales ni información confidencial.

Para reiniciar los datos iniciales, utiliza la opción **«Restablecer demo»** de la interfaz.

## Organización y arquitectura

La aplicación separa responsabilidades para facilitar su mantenimiento y futura integración con un backend:

- **Modelo:** `src/domain/`, `src/data/` y `src/core/store.js` (reglas, datos y estado).
- **Vista:** `src/views/`, `src/components/` y `assets/` (presentación).
- **Controlador:** `src/controllers/`, apoyado por `src/main.js` y `src/services/` (interacción y casos de uso).
- **Gestión de estado:** almacenamiento centralizado con persistencia local de demostración.
- **Carga bajo demanda:** importación dinámica de vistas con `import()` e imágenes secundarias diferidas.

Es una **estructura preparada para MVC**, no una aplicación con un backend MVC ya implementado.

## Documentación de requisitos

Los documentos de la raíz describen el proceso de especificación:

1. **`01_descripcion del proyecto.md`** — Problema, alcance, objetivos y contexto.
2. **`02_stakeholders.md`** — Partes interesadas y responsabilidades.
3. **`03_lista de deseos y necesidades.md`** — Deseos, necesidades y trazabilidad.
4. **`04_lista de requisitos.md`** — Requisitos funcionales y no funcionales.
5. **`05_especificacion de requerimientos (srs).md`** — Especificación principal de requisitos de software.

Otros documentos: `INSTRUCCIONES_Y_CREDENCIALES.md`, `FrontEnd_Ixtlan/docs/PRINCIPIOS_NIELSEN.md` y `FrontEnd_Ixtlan/docs/COBERTURA_SRS.md`.

> Los cinco documentos son una consolidación de las decisiones del análisis. Los requisitos todavía pendientes de validación deben tratarse como pendientes, no como implementados ni aprobados.

