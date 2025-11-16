/**
 * Configuración general del portafolio
 */

import type { DisplayLimits } from "@/types";

/**
 * Límites de elementos a mostrar inicialmente
 *
 * Cuando hay más elementos que el límite, se muestra un botón "Ver más"
 */
export const DISPLAY_LIMITS: DisplayLimits = {
    /** Número de proyectos a mostrar inicialmente */
    projects: 3,
    /** Número de experiencias a mostrar inicialmente */
    experience: 4,
};

/**
 * Textos de enlaces de proyectos
 */
export const LINK_TEXTS = {
    playstore: "Play Store",
    appstore: "App Store",
    github: "GitHub",
    web: "Ver página",
    preview: "Abrir",
};
