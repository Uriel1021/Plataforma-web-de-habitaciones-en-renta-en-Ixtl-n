# Lista de deseos y necesidades

**Proyecto:** Plataforma web de habitaciones en renta en Ixtlán, Oaxaca  
**Versión:** 1.0
**Fecha:** 23 de octubre de 2026

**Autor:** Uriel Aguilar Mauricio


> **Control de procedencia.** Este documento consolida el proceso previo de elicitación: 158 decisiones confirmadas (D-01 a D-158), 50 identificadores de necesidades (N-01 a N-50), 11 stakeholders y numeración histórica de reglas hasta RN-967. Las **redacciones aquí consolidadas** son editoriales y no pretenden reproducir palabra por palabra todas las actas ni las 967 reglas. Se conservan como referencias exactas las decisiones finales disponibles; cualquier correspondencia global sin acta literal se identifica como trazabilidad temática. Los requisitos nuevos `RF-###` y `RNF-###` son identificadores propios de esta versión del catálogo y no equivalen a los antiguos `RN-###`. Las prestaciones todavía no decididas se etiquetan **PENDIENTE** y no deben tratarse como aprobadas.


## 1. Criterio para distinguir conceptos

- **Deseo (DE):** una expectativa expresada en lenguaje cotidiano desde la perspectiva de un interesado. No debe confundirse con un requisito verificable.
- **Necesidad (N):** condición que debe satisfacerse para dar valor al interesado; permite derivar requisitos específicos.
- **Requisito funcional (RF):** conducta observable y verificable que deberá ofrecer el sistema.
- **Regla de negocio histórica (RN):** decisión operacional recogida durante la elicitación; sus 967 identificadores originales no se reproducen aquí íntegramente sin un acta completa.

Las necesidades N-01 a N-50 se presentan **normalizadas para esta versión**. Se preservan sus identificadores y el sentido recuperable de la conversación, pero las frases pueden no coincidir literalmente con su formulación original. Los deseos DE son una **reconstrucción editorial ilustrativa de expectativas**: no son citas verbatim de entrevistas ni decisiones adicionales aprobadas.

## 2. Lista de deseos

| ID | Stakeholder | Deseo expresado en primera persona (reconstrucción) | Necesidad vinculada |
| --- | --- | --- | --- |
| DE-01 | ST-01 | Quisiera ver todas las habitaciones de Ixtlán en un solo sitio. | N-01,N-02 |
| DE-02 | ST-01 | Quisiera conocer cuánto pagaré de renta base y qué servicios están incluidos. | N-03,N-05 |
| DE-03 | ST-01 | Quisiera ver fotografías, ubicación exacta y contacto directo. | N-04,N-06,N-36 |
| DE-04 | ST-01 | Quisiera filtrar por presupuesto y características sin registrarme. | N-02,N-07 |
| DE-05 | ST-01 | Quisiera confiar en calificaciones aprobadas y ubicaciones correctas. | N-08,N-09 |
| DE-06 | ST-02 | Quisiera publicar una habitación sin que otros editen mis datos. | N-10,N-11 |
| DE-07 | ST-02 | Quisiera actualizar precio, servicios y fotos cuando cambien. | N-14 |
| DE-08 | ST-02 | Quisiera marcar mi habitación como rentada sin perder publicación. | N-15 |
| DE-09 | ST-02 | Quisiera que me avisen si mi ubicación necesita revisión. | N-13,N-35,N-43 |
| DE-10 | ST-02 | Quisiera que fallos de mapa no borren mi publicación. | N-11,N-48,N-49 |
| DE-11 | ST-02 | Quisiera eliminar mi habitación aun si hay un guardado geográfico pendiente. | N-11,N-49 |
| DE-12 | ST-03 | Quisiera valorar mi experiencia sin crear una cuenta. | N-08,N-18 |
| DE-13 | ST-03 | Quisiera poder apelar si se bloquea mi calificación injustamente. | N-08 |
| DE-14 | ST-04 | Quisiera revisar las nuevas habitaciones antes de publicar. | N-19,N-20 |
| DE-15 | ST-04 | Quisiera corregir errores geográficos y mantenerlas dentro de Ixtlán. | N-21,N-42,N-44 |
| DE-16 | ST-04 | Quisiera ver el impacto de cambiar límites antes de confirmarlos. | N-46,N-50 |
| DE-17 | ST-04 | Quisiera restaurar versiones anteriores y conocer quién cambió el mapa. | N-23,N-50 |
| DE-18 | ST-04 | Quisiera saber cuáles habitaciones tienen una verificación fallida. | N-19,N-31 |
| DE-19 | ST-05 | Quisiera una plataforma útil dentro de la localidad, sin ampliar el alcance involuntariamente. | N-24,N-48 |
| DE-20 | ST-06 | Quisiera requisitos rastreables desde necesidades hasta pruebas. | N-25,N-26 |
| DE-21 | ST-07 | Quisiera reglas explícitas para casos límite y errores. | N-27,N-28 |
| DE-22 | ST-08 | Quisiera comprobar criterios mediante escenarios reproducibles. | N-29,N-30 |
| DE-23 | ST-09 | Quisiera recuperar procesos fallidos sin inconsistencias. | N-31,N-32 |
| DE-24 | ST-10 | Quisiera interfaces y dependencias técnicas claras. | N-33 |
| DE-25 | ST-11 | Quisiera que el tratamiento de datos personales cumpla las reglas aplicables. | N-34 |


