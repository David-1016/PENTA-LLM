# Burp Suite Analysis Lab: Auditoría de Cabeceras y Reconocimiento de Capa de Aplicación

## Descripción
Este laboratorio está enfocado en la aplicación práctica de técnicas de análisis activo de aplicaciones web y auditoría de seguridad utilizando **Burp Suite Community Edition**.

El objetivo principal es auditar el dominio `latinoamericacomparte.com` interceptando y analizando de manera controlada el tráfico web. Esto permite mapear la estructura interna de la plataforma e inspeccionar minuciosamente los encabezados de las respuestas HTTP para identificar fallas críticas de configuración y debilidades de *Hardening* (endurecimiento) desde la perspectiva de la seguridad informática.

**Uso Ético y Legal:** Todas las actividades de este laboratorio se realizan exclusivamente con fines académicos sobre recursos de uso público. El reconocimiento y análisis no autorizado puede vulnerar normativas de privacidad y la Ley 1273 de 2009 (Colombia).

---

## Información del Proyecto
* **Espacio Académico:** Ciberseguridad Blue Team y White hat
* **Presentado a:** Sergio Arley Puerto Moreno
* **Institución:** Universidad Santo Tomás, Seccional Tunja (Facultad de Ingeniería de Sistemas)
* **Año:** 2026
* **Autores:** 
  * Arcila Pulido Julián Andrés
  * Bayona Garavito Juan Pablo
  * Galindo Rodríguez Manuel Felipe
  * García Niño Michael Steven
  * Gómez David Fernando

---

## Objetivos

* Implementar metodologías de análisis activo e interceptación de tráfico sobre un objetivo digital real.
* Utilizar herramientas nativas de interceptación aislada para registrar peticiones web sin alterar proxies globales.
* Mapear y descubrir de forma automática la estructura de carpetas, recursos de terceros y dependencias de la plataforma.
* Examinar y auditar de forma minuciosa los encabezados de respuesta HTTP para detectar la exposición de metadatos o tecnologías del servidor.
* Identificar la ausencia de políticas y directivas de seguridad esenciales en la capa de aplicación web.

---

## Herramientas y Conceptos Clave

* **Burp Suite:** Plataforma integrada para realizar pruebas de seguridad de aplicaciones web.
* **Burp Browser:** Navegador Chromium embebido y preconfigurado por PortSwigger para enrutar tráfico de forma directa.
* **Site Map:** Módulo de Burp Suite que indexa y genera de forma dinámica un árbol estructurado de directorios y recursos detectados.
* **Response Headers:** Encabezados enviados por el servidor que definen las directivas de seguridad y comportamiento del navegador del cliente.

---

## Entidades y Elementos Analizados

| Entidad / Componente | Detalle Identificado en la Auditoría |
| :--- | :--- |
| **Dominio Principal** | `latinoamericacomparte.com` (Objetivo de la Auditoría) |
| **Navegador de Pruebas** | Instancia de Chromium provista por PortSwigger |
| **Infraestructura Externa** | Conexiones en segundo plano hacia librerías de JavaScript en el CDN de Cloudflare (`cdnjs.cloudflare.com`) |
| **Tecnología del Servidor** | Exposición explícita de firma de software de alojamiento (`Server: Apache`) |
| **Políticas de Seguridad** | Ausencia total de directivas básicas de protección en las líneas de respuesta HTTP |

---

## Desarrollo Metodológico (Fases del Laboratorio)

El procedimiento técnico documentado en el informe se divide en las siguientes fases clave:

1. **Configuración del Entorno de Interceptación:** Inicialización de Burp Suite en Kali Linux y descarte de configuraciones complejas de proxies externos.
2. **Activación de Burp Browser:** Uso del navegador integrado nativo de PortSwigger para canalizar el tráfico web de forma directa.
3. **Carga del Sitio Objetivo:** Ingreso a la URL principal para generar las primeras peticiones hacia el dominio bajo análisis.
4. **Verificación de Captura Pasiva:** Confirmación de registro limpio de peticiones salientes iniciales dentro del mapa del sitio.
5. **Inspección de Solicitudes Salientes:** Desglose en texto plano de la estructura y cabeceras de las peticiones iniciales generadas por el navegador.
6. **Mapeo Automatizado del Sitio:** Navegación orgánica para permitir que el motor de la herramienta dibuje el árbol de carpetas y dependencias de la plataforma.
7. **Identificación de Recursos de Terceros:** Detección automática de conexiones e indexación de bibliotecas de scripts externas alojadas en Cloudflare CDN.
8. **Organización con el Inspector:** Uso del panel lateral derecho de Burp Suite para agrupar de manera estructurada los encabezados de la respuesta.
9. **Auditoría de la Respuesta HTTP Reina:** Selección de la petición principal (`GET /`) y visualización en formato *Pretty* de los metadatos reales del servidor.
10. **Diagnóstico de Vulnerabilidades:** Evaluación crítica de las líneas de respuesta para documentar malas configuraciones e identificar la falta de controles esenciales.

---

## Enfoque desde la Seguridad Informática

* **Perspectiva Blue Team:** Analizar los encabezados HTTP permite identificar brechas críticas de endurecimiento (*Hardening*). La ausencia de directivas como HSTS, X-Frame-Options o X-Content-Type-Options expone a los usuarios de la organización a ataques de red y manipulación de interfaz, por lo que su remediación inmediata mediante reglas del servidor (como archivos `.htaccess` en Apache) es indispensable para mitigar riesgos antes del despliegue en producción.
* **Perspectiva White Hat:** Permite auditar la superficie de exposición en la capa de aplicación y comprobar qué tanta información sensible revela la plataforma de forma pública (como la firma de software `Server: Apache`). Esto facilita a los analistas éticos simular la fase de reconocimiento de un atacante real para recomendar correcciones preventivas eficaces.
