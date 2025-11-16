# Portafolio Dev - Guía de Uso

## 🧞 Commandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Commando                  | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

---

# 📁 Estructura del Proyecto

Este portafolio está organizado para facilitar la edición del contenido sin tocar el código de los componentes.

## 🗂️ Estructura de Carpetas

```
/
├── public/             # Archivos estáticos
│   ├── favicon.svg     # Icono para navegadores modernos
│   └── favicon.ico     # Icono para navegadores antiguos
├── src/
│   ├── assets/         # Imágenes y recursos
│   │   └── projects/   # Imágenes de proyectos
│   ├── components/     # Componentes de Astro
│   │   └── Card.astro
│   ├── config/         # Configuración general
│   ├── data/           # Contenido editable (proyectos, experiencia)
│   ├── layouts/        # Layouts principales
│   │   └── Layout.astro
│   ├── pages/          # Páginas del sitio
│   │    └── index.astro
│   ├── styles/        # Estilos globales (Tailwind CSS)
│   └── types/          # Interfaces TypeScript
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

---

## ✏️ Cómo Editar el Contenido

### 1. **Agregar/Editar Proyectos**

**Archivo:** `src/data/projects.ts`

```typescript
{
    title: "Mi Nuevo Proyecto",
    description: "Descripción del proyecto...",
    work: "Freelance", // o "Personal", "Nombre de Empresa"
    workId: "id_experiencia", // (opcional) enlaza con Timeline
    links: [
        { href: "https://github.com/...", type: "github" },
        { href: "https://play.google.com/...", type: "playstore" },
    ],
    image: miProyectoImagen, // importar arriba
    tags: [TAGS.REACT, TAGS.FIREBASE, ...],
}
```

### 2. **Agregar/Editar Experiencia Laboral**

**Archivo:** `src/data/experience.ts`

```typescript
{
    id: "mi-trabajo",
    period: "Enero 2025 - Actualidad",
    title: "Desarrollador Senior",
    subtitle: "Mi Empresa",
    descriptionShort: "Resumen corto...",
    description: `
        ### Soporta Markdown completo
        
        - Lista de items
        - **Negritas** y *cursivas*
        
        > Citas
    `,
    badgs: ["React", "Node.js", "AWS"],
    link: "https://empresa.com", // (opcional)
}
```

### 3. **Agregar Nueva Tecnología (Tag)**

**Archivo:** `src/data/tags.ts`

```typescript
NEXTJS: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS, // importar arriba
},
```

### 4. **Cambiar Configuración General**

**Archivo:** `src/config/site.ts`

```typescript
export const DISPLAY_LIMITS = {
    projects: 3,      // Proyectos visibles inicialmente
    experience: 4,    // Experiencias visibles inicialmente
};
```

---

## 🎨 Cambiar Colores de las Tecnologías

**Archivo:** `src/data/tags.ts`

Cada tag tiene una propiedad `class` con clases de Tailwind:

```typescript
REACT: {
    name: "React",
    class: "bg-[#227086] text-white",  // 👈 Cambia esto
    classIcon: "text-[#00D8FF]",       // 👈 Color del icono (opcional)
    icon: React,
},
```

Puedes usar:
- Colores hexadecimales: `bg-[#FF5733]`
- Colores de Tailwind: `bg-blue-500`
- Combinaciones: `bg-gradient-to-r from-blue-500 to-purple-600`

---

## 📝 Markdown en Descripciones

Las descripciones de experiencia laboral soportan **Markdown completo**:

### Elementos soportados:

```markdown
### Encabezados (H3, H4, H5)

**Texto en negrita**
*Texto en cursiva*
`código inline`

- Lista con viñetas
- Item 2
  - Sub-item

1. Lista numerada
2. Item 2

[Enlaces](https://ejemplo.com)

> Citas o notas importantes

---
Separadores horizontales
```

---

## 🔧 Cambiar Límites de Visualización

**Archivo:** `src/config/site.ts`

```typescript
export const DISPLAY_LIMITS: DisplayLimits = {
    projects: 3,      // Muestra 3 proyectos inicialmente
    experience: 4,    // Muestra 4 experiencias inicialmente
};
```

Si cambias estos valores:
- **Menor número** = Menos items visibles, aparece botón "Ver más" antes
- **Mayor número** = Más items visibles desde el inicio

---

## 📸 Agregar Nuevas Imágenes de Proyectos

1. Coloca la imagen en: `src/assets/projects/`
2. Formato recomendado: `.webp` (mejor compresión)
3. Importa en `src/data/projects.ts`:

```typescript
import miNuevoProyecto from "@/assets/projects/mi-proyecto.webp";
```

4. Usa en el proyecto:

```typescript
{
    title: "Mi Proyecto",
    image: miNuevoProyecto, // 👈 Aquí
    // ...
}
```

---

## 📖 Documentación de Referencia

- **Astro**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Markdown (marked)**: https://marked.js.org
- **TypeScript**: https://www.typescriptlang.org/docs

---

¡Feliz edición! 🎉