## 3. Lista de necesidades

| ID | Stakeholder relacionado | Necesidad consolidada |
| --- | --- | --- |
| N-01 | ST-01 | Localizar habitaciones en renta dentro de la localidad de Ixtlán. |
| N-02 | ST-01 | Consultar publicaciones sin necesidad de registrarse. |
| N-03 | ST-01 | Conocer el precio mensual base de cada habitación. |
| N-04 | ST-01 | Conocer la ubicación y dirección de las habitaciones. |
| N-05 | ST-01 | Conocer servicios, equipamiento y demás características. |
| N-06 | ST-01 | Examinar fotografías de las habitaciones. |
| N-07 | ST-01 | Ajustar las búsquedas a presupuesto, ubicación y preferencias. |
| N-08 | ST-01, ST-03 | Consultar y aportar comentarios o calificaciones. |
| N-09 | ST-01 | Recibir información confiable, coherente y vigente. |
| N-10 | ST-02 | Ofrecer habitaciones en renta mediante publicaciones administradas. |
| N-11 | ST-02 | Registrar y administrar la información y ubicación de habitaciones propias. |
| N-12 | ST-02 | Presentar los datos y fotografías necesarios de cada habitación. |
| N-13 | ST-02 | Recibir avisos sobre estado de publicaciones, revisiones e incidencias. |
| N-14 | ST-02 | Actualizar precio, servicios, características y fotografías. |
| N-15 | ST-02 | Cambiar y comunicar la disponibilidad disponible/rentada. |
| N-16 | ST-02 | Facilitar a interesados un medio de contacto directo. |
| N-17 | ST-02 | Alcanzar a personas interesadas en habitaciones de Ixtlán. |
| N-18 | ST-02, ST-03 | Conocer y gestionar la presencia de opiniones sobre habitaciones. |
| N-19 | ST-04 | Supervisar y administrar publicaciones, verificaciones e incidencias. |
| N-20 | ST-04 | Aprobar publicaciones iniciales y moderar aportaciones públicas. |
| N-21 | ST-04 | Corregir, revisar y controlar información bajo sus atribuciones. |
| N-22 | ST-04 | Eliminar contenido improcedente con justificación y control. |
| N-23 | ST-04, ST-05 | Disponer de evidencia histórica y trazabilidad administrativa. |
| N-24 | ST-05 | Mantener el alcance territorial y la viabilidad del producto. |
| N-25 | ST-06 | Identificar requisitos claros, pertinentes y rastreables. |
| N-26 | ST-06 | Relacionar necesidades de interesados con requisitos y decisiones. |
| N-27 | ST-07 | Contar con especificaciones de entradas y salidas implementables. |
| N-28 | ST-07 | Disponer de reglas inequívocas de validación y estados. |
| N-29 | ST-08 | Diseñar pruebas verificables con resultados esperados. |
| N-30 | ST-08 | Evaluar casos límite, errores y recuperación del producto. |
| N-31 | ST-09 | Detectar y atender fallas de operación y dependencias técnicas. |
| N-32 | ST-09 | Preservar información y consistencia durante recuperación. |
| N-33 | ST-10 | Integrarse a servicios externos necesarios para el sistema. |
| N-34 | ST-11 | Atender la normativa aplicable al tratamiento de información. |
| N-35 | ST-02 | Conocer de forma oportuna resultados y cambios de estado relevantes. |
| N-36 | ST-01, ST-02 | Encontrar y mostrar teléfono y WhatsApp por habitación. |
| N-37 | ST-04 | Disponer de motivos y constancia de eliminaciones administrativas. |
| N-38 | ST-04, ST-05 | Conservar registros administrativos que deban mantenerse. |
| N-39 | ST-04 | Consultar antecedentes de publicaciones retiradas. |
| N-40 | ST-02 | Consultar el historial pertinente de sus propias habitaciones eliminadas. |
| N-41 | ST-02 | Ubicar habitaciones mediante dirección y marcador confirmados. |
| N-42 | ST-04 | Comprobar que las ubicaciones realmente pertenecen a Ixtlán. |
| N-43 | ST-02 | Solicitar revisión cuando la clasificación territorial sea incorrecta. |
| N-44 | ST-04 | Revisar excepciones y resolver discrepancias de ubicación. |
| N-45 | ST-04 | Gestionar delimitaciones territoriales oficiales o manuales. |
| N-46 | ST-04 | Evaluar impacto de cambios de límites sobre publicaciones y solicitudes. |
| N-47 | ST-01, ST-02, ST-04 | Visualizar el polígono territorial vigente en el mapa. |
| N-48 | ST-05, ST-04 | Verificar rigurosamente el alcance geográfico y recuperarse de fallas. |
| N-49 | ST-02, ST-04 | Gestionar revisiones y propuestas de coordenadas sin inconsistencias. |
| N-50 | ST-04 | Mantener y consultar el historial versionado de límites territoriales. |


