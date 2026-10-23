# Trazabilidad del front-end respecto del SRS

**SRS de referencia:** `SRS_REFERENCIA.md` (borrador consolidado D-01 a D-158). Este cuadro declara implementación UI y simulaciones. No certifica conformidad completa.

| Rango de requisitos SRS | Comportamiento en el prototipo | Estado |
|---|---|---|
| RF-001–RF-017 | Catálogo/selección pública, dirección, fichas, servicios, disponibilidad, promedio aprobado, mapa y polígono visible al abrir | Implementación local con cartografía simulada |
| RF-018–RF-042 | Precios, zonas, filtros OR/AND, distancia en línea recta (Haversine), orden por precio y estrellas | Implementado, pruebas unitarias de reglas principales |
| RF-043–RF-072 | Inicio de sesión demostrativo, publicación, edición, aprobación y eliminación de anuncios de arrendadores | Flujo local; sin autenticación segura ni imágenes reales |
| RF-073–RF-090 | Opinión y estrellas independientes pendientes de moderación, apelaciones por folio | Flujo local; antiabuso con límite de navegador simplificado |
| RF-091–RF-113 | Propuestas geográficas, verificación en polígono, revisión y notificación | Parcial, mapa sintético y sin geocodificador oficial |
| RF-114–RF-141 | Mapa vigente, versiones de límites, vista previa y restauración | Parcial, polígono sintético; faltan fuente oficial, trazado libre y varios controles avanzados |
| RF-142–RF-169 | Estados de recuperación geográfica, bloqueos, avisos y reintentos | Parcial; se simulan al interactuar; no hay workers ni transacciones en servidor |
| RNF-001–RNF-006 | Roles y aislación (solo demo), integridad de datos geográficos local, recuperación simulada | Parcial, no apto para producción |
| RNF-007–RNF-015 | Desempeño, disponibilidad, accesibilidad y otros atributos | En diseño; umbrales y evaluación formal pendientes |

## Ejemplos de criterios con pruebas o verificación manual

| ID | Evidencia en código | Prueba |
|---|---|---|
| RF-020 | `domain/filters.js`, `views/catalog.js` | Precio mínimo 3000 y máximo 1000: se muestra error y permanecen los otros filtros. |
| RF-025, RF-026 | `domain/filters.js` | `CENTRO` = ` cénTro `, pero `Centro` != `Zona Centro`. |
| RF-027–RF-030 | `domain/geo.js`, `components/map.js` | Seleccionar punto y radio decimal >0; frontera de distancia inclusiva. |
| RF-032–RF-038 | `domain/filters.js` | Varios servicios o zonas se combinan con OR, distintas familias con AND. |
| RF-041 | `domain/filters.js` | La media aprobada ordena antes de «Sin calificaciones». |
| RF-073–RF-090 | `services/reviews.js`, `views/detail.js`, `views/admin.js`, `views/appeals.js` | Comentario + estrellas crean entradas independientes para moderación. |
| RF-132–RF-141 | `services/territory.js`, `views/admin.js` | Nueva versión y restauración con motivo, solo administración. |
| RF-144–RF-165 | `services/rooms.js` | Simular servicio caído y recuperarlo, consultar estados y notificaciones. |

## Diferencias documentadas respecto al sistema completo

- Las ilustraciones del proyecto no son fotografías reales; los nombres, direcciones, números y geometría de muestra son ficticios.
- El mapa es un **esquema** de coordenadas de prueba, no una cartografía oficial de Ixtlán.
- La persistencia mediante `localStorage` opera en un solo navegador y no crea un historial administrativo inmutable.
- Las medidas avanzadas antiabuso, revisión de excepciones, transacciones robustas, recuperación autónoma, ACL y controles legales requieren backend.
- Los códigos `RNF` no fijados numéricamente por el propietario del proyecto no se presentan como cumplidos.
