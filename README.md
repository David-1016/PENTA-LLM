## Fase DAST: Análisis Dinámico de Vulnerabilidades con OWASP ZAP

En este módulo se documenta la auditoría de seguridad dinámica (**DAST**) realizada sobre el sitio web objetivo `latinoamericacomparte.com` utilizando la herramienta **OWASP ZAP** (*Zed Attack Proxy*), bajo los lineamientos y metodologías de nuestro framework **PENTA-LLM**.

### Resumen del Proceso
1. **Reconocimiento e Interceptación (History):** Se validó el tráfico base del sitio web, confirmando la estabilidad del servidor mediante respuestas homogéneas *HTTP 200 OK*.
2. **Inspección de Datos (Search):** Se realizó un análisis de fuga de información (*Information Disclosure*), logrando identificar la exposición pública de una credencial de acceso (`access_key`) a la API del servicio de terceros **Web3Forms**.
3. **Mapeo Automatizado (Spider & AJAX Spider):** Se indexaron las URLs y directorios interactivos basados en JavaScript. La auditoría detectó fallos en el despliegue del sitio mediante la presencia de **enlaces rotos** (Errores *404 Not Found* en secciones clave como `/paises`, `/noticias` y `/apoyar`).
4. **Simulación de Ataques (Active Scan):** Se lanzaron 178 peticiones automatizadas inyectando payloads maliciosos. El servidor demostró resiliencia en su página principal al no colapsar ante los vectores de ataque básicos.

### Diagnóstico de Alertas Detectadas
El análisis arrojó un total de **11 tipos de alertas** sin vulnerabilidades críticas o de riesgo alto:
* **Riesgos Medios:** Ausencia de Tokens Anti-CSRF, falta de cabecera de seguridad *Content Security Policy* (CSP), transiciones inseguras de datos de formularios (HTTP a HTTPS) y malas configuraciones de origen cruzado (Cross-Domain).
* **Riesgos Bajos e Informativos:** Ausencia de cabeceras de protección contra Clickjacking (`X-Frame-Options`), falta de políticas `X-Content-Type-Options`, carencia de atributos de integridad (SRI) en scripts externos y exposición de metadatos del servidor (*Unix Timestamps*).

### Conclusión General
El sitio web demuestra un estado de estabilidad óptimo frente a ataques automatizados críticos en su página principal. No obstante, requiere corregir de forma prioritaria la configuración de sus cabeceras de seguridad, la protección de sus formularios y la visibilidad de llaves de terceros en el código fuente para mitigar vectores clásicos de suplantación, interceptación de datos y fugas de información.