## 4. Agrupación de necesidades

| Bloque | Necesidades | Resultado esperado |
| --- | --- | --- |
| Consulta y búsqueda | N-01–N-09 | Descubrimiento y comparación pública confiable. |
| Publicación y administración del arrendador | N-10–N-18 | Altas, mantenimiento de información, contacto y avisos. |
| Control administrativo/promotor | N-19–N-24 | Revisión de contenido y sostenibilidad de reglas. |
| Ingeniería, calidad y operación | N-25–N-34 | Implementación, verificación, soporte y obligaciones. |
| Seguimiento y evidencia | N-35–N-40 | Notificaciones y trazabilidad de eliminaciones. |
| Territorio y geolocalización | N-41–N-50 | Comprobación territorial, revisiones, impacto y versiones. |


## 5. Prioridad de análisis

> Los niveles siguientes son **propuestos para planificar**, no prioridades históricas formalmente confirmadas.

| Prioridad propuesta | Necesidades | Justificación |
| --- | --- | --- |
| Crítica | N-01, N-02, N-04, N-10, N-11, N-19, N-20, N-24, N-42, N-48 | Definen alcance y comportamiento mínimo que impediría aceptar el producto si falta. |
| Alta | N-03, N-05–N-09, N-12–N-18, N-21, N-35–N-36, N-41, N-43–N-50 | Afectan utilidad, confianza y control del producto. |
| De apoyo o cumplimiento | N-22–N-23, N-25–N-34, N-37–N-40 | Facilitan gobernanza, pruebas, soporte y obligaciones; su obligatoriedad específica depende del requisito derivado. |


## 6. Trazabilidad necesidad → requisitos

El catálogo `lista de requisitos.md` contiene para cada RF/RNF las necesidades vinculadas. A continuación se muestra un resumen para navegar la relación sin duplicar todo el catálogo.

### N-01 a N-10

| Necesidad | Stakeholder | Requisitos vinculados (extracto) |
| --- | --- | --- |
| N-01 | ST-01 | RF-001, RF-002, RF-003, RNF-009, RNF-010 |
| N-02 | ST-01 | RF-001 |
| N-03 | ST-01 | RF-005, RF-006, RF-039, RF-040, RF-042, RF-054 |
| N-04 | ST-01 | RF-007, RF-008, RF-009, RF-015, RF-016, RF-017, RF-027, RF-055, RF-056 … (+5) |
| N-05 | ST-01 | RF-004, RF-006, RF-011, RF-032, RF-035, RF-036, RF-037, RF-059, RF-060 … (+7) |
| N-06 | ST-01 | RF-010, RF-049, RF-050, RF-051, RF-052, RF-053 |
| N-07 | ST-01 | RF-003, RF-018, RF-019, RF-020, RF-021, RF-022, RF-023, RF-024, RF-025 … (+18) |
| N-08 | ST-01, ST-03 | RF-013, RF-014, RF-041, RF-073, RF-074, RF-075, RF-076, RF-077, RF-078 … (+9) |
| N-09 | ST-01 | RF-002, RF-013, RF-082, RF-156 |
| N-10 | ST-02 | RF-043, RF-046 |

### N-11 a N-20

