# Lista de requisitos de software

**Proyecto:** Plataforma web de habitaciones en renta en Ixtlán, Oaxaca  
**Versión del catálogo:** 1.0 — borrador consolidado  
**Fecha:** 23 de octubre de 2026  
**Alcance geográfico:** localidad de Ixtlán, Oaxaca  
**Estado:** especificados; no equivale a implementación verificada

**Autor:** Uriel Aguilar Mauricio


> **Control de procedencia.** Este documento consolida el proceso previo de elicitación: 158 decisiones confirmadas (D-01 a D-158), 50 identificadores de necesidades (N-01 a N-50), 11 stakeholders y numeración histórica de reglas hasta RN-967. Las **redacciones aquí consolidadas** son editoriales y no pretenden reproducir palabra por palabra todas las actas ni las 967 reglas. Se conservan como referencias exactas las decisiones finales disponibles; cualquier correspondencia global sin acta literal se identifica como trazabilidad temática. Los requisitos nuevos `RF-###` y `RNF-###` son identificadores propios de esta versión del catálogo y no equivalen a los antiguos `RN-###`. Las prestaciones todavía no decididas se etiquetan **PENDIENTE** y no deben tratarse como aprobadas.


## 1. Uso de este catálogo

**Convenciones:**

- `RF-###`: requisito funcional consolidado de esta entrega. Cada enunciado usa «El sistema deberá» o prohibición equivalente.
- `RNF-###`: requisito no funcional o atributo de calidad; los pendientes de valores cuantitativos se distinguen del comportamiento ya acordado.
- `N-##`: necesidad del stakeholder a la que responde el requisito.
- `D-###`: decisión histórica confirmada cuando su identificador está disponible. Las leyendas «Decisiones de ...» aluden a acuerdos temáticos, **no** equivalen a un identificador exacto de acta.
- `RN-###`: regla de negocio de la serie histórica RN-001 a RN-967. **No debe usarse el mismo número** como si fuera una copia del presente RF.

### 1.1 Prioridades

**P1 — esencial para el alcance funcional**; **P2 — importante para utilidad/gobierno**; **P3 — de apoyo**. La prioridad es una **propuesta editorial de planificación**, no una priorización expresamente votada. Por defecto P1 aplica a los controles de localización, aprobación, permisos e integridad, P2 al resto de requisitos; el propietario deberá validarlo.

### 1.2 Distribución

| Categoría | Requisitos funcionales |
| --- | --- |
| Consulta pública | 17 |
| Búsquedas | 25 |
| Gestión de habitaciones | 30 |
| Opiniones | 18 |
| Geografía | 23 |
| Delimitación territorial | 28 |
| Recuperación geográfica | 28 |


**Total:** 169 requisitos funcionales (`RF-001` a `RF-169`) y 15 requisitos no funcionales (`RNF-001` a `RNF-015`). Estos elementos **no son una transcripción uno a uno** de las 967 reglas históricas: varias reglas se consolidan en requisitos verificables y otras expresan detalles operativos/estados que se desarrollan en el SRS.

## 2. Requisitos funcionales

### 2.1. Consulta pública

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-001 | P1 | **Acceso sin cuenta.** El sistema deberá permitir consultar habitaciones publicadas sin iniciar sesión ni crear una cuenta. | Un visitante anónimo consulta lista y detalle sin autenticación. | N-01,N-02 | Acuerdos de consulta pública |
| RF-002 | P2 | **Lista de publicaciones.** El sistema deberá mostrar habitaciones publicadas tanto disponibles como rentadas. | Se ven ambas disponibilidades al abrir el listado. | N-01,N-09 | Acuerdos de listado y disponibilidad |
| RF-003 | P2 | **Orden inicial.** El sistema deberá ordenar inicialmente el listado por fecha de aprobación administrativa más reciente. | La primera habitación es la de aprobación más reciente. | N-01,N-07 | Acuerdos de listado y disponibilidad |
| RF-004 | P2 | **Estado de disponibilidad.** El sistema deberá identificar cada habitación pública como «Disponible» o «Rentada». | La ficha indica el estado configurado. | N-05,N-15 | Acuerdos de listado y disponibilidad |
| RF-005 | P2 | **Precio principal.** El sistema deberá mostrar el precio base mensual en pesos mexicanos para cada publicación. | La ficha indica MXN y su importe base mensual. | N-03 | Decisiones de precio |
| RF-006 | P2 | **Diferenciación de cargos.** El sistema deberá diferenciar la renta mensual base de costos adicionales por servicios. | Un cargo extra nunca se presenta como parte del precio base. | N-03,N-05 | Decisiones de servicios |
| RF-007 | P2 | **Dirección pública.** El sistema deberá mostrar la dirección exacta escrita autorizada de cada habitación publicada. | El detalle incluye la dirección autorizada. | N-04 | D-147 |
| RF-008 | P2 | **Zona pública.** El sistema deberá mostrar la colonia, barrio o zona autorizada de cada habitación. | El detalle indica zona vigente. | N-04 | D-147 |
| RF-009 | P2 | **Marcador público.** El sistema deberá mostrar el marcador cartográfico correspondiente a la ubicación autorizada. | El marcador coincide con coordenadas vigentes. | N-04 | D-147 |
| RF-010 | P2 | **Fotografías públicas.** El sistema deberá mostrar las fotografías registradas de cada habitación pública. | El detalle expone todas las imágenes guardadas válidas. | N-06 | Decisiones de fotografías |
| RF-011 | P2 | **Características generales.** El sistema deberá mostrar servicios, amueblado, baño y capacidad máxima de cada habitación. | El detalle presenta las características guardadas. | N-05 | Decisiones de campos |
| RF-012 | P2 | **Contacto por publicación.** El sistema deberá mostrar teléfono y/o enlace de WhatsApp registrados para contactar al arrendador según la información de contacto disponible. | Un visitante puede ver los medios de contacto de una publicación. | N-16,N-36 | Decisiones de contacto |
| RF-013 | P2 | **Promedio de calificaciones.** El sistema deberá mostrar el promedio de las calificaciones aprobadas de una habitación. | La media usa exclusivamente calificaciones aprobadas. | N-08,N-09 | Decisiones de valoración |
| RF-014 | P2 | **Sin calificaciones.** El sistema deberá mostrar «Sin calificaciones» cuando no existan calificaciones aprobadas. | Una habitación sin votos aprobados muestra ese texto. | N-08 | Decisiones de valoración |
| RF-015 | P2 | **Polígono visible.** El sistema deberá mostrar el polígono territorial vigente de Ixtlán por defecto al abrir un mapa público. | El polígono aparece automáticamente al abrir mapa. | N-04,N-47 | D-129–D-131 |
| RF-016 | P2 | **Ocultar/mostrar polígono.** El sistema deberá permitir ocultar y volver a mostrar el polígono vigente sin cambiar su uso para validación. | El interruptor modifica solo la visualización. | N-04,N-47 | D-130 |
| RF-017 | P2 | **Restablecer vista del polígono.** El sistema deberá restablecer el polígono a visible cada vez que se abra un mapa, sin persistir la elección anterior. | Se oculta y al reabrir aparece visible. | N-04,N-47 | D-131 |

