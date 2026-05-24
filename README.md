# Analisis de Exposicion Web con HTTrack

## Descripción

Este laboratorio tiene como objetivo aplicar técnicas de **reconocimiento pasivo** mediante la clonación local del sitio `latinoamericacomparte.com` usando **HTTrack**.  
A partir de una réplica estática del sitio se analiza su estructura interna, dependencias externas, endpoints activos y posibles datos sensibles expuestos en el código fuente, sin establecer interacción activa con el servidor objetivo.

>  **Nota:** Este Laboratorio fue hecho bajo concentimiento de la empresa a la cual se le va a realizar la clonacion y posterior prueba de vulnerabilidades. Cualquier clonacion de sitios sin previo aviso y sin consentimiento puede acarrear consecuencias legales.

---

## Objetivos

- Usar la herramienta HTTrack en Kali Linux
- Clonar el sitio objetivo y replicar su estructura en un entorno local
- Levantar el servidor del sitio clonado para realizar pruebas
- Identificar endpoints, APIs, tokens y dependencias externas 
- Documentar los hallazgos y evaluar el nivel de exposición del sitio
- Desarrollar criterio de análisis en el contexto del reconocimiento pasivo (White Hat)

---

## Herramientas Utilizadas

- Maquina virtual con el sistema operativo Kali Linux
- HTTrack 
- Python para levantar el servidor localmente
- Comando de concola `grep` para inspección de código fuente
- Navegador web (En este caso Mozilla FireFox)


---

## Sitio Analizado

**URL objetivo:** `https://latinoamericacomparte.com/`  

---

## Resultados del Proceso de Clonación

| Elemento              | Detalle                                                              |
|-----------------------|----------------------------------------------------------------------|
| **Archivos descargados** | HTML, CSS, JS, PNG, JPG, GIF                                    |
| **API identificada**  | `https://api.web3forms.com/submit`                                   |
| **Llamada fetch()**   | `const response = await fetch(contactFormNew.action, {...})`         |
| **Token expuesto**    | No encontrado ✅                                                      |
| **access_key**        | Campo `name="access_key"` visible en el formulario HTML              |
| **Pasarela de pago**  | `https://checkout.bold.co/payment/LNK_Z48LF520TB`                   |
| **Dominios relacionados** | `colombiacomparte.com`, `ecuadorcomparte.com.co`, `chilecomparte.com.co`, `argentinacomparte.com` |
| **CDN externo**       | `cdnjs.cloudflare.com` — `anime.min.js`                              |

---

## Procedimiento

1. Verificar el funcionamiento de las herramientas en la maquina virtual
2. Ejecutar HTTrack con los filtros correspondientes (En la siguiente seccion aparece el comando utilizado)
3. Revisar la estructura clonada con `ls -la`
4. Levantar servidor HTTP local en el puerto 8080
5. Confirmar que el clon carga correctamente desde el navegador
6. Analizar el código fuente con `grep`
7. Registrar hallazgos con capturas de pantalla


---

## Comandos Utilizados

```bash

# Crear directorio donde se va a lojar la pagina clonada
mkdir ~/pruebaHttrack && cd ~/pruebaHttrack

# Clonar el sitio
httrack "https://latinoamericacomparte.com/" \
  -O "$HOME/pruebaHttrack" \
  "+*.css" "+*.js" "+*.png" "+*.jpg" "+*.jpeg" "+*.gif" \
  -v

# Revisar archivos descargados
ls -la

# Levantar servidor local
python3 -m http.server 8080 --bind 127.0.0.1

# Realizar pruebas de analisis
grep -r "api" .
grep -r "fetch" .
grep -r "token" .
grep -r "key" .
grep -r "http" .
```

---

## Análisis de Resultados

### `grep -r "api"`
Se encontró el endpoint `https://api.web3forms.com/submit` como acción del formulario de contacto del sitio. También aparecen referencias a `fonts.googleapis.com` para la carga de tipografías. Las coincidencias en archivos binarios son falsos positivos sin relevancia para el análisis.

> 📸 *[Captura: resultado del grep api]*

---

### `grep -r "fetch"`
Se identificó una llamada `fetch()` real implementada directamente en el código del sitio:

```js
const response = await fetch(contactFormNew.action, { ... })
```

Esto confirma que el sitio tiene lógica dinámica propia que envía datos a servicios externos, a diferencia de sitios estáticos donde `fetch` aparece únicamente dentro de código minificado de librerías como Bootstrap.

> 📸 *[Captura: resultado del grep fetch]*

---

### `grep -r "token"`
**Sin resultados relevantes.** No se encontraron tokens JWT, tokens de sesión ni credenciales de autenticación expuestas en el código fuente. Esto representa una buena práctica desde el punto de vista de seguridad.

> 📸 *[Captura: resultado del grep token]*

---

### `grep -r "key"`
Se detectó el campo `name="access_key"` en el formulario de contacto, que es el identificador utilizado por web3forms para autenticar las solicitudes entrantes. Adicionalmente se encontraron referencias a `@keyframes` (animaciones CSS) y `event.key` provenientes de la librería `anime.js`, las cuales no representan ningún riesgo de seguridad.

> 📸 *[Captura: resultado del grep key]*

---

### `grep -r "http"`
Se mapearon todas las dependencias externas del sitio: Google Fonts, CDN de Cloudflare, la API de web3forms, la pasarela de pago Bold (`checkout.bold.co/payment/LNK_Z48LF520TB`), cuatro dominios hermanos de la red latinoamericana y cinco redes sociales activas vinculadas al sitio.

> 📸 *[Captura: resultado del grep http]*

---

## Conclusiones

- HTTrack permite construir una réplica local completa de un sitio para inspeccionarlo de forma pasiva, sin levantar alertas en el servidor objetivo.
- El sitio `latinoamericacomparte.com` expone un `access_key` de web3forms en el HTML del formulario de contacto, lo que podría permitir a terceros abusar del endpoint de envío.
- La pasarela de pago Bold está directamente enlazada en el código fuente y es visible sin autenticación.
- No se encontraron tokens de autenticación ni JWT expuestos, lo cual es positivo.
- Las dependencias externas (Google Fonts, Cloudflare, redes sociales) amplían la superficie de ataque indirecta del sitio, aunque no representan una vulnerabilidad directa.
- El análisis refuerza la importancia de revisar el código fuente público como parte del reconocimiento en pruebas de penetración éticas.

---

