# Laboratorio de Ciberseguridad: Latinoamérica Comparte

## 📝 Descripción del Proyecto
Este repositorio contiene el entorno de pruebas, la documentación y las metodologías utilizadas para la auditoría de seguridad controlada del portal **Latinoamérica Comparte**. El objetivo principal es evaluar la resistencia de la plataforma frente a vectores de ataque modernos, analizando desde la infraestructura perimetral hasta la seguridad en modelos de Inteligencia Artificial.

---

## 🎯 Objetivos Centrales

> **Entorno Controlado:** Todas las pruebas descritas en este laboratorio se ejecutan bajo un marco metodológico estricto con el fin de detectar vulnerabilidades y diseñar contramedidas efectivas.

* **Pentesting Web & APIs:** Evaluación de endpoints, lógica de negocio y formularios.
* **Auditoría de Infraestructura:** Reconocimiento de servicios expuestos y configuraciones de servidor.
* **Seguridad en IA:** Pruebas de resistencia contra *Prompt Injection* en los chatbots de la plataforma.

---

## 🔍 Alcance del Análisis

El desarrollo del laboratorio se divide en dos fases tácticas fundamentales:

### 1. Reconocimiento y Superficie de Exposición
Fase orientada a la recolección de información pública y pasiva para determinar el perímetro del objetivo.

[Dominio Principal]
│
├──► Subdominios expuestos & IPs públicas
├──► Frameworks y Tecnologías del servidor
└──► Certificados SSL & Fugas de información (OSINT)


### 2. Capa de Aplicación y Lógica de Negocio
Auditoría dinámica mediante la manipulación controlada de tráfico y peticiones HTTP.

| Componente | Elementos Evaluados | Riesgos Asociados |
| :--- | :--- | :--- |
| **Sesiones y Tráfico** | Cookies, Tokens, Headers HTTP | *Session Hijacking*, exposición de credenciales. |
| **Intercambio de Datos** | Formularios, Endpoints de APIs | Inyecciones, modificación de parámetros en tránsito. |
| **Interactividad** | Chatbots y componentes de IA | *Prompt Injection*, evasión de restricciones lógicas. |

---

## 🛠️ Metodología de Pruebas

Durante la ejecución del laboratorio se implementan técnicas estándar de la industria, las cuales incluyen:

1. **Manipulación de Peticiones:** Alteración de parámetros y reenvío de solicitudes modificadas para evaluar la validación del lado del servidor.
2. **Enumeración de Servicios:** Identificación de puertos abiertos y versiones de software para detectar componentes obsoletos.
3. **Simulación de Ataques:** Replicación de escenarios reales para verificar la efectividad de las alertas y defensas perimetrales.

---

## 📦 Resultados y Entregables

Al finalizar el ciclo de pruebas, el repositorio consolidará las siguientes herramientas defensivas:

* **Reportes Técnicos:** Documentación detallada de cada hallazgo con su respectivo nivel de severidad.
* **Pruebas de Concepto (PoC):** Evidencias controladas de las vulnerabilidades descubiertas.
* **Guías de Remediación:** Parches sugeridos, configuraciones de *headers* seguros y sanitización de entradas para mitigar los riesgos identificados.