### 2.2. Búsquedas

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-018 | P2 | **Precio mínimo.** El sistema deberá admitir un precio mensual base mínimo e incluir habitaciones cuyo precio sea igual al límite. | Una habitación del precio mínimo aparece. | N-07 | Decisiones de filtros |
| RF-019 | P2 | **Precio máximo.** El sistema deberá admitir un precio mensual base máximo e incluir habitaciones cuyo precio sea igual al límite. | Una habitación del precio máximo aparece. | N-07 | Decisiones de filtros |
| RF-020 | P1 | **Rango inválido.** El sistema deberá señalar error si el precio mínimo es mayor que el máximo, conservando los demás filtros introducidos. | Error explícito, sin borrar otros filtros. | N-07 | Decisiones de filtros |
| RF-021 | P2 | **Rango igual.** El sistema deberá admitir límites mínimo y máximo iguales como búsqueda por precio exacto. | Con min=max, devuelve precios exactamente iguales. | N-07 | Decisiones de filtros |
| RF-022 | P2 | **Filtro por zona.** El sistema deberá permitir seleccionar múltiples valores de colonia, barrio o zona. | Se pueden elegir dos o más zonas. | N-07 | Decisiones de filtros |
| RF-023 | P2 | **OR de zonas.** El sistema deberá devolver habitaciones de cualquiera de las zonas seleccionadas. | Zona A o B permite resultados de ambas. | N-07 | Decisiones de filtros |
| RF-024 | P2 | **Catálogo dinámico de zonas.** El sistema deberá obtener las zonas seleccionables desde habitaciones aprobadas, incluidas rentadas y disponibles. | Una zona de habitación aprobada rentada figura como opción. | N-07 | Decisiones de zonas |
| RF-025 | P2 | **Normalización de zonas.** El sistema deberá comparar zonas ignorando diferencias de mayúsculas, tildes y espacios sobrantes. | "Centro" y " cénTro " comparan como mismo valor. | N-07 | Decisiones de zonas |
| RF-026 | P2 | **No equiparar zonas semánticas.** El sistema no deberá considerar automáticamente equivalentes «Centro» y «Zona Centro» por semejanza semántica. | Ambos pueden figurar como etiquetas distintas. | N-07 | Decisiones de zonas |
| RF-027 | P2 | **Filtro por distancia.** El sistema deberá permitir seleccionar un punto central en el mapa y un radio positivo expresado en kilómetros. | Se acepta centro por marcador y radio 1.5 km. | N-04,N-07 | Decisiones de distancia |
| RF-028 | P2 | **Radios decimales.** El sistema deberá admitir radios reales positivos con decimales y sin máximo fijo predeterminado. | 0.25 km se acepta; 0 y números negativos se rechazan. | N-07 | Decisiones de distancia |
| RF-029 | P2 | **Distancia geodésica.** El sistema deberá filtrar por distancia geodésica en línea recta entre centro elegido y marcador vigente de la habitación. | Coincidencias coinciden con radio geodésico esperado. | N-07 | Decisiones de distancia |
| RF-030 | P2 | **Límite de distancia inclusivo.** El sistema deberá incluir habitaciones ubicadas exactamente en el límite de distancia elegido. | Una habitación a distancia igual al radio aparece. | N-07 | Decisiones de distancia |
| RF-031 | P2 | **Filtro de disponibilidad.** El sistema deberá permitir filtrar habitaciones por «Disponible» o «Rentada». | Al elegir Disponible no aparecen Rentadas. | N-07,N-15 | Decisiones de filtros |
| RF-032 | P2 | **Filtro de servicios.** El sistema deberá ofrecer filtro basado únicamente en el catálogo de diez servicios normalizados. | No aparecen servicios libres como casillas nuevas. | N-05,N-07 | Decisiones de servicios |
| RF-033 | P2 | **OR de servicios.** Cuando se seleccionen varios servicios, el sistema deberá incluir habitaciones que tengan por lo menos uno de los seleccionados. | Con Agua e Internet, una habitación con solo Agua aparece. | N-07 | Decisiones de filtros |
| RF-034 | P2 | **Sin servicios.** El sistema deberá permitir filtrar habitaciones sin servicios incluidos mediante una opción excluyente de otras selecciones de servicios. | «Sin servicios» no puede coexistir con Agua. | N-07 | Decisiones de servicios |
| RF-035 | P2 | **Amueblado.** El sistema deberá permitir elegir exactamente un tipo de amueblado: amueblada, parcialmente amueblada o sin amueblar. | El filtro devuelve solo el tipo elegido. | N-05,N-07 | Decisiones de filtros |
| RF-036 | P2 | **Baño.** El sistema deberá permitir elegir un tipo de baño: privado o compartido. | Elegir Privado excluye Compartido. | N-05,N-07 | Decisiones de filtros |
| RF-037 | P2 | **Capacidad mínima.** El sistema deberá devolver habitaciones cuya capacidad máxima permitida sea mayor o igual al mínimo indicado. | Capacidad 3 coincide con mínimo de 2. | N-05,N-07 | Decisiones de filtros |
| RF-038 | P1 | **Conjunción entre filtros.** El sistema deberá combinar mediante AND las familias de filtros activas, manteniendo OR únicamente dentro de zonas y servicios seleccionados. | Cada resultado cumple todas las familias activas. | N-07 | Decisiones de filtros |
| RF-039 | P2 | **Orden por precio ascendente.** El sistema deberá ordenar opcionalmente por renta base mensual de menor a mayor. | Importes base quedan en orden no decreciente. | N-03,N-07 | Decisiones de orden |
| RF-040 | P2 | **Orden por precio descendente.** El sistema deberá ordenar opcionalmente por renta base mensual de mayor a menor. | Importes base quedan en orden no creciente. | N-03,N-07 | Decisiones de orden |
| RF-041 | P2 | **Orden por calificaciones.** El sistema deberá ordenar opcionalmente por promedio aprobado descendente y colocar al final las habitaciones sin calificaciones aprobadas. | Promedios ordenados; sin calificación al final. | N-08,N-07 | Decisiones de orden |
| RF-042 | P2 | **Ignorar sobrecostos al filtrar precio.** El sistema deberá utilizar solo la renta base mensual para buscar y ordenar por precio, sin sumar cargos extra de servicios. | Una renta 2000 con extra 500 coincide en rango 2000. | N-03,N-07 | Decisiones de precio |

