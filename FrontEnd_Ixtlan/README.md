# Estancia Ixtlán — Front-end demostrativo

**Sitio web modular para publicar y explorar habitaciones en renta exclusivamente en la localidad de Ixtlán, Oaxaca.**

Stack: **HTML5 + Tailwind CSS 4 (CSS generado incluido) + JavaScript ES modules**, sin React, Vue ni bibliotecas de interfaz. Organizado por dominios, servicios, controladores y vistas, preparado para evolucionar hacia **MVC + API backend**.

> **IMPORTANTE: prototipo navegable, NO producto listo para producción.** Las habitaciones, teléfonos, imágenes y geometría territorial son ficticios. No está conectada a una base de datos, servicio de mapas oficial ni servidor de autenticación. Las funcionalidades dependientes de servidor se muestran como simulaciones. El documento de origen es `docs/SRS_REFERENCIA.md` y su estado es borrador.

## 1. Cómo abrirlo en Visual Studio Code

1. Descomprime el ZIP y abre la carpeta `FrontEnd_Ixtlan` en **Visual Studio Code** (`Archivo → Abrir carpeta`).
2. Abre la terminal integrada (`Terminal → Nueva terminal`).
3. Comprueba que tienes **Node.js 18 o posterior** (`node --version`).
4. Ejecuta:

   ```bash
   npm run dev
   ```

5. Abre **http://localhost:5500** en Chrome, Edge o Firefox.

**No necesitas `npm install`** para ejecutar: el servidor de desarrollo utiliza únicamente módulos nativos de Node.js y el CSS de Tailwind ya está compilado en `assets/css/tailwind.generated.css`.

**Alternativa si no tienes Node:** con Python 3 instalado, en la raíz ejecuta `python -m http.server 5500` y abre `http://localhost:5500`. También puedes usar la extensión *Live Server* de VS Code. **No abras directamente `index.html` con `file://`**, porque los módulos ES pueden estar restringidos por el navegador.

## 2. Usuarios de demostración

| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | `admin@demo.test` | `admin123` |
| Arrendador | `maria@demo.test` | `demo123` |
| Arrendador adicional | `carlos@demo.test` | `demo123` |
| Visitante | Sin cuenta | Sin contraseña |

**Seguridad:** estas credenciales son exclusivamente ficticias, se guardan en `localStorage` en texto claro y **no deben utilizarse con personas o datos reales**. El control de roles del navegador puede eludirse; no reemplaza la autorización de un servidor.

## 3. Funcionalidades probables en la demo

### Público

- Página principal, catálogo, detalle de habitación y contacto informativo.
- Búsqueda por título/zona/dirección.
- Filtro por rango de renta base inclusivo, múltiples zonas (OR), radio positivo decimal geodésico, estado de disponibilidad, 10 servicios normalizados (OR), sin servicios incluidos, amueblado, baño y capacidad mínima; AND entre grupos.
- Orden inicial por aprobación reciente, orden por precio y media de calificaciones aprobadas (habitaciones sin promedio al final).
- Esquema de mapa interactivo, marcador y límite territorial visible al abrir, opción de ocultarlo, selección del centro de distancia.
- Opiniones anónimas: los comentarios y las estrellas se envían como **registros moderables independientes**. Apelación sin cuenta mediante folio.

### Arrendador

- Panel de habitaciones propias, creación sujeta a aprobación, edición de datos no geográficos, cambios de ubicación con validación del polígono demo, eliminación con cancelación de actualización pendiente de aplicación.
- Campos de título, dirección, zona, coordenadas, descripción, renta positiva entera, capacidad, disponibilidad, amueblado, baño, contacto, servicios y **1–5 ilustraciones predefinidas** (la carga de fotografías reales requiere backend).
- Durante la falla de verificación, el sistema conserva la ubicación publicada anterior y permite cambiar datos no geográficos.

### Administración

- Aprobación inicial de habitaciones y moderación de opiniones y apelaciones.
- Creación exclusiva de cuentas de arrendador.
- Corrección/revisión geográfica de demostración y versionado de un polígono sintético con motivo obligatorio, vista previa de cambios y restauración como versión nueva.
- Botón para simular una falla de verificación y restablecer el servicio, provocando reintentos locales.
- Notificaciones internas y un historial básico de acciones.

## 4. Flujo de prueba sugerido

1. En `#explorar`, prueba varios filtros, un precio mínimo mayor al máximo y la vista de mapa; pulsa en el mapa para elegir un centro, e introduce un radio en km.
2. En una ficha, envía comentario y calificación. Inicia sesión como administrador y comprueba que aparecen como **dos elementos independientes de moderación**. Apruébalos.
3. En Administración → Arrendadores, crea una cuenta ficticia; luego inicia sesión con ella y crea una habitación. Vuelve al administrador para aprobarla si su ubicación quedó validada.
4. En Administración → Territorio, selecciona «Simular falla técnica». Como arrendador, edita coordenadas de una habitación existente. Aparecerá «Pendiente de verificación» y permanecerá publicada la ubicación anterior. Vuelve a administración y restablece el servicio.
5. En Administración → Territorio, desplaza el polígono, observa cuántas habitaciones cambiarían de clasificación, proporciona el motivo y confirma la nueva versión. Consulta Historial.
6. En Administración → Opiniones, modera los comentarios. En `#apelaciones`, presenta una apelación y comprueba el estado por folio.
7. Usa «Restablecer demo» en la parte superior para recuperar los datos iniciales.

