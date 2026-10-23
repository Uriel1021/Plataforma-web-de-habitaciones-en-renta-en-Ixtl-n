# Stakeholders — Registro de partes interesadas

**Proyecto:** Plataforma web de habitaciones en renta en la localidad de Ixtlán, Oaxaca  
**Versión:** 1.0  
**Fecha:** 23 de octubre de 2026

**Autor:** Uriel Aguilar Mauricio


> **Control de procedencia.** Este documento consolida el proceso previo de elicitación: 158 decisiones confirmadas (D-01 a D-158), 50 identificadores de necesidades (N-01 a N-50), 11 stakeholders y numeración histórica de reglas hasta RN-967. Las **redacciones aquí consolidadas** son editoriales y no pretenden reproducir palabra por palabra todas las actas ni las 967 reglas. Se conservan como referencias exactas las decisiones finales disponibles; cualquier correspondencia global sin acta literal se identifica como trazabilidad temática. Los requisitos nuevos `RF-###` y `RNF-###` son identificadores propios de esta versión del catálogo y no equivalen a los antiguos `RN-###`. Las prestaciones todavía no decididas se etiquetan **PENDIENTE** y no deben tratarse como aprobadas.


## 1. Propósito

Identificar a las personas, grupos y entidades que participan en la definición, utilización, administración, desarrollo, operación o supervisión de la plataforma. Se diferencian **stakeholders** de **roles con acceso a la aplicación**: algunos interesados no requieren una cuenta ni utilizarán directamente el sistema.

## 2. Catálogo de stakeholders

| ID | Stakeholder | Participación | Intereses y necesidades principales | Relación con el producto |
| --- | --- | --- | --- | --- |
| ST-01 | Personas que buscan habitaciones | Principal; visitante | Encontrar opciones reales dentro de la localidad; evaluar precio, ubicación, características y contacto | Consulta, filtros, mapa, opiniones, contacto; sin cuenta |
| ST-02 | Arrendadores o caseros | Principal; autenticado | Publicar y gestionar habitaciones propias, contactar interesados, conocer estados y alertas | Alta administrada; CRUD propios; aprobación inicial; geoverificación |
| ST-03 | Inquilinos actuales o anteriores | Principal; participación pública | Compartir experiencias y valorar habitaciones | Comentarios y/o calificaciones sin cuenta, moderación, apelación de bloqueos |
| ST-04 | Administrador del sistema | Principal; autenticado | Controlar publicación, moderación, límites territoriales, incidencias y auditoría | Aprobaciones, eliminaciones, excepciones, cartografía y notificaciones |
| ST-05 | Propietario o promotor del proyecto | Decisor | Que la plataforma cubra Ixtlán y resulte útil y sostenible | Definición de alcance y aceptación del producto |
| ST-06 | Analista de requisitos | Soporte | Trazabilidad, consistencia y posibilidad de verificación | Modelo N → RF/RNF → prueba; control de decisiones |
| ST-07 | Equipo de desarrollo | Soporte | Especificaciones implementables, entradas y resultados inequívocos | Interfaces, estados, validaciones, reglas y errores |
| ST-08 | Equipo de pruebas y calidad | Soporte | Casos objetivos y resultados esperados verificables | Criterios de aceptación, límites, fallos, regresión |
| ST-09 | Personal de mantenimiento y soporte | Operación | Diagnosticar incidencias y preservar continuidad | Estados, reintentos, historial y trazas permitidas |
| ST-10 | Proveedores de servicios tecnológicos | Externo | Integración definida y segura para mapa, geocodificación y alojamiento | Dependencias sujetas a selección de proveedor |
| ST-11 | Autoridades y organismos reguladores | Externo | Tratamiento y conservación de datos conforme a legislación aplicable | Revisión de privacidad, datos y obligaciones legales |


## 3. Matriz de influencia e involucramiento

> La clasificación siguiente es una **propuesta analítica para planificación de trabajo**, no una decisión aprobada acerca de jerarquías o autoridad institucional.

| Stakeholder | Influencia estimada | Interés estimado | Estrategia de trabajo |
| --- | --- | --- | --- |
| ST-01 Personas que buscan habitaciones | Media | Alta | Evaluar consultas, mapa, filtros, precio y utilidad de fichas. |
| ST-02 Arrendadores | Alta | Alta | Validar formularios, ciclo de publicación, ubicación, edición y avisos. |
| ST-03 Inquilinos actuales o anteriores | Media | Alta | Validar aportaciones anónimas, moderación y seguimiento de apelaciones. |
| ST-04 Administrador | Alta | Alta | Validar aprobación, moderación, ubicación, historial, excepciones e incidencias. |
| ST-05 Promotor | Alta | Alta | Autorizar alcance, criterios de prioridad y aceptación final. |
| ST-06 Analista | Media | Alta | Revisar trazabilidad, consistencia, cambios y requisitos pendientes. |
| ST-07 Desarrollo | Media | Alta | Refinar interfaces, validaciones, estados e integraciones. |
| ST-08 Pruebas y calidad | Media | Alta | Formalizar pruebas funcionales y atributos mensurables. |
| ST-09 Soporte | Media | Media | Evaluar recuperación y diagnóstico de incidencias. |
| ST-10 Proveedores | Variable | Media | Acordar contratos, disponibilidad y especificaciones de integración. |
| ST-11 Reguladores | Alta en cumplimiento | Variable | Verificar obligaciones y protección de datos aplicables. |


## 4. Acciones y permisos esperados