### 2.3. Gestión de habitaciones

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-043 | P1 | **Alta de arrendadores.** El sistema deberá permitir que únicamente el administrador registre cuentas de arrendadores. | Un visitante no puede darse de alta como arrendador. | N-10,N-19 | D-06; acuerdos de cuentas |
| RF-044 | P1 | **Inicio de sesión.** El sistema deberá requerir autenticación para crear y administrar publicaciones del arrendador. | Visitante anónimo no accede al editor. | N-11 | D-06; acuerdos de cuentas |
| RF-045 | P1 | **Propiedad de publicación.** El sistema deberá permitir a un arrendador editar o eliminar exclusivamente sus propias habitaciones. | Usuario B no puede editar una habitación de A. | N-11 | Decisiones de permisos |
| RF-046 | P2 | **Alta de habitación.** El sistema deberá permitir a un arrendador autenticado presentar una nueva habitación con campos obligatorios válidos. | Con todos los datos correctos se crea un registro no publicado. | N-10,N-11 | Decisiones de registro |
| RF-047 | P1 | **Aprobación inicial.** El sistema deberá mantener sin publicar cada habitación nueva hasta contar con aprobación administrativa y verificación geográfica favorable. | Un alta nueva no aparece públicamente antes de ambos controles. | N-19,N-20,N-48 | D-89,D-100; acuerdos de aprobación |
| RF-048 | P2 | **Ediciones tras aprobación.** El sistema deberá aplicar los cambios permitidos de habitaciones aprobadas sin requerir una nueva aprobación general, respetando controles geográficos. | Un cambio válido de precio se refleja sin nuevo trámite. | N-11,N-14 | D-06 |
| RF-049 | P2 | **Fotos mínimas.** El sistema deberá exigir al menos una fotografía en las publicaciones. | Alta sin foto es rechazada. | N-06,N-12 | Decisiones de fotos |
| RF-050 | P2 | **Fotos máximas.** El sistema deberá admitir como máximo cinco fotografías por habitación. | Carga de sexta foto se rechaza. | N-06,N-12 | Decisiones de fotos |
| RF-051 | P2 | **Portada inicial.** El sistema deberá seleccionar aleatoriamente una fotografía de portada al registrar el conjunto inicial de imágenes. | El registro fija una portada de entre las 1–5 fotos. | N-06,N-12 | Decisiones de portada |
| RF-052 | P2 | **Portada estable.** El sistema deberá conservar la portada mientras no cambie el conjunto de fotografías. | Editar precio no cambia la portada. | N-06 | Decisiones de portada |
| RF-053 | P2 | **Regeneración de portada.** El sistema deberá volver a seleccionar aleatoriamente la portada cuando se agregue, retire o reemplace alguna fotografía. | Cambiar imagen dispara nueva selección dentro del conjunto. | N-06 | Decisiones de portada |
| RF-054 | P1 | **Precio válido.** El sistema deberá requerir una renta mensual base como entero positivo en MXN, sin centavos. | Acepta 2500; rechaza 0, -1 y 2500.50. | N-03,N-12 | Decisiones de precio |
| RF-055 | P2 | **Dirección requerida.** El sistema deberá exigir una dirección exacta escrita por habitación. | Sin dirección no se envía el registro. | N-04,N-12 | Decisiones de dirección |
| RF-056 | P2 | **Zona requerida.** El sistema deberá exigir barrio, colonia o zona en texto. | Sin zona no se envía el registro. | N-04,N-12 | Decisiones de dirección |
| RF-057 | P1 | **Marcador requerido.** El sistema deberá exigir coordenadas confirmadas mediante marcador cartográfico para tramitar una habitación. | Sin pin confirmado no puede continuar. | N-04,N-41 | D-81–D-83 |
| RF-058 | P2 | **Disponibilidad requerida.** El sistema deberá requerir estado Disponible o Rentada. | No acepta estado vacío. | N-15,N-12 | Decisiones de campos |
| RF-059 | P2 | **Servicios declarados.** El sistema deberá permitir seleccionar los servicios incluidos y declarar explícitamente «Ninguno» cuando corresponda. | «Ninguno» permite continuar sin servicios. | N-05,N-12 | Decisiones de servicios |
| RF-060 | P2 | **Diez servicios.** El sistema deberá ofrecer los diez servicios normalizados: Agua, Electricidad, Internet/Wi-Fi, Gas, Acceso a cocina, Lavandería, Estacionamiento, Servicio de limpieza, Seguridad o vigilancia y Áreas comunes. | El selector incluye exactamente esos diez tipos. | N-05 | Decisiones de servicios |
| RF-061 | P2 | **Servicio libre.** El sistema deberá permitir indicar servicios adicionales de texto libre en el detalle, sin incorporarlos al filtro normalizado. | Servicio personalizado visible en detalle, no en selector del filtro. | N-05 | Decisiones de servicios |
| RF-062 | P2 | **Costo de servicios.** El sistema deberá distinguir por servicio si está incluido en renta o implica cargo adicional. | Se identifica inclusión o cargo extra para cada servicio. | N-05 | Decisiones de servicios |
| RF-063 | P2 | **Costo adicional conocido.** El sistema deberá permitir un importe conocido para el servicio de cargo adicional. | Servicio extra muestra importe capturado. | N-05 | Decisiones de servicios |
| RF-064 | P2 | **Costo variable.** El sistema deberá permitir marcar un cargo adicional como «Costo variable / Consultar al arrendador». | Se puede guardar costo variable sin importe inventado. | N-05 | Decisiones de servicios |
| RF-065 | P2 | **Tipo de amueblado.** El sistema deberá exigir una de las tres categorías de amueblado definidas. | No permite tipo no enumerado. | N-05,N-12 | Decisiones de campos |
| RF-066 | P2 | **Tipo de baño.** El sistema deberá exigir baño privado o compartido. | No permite valor indeterminado. | N-05,N-12 | Decisiones de campos |
| RF-067 | P2 | **Capacidad positiva.** El sistema deberá exigir capacidad máxima de ocupantes como entero positivo. | Acepta 1, rechaza 0 y 1.5. | N-05,N-12 | Decisiones de campos |
| RF-068 | P2 | **Edición de datos no geográficos.** El sistema deberá permitir editar los campos no geográficos de habitaciones propias respetando sus validaciones. | Precio, servicios, fotos y disponibilidad se actualizan válidamente. | N-11,N-14 | D-145,D-157 |
| RF-069 | P2 | **Eliminación por arrendador.** El sistema deberá permitir al arrendador eliminar sus habitaciones con motivo opcional y conservar registro administrativo. | Se elimina, deja de publicarse y registra autor/fecha. | N-11,N-37,N-40 | Decisiones de eliminación,D-158 |
| RF-070 | P2 | **Eliminación por administrador.** El sistema deberá permitir al administrador eliminar publicaciones con motivo obligatorio y aviso dentro de la aplicación al arrendador. | Sin motivo la eliminación administrativa se rechaza. | N-19,N-22 | Decisiones de eliminación |
| RF-071 | P2 | **Historial de eliminación.** El sistema deberá registrar actor, momento y motivo cuando corresponda en el historial de eliminaciones. | Administrador consulta asiento de cada baja. | N-37,N-38,N-39 | Decisiones de auditoría |
| RF-072 | P2 | **Consulta histórica propia.** El sistema deberá permitir al arrendador consultar el historial correspondiente a sus propias habitaciones eliminadas. | No puede ver historial de otro arrendador. | N-40 | Decisiones de auditoría |