## 5. Arquitectura y separación de responsabilidades

```text
FrontEnd_Ixtlan/
├── index.html                  # Documento base y puntos de montaje
├── package.json                # Comandos Node sin instalación para ejecución
├── README.md
├── assets/
│   ├── css/
│   │   ├── tailwind.generated.css # Tailwind v4 generado, disponible sin internet
│   │   └── app.css              # Identidad visual, componentes y responsive
│   └── images/                  # Ilustraciones SVG locales, no anuncios reales
├── src/
│   ├── main.js                  # Router con import() por vista, layout global
│   ├── core/
│   │   ├── store.js             # Estado central; suscripción y localStorage
│   │   └── helpers.js           # HTML seguro, iconos, modal y avisos
│   ├── data/seed.js             # Datos de demostración
│   ├── domain/                 # Modelos/reglas puras y verificables
│   │   ├── constants.js
│   │   ├── geo.js               # Geodesia y punto dentro de polígono inclusivo
│   │   └── filters.js           # Búsqueda, filtro, normalización y orden
│   ├── services/               # Casos de uso y persistencia
│   │   ├── auth.js
│   │   ├── rooms.js
│   │   ├── reviews.js
│   │   ├── territory.js
│   │   └── notify.js
│   ├── controllers/
│   │   ├── catalogController.js
│   │   └── roomController.js
│   ├── components/             # Componentes reusables
│   │   ├── cards.js
│   │   └── map.js
│   └── views/                  # Vistas importadas bajo demanda
│       ├── home.js
│       ├── catalog.js
│       ├── detail.js
│       ├── login.js
│       ├── landlord.js
│       ├── admin.js
│       ├── appeals.js
│       └── notifications.js
├── tests/filters.test.js       # Pruebas automáticas de reglas puras
├── docs/
│   ├── SRS_REFERENCIA.md
│   ├── PRINCIPIOS_NIELSEN.md
│   └── COBERTURA_SRS.md
└── tools/
    ├── dev-server.js           # Servidor estático Node nativo
    ├── build-css.js            # Tailwind CSS: regeneración opcional
    └── create-art.py           # Creador de ilustraciones de ejemplo
```

### Preparado para MVC

- **Modelo (M):** `src/domain`, `src/data` y el estado gestionado por `src/core/store.js`.
- **Vista (V):** `src/views`, `src/components` y estilos en `assets`.
- **Controlador (C):** `src/main.js` coordina la navegación; `src/controllers` orquesta casos de uso; `src/services` implementa operaciones del dominio. La modularización permite mover cada caso de uso a controladores y API sin rehacer las vistas.
- **Estado:** estado central con guardado local, separado de variables de presentación temporales como filtros o pestañas.
- **Lazy loading:** cada vista entra mediante `import()` cuando se navega a ella, y las ilustraciones secundarias utilizan `loading="lazy"`.
- **Dependencias:** no hay framework frontend; los imports son ES modules nativos.

## 6. Tailwind CSS

Las clases Tailwind utilizadas están **compiladas e incluidas** en el ZIP. Los estilos específicos de la interfaz están en `app.css` para mantener componentes reutilizables y una identidad visual consistente.

Si añades clases Tailwind nuevas, ejecuta una vez `npm install` para instalar Tailwind y después `npm run build:css` para regenerar el archivo. El funcionamiento habitual no requiere instalar dependencias.

## 7. Pruebas automatizadas

```bash
npm test
```

Las pruebas comprueban rango de precios inclusivo, validación de rango incorrecto, comparación normalizada de zonas, OR dentro de filtros, AND entre grupos, orden por renta, promedio aprobado, geodesia y contención inclusiva de fronteras. **No equivalen a pruebas integrales de todas las rutas/UI ni al cumplimiento completo de la SRS.**

## 8. Límites y pendientes antes del sistema real

El prototipo **no implementa en producción**: autenticación segura, backend y base de datos multiusuario, autorización del servidor, carga real de fotografías, servicio cartográfico/geocodificación con fuentes oficiales, geometría real de la localidad, tareas programadas fuera del navegador, control antibot por IP/huella del navegador, canales persistentes de notificación, auditoría inmutable, regulación y retención de datos, RPO/RTO, pruebas de carga, accesibilidad certificada, ni todas las excepciones administrativas del SRS. El filtro por zona, la media y moderación, la distinción de estados y el manejo básico de fallos **sí funcionan localmente**.

**Punto especialmente pendiente del SRS:** si el arrendador puede eliminar una habitación mientras su verificación geográfica está pendiente por falla técnica. Esta acción queda bloqueada en el prototipo hasta que se confirme esa decisión. La eliminación con *aplicación* pendiente sí está habilitada (D-158).

Consulta `docs/COBERTURA_SRS.md` para la trazabilidad, y `docs/PRINCIPIOS_NIELSEN.md` para las diez heurísticas.