| Acción | Visitante / ST-01 y ST-03 | Arrendador / ST-02 | Administrador / ST-04 |
| --- | --- | --- | --- |
| Consultar fichas, mapa y filtros | Sí | Sí | Sí |
| Publicar comentario o estrellas | Sí, sin cuenta | Como visitante | Como visitante |
| Crear cuenta de arrendador | No | No: la crea el administrador | Sí |
| Crear habitación | No | Sí, propias | Según funciones de administración; no sustituye reglas de alta |
| Editar habitación propia | No | Sí | Puede corregir bajo atribuciones |
| Aprobar nueva habitación | No | No | Sí |
| Moderar comentarios y estrellas | No | No | Sí |
| Solicitar revisión de clasificación exterior | No | Sí | Resuelve |
| Editar versión de polígono | No | No | Sí |
| Ver historial de polígonos | No | No | Sí |
| Ver polígono activo | Sí | Sí | Sí |
| Notificaciones de incidencias técnicas | No | De sus habitaciones | De habitaciones afectadas |
| Historial de eliminaciones | No | Solo el propio | Registro administrativo autorizado |


## 5. Principales intereses por stakeholder

### ST-01 — Persona que busca una habitación

**Deseos:** buscar sin cuenta; visualizar mapa, precio, fotografías y reputación; saber si está disponible o rentada; contactar de forma directa; combinar filtros sin perder criterios. **Riesgos a prevenir:** publicaciones que pertenezcan al municipio pero no a la localidad de Ixtlán, información de ubicación contradictoria y promedios alimentados por votos no aprobados.

### ST-02 — Arrendador

**Deseos:** gestionar habitaciones propias sin aprobación adicional para cada edición, saber por qué se oculta una publicación, ser notificado de resultados técnicos, mantener datos ante una falla, corregir ubicación y eliminar habitaciones. **Límites:** su cuenta la crea el administrador; un alta nueva requiere aprobación; no puede editar coordenadas durante verificaciones/reintentos bloqueados.

### ST-03 — Inquilino actual o anterior

**Deseos:** comunicar experiencia sin cuenta y consultar opiniones anteriores. **Límites:** moderación de comentario y estrellas separada; los intentos de calificar pueden bloquearse por abuso; existe apelación sin cuenta mediante folio.

### ST-04 — Administrador

**Deseos:** aprobar altas, resolver revisiones y apelaciones, excluir contenidos inadecuados, visualizar incidencia territorial y cambios en mapa. **Responsabilidades:** decidir excepciones solo dentro de Ixtlán; justificar y versionar cambios del polígono; registrar motivos obligatorios cuando corresponda; proteger historial.

### ST-05 — Promotor

**Deseos:** claridad sobre alcance, resultados y priorización; controlar que ninguna función implícita expanda producto a pagos/reservas o fuera de localidad sin nueva decisión.

### ST-06 a ST-09 — Analista, desarrollo, pruebas y soporte

**Deseos de trabajo:** términos uniformes, identificadores estables, trazabilidad, resultados observables, fallos reproducibles, reintentos seguros y atributos de calidad medibles.

### ST-10 — Proveedores

**Expectativas:** especificaciones de proveedor y dependencias conocidas; el producto debe manejar caídas de geocodificación/verificación sin presentar datos falsos.

### ST-11 — Reguladores

**Expectativas:** estudiar privacidad, publicación de contactos, controles antiabuso y retención histórica conforme a legislación aplicable. Las obligaciones legales concretas aún deben validarse con asesoría competente.

## 6. Potenciales conflictos y resoluciones confirmadas

| Intereses potencialmente opuestos | Regla acordada |
| --- | --- |
| Rapidez de publicación vs. veracidad territorial | Alta nueva necesita verificación territorial y aprobación general. |
| Facilidad de opiniones sin cuenta vs. confiabilidad | Sin cuenta y moderación independiente; control antiabuso en intentos de estrellas. |
| Cambiar ubicación rápido vs. coherencia pública | Publicación mantiene ubicación anterior íntegra hasta aplicar nueva validada. |
| Nueva delimitación vs. continuidad de publicaciones | Publicadas potencialmente externas siguen visibles mientras se revisa el caso. |
| Transparencia de límites vs. privilegios de administración | Todos ven polígono actual; solo administrador ve historial y lo modifica. |
| Avisos de problemas vs. saturación | Una notificación inicial; reintentos fallidos del mismo estado no envían nuevas. |
| Eliminar contenido vs. trazabilidad | Contenido deja de ser público; se conserva historial administrativo conforme a reglas. |


## 7. Mapa de trazabilidad de alto nivel

| Stakeholder | Necesidades relacionadas |
| --- | --- |
| ST-01 | N-01–N-09, N-36, N-47 |
| ST-02 | N-10–N-18, N-35–N-36, N-40–N-43, N-49 |
| ST-03 | N-08, N-18 |
| ST-04 | N-19–N-23, N-37–N-39, N-42–N-50 |
| ST-05 | N-24, N-38, N-48 |
| ST-06 | N-25–N-26 |
| ST-07 | N-27–N-28 |
| ST-08 | N-29–N-30 |
| ST-09 | N-31–N-32 |
| ST-10 | N-33 |
| ST-11 | N-34 |


## 8. Validación pendiente

Los niveles exactos de influencia, responsables nominales, necesidades no documentadas literalmente y acuerdos contractuales de proveedores requieren confirmación. En el análisis de requisitos la autoridad de aprobación del producto todavía debe quedar asignada nominalmente; no se considera una persona específica como aprobadora sin respaldo.