### 2.4. Opiniones

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-073 | P2 | **Comentario anónimo.** El sistema deberá permitir enviar comentarios sobre habitaciones sin crear cuenta. | Visitante no autenticado envía comentario. | N-08 | Decisiones de comentarios |
| RF-074 | P2 | **Calificación anónima.** El sistema deberá permitir enviar calificaciones sin crear cuenta. | Visitante no autenticado envía 1–5 estrellas. | N-08 | Decisiones de calificaciones |
| RF-075 | P2 | **Comentario y/o calificación.** El sistema deberá aceptar comentario, calificación o ambos en una misma aportación. | Se aceptan las tres combinaciones válidas. | N-08 | Decisiones de opiniones |
| RF-076 | P2 | **Alias opcional.** El sistema deberá permitir alias opcional y usar «Anónimo» cuando no se proporcione. | Comentario sin alias muestra Anónimo. | N-08 | Decisiones de comentarios |
| RF-077 | P2 | **Escala de estrellas.** El sistema deberá aceptar únicamente números enteros de 1 a 5 como calificación. | Rechaza 0, 6 y 3.5. | N-08 | Decisiones de calificaciones |
| RF-078 | P1 | **Moderación de comentarios.** El sistema deberá retener comentarios hasta aprobación del administrador. | Comentario nuevo no es público antes de aprobarse. | N-08,N-20 | Decisiones de moderación |
| RF-079 | P1 | **Moderación de calificaciones.** El sistema deberá retener calificaciones hasta aprobación administrativa independiente. | Calificación nueva no afecta promedio sin aprobar. | N-08,N-20 | Decisiones de moderación |
| RF-080 | P2 | **Independencia de moderaciones.** El sistema deberá permitir aprobar un comentario sin aprobar su calificación asociada y viceversa. | Estados se gestionan por separado. | N-08,N-20 | Decisiones de moderación |
| RF-081 | P2 | **Media aritmética aprobada.** El sistema deberá calcular la media aritmética de las estrellas aprobadas exclusivamente. | Se excluyen votos pendientes/rechazados. | N-08 | Decisiones de valoración |
| RF-082 | P2 | **Filtro de abuso en calificaciones.** El sistema deberá ejecutar controles automáticos de posible abuso al intentar enviar una calificación, usando señales de IP, frecuencia y dispositivo/navegador conforme a política a definir. | Intentos identificados como abusivos se bloquean antes de moderación. | N-08,N-09 | Decisiones de antispam |
| RF-083 | P2 | **Separación antispam.** El sistema no deberá aplicar automáticamente el bloqueo de calificaciones a un comentario independiente, salvo regla específica aprobada. | Comentario sin calificación no falla por limitador propio de estrellas. | N-08 | Decisiones de antispam |
| RF-084 | P2 | **Apelación sin cuenta.** El sistema deberá permitir impugnar un bloqueo de calificación sin registro mediante formulario con motivo. | Visitante bloqueado envía razón sin autenticación. | N-08 | Decisiones de apelación |
| RF-085 | P2 | **Folio de apelación.** El sistema deberá generar un folio único de consulta para cada apelación presentada. | Dos apelaciones producen folios diferentes. | N-08 | Decisiones de apelación |
| RF-086 | P2 | **Seguimiento por folio.** El sistema deberá permitir consultar por folio los estados Pendiente, Aceptada o Rechazada. | Consulta devuelve estado correspondiente al folio. | N-08 | Decisiones de apelación |
| RF-087 | P2 | **Resolución administrativa de apelación.** El sistema deberá permitir al administrador aceptar o rechazar apelaciones. | Administrador cambia Pendiente a Aceptada/Rechazada. | N-20 | Decisiones de apelación |
| RF-088 | P2 | **Aprobación posterior a apelación.** El sistema no deberá publicar automáticamente una calificación tras aceptar su apelación; deberá someterla a moderación administrativa habitual. | Apelación aceptada no altera promedio hasta aprobación del voto. | N-08,N-20 | Decisiones de apelación |
| RF-089 | P2 | **Eliminación de opiniones aprobadas.** El sistema deberá permitir al administrador eliminar definitivamente comentarios o calificaciones aprobadas con motivo obligatorio. | Se requiere razón y desaparece contenido; voto removido no cuenta. | N-20,N-22 | Decisiones de eliminación |
| RF-090 | P2 | **Auditoría de opiniones eliminadas.** El sistema deberá conservar el registro administrativo de eliminación, con actor, fecha y motivo, sujeto a obligaciones legales. | La auditoría registra baja, aunque contenido ya no sea público. | N-23,N-38 | Decisiones de auditoría |

