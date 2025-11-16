/**
 * Item de experiencia laboral (Timeline)
 */
export interface Experience {
    /** ID único del item (usado para enlaces y referencias) */
    id: string;
    /** Periodo de tiempo (ej: "Enero 2020 - Actualidad") */
    period: string;
    /** Título del puesto */
    title: string;
    /** Nombre de la empresa o tipo de trabajo */
    subtitle: string;
    /** Descripción corta (visible siempre) */
    descriptionShort: string;
    /** Descripción completa (colapsable, soporta Markdown) */
    description: string;
    /** Lista de tecnologías/herramientas utilizadas */
    badgs?: string[];
    /** URL externa (sitio de la empresa, etc) */
    link?: string;
}
