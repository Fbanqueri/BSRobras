# Sistema de Diseño Semántico: BSR Obras

> **Guía maestra de diseño para rediseño visual de BSRobras**  
> Generado bajo las directrices de la skill `stitch-design-taste` y estándares anti-plantilla para interfaces de arquitectura, construcción y materiales de alta exigencia técnica.

---

## 1. Atmósfera Visual y Personalidad de Marca

* **Concepto Visual:** *Estudio Técnico Arquitectónico y Protección Estructural*. Combina la solidez industrial de la obra con la precisión y limpieza de un estudio de ingeniería de materiales.
* **Dial de Personalidad:**
  * **Densidad:** `5 / 10` (Equilibrada — catálogos técnicos claros, respiro tipográfico generoso, sin saturación visual).
  * **Variación (Asimetría):** `7 / 10` (Composiciones asimétricas, ritmos visuales tipo Bento Grid, quiebres de cuadrícula para destacar soluciones insignia).
  * **Movimiento:** `6 / 10` (Física de resortes calibrada, respuestas táctiles inmediatas en botones, micro-revelaciones staggered en catálogos).

---

## 2. Paleta de Colores y Roles Funcionales

> **Regla estricta:** Un único color de acento principal. Sin negro puro (`#000000`). Sin brillos de neón ni gradientes púrpuras genéricos.

### Superficies y Neutros Base
* **Lienzo Principal (Canvas Light):** `#F8FAFC` (Slate-50) — Fondo neutro fresco y arquitectónico.
* **Superficie de Tarjetas (Surface Pure):** `#FFFFFF` — Fondos de tarjetas, paneles y contenedores con elevación.
* **Lienzo Oscuro (Deep Architectural Slate):** `#090D16` — Fondos para Hero y secciones de alto contraste (reemplazo del negro absoluto).
* **Superficie Oscura Elevada (Surface Dark Elevated):** `#111827` (Slate-900) — Tarjetas o módulos dentro de secciones oscuras.
* **Líneas Estructurales (Hairline Border Light):** `rgba(226, 232, 240, 0.8)` (Slate-200 al 80%).
* **Líneas Estructurales Oscuras (Hairline Border Dark):** `rgba(255, 255, 255, 0.08)`.

### Texto y Jerarquía
* **Texto Primario (Charcoal Slate):** `#0F172A` (Slate-900) — Títulos y texto de alto contraste.
* **Texto Secundario (Technical Muted):** `#64748B` (Slate-500) — Subtítulos, descripciones y especificaciones.
* **Texto Terciario (Micro Label):** `#94A3B8` (Slate-400) — Metadatos, etiquetas y breadcrumbs.
* **Texto en Superficies Oscuras:** `#F8FAFC` (Primario) y `#94A3B8` (Secundario).

### Acento Singular de Marca
* **Verde Técnico BSR (Primary Accent):** `#047857` (Emerald-700) — Evoca durabilidad, protección impermeable y calidad técnica.
* **Acento Interacción (Hover / Active):** `#065F46` (Emerald-800).
* **Superficie de Acento (Tinted Badge):** `rgba(4, 120, 87, 0.1)` — Fondos para insignias técnicas y tags de categoría.
* **Sombra Teñida de Acento:** `rgba(4, 120, 87, 0.28)`.

---

## 3. Tipografía y Arquitectura de Texto

### Fuentes Seleccionadas
* **Display & Encabezados:** **`Geist`** o **`Cabinet Grotesk`** (Alternativa sans moderna disponible vía Google Fonts / Fontsource).
* **Cuerpo de Lectura:** **`Geist Sans`** / **`Inter` (sólo como fallback del sistema)** con espaciado óptico y altura de línea holgada.
* **Números y Datos Técnicos:** **`Geist Mono`** o tabular figures activado (`font-variant-numeric: tabular-nums`) para rendimientos ($m^2$, litros, espesores, tiempos de secado).