### 2.5. Geografía

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-091 | P1 | **Geocodificación inicial.** El sistema deberá intentar obtener coordenadas a partir de la dirección exacta escrita antes de que el arrendador confirme el marcador. | Dirección recibe sugerencia de pin cuando el servicio responde. | N-41 | D-81 |
| RF-092 | P1 | **Marcador confirmado.** El sistema deberá exigir confirmación explícita del marcador sugerido o corregido por el arrendador. | No avanza hasta confirmar pin. | N-41 | D-81 |
| RF-093 | P1 | **Alternativa manual.** El sistema deberá permitir colocar manualmente el marcador si falla la geocodificación automática. | Falla de geocodificación permite pin manual. | N-41 | D-82 |
| RF-094 | P1 | **Cambio de dirección.** El sistema deberá intentar geocodificar nuevamente y solicitar confirmación del marcador cuando el arrendador cambie la dirección escrita. | Cambio de calle fuerza nuevo paso de confirmación. | N-11,N-41 | D-83 |
| RF-095 | P1 | **Cambio aislado de marcador.** El sistema deberá permitir proponer un nuevo marcador sin cambiar la dirección escrita, sujeto a verificación territorial. | Pin nuevo se puede proponer con dirección intacta. | N-11 | D-84 |
| RF-096 | P1 | **Corrección administrativa de marcador.** El sistema deberá permitir al administrador corregir el marcador de cualquier habitación, sujeto a las restricciones de estados geográficos. | Admin puede corregir cuando no existe bloqueo vigente. | N-19,N-21 | D-85,D-140,D-156 |
| RF-097 | P1 | **Aviso de corrección administrativa.** El sistema deberá notificar al arrendador dentro de la aplicación cuando el administrador corrija un marcador. | Arrendador recibe aviso de corrección. | N-13 | D-86 |
| RF-098 | P1 | **Sin historial individual del marcador.** El sistema no deberá exigir un historial de versiones para cada corrección individual del marcador de una habitación. | La función de historial cartográfico no incorpora correcciones de pin como versiones del polígono. | N-48 | D-87 |
| RF-099 | P1 | **Solo localidad.** El sistema deberá evaluar pertenencia a la LOCALIDAD de Ixtlán, no al municipio completo. | Punto dentro de municipio pero fuera de localidad falla verificación. | N-24,N-42,N-48 | D-88 |
| RF-100 | P1 | **Verificación previa a publicación.** El sistema deberá verificar pertenencia territorial automáticamente y requerir revisión administrativa antes de aprobar habitaciones nuevas. | Alta clasificada dentro no se publica antes de aprobación. | N-19,N-42 | D-89 |
| RF-101 | P1 | **Punto sobre borde.** El sistema deberá considerar dentro un punto situado exactamente sobre una arista o vértice del polígono vigente. | Punto en frontera obtiene Dentro. | N-42,N-48 | D-132 |
| RF-102 | P1 | **Sin tolerancia territorial.** El sistema deberá considerar fuera todo punto realmente externo al polígono, por cercano que esté; no aplicará amortiguación automática. | Punto a 1 cm fuera clasificado Fuera. | N-42,N-48 | D-133 |
| RF-103 | P1 | **Solicitud simple de revisión.** El sistema deberá permitir solicitar revisión por clasificación externa mediante «Solicitar revisión», sin exigir datos adicionales. | Se abre revisión con un botón y sin formulario obligatorio. | N-43 | D-90,D-91 |
| RF-104 | P1 | **Respuesta a revisión.** El sistema deberá informar dentro de la aplicación al arrendador si su revisión geográfica es aceptada o rechazada. | Resolución origina aviso a propietario. | N-13,N-43 | D-92 |
| RF-105 | P1 | **Excepción territorial fundada.** El sistema deberá permitir al administrador aprobar una excepción geográfica individual únicamente si constata que la ubicación REALMENTE está dentro de la localidad, pese a error del polígono. | Excepción injustificada fuera de localidad no es válida. | N-19,N-44 | D-93 |
| RF-106 | P1 | **Excepción vinculada a coordenadas.** El sistema deberá invalidar una excepción geográfica anterior al proponerse/aplicarse coordenadas distintas y exigir nueva evaluación. | Excepción de punto A no valida automáticamente punto B. | N-44,N-49 | D-94 |
| RF-107 | P1 | **Propuesta exterior de habitación publicada.** El sistema deberá mantener la ubicación antigua publicada sin aplicar nuevas coordenadas clasificadas fuera mientras su revisión esté pendiente. | Publicación queda en A al revisarse propuesta B exterior. | N-11,N-49 | D-95 |
| RF-108 | P1 | **Rechazo de propuesta exterior publicada.** El sistema deberá descartar coordenadas propuestas rechazadas y mantener visible la ubicación previamente autorizada. | Rechazo elimina B, publica A. | N-11,N-49 | D-96 |
| RF-109 | P1 | **Una revisión pendiente por habitación.** El sistema deberá impedir tener simultáneamente dos revisiones geográficas pendientes para la misma habitación. | Segunda revisión es rechazada mientras primera pendiente. | N-19,N-49 | D-97 |
| RF-110 | P1 | **Propuesta fija en revisión.** El sistema deberá impedir que el arrendador cambie las coordenadas propuestas durante una revisión administrativa geográfica pendiente. | Editor de pin bloqueado hasta resolución. | N-49 | D-98 |
| RF-111 | P1 | **Aceptación publicada.** El sistema deberá aplicar automáticamente coordenadas propuestas de habitación publicada cuando su revisión geográfica sea aceptada, sin aprobación general repetida. | Aceptar revisión actualiza ubicación, informa arrendador. | N-11,N-49 | D-99 |
| RF-112 | P1 | **Aceptación no publicada.** El sistema deberá enviar una habitación nueva cuya revisión geográfica fue aceptada a la cola habitual de aprobación, sin publicarla de inmediato. | Estado pasa a aprobación inicial. | N-19,N-49 | D-100 |
| RF-113 | P1 | **Rechazo no publicado.** El sistema deberá conservar datos de habitación no publicada cuya revisión fue rechazada y permitir corregir ubicación. | Registro persiste y se puede corregir. | N-11,N-49 | D-101 |