| Necesidad | Stakeholder | Requisitos vinculados (extracto) |
| --- | --- | --- |
| N-11 | ST-02 | RF-044, RF-045, RF-046, RF-048, RF-068, RF-069, RF-094, RF-095, RF-107 … (+15) |
| N-12 | ST-02 | RF-049, RF-050, RF-051, RF-054, RF-055, RF-056, RF-058, RF-059, RF-065 … (+2) |
| N-13 | ST-02 | RF-097, RF-104, RF-120, RF-122, RF-125, RF-138, RF-139, RF-145, RF-147 … (+7) |
| N-14 | ST-02 | RF-048, RF-068, RF-154, RF-168 |
| N-15 | ST-02 | RF-004, RF-031, RF-058 |
| N-16 | ST-02 | RF-012 |
| N-17 | ST-02 | Pendiente de requisito específico |
| N-18 | ST-02, ST-03 | Pendiente de requisito específico |
| N-19 | ST-04 | RF-043, RF-047, RF-070, RF-096, RF-100, RF-105, RF-109, RF-112, RF-115 … (+15) |
| N-20 | ST-04 | RF-047, RF-078, RF-079, RF-080, RF-087, RF-088, RF-089 |

### N-21 a N-30

| Necesidad | Stakeholder | Requisitos vinculados (extracto) |
| --- | --- | --- |
| N-21 | ST-04 | RF-096 |
| N-22 | ST-04 | RF-070, RF-089 |
| N-23 | ST-04, ST-05 | RF-090, RF-135 |
| N-24 | ST-05 | RF-099, RNF-008 |
| N-25 | ST-06 | Pendiente de requisito específico |
| N-26 | ST-06 | Pendiente de requisito específico |
| N-27 | ST-07 | RNF-010 |
| N-28 | ST-07 | Pendiente de requisito específico |
| N-29 | ST-08 | RNF-007, RNF-009, RNF-014 |
| N-30 | ST-08 | Pendiente de requisito específico |

### N-31 a N-40

| Necesidad | Stakeholder | Requisitos vinculados (extracto) |
| --- | --- | --- |
| N-31 | ST-09 | RF-144, RF-159, RF-162, RNF-008, RNF-011, RNF-015 |
| N-32 | ST-09 | RF-142, RF-158, RF-159, RF-169, RNF-005, RNF-006, RNF-011, RNF-015 |
| N-33 | ST-10 | Pendiente de requisito específico |
| N-34 | ST-11 | RNF-001, RNF-012, RNF-013 |
| N-35 | ST-02 | Pendiente de requisito específico |
| N-36 | ST-01, ST-02 | RF-012 |
| N-37 | ST-04 | RF-069, RF-071 |
| N-38 | ST-04, ST-05 | RF-071, RF-090, RF-134 |
| N-39 | ST-04 | RF-071 |
| N-40 | ST-02 | RF-069, RF-072 |

### N-41 a N-50

| Necesidad | Stakeholder | Requisitos vinculados (extracto) |
| --- | --- | --- |
| N-41 | ST-02 | RF-057, RF-091, RF-092, RF-093, RF-094 |
| N-42 | ST-04 | RF-099, RF-100, RF-101, RF-102, RF-117 |
| N-43 | ST-02 | RF-103, RF-104 |
| N-44 | ST-04 | RF-105, RF-106, RF-126, RF-137, RF-161 |
| N-45 | ST-04 | RF-114, RF-115, RF-116, RF-127 |
| N-46 | ST-04 | RF-117, RF-118, RF-119, RF-123, RF-126, RF-136, RF-137, RF-138, RF-139 |
| N-47 | ST-01, ST-02, ST-04 | RF-015, RF-016, RF-017, RF-141 |
| N-48 | ST-05, ST-04 | RF-047, RF-098, RF-099, RF-101, RF-102, RF-114, RF-142, RF-143, RF-144 … (+8) |
| N-49 | ST-02, ST-04 | RF-106, RF-107, RF-108, RF-109, RF-110, RF-111, RF-112, RF-113, RF-121 … (+2) |
| N-50 | ST-04 | RF-128, RF-129, RF-130, RF-131, RF-132, RF-133, RF-134, RF-135, RF-136 … (+3) |

## 7. Vacíos conocidos de necesidades

- La calidad de servicio no está cuantificada (tiempos de respuesta, disponibilidad, recuperación, escalabilidad). Debe recuperarse la voz de ST-01, ST-05, ST-08 y ST-09 antes de aprobar métricas.
- Deben revisarse expectativas de privacidad de teléfono, uso de IP/señales antiabuso, retención y avisos (ST-01, ST-03, ST-11).
- Debe validarse expresamente el comportamiento al **eliminar habitaciones cuya verificación geográfica esté pendiente**; ya se acordó eliminar cuando esté pendiente de *aplicación* (D-158), pero no el primer caso.
- Las frases N-10 a N-50 son versiones editoriales consolidadas: para una auditoría literal de elicitación se necesitarían las actas originales.

## 8. Regla de aceptación de las necesidades

Una necesidad se considera cubierta **documentalmente** si tiene al menos un RF o RNF derivado con criterio de aceptación, un stakeholder y evidencia de decisión. La cobertura documental no implica que el requisito esté implementado ni probado en una aplicación operativa.