### Jerarquía y Escala
* **H1 Hero:** `text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance`.
* **H2 Sección:** `text-2xl md:text-4xl font-bold tracking-tight text-balance`.
* **H3 Componente / Tarjeta:** `text-lg md:text-xl font-semibold tracking-tight`.
* **Cuerpo Principal:** `text-base text-slate-600 leading-relaxed max-w-[65ch]`.
* **Micro-etiqueta Técnica (Badges):** `text-xs font-mono uppercase tracking-wider font-semibold`.

---

## 4. Componentes y Comportamientos de Interacción

### Botones
* **Primario (Catálogo / CTA Principal):**
  * Fondo: `#047857` (Emerald-700), texto blanco `#FFFFFF`, peso `font-semibold`.
  * Sombra coloreada: `shadow-[0_10px_20px_-5px_rgba(4,120,87,0.35)]`.
  * Efecto táctil al clic: `active:translate-y-[1px] active:scale-[0.99]`.
* **Secundario (WhatsApp / Asesor Directo):**
  * Fondo traslúcido acrílico: `bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white`.
  * Micro-indicador de disponibilidad: Punto verde pulsante `w-2 h-2 rounded-full bg-emerald-400`.

### Tarjetas y Contenedores
* **Bordes:** Finos de 1px (`border border-slate-200/70` o `border-white/10`).
* **Esquinas:** Curvaturas consistentes `rounded-2xl` para contenedores y `rounded-xl` para elementos internos.
* **Sombras:** Difusas y teñidas `shadow-[0_8px_30px_rgb(0,0,0,0.04)]` en reposo; `shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)]` en hover.
* **Distribución interna:** Botones y enlaces anclados al fondo mediante flexbox (`mt-auto`).

### Barra de Navegación (Navbar)
* Estructura flotante o integrada con efecto vidrio esmerilado continuo:
  * `bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50`.
  * Indicador de ruta activa con pastilla sutil (`bg-slate-100` o `text-primary font-semibold`).

---

## 5. Principios de Layout y Asimetría

1. **Fin a las "3 tarjetas idénticas":**
   * En la Home, la categoría principal (**Impermeabilización**) ocupa 2 columnas o posición predominante tipo Bento, mientras que **Pinturas** y **Preparación** complementan de forma asimétrica con métricas y fichas técnicas.
2. **Hero de Doble Columna (60 / 40):**
   * Columna izquierda: Título de impacto local, propuesta de valor técnica y CTAs diferenciados.
   * Columna derecha: Bento flotante con 3 elementos interactivos (ej. Badge de disponibilidad en Rosario, selector de soluciones por problema de humedad, y foto de producto emblemático con textura).
3. **Contención y Adaptabilidad:**
   * Contenedores con `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
   * En pantallas móviles (`< 768px`), colapso estricto a una columna fluida sin scroll horizontal ni desbordes.
   * Uso de `min-h-[100dvh]` para secciones completas en lugar de `h-screen`.

---

## 6. Filosofía de Movimiento (Motion)

* **Física de Resortes (Spring Physics):**
  * Easing por defecto: `stiffness: 120, damping: 20` para transiciones orgánicas y precisas.
* **Entradas Escalonadas (Staggered Reveals):**
  * Las listas de productos y subcategorías deben desplegarse con retrasos encadenados de `0.04s` entre elementos.
* **Optimización de Rendimiento:**
  * Animar exclusivamente `transform` y `opacity`. Prohibido animar `width`, `height`, `top` o `left`.

---

## 7. Anti-Patrones Prohibidos (Anti-AI Tells)

* ❌ **Prohibido el negro absoluto (`#000000`)**: Usar siempre `#090D16` o `#0F172A`.
* ❌ **Prohibidos los halos y resplandores de neón púrpura/magenta**: Toda sombra debe reflejar luz natural o el verde esmeralda institucional.
* ❌ **Prohibidas las filas de 3 tarjetas idénticas**: Usar asimetría, fichas destacadas o bento grids.
* ❌ **Prohibidas las sombras grises genéricas sobre fondos de color**: Las sombras deben estar teñidas con el matiz del fondo o del botón.
* ❌ **Prohibidos los textos huérfanos en títulos**: Aplicar siempre `text-balance`.
* ❌ **Prohibidos los spinners circulares genéricos**: Utilizar loaders tipo esqueleto (*skeletons*) adaptados al tamaño de cada componente.
* ❌ **Prohibido el uso de emojis como iconos de interfaz**: Usar exclusivamente la librería `lucide-react`.

