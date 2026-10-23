# Descripción del proyecto

**Nombre de trabajo:** Plataforma web de habitaciones en renta en Ixtlán, Oaxaca  
**Código:** PROY-IXT-001  
**Versión documental:** 1.0  
**Fecha:** 23 de octubre de 2026  
**Ámbito territorial:** **localidad de Ixtlán, Oaxaca**, no el municipio completo  
**Estado de aprobación del documento:** pendiente de validación integrala
**Autor:** Uriel Aguilar Mauricio


> **Control de procedencia.** Este documento consolida el proceso previo de elicitación: 158 decisiones confirmadas (D-01 a D-158), 50 identificadores de necesidades (N-01 a N-50), 11 stakeholders y numeración histórica de reglas hasta RN-967. Las **redacciones aquí consolidadas** son editoriales y no pretenden reproducir palabra por palabra todas las actas ni las 967 reglas. Se conservan como referencias exactas las decisiones finales disponibles; cualquier correspondencia global sin acta literal se identifica como trazabilidad temática. Los requisitos nuevos `RF-###` y `RNF-###` son identificadores propios de esta versión del catálogo y no equivalen a los antiguos `RN-###`. Las prestaciones todavía no decididas se etiquetan **PENDIENTE** y no deben tratarse como aprobadas.


## 1. Planteamiento del problema

Las personas que buscan una habitación en renta dentro de la localidad de Ixtlán necesitan comparar opciones atendiendo a precio, ubicación, disponibilidad, servicios, equipamiento, fotografías y experiencias de otros usuarios. La información dispersa dificulta comparar alternativas y conocer si una publicación corresponde realmente a la localidad considerada.

Los arrendadores requieren un medio para presentar y actualizar sus habitaciones. El promotor necesita controlar la calidad del contenido, evitar que se publiquen habitaciones externas a la localidad y mantener un proceso de aprobación y moderación. El sistema propuesto reúne estos flujos en una aplicación web, con consulta pública anónima y administración autenticada.

## 2. Propósito

Ofrecer una plataforma **informativa y de contacto** para consultar, comparar, localizar, publicar y administrar habitaciones en renta **solo dentro de la localidad de Ixtlán, Oaxaca**, con moderación administrativa de altas y opiniones, reglas de búsqueda y verificación territorial.

## 3. Objetivos

**Objetivo general.** Especificar y construir una aplicación web que facilite la búsqueda pública y la gestión administrada de habitaciones en renta en la localidad de Ixtlán, preservando integridad de información, trazabilidad de decisiones administrativas y coherencia territorial.

**Objetivos específicos.**

1. Permitir que visitantes consulten habitaciones sin registrarse y las comparen por criterios claros.
2. Proporcionar al arrendador una cuenta creada por el administrador para gestionar sus propias habitaciones.
3. Garantizar que cada alta nueva pase por verificación geográfica y aprobación administrativa.
4. Permitir comentarios y calificaciones anónimas, con moderación y mecanismo de apelación de bloqueos.
5. Gestionar el polígono de la **localidad**, sus versiones, revisiones y efectos sobre publicaciones.
6. Proteger la consistencia de direcciones, zonas y marcadores ante errores técnicos y cambios territoriales.
7. Mantener avisos y registros administrativos que permitan supervisión y verificación posterior.

## 4. Alcance funcional

### 4.1 Dentro del alcance

- Listado y detalle público de habitaciones disponibles y rentadas.
- Búsquedas combinadas por renta base, zona, radio en mapa, disponibilidad, servicios normalizados, amueblado, baño y capacidad.
- Orden por fecha de aprobación, renta base o promedio de calificaciones aprobadas.
- Publicación por arrendadores autenticados registrados por el administrador; aprobación administrativa de altas nuevas.
- Datos mínimos completos, 1 a 5 fotografías, marcador confirmado y contacto visible por habitación.
- Comentarios y calificaciones de visitantes sin cuentas, moderación independiente, detección de abuso de intentos de calificación y apelaciones por folio.
- Delimitación exacta de la localidad de Ixtlán, geocodificación con confirmación de marcador, excepciones fundadas, revisiones, edición y restauración versionada del polígono.
- Avisos dentro de la aplicación, registros de eliminación y recuperación automática de verificaciones/actualizaciones geográficas interrumpidas.

### 4.2 Fuera del alcance confirmado

No está definido como función aprobada contratar, pagar, reservar habitaciones, firmar contratos, administrar depósitos, generar facturas o tramitar mudanzas desde la plataforma. La interacción con el arrendador se realiza por los medios de contacto mostrados; no se debe convertir este sistema en un motor de pagos o reservas sin una nueva decisión de alcance.

Tampoco está aprobada la expansión automática a otras localidades del municipio de Ixtlán ni a otros municipios; el alcance territorial es **la localidad**.

## 5. Actores y accesos

| Rol | Acceso / función principal |
| --- | --- |
| Visitante o persona buscadora | Consulta pública sin registro; usa filtros, mapa, contacto, comentarios y calificaciones. |
| Arrendador | Cuenta creada por administrador; gestiona solo sus habitaciones y consulta avisos propios. |
| Administrador | Aprueba altas, modera opiniones, administra territorio, excepciones y registros. |
| Inquilino actual/anterior | Participa como visitante aportando comentario o valoración sin cuenta. |
| Otros interesados | Promotor, analista, desarrollo, calidad, soporte, proveedores y reguladores; intervienen en gobierno/operación. |


## 6. Características principales

### 6.1 Información de una habitación

