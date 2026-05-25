# PENTA-LLM
Este repositorio contiene el desarrollo del framework PENTA-LLM, una metodología para evaluar la seguridad de sitios web y modelos de Inteligencia Artificial (IA).

El laboratorio de seguridad informática se centrará en la evaluación del portal Latinoamérica Comparte, una plataforma dedicada a la gestión de programas sociales, emprendimiento, productividad y transformación digital en la región. Las actividades se desarrollarán en un entorno controlado con el fin de auditar la infraestructura, APIs, formularios, configuraciones y la resiliencia de sistemas basados en inteligencia artificial ante técnicas de inyección de instrucciones.

Las fases de análisis y los elementos evaluados se estructuran de la siguiente manera:

Reconocimiento de Infraestructura y Tecnologías
El propósito de esta fase consiste en recopilar datos de acceso público para identificar la superficie de exposición del dominio y sus componentes tecnológicos.

Elementos bajo análisis: Detección de subdominios activos, direcciones IP públicas, credenciales o correos electrónicos filtrados, tecnologías de servidor, frameworks de desarrollo y la validez de los certificados SSL.

Riesgos asociados: Identificación de vectores de fuga de información, subdominios huérfanos o desconfigurados, y la enumeración de servicios expuestos que puedan comprometer la seguridad perimetral.

Seguridad en Capa de Aplicación, Sesiones y APIs
Se examinará la gestión de las comunicaciones y los mecanismos de autenticación entre el cliente y el servidor mediante la inspección y alteración controlada de solicitudes.

Elementos bajo análisis: Encabezados de respuesta HTTP, atributos de configuración en cookies, persistencia de tokens, manejo de sesiones, validación en formularios de entrada y accesibilidad de endpoints de APIs.

Pruebas de ejecución: Modificación de parámetros en tránsito, reenvío y alteración de peticiones, e interceptación de flujos de autenticación.

Vulnerabilidades evaluadas: Secuestro de sesión, exposición de datos sensibles por tokens mal protegidos, ausencia de directivas de seguridad en cabeceras y configuraciones débiles en el almacenamiento de cookies.

Resultados y Entregables del Proyecto
La finalidad última de estas pruebas es el fortalecimiento de la postura defensiva del sitio mediante la documentación técnica. El entorno permitirá:

Identificar fallas de configuración y vulnerabilidades activas.

Modelar escenarios de riesgo basados en vectores de ataque reales.

Desarrollar e implementar contramedidas específicas y herramientas de mitigación.

Generar informes detallados con las recomendaciones de remediación necesarias para proteger la plataforma y sus componentes de inteligencia artificial.
