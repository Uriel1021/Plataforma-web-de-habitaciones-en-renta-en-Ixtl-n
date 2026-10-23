# Estancia Ixtlán — Instrucciones de ejecución y credenciales

**Proyecto:** Front-end de la plataforma web de habitaciones en renta en Ixtlán, Oaxaca.  
**Tecnologías:** HTML5, Tailwind CSS y JavaScript modular (ES Modules).  
**Entorno:** macOS con Visual Studio Code y Node.js.

> **Importante:** este proyecto es un **prototipo de demostración**. Los usuarios, datos y contraseñas son ficticios. La autenticación y la persistencia funcionan localmente en el navegador; no representan seguridad ni un servicio de producción.

## 1. Requisitos previos

- **Visual Studio Code** instalado.
- **Node.js 18 o posterior** instalado. **npm viene incluido** con Node.js.
- Navegador actualizado (Safari, Chrome, Edge o Firefox).

Si aún no tienes Node.js, descarga la versión **LTS** desde <https://nodejs.org/es/download>, selecciona el instalador para macOS (`.pkg`) y sigue el asistente.

Para comprobar la instalación, abre **Terminal** y ejecuta:

```bash
node -v
npm -v
```

Ambos comandos deben mostrar un número de versión. No es necesario instalar npm por separado.

## 2. Descomprimir y abrir el proyecto

1. Descarga el repositorio.
2. Abre **Visual Studio Code**.
3. Selecciona **Archivo → Abrir carpeta** (*File → Open Folder*).
4. Elige la carpeta **`FrontEnd_Ixtlan`**. Debes ver `index.html`, `package.json`, las carpetas `src`, `assets`, `tools` y `tests`.
5. Abre **Terminal → Nueva terminal** dentro de VS Code.

Comprueba que estás dentro de la carpeta correcta:

```bash
ls
```

Debe aparecer el archivo `package.json`.

## 3. Iniciar el servidor y acceder a la plataforma

En la terminal integrada de VS Code ejecuta:

```bash
npm run dev
```

Cuando aparezca la dirección del servidor, abre en el navegador:

**<http://localhost:5500>**

**No se requiere `npm install` para ejecutar el proyecto**, porque el servidor utiliza Node.js nativo y el CSS de Tailwind ya está compilado e incluido.

Para **detener** el servidor, regresa a la terminal y presiona **Control + C**.

## 4. Credenciales de acceso

| Rol | Correo electrónico | Contraseña | Uso principal |
|---|---|---|---|
| **Administrador** | `admin@demo.test` | `admin123` | Aprobar publicaciones, gestionar arrendadores, moderar opiniones y consultar el territorio. |
| **Arrendador 1** | `maria@demo.test` | `demo123` | Crear y administrar sus habitaciones. |
| **Arrendador 2** | `carlos@demo.test` | `demo123` | Crear y administrar sus habitaciones. |
| **Visitante** | **No requiere cuenta** | **No requiere contraseña** | Explorar habitaciones, usar filtros y participar en los flujos públicos disponibles. |

**Cómo iniciar sesión:** en la plataforma selecciona **Iniciar sesión**, escribe el correo y la contraseña de la tabla y entra con el rol correspondiente.

> Estas credenciales son **solo de prueba**. No las reutilices en servicios reales. El prototipo guarda credenciales y datos en `localStorage` del navegador, lo que **no es adecuado para producción**.

## 5. Funcionalidades que puedes probar

### Como visitante

- Consultar el catálogo y los detalles de habitaciones.
- Filtrar por renta, zona, servicios, disponibilidad y otras características.
- Utilizar el mapa de **demostración** y el filtro por distancia.
- Enviar comentarios o calificaciones sujetos a moderación.
- Consultar o enviar apelaciones mediante folio, según los flujos simulados.

### Como arrendador

- Consultar las habitaciones propias.
- Crear publicaciones para aprobación administrativa.
- Actualizar campos permitidos y proponer cambios de ubicación.
- Eliminar publicaciones conforme a las restricciones implementadas en el prototipo.

### Como administrador

- Aprobar publicaciones nuevas y moderar opiniones.
- Crear cuentas ficticias de arrendadores.
- Revisar cambios de ubicación y versiones del polígono **sintético**.
- Simular fallas geográficas y restablecimiento del servicio.
- Consultar notificaciones e historial básico.

Para recuperar los datos iniciales del prototipo, utiliza la opción **«Restablecer demo»** de la interfaz.

## 6. Ejecutar las pruebas automatizadas

Con la terminal situada en `FrontEnd_Ixtlan`, ejecuta:

```bash
npm test
```

Esto ejecuta las pruebas incluidas para reglas de búsqueda, filtros y validación territorial. **No sustituye las pruebas completas de interfaz ni certifica la cobertura total del SRS**.

## 7. Problemas frecuentes

| Problema | Qué revisar |
|---|---|
| `zsh: command not found: node` o `npm` | Instala Node.js LTS y reinicia Terminal y VS Code. Comprueba `node -v` y `npm -v`. |
| `npm error Missing script: dev` | Asegúrate de ejecutar el comando desde la carpeta `FrontEnd_Ixtlan`, que contiene `package.json`. |
| No abre `http://localhost:5500` | Verifica que `npm run dev` siga ejecutándose y que no haya mostrado errores. |
| El puerto `5500` está en uso | Detén el servidor anterior con `Control + C`, o revisa qué programa utiliza ese puerto. |
| Los cambios anteriores siguen apareciendo | Usa **«Restablecer demo»**. La demo conserva información en `localStorage`. |
| Abriste `index.html` directamente y no funciona | Usa `npm run dev` y entra por `http://localhost:5500`; evita abrir con `file://`. |

## 8. Archivos importantes del proyecto

```text
FrontEnd_Ixtlan/
├── index.html
├── package.json
├── README.md
├── INSTRUCCIONES_Y_CREDENCIALES.md
├── assets/              # CSS e ilustraciones
├── src/
│   ├── main.js          # Navegación y carga diferida de vistas
│   ├── core/            # Estado y utilidades
│   ├── domain/          # Reglas de negocio
│   ├── services/        # Operaciones y persistencia
│   ├── controllers/     # Coordinación de casos de uso
│   ├── components/      # Componentes reutilizables
│   └── views/           # Vistas de la aplicación
├── tests/               # Pruebas automatizadas
└── tools/               # Servidor de desarrollo y utilidades
```

## 9. Alcance actual

Esta versión está diseñada para probar el **front-end** y sus flujos locales. Para su uso real se necesitarán backend, base de datos multiusuario, autenticación segura, carga real de fotografías, mapas y límites territoriales oficiales, auditoría y servicios de operación persistentes.

Para obtener más detalles técnicos consulta `README.md`, `docs/COBERTURA_SRS.md` y `docs/PRINCIPIOS_NIELSEN.md`.
