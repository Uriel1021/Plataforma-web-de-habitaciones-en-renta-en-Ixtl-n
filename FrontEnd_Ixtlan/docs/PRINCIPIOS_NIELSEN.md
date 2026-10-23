# Aplicación de las 10 heurísticas de Jakob Nielsen

**Estado:** evaluación de diseño del prototipo. La presencia de mecanismos no equivale a una evaluación de usabilidad con participantes.

| # | Heurística | Implementación concreta | Comprobación manual |
|---|---|---|---|
| 1 | Visibilidad del estado del sistema | Etiquetas de «Disponible»/«Rentada», aprobación y verificación, avisos accesibles con `aria-live`, contador de notificaciones y resultados de filtros. | Enviar una opinión; observar aviso y estado pendiente de aprobación. |
| 2 | Correspondencia con el mundo real | «Renta mensual», «colonia», «baño privado», MXN, «Arrendador», «Habitación», «Ixtlán». | Abrir ficha; comprobar terminología comprensible y precio separado de extras. |
| 3 | Control y libertad | Botones para limpiar filtros, volver al catálogo, cancelar modales, cerrar sesión y restablecer datos demo. Escape cierra los diálogos. | Abrir formulario de edición y pulsar Escape; comprobar que no se guardan cambios. |
| 4 | Consistencia y estándares | Un solo encabezado, tarjetas y formularios compartidos; mismos textos de error, tablas y estados en vistas. | Comparar formularios del arrendador y administrador. |
| 5 | Prevención de errores | Validaciones de precio entero positivo, rango mínimo/máximo, 1–5 ilustraciones, capacidad positiva, permisos y bloqueo geográfico. Solicitud de confirmación para eliminar. | Introducir precio mínimo superior al máximo o editar una propuesta geográfica bloqueada. |
| 6 | Reconocer antes que recordar | Listas de servicios, estados visibles, accesos demo, categorías de filtros, información de ubicación en fichas y resúmenes de resultados. | Explorar sin saber previamente los filtros disponibles. |
| 7 | Flexibilidad y eficiencia | Búsqueda libre, filtros combinables, orden por precio o calificación; atajos de acceso directo a paneles según sesión. | Buscar por zona y luego ordenar por precio. |
| 8 | Diseño estético y minimalista | Jerarquía de títulos, espacio negativo, paleta restringida, iconos con texto y controles progresivos en panel administrativo. | Revisar versión escritorio y móvil. |
| 9 | Ayuda a reconocer, diagnosticar y recuperarse de errores | Mensajes explícitos en validaciones, diferenciación entre «pendiente de verificación» y «pendiente de aplicación», reintentos simulados, datos anteriores preservados. | Desconectar servicio demo en Administración → Territorio; cambiar coordenadas de una habitación. |
| 10 | Ayuda y documentación | README en español, ejemplos de formatos, aviso persistente de prototipo, guía de prueba y notas junto a controles complejos. | Revisar README y mensajes del mapa y formulario. |

## Observaciones de accesibilidad

- Se utilizan controles HTML nativos, etiquetas de formulario, textos alternativos y foco visible.
- Las tarjetas permiten navegación mediante enlaces y los mapas incluyen controles accesibles al teclado para abrir una habitación.
- La interfaz se adapta a pantallas pequeñas y respeta `prefers-reduced-motion`.
- **No se afirma conformidad WCAG** sin auditoría adicional de contraste, lectores de pantalla y pruebas con usuarios.

## Mejoras antes de producción

- Implementar gestión de foco completa y atrapamiento de foco en modales.
- Auditar accesibilidad con tecnologías de asistencia y usuarios reales.
- Validar tiempos de respuesta y rendimiento bajo cargas cuantificadas.
- Incorporar información de ayuda contextual y guías para uso de cartografía real.
