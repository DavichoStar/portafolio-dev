/**
 * Datos de experiencia laboral (Timeline)
 *
 * NOTAS:
 * - El campo `description` soporta Markdown completo
 * - El primer item se marca automáticamente como "Latest"
 * - Los items se ordenan del más reciente al más antiguo
 *
 * IMPORTANTE: Los items se muestran en el orden definido aquí.
 * El primer item es considerado el más reciente.
 */

import type { Experience } from "@/types";

export const EXPERIENCE: Experience[] = [
    {
        id: "ideo",
        period: "Agosto 2022 - Actualidad",
        title: "Desarrollador Full Stack",
        subtitle: "IDEO Software",
        descriptionShort:
            "Desarrollo de aplicaciones móviles en con React Native, Micronaut (Java) como backend y ReactJS y Grails como frontend para paneles de administración.",
        description: `### Proyectos principales

**Sistemas para aerolíneas**
- Desarrollé aplicación móvil y admin web para el manejo de bolsas de dinero de la venta de un vuelo
- App para reportes de incidencias para sobrecargos de aerolíneas mexicanas y europeas
- Di mantenimiento y mejoras a sistema web PHP para el manejo de inventarios y programación de subida de alimentos a vuelos

**Sistema para cadena hotelera**
- Trabajé en equipo en múltiples apps de una cadena hotelera consumiendo API's del equipo de backend
- Adapté aplicaciones a diferentes roles dentro de hoteles, experiencias y academia
- Implementé autenticación JWT y manejo de permisos por rol

**Infraestructura en la nube**
- Implementé la infraestructura en AWS para diferentes sistemas
- Servicios utilizados: **EC2**, **Route53**, **S3**, **Lambda**

> Ambiente colaborativo con enfoque en el aprendizaje continuo y mejora de habilidades técnicas.
        `,
        badgs: [
            "React Native",
            "ReactJS",
            "TypeScript",
            "i18next",
            "NodeJS",
            "Telegram API",
            "Micronaut",
            "Grails",
            "Java",
            "JWT",
            "MySQL",
            "Flutter",
            "Docker",
            "Git",
            "Bitbucket",
            "Sentry",
            "AWS S3",
            "AWS EC2",
            "AWS SNS",
            "AWS Lambda",
            "AWS Route53",
            "Firebase Remote Config",
            "Firebase Analytics",
            "Firebase In-App Messaging",
        ],
        link: "https://ideosoftware.com.mx/",
    },
    {
        id: "sp_track",
        period: "Julio 2025 - Enero 2026",
        title: "Desarrollador Flutter",
        subtitle: "Freelance",
        descriptionShort:
            "App de tesorería para la creación de reportes mensuales para el manejo de distintos departamentos.",
        description: `### Funcionalidades principales

- Manejo de registros de ingresos y egresos con carga de recibos (fotos o archivos PDF)
- Firma por las tres áreas involucradas para la aprobación de reportes mensuales
- Exportación de reportes en Excel
- Notificaciones push para cambios en el estatus de los reportes
- Integración con API en **Micronaut** (Java) con autenticación JWT
- Alojamiento en **AWS EC2** y base de datos **MySQL**
- Uso de **AWS S3** para almacenamiento de archivos
- Publicación en **Google Play Store** para distribución interna
- Despliegue continuo con **GitHub Actions** para la versión web en **Firebase Hosting**
- Inicio de sesión con local auth (Huella digital y FaceID)

> Aplicación desarrollada con arquitectura limpia y buenas prácticas de desarrollo
        `,
        badgs: [
            "Flutter",
            "Dart",
            "Flutter Bloc",
            "Go Router",
            "Clean Architecture",
            "AWS S3",
            "Micronaut",
            "JWT",
            "MySQL",
            "Amplitude Analytics",
            "Firebase Remote Config",
            "Firebase Hosting",
            "Git",
            "GitHub",
            "GitHub Actions",
            "Sentry",
        ],
    },
    {
        id: "casau",
        period: "Abril 2021 - Junio 2022 (En pausa)",
        title: "Desarrollador Flutter",
        subtitle: "Freelance",
        descriptionShort:
            "Desarrollo de aplicación móvil en Flutter para Android y iOS estilo Airbnb para público jóven de México.",
        description: `### Funcionalidades principales

- Propuesta de diseño **UI/UX** para una experiencia atractiva y fácil de usar
- Registro e inicio de sesión de usuarios con **Firebase Authentication**
- Búsqueda y filtrado de alojamientos por ubicación.
- Integración con **Google Maps** para mostrar ubicaciones de alojamientos
- Reservaciones y pagos integrados con **Stripe**
- Chat en tiempo real entre anfitriones y huéspedes
- Desarrollo de la API REST con **NestJS** y base de datos **MySQL**

> Implementación de arquitectura limpia y buenas prácticas de desarrollo
        `,
        badgs: [
            "Flutter",
            "Dart",
            "Google Maps",
            "NestJS",
            "JWT",
            "TypeScript",
            "NodeJS",
            "MySQL",
            "MongoDB",
            "Firebase Authentication",
            "Firebase Firestore",
            "Firebase Storage",
            "Firebase Analytics",
            "Firebase Remote Config",
            "Git",
            "GitHub",
            "Sentry",
        ],
    },
];
