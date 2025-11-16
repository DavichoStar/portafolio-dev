/**
 * Datos de los proyectos del portafolio
 *
 * Los proyectos se muestran en el orden definido aquí.
 * El primer proyecto aparece primero en la página.
 */

import type { Project } from "@/types";
import { TAGS } from "./tags";

import spTrackApp from "@/assets/projects/sp-track-app.webp";
import tcApp from "@/assets/projects/tc-app.webp";
import tcWeb from "@/assets/projects/tc-web.webp";
import casauApp from "@/assets/projects/casau-app.webp";
import slEconomyWeb from "@/assets/projects/sl-economy-web.webp";

export const PROJECTS: Project[] = [
    {
        title: "San Pablo Track",
        descriptionShort:
            "Aplicación móvil y web para la creación de reportes mensuales y aprobados por un encargado de tesorería para el manejo de distintos departamentos.",
        description: `### Aplicación de Gestión de Tesorería

Sistema completo para el **manejo de reportes mensuales** de diferentes departamentos con flujo de aprobación.

#### Características principales

- 📊 **Registro de movimientos**: Ingresos y egresos con carga de comprobantes (fotos/PDF)
- ✍️ **Sistema de firmas**: Aprobación por tres áreas (Coordinador, Pastor, Tesorero)
- 📄 **Exportación**: Reporte en formato Excel con fómulas y firmas
- 🔔 **Notificaciones**: Push notifications para cambios de estatus
- 📊 **Gráficas**: Visualización de datos mediante gráficos interactivos
- 🔐 **Autenticación biométrica**: Huella digital y Face ID

#### Stack técnico

**Frontend móvil**
- Flutter con arquitectura limpia (Clean Architecture)
- Flutter BLoC para state management
- Go Router para navegación
- Firebase para notificaciones push
- Dio para llamadas HTTP
- GetIt para inyección de dependencias

**Backend & Infraestructura**
- API REST con **Micronaut** (Java) y autenticación JWT
- Base de datos **MySQL**
- Almacenamiento de archivos en **AWS S3**

**DevOps**
- CI/CD con **GitHub Actions**
- Web app en **Firebase Hosting**
- Monitoreo con **Sentry** y analytics con **Amplitude**

> Publicada en Google Play Store para distribución interna`,
        work: "Freelance",
        workId: "sp_track",
        links: [
            {
                href: "https://play.google.com/store/apps/details?id=com.davichostar.sp_track",
                type: "playstore",
            },
        ],
        image: spTrackApp,
        tags: [TAGS.FLUTTER, TAGS.AWS, TAGS.SENTRY, TAGS.FIREBASE, TAGS.MICRONAUT, TAGS.MARIA_DB],
    },
    {
        title: "App para la gestión de bolsas",
        descriptionShort: "App móvil para el registro de bolsas de valores utilizadas en los vuelos.",
        description: `Aplicación móvil para la administración y control de las bolsas de valores utilizadas en los vuelos, la cual te permite registrar bolsas.

### Funcionalidades

- Registro de bolsas con código de barras
- Escaneo de códigos de barras para agilizar el registro
- Visualización del historial de bolsas registradas
- Envío de evidencia de la bolsa
- Firma digital para validación
- Grabación de video como evidencia de depósito

### Stack Técnico

**Frontend móvil**
- Expo para desarrollo
- React Native con TypeScript
- SQLite para almacenamiento local
- Firebase Remote Config para configuración remota
- Firebase Analytics para análisis de uso
- Monitoreo con **Sentry**

**Backend & Infraestructura**
- API REST con **Micronaut** (Java)
- Base de datos **MariaDB** en **AWS EC2**
- Almacenamiento de archivos en **AWS S3**
- Autenticación con JWT
        `,
        work: "IDEO Software",
        workId: "ideo",
        image: tcApp,
        tags: [TAGS.REACT_NATIVE, TAGS.SQLITE, TAGS.FIREBASE, TAGS.SENTRY, TAGS.MICRONAUT, TAGS.AWS],
    },
    {
        title: "Admin Web para la gestión de bolsas",
        descriptionShort:
            "App web para la administración de la información registrada en la aplicación móvil para la gestión de bolsas",
        description: `Aplicación web para la administración de la información registrada en la aplicación móvil para la gestión de bolsas.

### Funcionalidades
- Registro y visualización de bolsas con su información detallada y evidencias
- Edición y filtrado de información
- Exportación de datos a Excel
- Visualización de estadísticas y gráficos
- Visualización de recolecciones de bolsas por estación

### Stack Técnico

**Frontend web**
- React con TypeScript
- Tailwind CSS para estilos
- Axios para llamadas HTTP

**Backend & Infraestructura**
- API REST con **Micronaut** (Java) y autenticación JWT
- Base de datos **MariaDB**
- Almacenamiento de archivos en **AWS S3**
        `,
        work: "IDEO Software",
        workId: "ideo",
        image: tcWeb,
        tags: [TAGS.REACT, TAGS.SENTRY, TAGS.MICRONAUT, TAGS.MARIA_DB, TAGS.AWS],
    },
    {
        title: "Casa-U App",
        descriptionShort: "Aplicación móvil estilo AirBnB",
        description: `Aplicación móvil estilo AirBnB
        
### Funcionalidades

- Reserva y alquiler de espacios habitacionales
- Visualización en un mapa interactivo
- Chat interno entre usuarios
- Pago seguro integrado con **Stripe**

#### Stack Técnico

- **Frontend**: Flutter con arquitectura limpia (Clean Architecture)
- **Backend**: API REST con **NestJS** (TypeScript)
- **Base de datos**: **MariaDB**

> Implementación de arquitectura limpia y buenas prácticas de desarrollo
        `,
        work: "Freelance",
        workId: "casau",
        image: casauApp,
        tags: [TAGS.FLUTTER, TAGS.STRIPE, TAGS.NESTJS, TAGS.MARIA_DB, TAGS.FIGMA],
    },
    {
        title: "Starlight Economy Web",
        descriptionShort:
            "Página web del bot de Discord Starlight Economy, la cual te permite visualizar la información de los usuarios, servidores y comandos, además de poder invitar al bot a tu servidor y configurar el bot dentro de tu servidor.",
        description: `### Dashboard Web para Bot de Discord

Plataforma web integral para el bot de Discord **Starlight Economy**, un sistema de economía virtual para servidores.

#### Funcionalidades

- 🔐 Integración con Discord para autenticación y gestión de servidores
- 📈 Ranking de usuarios por servidor y global
- ⚙️ Configuración del bot por servidor

**Características Técnicas**
- ⚙️ API GraphQL con Apollo Server
- 🎨 UI moderna y responsive
- 🌙 Modo oscuro/claro
- 🔐 Autenticación OAuth con Discord

#### Stack

- Frontend: **React** con TypeScript
- Backend: API GraphQL con Apollo Server / Express.js
- Base de datos: **MongoDB**
- Hosting: **Vercel** con despliegue continuo
        `,
        work: "Personal",
        links: [
            {
                href: "https://starlight-economy.vercel.app",
                type: "web",
            },
            {
                href: "https://github.com/StarArmyDev/sl-economy-web",
                type: "github",
            },
        ],
        image: slEconomyWeb,
        tags: [TAGS.REACT, TAGS.MONGODB, TAGS.GRAPHQL, TAGS.VERCEL],
    },
];