### 2.6. Delimitación territorial

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-114 | P1 | **Fuente oficial preferente.** El sistema deberá utilizar la delimitación oficial de la localidad cuando resulte aplicable y haya sido validada para su uso. | Se distingue localidad frente a municipio. | N-45,N-48 | D-102 |
| RF-115 | P1 | **Polígono manual.** El sistema deberá permitir que el administrador trace un polígono cerrado cuando no haya delimitación oficial adecuada. | Polígono no cerrado se rechaza. | N-19,N-45 | D-103 |
| RF-116 | P1 | **Reemplazo confirmado.** El sistema deberá mantener activa la delimitación manual hasta que el administrador revise y confirme su reemplazo por otra oficial. | Cargar fuente oficial no cambia automáticamente polígono activo. | N-45 | D-104 |
| RF-117 | P1 | **Revisión global al cambiar.** El sistema deberá reevaluar todas las habitaciones publicadas y pendientes de aprobación tras confirmar nueva delimitación. | Todas las habitaciones pasan por evaluación. | N-42,N-46 | D-105 |
| RF-118 | P1 | **Publicadas provisoriamente visibles.** El sistema deberá mantener visibles habitaciones publicadas que queden fuera bajo nuevo polígono mientras el administrador determina su situación real. | Antes de decisión admin, publicación permanece. | N-46 | D-106 |
| RF-119 | P1 | **Ocultación tras confirmar fuera.** El sistema deberá ocultar públicamente sin borrar habitaciones publicadas que el administrador confirme realmente fuera de la localidad. | Tras confirmar fuera desaparece de listados sin eliminar registro. | N-19,N-46 | D-106 |
| RF-120 | P1 | **Aviso por ocultación.** El sistema deberá informar al arrendador cuando su habitación sea ocultada por confirmarse fuera del territorio. | Se recibe notificación tras ocultar. | N-13 | D-107 |
| RF-121 | P1 | **Corrección de ocultas.** El sistema deberá permitir al arrendador corregir el marcador de habitaciones ocultas por territorialidad y restaurar visibilidad cuando la ubicación resulte autorizada. | Ubicación corregida dentro restaura visibilidad sin nueva aprobación general. | N-11,N-49 | D-108 |
| RF-122 | P1 | **Aviso de restauración.** El sistema deberá notificar al arrendador cuando una habitación oculta recupere visibilidad. | Aviso después de restauración. | N-13 | D-109 |
| RF-123 | P1 | **Pendientes en espera.** El sistema deberá pausar la aprobación de habitaciones nuevas clasificadas fuera tras un cambio territorial. | No se publica antes de revisar resultado exterior. | N-19,N-46 | D-110 |
| RF-124 | P1 | **Corrección tras confirmación exterior.** El sistema deberá permitir corregir ubicaciones de habitaciones nuevas confirmadas realmente fuera, sin perder los demás datos de la ficha. | Nuevas coordenadas, fotos y precio se conservan. | N-11 | D-111 |
| RF-125 | P1 | **Aviso de corrección requerida.** El sistema deberá notificar al arrendador de una habitación nueva confirmada fuera del área que debe corregir la ubicación. | Recibe aviso con habitación afectada. | N-13 | D-112 |
| RF-126 | P1 | **Revisión de excepciones previas.** El sistema deberá reevaluar las excepciones geográficas previamente autorizadas cuando cambie el polígono; una excepción antigua no debe autorizar automáticamente el punto frente al nuevo límite. | Excepción anterior exterior queda en revisión. | N-44,N-46 | D-113 |
| RF-127 | P1 | **Edición de polígono.** El sistema deberá permitir al administrador modificar un polígono manual u oficial y etiquetar su procedencia correctamente. | Editar oficial lo identifica como Oficial modificada. | N-45 | D-114,D-119 |
| RF-128 | P1 | **Historial de versiones.** El sistema deberá registrar una versión nueva con polígono, fecha y administrador por cada cambio de delimitación confirmado. | Un cambio incrementa historial sin sobrescribir anterior. | N-50 | D-115 |
| RF-129 | P1 | **Restauración versionada.** El sistema deberá permitir restaurar una versión anterior generando una NUEVA versión activa sin eliminar la historia. | Restauración añade versión nueva. | N-50 | D-116 |
| RF-130 | P1 | **Etiquetas de origen.** El sistema deberá clasificar origen de cada versión en Manual, Oficial, Oficial modificada o Restaurada. | Cada versión muestra una de las cuatro etiquetas. | N-50 | D-117 |
| RF-131 | P1 | **Metadatos oficiales.** El sistema deberá conservar en versiones oficiales organismo, conjunto de datos, versión/fecha y enlace fuente cuando exista. | Vista histórica contiene metadatos disponibles. | N-50 | D-118 |
| RF-132 | P1 | **Conservar origen oficial editado.** El sistema deberá conservar metadatos de fuente oficial en versiones «Oficial modificada». | Editada conserva institución y origen. | N-50 | D-119 |
| RF-133 | P1 | **Restauración con referencia.** El sistema deberá almacenar en cada versión «Restaurada» el identificador de la versión restaurada y metadatos heredables. | Versión nueva contiene referencia correcta. | N-50 | D-120 |
| RF-134 | P1 | **Conservación del historial.** El sistema deberá mantener el historial de versiones territoriales durante su vida operativa, salvo obligaciones legales aplicables. | Versiones antiguas no tienen borrado ordinario. | N-38,N-50 | D-121 |
| RF-135 | P1 | **Motivo obligatorio.** El sistema deberá exigir motivo escrito para modificaciones y restauraciones del polígono y conservarlo inmutable en la nueva versión. | Sin motivo no confirma cambio; luego no es editable. | N-23,N-50 | D-122 |
| RF-136 | P1 | **Vista previa de impacto.** Antes de confirmar un cambio/restauración, el sistema deberá mostrar el total y listado de habitaciones que cambiarían dentro↔fuera. | Vista previa identifica transiciones sin ejecutarlas. | N-46,N-50 | D-123 |
| RF-137 | P1 | **Excepciones en vista previa.** La vista previa deberá identificar excepciones previas que requerirían revisión nueva o dejarían de ser necesarias. | Informe separa ambas categorías. | N-44,N-46 | D-124 |
| RF-138 | P1 | **Aviso revisión sobrevenida.** El sistema deberá notificar al arrendador cuando cambio del polígono genere revisión administrativa geográfica, antes de resolverla. | Notificación nombra habitación y revisión futura. | N-13,N-46 | D-125,D-126 |
| RF-139 | P1 | **Aviso decisión favorable.** El sistema deberá notificar el resultado favorable de la revisión sobrevenida; publicadas siguen visibles y nuevas reanudan aprobación. | Estado y notificación corresponden al tipo de publicación. | N-13,N-46 | D-127 |
| RF-140 | P1 | **Historial solo administrador.** El sistema deberá restringir la visualización del historial territorial completo al administrador. | Visitante y arrendador no acceden a versiones antiguas. | N-19,N-50 | D-128 |
| RF-141 | P1 | **Actual visible a todos.** El sistema deberá permitir a visitantes y arrendadores visualizar el polígono vigente, sin permisos de historial o edición. | Todos ven actual; visitantes no editan. | N-47 | D-129 |

### 2.7. Recuperación geográfica

