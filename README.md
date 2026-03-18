# 🧊 LL Trainer

> Entrenador de Last Layer para cubo Rubik 3×3 — OLL, PLL y Full LL con timer estilo csTimer.

![LL Trainer](icon-512)
---

## ✨ Características

- **3 modos de entrenamiento**: Full LL, solo OLL, solo PLL
- **Visualización del caso**: cubo 3D isométrico en Full LL, vista plan en OLL/PLL
- **Timer estilo csTimer**: mantén SPACE para preparar, suelta para iniciar
- **Subsets anidados**: filtra por grupo (Cruz, Dot, Fish…) y fija un caso específico para repetirlo
- **Ver/ocultar caso**: practica recognition sin ver el nombre hasta que quieras
- **Ver/ocultar algoritmo**: muestra el alg y su setup (inversa)
- **57 OLL + 21 PLL** con algoritmos estándar de la comunidad
- **Estadísticas persistentes**: ao5, ao12, mejor, peor, promedio — guardadas en localStorage
- **Historial** con marcador de PB
- **Colores personalizables**: 4 presets + rueda de color por cara + exportar/importar JSON
- **PWA instalable**: funciona como app nativa en Android e iOS
- **100% offline** después de la primera carga
- **Responsive**: diseño adaptado para móvil con tabs

---

## 🗂️ Grupos OLL

| Grupo | Casos | Descripción |
|---|---|---|
| Dot | 1, 2, 3, 4, 17, 18, 19, 20 | Ningún borde orientado |
| Square | 5, 6 | 2 bordes adyacentes |
| Lightning | 7, 8, 11, 12, 39, 40 | Forma de rayo |
| Fish | 9, 10, 35, 37 | Forma de pez |
| Knight | 13, 14, 15, 16 | Movimiento de caballo |
| C | 34, 46 | Forma de C |
| T | 33, 45 | Forma de T |
| P | 31, 32, 43, 44 | Forma de P |
| W | 36, 38 | Forma de W |
| L | 47, 48, 49, 50, 53, 54 | Forma de L |
| Line | 51, 52, 55, 56 | Línea recta |
| Awkward | 29, 30, 41, 42 | Formas asimétricas |
| OCLL | 21, 22, 23, 24, 25, 26, 27 | Todos los bordes orientados |
| Corners | 28, 57 | Todas las esquinas orientadas |

---

## ⌨️ Controles

| Acción | Teclado | Móvil |
|---|---|---|
| Preparar timer | Mantener `SPACE` | Mantener touch zone |
| Iniciar | Soltar `SPACE` | Soltar touch zone |
| Parar | `SPACE` | Toque touch zone |
| Siguiente caso | `SPACE` (después de parar) | Toque touch zone |
| Borrar último | `DELETE` / `BACKSPACE` | Deslizar ← en touch zone |

---

## 📁 Archivos

```
index.html        — HTML principal
ll-trainer.css    — Estilos
ll-trainer.js     — Lógica, motor de cubo, timer, stats
manifest.json     — PWA manifest
sw.js             — Service Worker (caché offline)
icon-192.png      — Ícono app 192×192
icon-512.png      — Ícono app 512×512
favicon.ico       — Favicon pestaña navegador
```

---

## 📱 Instalar como app

### Android (Chrome)
1. Abre la página en Chrome
2. Menú `⋮` → **Añadir a pantalla de inicio**

### iPhone (Safari)
1. Abre la página en Safari
2. Botón compartir → **Añadir a pantalla de inicio**

---

## 🛠️ Tecnologías

- HTML, CSS y JavaScript vanilla — sin frameworks ni dependencias
- Canvas API para el renderizado del cubo
- localStorage para persistencia de estadísticas
- Service Worker para funcionamiento offline
- PWA (Progressive Web App)

---

## 🎨 Colores personalizables

Abre el modal de colores con el botón 🎨 en el header. Puedes:
- Elegir entre 4 presets (Estándar, Oscuro, Pastel, Alto Contraste)
- Cambiar el color de cada cara individualmente
- Exportar tu esquema como `.json`
- Importar un esquema previamente guardado

---

<p align="center">
  Powered by <a href="https://freedns.afraid.org">freedns.afraid.org</a>
</p>