- Renta base mensual **entera positiva en pesos mexicanos**, sin centavos.
- Dirección escrita exacta, barrio/colonia/zona, coordenadas y marcador confirmado.
- Disponibilidad: **Disponible** o **Rentada**.
- Entre **1 y 5 fotografías**; portada aleatoria al crear conjunto y estable mientras no cambie.
- Servicios ofrecidos, distinguiendo incluidos o con costo adicional; importes conocidos o «Costo variable / Consultar al arrendador».
- Amueblado: amueblada, parcialmente amueblada o sin amueblar.
- Baño: privado o compartido.
- Capacidad máxima: entero positivo.
- Datos de contacto visibles en su publicación, incluidos teléfono y WhatsApp según los registrados.

### 6.2 Catálogo normalizado de servicios

1. Agua.
2. Electricidad.
3. Internet / Wi-Fi.
4. Gas.
5. Acceso a cocina.
6. Lavandería.
7. Estacionamiento.
8. Servicio de limpieza.
9. Seguridad o vigilancia.
10. Áreas comunes.

Se admite declarar **«Ninguno»** y describir servicios adicionales en texto libre. Los adicionales no generan nuevas opciones normalizadas de búsqueda.

### 6.3 Búsqueda y clasificación

Los filtros se combinan con **AND entre categorías**; en selecciones múltiples de zonas o servicios se usa **OR dentro de cada categoría**. Precio y distancia incluyen sus límites. El filtro por precio utiliza únicamente la renta mensual base; el de capacidad significa **capacidad máxima ≥ mínimo solicitado**. La distancia se mide en línea geodésica desde un punto elegido por el visitante, con radios positivos decimales en kilómetros, sin tope fijo.

### 6.4 Territorialidad y publicación

La delimitación aplica a la **localidad**. Los puntos exactamente sobre aristas o vértices del polígono cuentan **dentro**; los puntos fuera no tienen margen automático. Una discrepancia cartográfica puede revisarse por el administrador y permitir una excepción individual **solo si se comprueba pertenencia real a la localidad**. Cambios del polígono desencadenan reevaluación de publicaciones y solicitudes pendientes, con protección de la visibilidad anterior mientras haya revisión.

### 6.5 Fallas y recuperación

Se distinguen dos estados:

- **Pendiente de verificación por problema técnico:** aún no hay resultado territorial fiable para la propuesta.
- **Pendiente de aplicación por problema técnico:** la propuesta fue validada, pero falló el guardado del conjunto dirección–zona–coordenadas.

Ambos estados conservan datos y admiten recuperación automática. Si la habitación ya estaba publicada, conserva públicamente la **ubicación anterior íntegra**. Las propuestas geográficas se bloquean para arrendador y administrador, pero el arrendador puede actualizar atributos no geográficos. Las notificaciones iniciales y de resolución se dirigen a los destinatarios acordados, evitando duplicados por fallos repetidos del mismo estado.

## 7. Reglas de frontera del producto

**Entradas:** fichas y fotografías de habitaciones, filtros, coordenadas confirmadas, comentarios/estrellas, motivos de moderación, decisiones territoriales, cambios de polígono.

**Salidas:** resultados de búsqueda, fichas, marcadores, estado de aprobación, promedio de calificaciones, avisos en la aplicación, resultados de apelación, historial administrativo y versiones cartográficas.

**Dependencias:** navegador y conectividad web; servicio cartográfico; geocodificador cuando esté disponible; plataforma de hospedaje/almacenamiento por seleccionar; datos cartográficos oficiales si son apropiados.

## 8. Restricciones y decisiones relevantes

| Aspecto | Restricción / decisión |
| --- | --- |
| Territorio | Solo localidad de Ixtlán; no municipio. |
| Cuentas | Sin cuenta para visitantes; arrendadores registrados solo por administrador. |
| Nuevas publicaciones | No visibles hasta verificar territorio y recibir aprobación general. |
| Ediciones aprobadas | No requieren segunda aprobación general, con controles geográficos vigentes. |
| Opiniones | Comentarios y estrellas moderados separadamente. |
| Cartografía | Polígono vigente público; historial completo exclusivo del administrador. |
| Polígono | Versiones conservadas; restaurar genera versión nueva y requiere motivo. |
| Fallos técnicos | Nunca equivalen a Dentro ni Fuera; datos se conservan y se reintentan. |
| Integridad | Nunca mezclar dirección/colonia/marcador de ubicaciones diferentes. |
| Auditoría de marcadores | No se exige historial individual de cambios de marcador (D-87); sí historial de versiones de polígonos (D-115). |


## 9. Riesgos y aspectos por cerrar

- Selección de proveedor de mapas, geocodificación, hosting, almacenamiento y formato del dato territorial oficial.
- Política de protección de datos, manejo de IP/indicadores antiabuso, retención y publicación de teléfonos.
- Objetivos cuantitativos de rendimiento, concurrencia, disponibilidad, respaldo y recuperación.
- Matriz de compatibilidad y accesibilidad web.
- Eliminación de una habitación que esté «Pendiente de verificación por problema técnico»: **aún no confirmada** (pregunta siguiente al D-158).
- Pruebas de conformidad para límites del polígono, cambios de versión, ediciones concurrentes y fallas parciales.

## 10. Productos de esta especificación

Los entregables documentales son la descripción del proyecto, el registro de stakeholders, el registro de deseos y necesidades, el catálogo de requisitos funcionales/no funcionales y el SRS. Su contenido está vinculado mediante identificadores `ST-##`, `N-##`, `RF-###`, `RNF-###` y decisiones históricas `D-###`. Los identificadores `RN-###` corresponden a reglas previamente levantadas, no a los nuevos requisitos del catálogo.