| ID | Pri. | Enunciado verificable | Criterio de aceptación | Necesidades | Origen |
| --- | --- | --- | --- | --- | --- |
| RF-142 | P1 | **Pendiente por fallo de verificación.** El sistema deberá conservar la propuesta y marcar «Pendiente de verificación por problema técnico» cuando no pueda clasificar la ubicación por problema técnico. | Falla del servicio no se interpreta Dentro ni Fuera. | N-32,N-48 | D-134 |
| RF-143 | P1 | **Nuevas sin publicar en fallo.** El sistema no deberá publicar habitaciones nuevas mientras carezcan de verificación geográfica válida. | Con verificador caído, alta queda no publicada. | N-19,N-48 | D-134 |
| RF-144 | P1 | **Reintentar verificación.** El sistema deberá reintentar automáticamente las verificaciones pendientes cuando se restablezca el servicio. | Pendiente pasa a evaluación sin intervención manual. | N-31,N-48 | D-135 |
| RF-145 | P1 | **Resultado de reintento al arrendador.** El sistema deberá avisar dentro de la aplicación al arrendador cuando la verificación pendiente termine Dentro o Fuera de Ixtlán. | Aviso contiene habitación y clasificación final. | N-13 | D-136 |
| RF-146 | P1 | **Conservar publicación anterior.** Si falla verificación de coordenadas propuestas de habitación publicada, el sistema deberá conservar visibles los datos de ubicación antes autorizados. | Dirección y pin públicos antiguos siguen visibles. | N-04,N-11,N-48 | D-137 |
| RF-147 | P1 | **Aplicar favorable automáticamente.** Tras reintento favorable de coordenadas nuevas en habitación publicada, el sistema deberá aplicar automáticamente la propuesta validada y avisar al arrendador, sin otra aprobación. | Resultado Dentro actualiza ubicación sin paso humano. | N-11,N-13 | D-138 |
| RF-148 | P1 | **Bloqueo arrendador por verificación.** El sistema deberá impedir al arrendador sustituir nuevas coordenadas mientras su verificación técnica esté pendiente. | Editor de pin bloqueado. | N-11,N-49 | D-139 |
| RF-149 | P1 | **Bloqueo administrativo por verificación.** El sistema deberá impedir al administrador sustituir las coordenadas propuestas mientras la misma verificación técnica esté pendiente. | Admin tampoco puede modificar propuesta. | N-19,N-49 | D-140 |
| RF-150 | P1 | **Aviso inicio al arrendador.** El sistema deberá notificar al arrendador al entrar por primera vez al estado de verificación pendiente e informar reintento automático. | Recibe aviso inicial con habitación. | N-13 | D-141 |
| RF-151 | P1 | **Aviso inicio al administrador.** El sistema deberá notificar individualmente al administrador por cada habitación que entre a verificación técnica pendiente. | Dos habitaciones generan dos avisos individuales. | N-19 | D-142 |
| RF-152 | P1 | **Aviso cierre al administrador.** El sistema deberá notificar individualmente al administrador cuando cada verificación técnica pendiente termine, con clasificación Dentro/Fuera. | Un aviso de cierre por habitación finalizada. | N-19 | D-143 |
| RF-153 | P1 | **Sin avisos repetidos de verificación.** El sistema no deberá emitir nuevas notificaciones por reintentos fallidos mientras persista la misma verificación pendiente. | Tres fallos de mismo caso dejan un aviso inicial por destinatario. | N-13,N-19 | D-144 |
| RF-154 | P1 | **Ediciones no geográficas en verificación pendiente.** El sistema deberá permitir al arrendador cambiar precio, fotografías, servicios y disponibilidad durante verificación técnica pendiente. | Precio cambia y pin queda pendiente intacto. | N-11,N-14 | D-145 |
| RF-155 | P1 | **Bloqueo de dirección y zona.** El sistema deberá bloquear dirección escrita, colonia/barrio/zona y coordenadas propuestas para arrendador y administrador durante verificación técnica pendiente. | Tres campos no editables por ambos roles. | N-11,N-19 | D-146 |
| RF-156 | P1 | **Datos públicos anteriores consistentes.** Mientras verificación técnica pendiente, el sistema deberá mostrar a visitantes dirección, zona y marcador anteriores juntos. | Nunca aparece texto nuevo con pin antiguo. | N-04,N-09 | D-147 |
| RF-157 | P1 | **Cambio geográfico conjunto.** Al aplicar nueva ubicación el sistema deberá actualizar indivisiblemente dirección, zona y coordenadas sin mostrar combinaciones de versión vieja/nueva. | Consulta concurrente observa A completa o B completa. | N-04,N-48 | D-148 |
| RF-158 | P1 | **Pendiente de aplicación.** Si falla guardado de ubicación ya validada, el sistema deberá conservar ubicación antigua y propuesta validada en estado «Pendiente de aplicación por problema técnico». | Falla de escritura no altera ubicación pública. | N-11,N-32 | D-149 |
| RF-159 | P1 | **Reintentar guardado.** El sistema deberá reintentar automáticamente el guardado de ubicación validada pendiente cuando se restablezca el servicio. | Al recuperar persistencia, guarda sin que usuario repita alta. | N-31,N-32 | D-149 |
| RF-160 | P1 | **Reverificar al cambiar polígono.** El sistema deberá volver a verificar propuesta validada pero aún no aplicada si cambió la versión del polígono desde validación. | Diferencia de versión impide aplicar sin nuevo examen. | N-48,N-50 | D-150 |
| RF-161 | P1 | **No aplicar resultado exterior actualizado.** El sistema no deberá aplicar automáticamente propuesta clasificada fuera tras reverificación con polígono vigente; deberá habilitar revisión. | Resultado Fuera mantiene ubicación anterior. | N-44,N-48 | D-150 |
| RF-162 | P1 | **Regresión al estado de verificación.** Si falla técnicamente la reverificación requerida por cambio de polígono, la propuesta deberá pasar de pendiente de aplicación a pendiente de verificación. | Estado se convierte y propuesta se conserva. | N-31,N-48 | D-151 |
| RF-163 | P1 | **Avisar transición a verificación.** El sistema deberá notificar al arrendador y administrador sobre ese cambio de estado debido a nuevo polígono y falla técnica. | Ambos reciben aviso de transición sin confundir con reintento repetido. | N-13,N-19 | D-152 |
| RF-164 | P1 | **Avisar falla inicial de aplicación.** El sistema deberá notificar al arrendador y administrador cuando guardado de ubicación ya validada quede pendiente, explicando reintento automático. | Dos destinatarios reciben aviso de aplicación pendiente. | N-13,N-19 | D-153 |
| RF-165 | P1 | **Avisar aplicación exitosa.** Cuando el guardado pendiente termine íntegramente, el sistema deberá notificar éxito al arrendador y administrador. | Aviso sólo después de guardar todo. | N-13,N-19 | D-154 |
| RF-166 | P1 | **No duplicar fallos de aplicación.** El sistema no deberá generar más notificaciones por reintentos de guardado fallidos mientras continúe el mismo estado pendiente de aplicación. | Tres reintentos fallidos no crean nuevos avisos. | N-13,N-19 | D-155 |
| RF-167 | P1 | **Bloquear propuesta pendiente de aplicación.** El sistema deberá impedir al arrendador y administrador modificar dirección, zona y coordenadas de propuesta validada en estado pendiente de aplicación. | Tres campos bloqueados para ambos. | N-11,N-19 | D-156 |
| RF-168 | P1 | **Ediciones no geográficas durante aplicación.** El sistema deberá permitir al arrendador editar datos no geográficos durante aplicación pendiente sin sobrescribirlos al completar guardado geográfico. | Precio editado persiste tras aplicar pin. | N-11,N-14 | D-157 |
| RF-169 | P1 | **Eliminar habitación con aplicación pendiente.** El sistema deberá permitir al arrendador eliminar una habitación con aplicación pendiente, cancelar el cambio y detener los reintentos para impedir reaparición. | Eliminada, ningún reintento la restaura. | N-11,N-32 | D-158 |

## 3. Requisitos no funcionales y atributos de calidad

La columna **estado** es esencial: un título de calidad sin objetivo de aceptación cuantitativo **no está listo para declararse aprobado en esos aspectos**.

| ID | Atributo | Especificación | Estado de definición | Stakeholders | Necesidades |
| --- | --- | --- | --- | --- | --- |
| RNF-001 | Seguridad de acceso por roles | El sistema deberá restringir la administración de publicaciones y del polígono territorial a roles autenticados autorizados. | Confirmado funcionalmente; falta política de sesiones | ST-02,ST-04 | N-19,N-34 |
| RNF-002 | Aislamiento entre arrendadores | El sistema deberá impedir acceso de un arrendador a gestión, notificaciones e historiales exclusivos de otro. | Confirmado | ST-02 | N-11,N-13 |
| RNF-003 | Integridad geográfica | El sistema deberá aplicar en una única operación consistente el conjunto dirección-zona-coordenadas. | Confirmado | ST-01,ST-02 | N-48 |
| RNF-004 | Conservación del historial territorial | El sistema deberá conservar versiones históricas del polígono por toda la vida operativa, sujeto a obligaciones legales aplicables. | Confirmado | ST-04 | N-50 |
| RNF-005 | Recuperación automática de verificación | El sistema deberá reintentar automáticamente verificaciones pendientes tras restablecimiento del servicio y conservar las propuestas. | Confirmado; cadencia sin definir | ST-02,ST-09 | N-32,N-48 |
| RNF-006 | Recuperación automática de aplicación | El sistema deberá reintentar operaciones de aplicación geográfica fallidas sin perder datos ni modificar públicamente parcialmente la ubicación. | Confirmado; cadencia sin definir | ST-02,ST-09 | N-32,N-48 |
| RNF-007 | Tiempo de respuesta de búsquedas | El sistema deberá satisfacer un tiempo de respuesta bajo carga definida. | PENDIENTE: cuantificar percentil, segundos, concurrencia | ST-01,ST-08 | N-07,N-29 |
| RNF-008 | Disponibilidad global | El sistema deberá satisfacer el nivel de disponibilidad acordado por el propietario del proyecto. | PENDIENTE: porcentaje, ventana y mantenimiento | ST-05,ST-09 | N-24,N-31 |
| RNF-009 | Accesibilidad de interfaz | El sistema deberá alcanzar un nivel de accesibilidad verificable para sus interfaces web. | PENDIENTE: norma/nivel/alcance | ST-01,ST-08 | N-01,N-29 |
| RNF-010 | Compatibilidad | El sistema deberá funcionar en navegadores y tamaños de pantalla identificados como compatibles. | PENDIENTE: matriz de dispositivos y versiones | ST-01,ST-07 | N-01,N-27 |
| RNF-011 | Respaldo y recuperación | El sistema deberá soportar respaldo y restauración de datos conforme a objetivos de pérdida y recuperación acordados. | PENDIENTE: frecuencia, RPO y RTO | ST-09,ST-05 | N-31,N-32 |
| RNF-012 | Privacidad y tratamiento de datos | El sistema deberá manejar teléfono público, señales antiabuso y datos de auditoría conforme al marco legal aplicable. | PENDIENTE: aviso, base legal, retención y consentimiento | ST-11,ST-05 | N-34 |
| RNF-013 | Protección de comunicaciones | El sistema deberá proteger comunicaciones y credenciales durante autenticación y administración. | PENDIENTE: controles técnicos concretos | ST-04,ST-07 | N-34 |
| RNF-014 | Rendimiento cartográfico | El sistema deberá representar mapa, marcadores y polígono dentro de objetivos de rendimiento mensurables. | PENDIENTE: tamaños/carga/tiempos | ST-01,ST-08 | N-04,N-29 |
| RNF-015 | Operabilidad y diagnóstico | El sistema deberá permitir a soporte distinguir fallos de verificación de fallos de aplicación sin alterar reglas de visibilidad. | Confirmado conceptualmente; PENDIENTE instrumentación | ST-09 | N-31,N-32 |

