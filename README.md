# Burp Suite Analysis Lab: Auditoría de Cabeceras y Reconocimiento de Capa de Aplicación

## Descripción
Este laboratorio está enfocado en la aplicación práctica de técnicas de análisis activo de aplicaciones web y auditoría de seguridad utilizando **Burp Suite Community Edition**[cite: 5].

El objetivo principal es auditar el dominio `latinoamericacomparte.com` interceptando y analizando de manera controlada el tráfico web[cite: 5]. Esto permite mapear la estructura interna de la plataforma e inspeccionar minuciosamente los encabezados de las respuestas HTTP para identificar fallas críticas de configuración y debilidades de *Hardening* (endurecimiento) desde la perspectiva de la seguridad informática[cite: 5].

**Uso Ético y Legal:** Todas las actividades de este laboratorio se realizan exclusivamente con fines académicos sobre recursos de uso público[cite: 4, 5]. El reconocimiento y análisis no autorizado puede vulnerar normativas de privacidad y la Ley 1273 de 2009 (Colombia)[cite: 4].

---

## Información del Proyecto
* **Espacio Académico:** Ciberseguridad Blue Team y White hat[cite: 5]
* **Presentado a:** Sergio Arley Puerto Moreno[cite: 5]
* **Institución:** Universidad Santo Tomás, Seccional Tunja (Facultad de Ingeniería de Sistemas)[cite: 5]
* **Año:** 2026[cite: 5]
* **Autores:** 
  * Arcila Pulido Julián Andrés[cite: 5]
  * Bayona Garavito Juan Pablo[cite: 5]
  * Galindo Rodríguez Manuel Felipe[cite: 5]
  * García Niño Michael Steven[cite: 5]
  * Gómez David Fernando[cite: 5]

---

## Objetivos

* Implementar metodologías de análisis activo e interceptación de tráfico sobre un objetivo digital real[cite: 5].
* Utilizar herramientas nativas de interceptación aislada para registrar peticiones web sin alterar proxies globales[cite: 5].
* Mapear y descubrir de forma automática la estructura de carpetas, recursos de terceros y dependencias de la plataforma[cite: 5].
* Examinar y auditar de forma minuciosa los encabezados de respuesta HTTP para detectar la exposición de metadatos o tecnologías del servidor[cite: 5].
* Identificar la ausencia de políticas y directivas de seguridad esenciales en la capa de aplicación web[cite: 5].

---

## Herramientas y Conceptos Clave

* **Burp Suite:** Plataforma integrada para realizar pruebas de seguridad de aplicaciones web[cite: 5].
* **Burp Browser:** Navegador Chromium embebido y preconfigurado por PortSwigger para enrutar tráfico de forma directa[cite: 5].
* **Site Map:** Módulo de Burp Suite que indexa y genera de forma dinámica un árbol estructurado de directorios y recursos detectados[cite: 5].
* **Response Headers:** Encabezados enviados por el servidor que definen las directivas de seguridad y comportamiento del navegador del cliente[cite: 5].

---

## Entidades y Elementos Analizados

| Entidad / Componente | Detalle Identificado en la Auditoría |
| :--- | :--- |
| **Dominio Principal** | `latinoamericacomparte.com` (Objetivo de la Auditoría)[cite: 5] |
| **Navegador de Pruebas** | Instancia de Chromium provista por PortSwigger[cite: 5] |
| **Infraestructura Externa** | Conexiones en segundo plano hacia librerías de JavaScript en el CDN de Cloudflare (`cdnjs.cloudflare.com`)[cite: 5] |
| **Tecnología del Servidor** | Exposición explícita de firma de software de alojamiento (`Server: Apache`)[cite: 5] |
| **Políticas de Seguridad** | Ausencia total de directivas básicas de protección en las líneas de respuesta HTTP[cite: 5] |

---

## Desarrollo Metodológico (Fases del Laboratorio)

El procedimiento técnico documentado en el informe se divide en las siguientes fases clave:

1. **Configuración del Entorno de Interceptación:** Inicialización de Burp Suite en Kali Linux y descarte de configuraciones complejas de proxies externos[cite: 5].
2. **Activación de Burp Browser:** Uso del navegador integrado nativo de PortSwigger para canalizar el tráfico web de forma directa[cite: 5].
3. **Carga del Sitio Objetivo:** Ingreso a la URL principal para generar las primeras peticiones hacia el dominio bajo análisis[cite: 5].
4. **Verificación de Captura Pasiva:** Confirmación de registro limpio de peticiones salientes iniciales dentro del mapa del sitio[cite: 5].
5. **Inspección de Solicitudes Salientes:** Desglose en texto plano de la estructura y cabeceras de las peticiones iniciales generadas por el navegador[cite: 5].
6. **Mapeo Automatizado del Sitio:** Navegación orgánica para permitir que el motor de la herramienta dibuje el árbol de carpetas y dependencias de la plataforma[cite: 5].
7. **Identificación de Recursos de Terceros:** Detección automática de conexiones e indexación de bibliotecas de scripts externas alojadas en Cloudflare CDN[cite: 5].
8. **Organización con el Inspector:** Uso del panel lateral derecho de Burp Suite para agrupar de manera estructurada los encabezados de la respuesta[cite: 5].
9. **Auditoría de la Respuesta HTTP Reina:** Selección de la petición principal (`GET /`) y visualización en formato *Pretty* de los metadatos reales del servidor[cite: 5].
10. **Diagnóstico de Vulnerabilidades:** Evaluación crítica de las líneas de respuesta para documentar malas configuraciones e identificar la falta de controles esenciales[cite: 5].

---

## Enfoque desde la Seguridad Informática

* **Perspectiva Blue Team:** Analizar los encabezados HTTP permite identificar brechas críticas de endurecimiento (*Hardening*)[cite: 5]. La ausencia de directivas como HSTS, X-Frame-Options o X-Content-Type-Options expone a los usuarios de la organización a ataques de red y manipulación de interfaz, por lo que su remediación inmediata mediante reglas del servidor (como archivos `.htaccess` en Apache) es indispensable para mitigar riesgos antes del despliegue en producción[cite: 5].
* **Perspectiva White Hat:** Permite auditar la superficie de exposición en la capa de aplicación y comprobar qué tanta información sensible revela la plataforma de forma pública (como la firma de software `Server: Apache`)[cite: 5]. Esto facilita a los analistas éticos simular la fase de reconocimiento de un atacante real para recomendar correcciones preventivas eficaces[cite: 5].
