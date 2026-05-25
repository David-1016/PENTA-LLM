# Maltego Analysis Lab: Propiedades del Nodo y Reconocimiento de Infraestructura

## Descripción
Este laboratorio está enfocado en la aplicación práctica de técnicas de Inteligencia de Fuentes Abiertas (**OSINT**) y el reconocimiento pasivo de infraestructura utilizando **Maltego**. 

El objetivo principal es auditar el dominio `latinoamericacomparte.com` mediante la ejecución secuencial de *transforms*, permitiendo mapear, cruzar y visualizar de manera gráfica las relaciones entre el dominio, registros DNS, servidores de correo, direcciones IP, ubicaciones geográficas y metadatos públicos expuestos.

**Uso Ético y Legal:** Todas las actividades de este laboratorio se realizan exclusivamente con fines académicos sobre recursos de uso público. El reconocimiento no autorizado puede vulnerar normativas de privacidad y la Ley 1273 de 2009 (Colombia).

---

##  Información del Proyecto
* **Espacio Académico:** Ciberseguridad Blue Team y White hat
* **Presentado a:** Sergio Arley Puerto Moreno
* **Institución:** Universidad Santo Tomás, Seccional Tunja (Facultad de Ingeniería de Sistemas)
* **Año:** 2026
* **Autores:** * Arcila Pulido Julián Andrés
  * Bayona Garavito Juan Pablo
  * Galindo Rodríguez Manuel Felipe
  * García Niño Michael Steven
  * Gómez David Fernando

---

## 🎯 Objetivos

* Implementar metodologías de reconocimiento pasivo (Reconnaissance) sobre un objetivo digital real.
* Ejecutar transformaciones en Maltego para extraer registros DNS, servidores de correo y direccionamiento IP.
* Analizar la densidad de conexiones en infraestructura mediante la reestructuración visual del grafo (Layouts).
* Auditar metadatos avanzados y relaciones ocultas mediante la herramienta *Detail View*.
* Recolectar información registral pública (WHOIS) para identificar vectores de contacto e infraestructura compartida.

---

## Herramientas y Conceptos Clave

* **Maltego:** Herramienta de minería de datos y análisis de enlaces para representar relaciones complejas en grafos.
* **Técnicas OSINT:** Recolección de datos provenientes de fuentes de acceso público.
* **Análisis de Grafos:** Organización visual de nodos (entidades) y enlaces (relaciones) para identificar puntos críticos de infraestructura.

---

## Entidades y Elementos Analizados

| Entidad / Registro | Detalle Identificado en la Auditoría |
| :--- | :--- |
| **Dominio Principal** | `latinoamericacomparte.com` (Entidad Inicial) |
| **Registros de Correo** | Servidores MX implicados (`mail.latinoamericacomparte.com`) |
| **Contacto Técnico** | Autoridad DNS identificada a través de registros SOA (`dns@jomax.net`) |
| **Proveedores/Filtros** | Referencias a políticas SPF (`secureserver.net`) |
| **Infraestructura Base** | Direcciones IP, Netblocks correlacionados y servidores Name Servers |
| **Proveedores del Servicio** | Entidades de registro público (GoDaddy.com, VeriSign Global Registry Services) |

---

## Desarrollo Metodológico (Fases del Laboratorio)

El procedimiento técnico documentado en el informe se divide en las siguientes fases clave:

1. **Configuración del Entorno:** Inicialización del mapa en blanco y parametrización de la entidad inicial *Domain*.
2. **Transformaciones DNS y NS:** Consultas de queries para determinar los Name Servers encargados de resolver el dominio.
3. **Mapeo de Direcciones IP:** Ejecución de transformaciones dirigidas a identificar las IPs asociadas y la infraestructura física que aloja el sitio.
4. **Geolocalización por Netblock:** Delimitación del rango de red y ubicación de los servidores.
5. **Rastreo de Cuentas de Correo:** Búsqueda pasiva de direcciones de email corporativas o expuestas en el dominio.
6. **Identificación de Servidores MX:** Mapeo de los servidores encargados del intercambio de correo electrónico.
7. **Intersección de Infraestructura:** Análisis de múltiples dominios externos que coexisten compartiendo los mismos recursos de correo.
8. **Análisis Estructural del Grafo:** Aplicación de layouts circulares y agrupados para aislar visualmente los nodos con mayor centralidad o densidad de conexiones.
9. **Auditoría de Metadatos (Detail View):** Uso de la pestaña lateral de Maltego para examinar propiedades específicas de los nodos y rutas ocultas sin saturar el gráfico principal.
10. **Extracción WHOIS y Registro:** Consulta a bases de datos públicas para identificar la empresa registradora (GoDaddy), el TLD Registry (VeriSign) y el canal oficial de reportes por abuso (`abuse@godaddy.com`).

---

## Enfoque desde la Seguridad Informática

* **Perspectiva Blue Team:** La recolección de registros WHOIS y puntos de contacto técnicos es crucial para coordinar respuestas ante incidentes, mitigar ataques de suplantación de identidad (Phishing) o denunciar abuso en la infraestructura de forma legal y efectiva.
* **Perspectiva White Hat:** Facilita la evaluación exhaustiva de la superficie de exposición y la huella digital de una organización, permitiendo cerrar brechas informativas antes de que sean descubiertas por atacantes reales.