---

## 8. Principios de Design Engineering de Emil Kowalski (Detalles Invisibles)

> *"Todos esos detalles invisibles se combinan para producir algo simplemente deslumbrante, como mil voces apenas audibles cantando en perfecta afinación."* — Emil Kowalski / Paul Graham

### A. Feedback Táctil Inmediato en Botones e Interactivos
* **Respuesta física al presionar:** Todo elemento clickeable debe reaccionar instantáneamente en `:active`:
  ```css
  /* Regla de Emil Kowalski */
  .btn-tactile {
    transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .btn-tactile:active {
    transform: scale(0.97);
  }
  ```
* En Tailwind / React: `active:scale-[0.97] transition-transform duration-150 ease-out`.

### B. Prohibido Animar desde `scale(0)`
* Nada en el mundo real surge de la nada absoluta. Animar desde `scale(0)` hace que los elementos parezcan brotar artificialmente.
* **Regla estricta:** Animar siempre desde `scale(0.95)` o `scale(0.97)` combinado con `opacity: 0`:
  ```tsx
  // Correcto (Framer Motion / Motion)
  initial={{ opacity: 0, scale: 0.95, y: 8 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  ```

### C. Prohibido `ease-in` en Interfaces de Usuario
* `ease-in` arranca lento, haciendo que los menús, diálogos o dropdowns se sientan perezosos y lentos.
* **Regla estricta:** Usar siempre curvas `ease-out` agresivas para entradas (reacción inmediata):
  * Custom curve: `cubic-bezier(0.23, 1, 0.32, 1)`.
  * Toda micro-animación de UI debe durar **menos de 300ms** (óptimo: 150ms a 220ms para feedback perceptible e instantáneo).

### D. Físicas de Resorte e Interrumpibilidad (Spring Physics)
* Las animaciones con resortes simulan física real y mantienen el impulso si el usuario interrumpe la acción a mitad de camino (ej. cerrar un modal mientras aún se abría):
  ```tsx
  // Preset de Motion para componentes BSR
  transition={{
    type: "spring",
    stiffness: 140,
    damping: 18,
    mass: 1
  }}
  ```

### E. Desenfoque Sutil para Transiciones Perfectas (*Blur Bridging*)
* Cuando haya un cambio de estado visual o carga de imagen que cause un parpadeo duro, aplicar un micro-desenfoque de transición `filter: blur(2px)` durante 150ms para suavizar el reemplazo visual sin coste perceptivo.

### F. Formato Requerido de Revisión de Código UI
Toda revisión o refactorización de interfaz debe validarse contra esta matriz comparativa:

| Antes | Después | Razón (Principio de Emil) |
| :--- | :--- | :--- |
| `transition: all 300ms` | `transition: transform 160ms ease-out` | Especificar propiedades exactas; nunca `all` |
| `initial={{ scale: 0 }}` | `initial={{ scale: 0.95, opacity: 0 }}` | Nada en el mundo real aparece desde la nada |
| `ease-in` en desplegables | `ease-out` con curva agresiva | `ease-in` se percibe perezoso; `ease-out` responde al instante |
| Botón estático al presionar | `active:scale-[0.97]` | El usuario debe sentir que la interfaz "escucha" el clic |

