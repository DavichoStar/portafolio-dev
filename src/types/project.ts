/**
 * Etiqueta de tecnología con icono y estilos
 */
export interface Tag {
    /** Nombre de la etiqueta */
    name: string;
    /** Clase de color de la etiqueta (Tailwind) */
    class: string;
    /** Clase de color del icono (Tailwind) */
    classIcon?: string;
    /** Componente de icono de Astro */
    icon: any;
}

/**
 * Enlace de un proyecto
 */
export interface LinkButton {
    /** URL del enlace */
    href: string;
    /** Tipo de enlace (para mostrar icono específico) */
    type?: "playstore" | "appstore" | "github" | "web";
}

/**
 * Proyecto del portafolio
 */
export interface Project {
    /** Título */
    title: string;
    /** Descripción corta */
    descriptionShort: string;
    /** Descripción */
    description: string;
    /** Este proyecto fue desarrollado en: (Nombre del Trabajo, Freelance, Personal, etc) */
    work?: string;
    /** Id del trabajo para enlazar con la sección de experiencia */
    workId?: string;
    /** Enlaces (GitHub, demo, stores, etc) */
    links?: LinkButton[];
    /** Imagen principal */
    image: ImageMetadata;
    /** Imágenes adicionales */
    images?: ImageMetadata[];
    /** Etiquetas de tecnologías utilizadas */
    tags: Tag[];
}
