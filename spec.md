# Project Specification: QR Menu App

## 1. Descripción del Proyecto
Desarrollo de una web app estática, optimizada para dispositivos móviles (Mobile-First) con acceso vía código QR. Actuará como menú digital para "Arenal El Chiringuito". Prioridad absoluta en rendimiento (Zero-JS en cliente) y carga instantánea bajo conexiones móviles inestables.

## 2. Stack Tecnológico
*   **Framework:** Astro (Static Site Generation).
*   **Estilos:** Tailwind CSS.
*   **Iconografía:** SVG inline o Astro-Icon (lucide-icons).
*   **Gestión de datos (Futuro):** Colecciones de contenido (Content Collections) de Astro o archivos `.json` locales para poblar la carta más adelante.

## 3. Estructura de Rutas y Páginas (Astro Pages)

La aplicación sigue un flujo estricto de tres niveles.

### Nivel 1: Inicio
*   **Archivo:** `src/pages/index.astro`
*   **Contenido:**
    *   Componente Logo.
    *   Enlace -> `/carta` (Botón principal).
    *   Enlace -> Instagram (URL externa).
    *   Enlace -> Facebook (URL externa).

### Nivel 2: Categorías
*   **Archivo:** `src/pages/carta.astro` (o `src/pages/carta/index.astro`)
*   **Contenido:**
    *   Componente `Header` (incluye botón "Volver" hacia `/`).
    *   Enlace -> `/aperitivos`
    *   Enlace -> `/calientes`
    *   Enlace -> `/montaditos-hamburguesas`
    *   Enlace -> `/bebidas`

### Nivel 3: Vistas de Detalle
*   **Archivos:** 
    *   `src/pages/aperitivos.astro`
    *   `src/pages/calientes.astro`
    *   `src/pages/montaditos-hamburguesas.astro`
    *   `src/pages/bebidas.astro`
*   **Contenido (común en todas):**
    *   Componente `Header` (incluye botón "Volver" hacia `/carta`).
    *   Componente `ProductList` (actualmente renderizando datos de prueba/placeholders).

## 4. Arquitectura de Componentes Sugerida (`src/components/`)
*   `Layout.astro`: Define el cascarón de la página (etiquetas `<head>`, meta tags para mobile viewport, fuentes y el fondo global con textura de madera natural).
*   `Header.astro`: Contiene el logotipo y la lógica visual del botón de retroceso.
*   `Button.astro` / `LinkCard.astro`: Componentes reutilizables para la navegación, estilizados en negro mate con áreas de toque accesibles (min. 44x44px).
*   `ProductItem.astro`: Contenedor base para mostrar el nombre y el precio de un plato (vacío/placeholder en la fase inicial).

## 5. Diseño (UI/UX) y Configuración de Tailwind
*   **Paleta y Materiales:** Contraste industrial. El `Layout` debe implementar un fondo que simule madera natural. Las tarjetas, botones y textos utilizarán una paleta basada en negro mate (ej. `bg-zinc-900` o `bg-black` con bordes sutiles).
*   **Tipografía:** Sin serifa, limpia, de alto contraste para máxima legibilidad en exteriores a plena luz solar.
*   **Accesibilidad:** Tailwind debe usarse para asegurar un padding amplio en los enlaces (`p-4` o similar) facilitando la navegación a una sola mano.