## 4. Restricciones de negocio transversales

1. La localidad de Ixtlán y el municipio no son ámbitos intercambiables.
2. Las habitaciones nuevas requieren **dos controles distintos**: verificación geográfica y aprobación administrativa general.
3. Las modificaciones de habitaciones ya aprobadas no repiten el trámite general, pero siguen sujetas a validaciones territoriales.
4. Los límites geométricos son **inclusivos** y no se aplica margen de tolerancia exterior.
5. Una excepción geográfica individual confirma ubicación **real** dentro de la localidad, no autoriza ubicaciones realmente fuera.
6. El historial versionado del **polígono** no implica historial de cada movimiento individual del marcador de habitación.
7. La falta de servicio técnico no debe interpretarse como clasificación territorial desfavorable o favorable.
8. Durante validación/aplicación pendiente de nueva ubicación de una habitación publicada, los visitantes ven siempre los datos anteriores coherentes.
9. Las modificaciones geográficas propuestas quedan bloqueadas durante estados pendientes técnicos, pero los datos no geográficos siguen siendo editables por el arrendador.
10. Los reintentos fallidos dentro de un mismo estado no causan notificaciones duplicadas. La transición a otro estado puede requerir una notificación propia.

## 5. Información pendiente de decisión

| Código de asunto | Estado | Pregunta abierta | Repercusiones |
|---|---|---|---|
| PD-001 | No decidido | ¿Puede el arrendador eliminar una habitación mientras su ubicación está «Pendiente de verificación por problema técnico»? | Interrupción de trabajos, registros y visibilidad; **no derivar una respuesta de D-158**, que solo cubre *pendiente de aplicación*. |
| PD-002 | No cuantificado | ¿Cuáles son la carga, tiempos de respuesta y disponibilidad exigibles? | RNF-007, RNF-008, RNF-014. |
| PD-003 | Por definir | ¿Qué proveedor y datos cartográficos oficiales válidos se usarán? | Integración y verificación de límites. |
| PD-004 | Por definir | ¿Qué mecanismos específicos de consentimiento, privacidad y retención aplican? | RNF-012 y controles antiabuso. |
| PD-005 | Por definir | ¿Qué navegadores, metas de accesibilidad y dispositivos se aceptarán? | RNF-009, RNF-010. |
| PD-006 | Por definir | ¿Qué RPO/RTO, respaldo y cadencia de reintentos se exigirán? | RNF-005, RNF-006, RNF-011. |
| PD-007 | Por validar | ¿Se dispone de acta literal de las 158 decisiones y 967 RN para auditar cada asignación exacta? | Trazabilidad histórica exhaustiva. |

## 6. Método propuesto de control de cambios

Cada modificación posterior debe declarar ID, versión, causa/decisión, necesidades afectadas, criterios de aceptación afectados, prioridad y estado (propuesto / aprobado / retirado). No deben reutilizarse identificadores retirados para comportamientos distintos.

## 7. Correspondencia con reglas de negocio históricas recientes

La siguiente relación evita confundir las reglas históricas RN con los nuevos requisitos RF. Los intervalos previos a RN-753 requieren cotejo con las actas originales para su transcripción literal.

| Decisión | Intervalo de RN históricas | Resumen de reglas |
|---|---|---|
| D-136 | RN-753–RN-761 | Notificación al arrendador de verificación finalizada |
| D-137 | RN-762–RN-771 | Conservación de ubicación antigua ante falla de verificación |
| D-138 | RN-772–RN-780 | Aplicación automática tras validación favorable |
| D-139 | RN-781–RN-788 | Bloqueo de propuesta para arrendador durante verificación pendiente |
| D-140 | RN-789–RN-796 | Bloqueo de propuesta también para administrador |
| D-141 | RN-797–RN-804 | Notificación inicial de falla de verificación al arrendador |
| D-142 | RN-805–RN-812 | Notificación inicial individual al administrador |
| D-143 | RN-813–RN-821 | Notificación del resultado final al administrador |
| D-144 | RN-822–RN-829 | Sin avisos repetidos de reintentos fallidos de verificación |
| D-145 | RN-830–RN-838 | Edición no geográfica durante verificación pendiente |
| D-146 | RN-839–RN-847 | Bloqueo de dirección, colonia y pin en verificación pendiente |
| D-147 | RN-848–RN-857 | Datos geográficos públicos anteriores mientras nueva ubicación pendiente |
| D-148 | RN-858–RN-867 | Aplicación íntegra y conjunta de datos geográficos |
| D-149 | RN-868–RN-877 | Conservación de ubicación y reintentos de guardado |
| D-150 | RN-878–RN-887 | Reverificación al cambiar el polígono vigente |
| D-151 | RN-888–RN-898 | Falla de reverificación: vuelta a pendiente de verificación |
| D-152 | RN-899–RN-907 | Notificar transición entre estados técnicos |
| D-153 | RN-908–RN-917 | Notificación inicial de falla de aplicación geográfica |
| D-154 | RN-918–RN-926 | Notificación tras recuperación de guardado |
| D-155 | RN-927–RN-936 | Sin avisos repetidos de reintentos fallidos de aplicación |
| D-156 | RN-937–RN-946 | Bloqueo de datos propuestos durante aplicación pendiente |
| D-157 | RN-947–RN-958 | Edición de datos no geográficos en aplicación pendiente |
| D-158 | RN-959–RN-967 | Eliminación con aplicación pendiente cancela reintentos |
