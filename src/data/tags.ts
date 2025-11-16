import type { Tag } from "@/types";

import AWS from "@/components/icons/AWS.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import React from "@/components/icons/React.astro";
import Micronaut from "@/components/icons/Micronaut.astro";
import Vercel from "@/components/icons/Vercel.astro";
import Flutter from "@/components/icons/Flutter.astro";
import NestJS from "@/components/icons/NestJS.astro";
import MariaDB from "@/components/icons/MariaDB.astro";
import MongoDB from "@/components/icons/MongoDB.astro";
import SQLite from "@/components/icons/SQLite.astro";
import Sentry from "@/components/icons/Sentry.astro";
import Firebase from "@/components/icons/Firebase.astro";
import GraphQL from "@/components/icons/GraphQL.astro";
import Figma from "@/components/icons/Figma.astro";
import Stripe from "@/components/icons/Stripe.astro";
import Windows from "@/components/icons/Windows.astro";

export const TAGS: Record<string, Tag> = {
    // ========================================
    // CLOUD & INFRASTRUCTURE
    // ========================================
    AWS: {
        name: "AWS",
        class: "bg-[#232F3E] text-white",
        icon: AWS,
    },

    // ========================================
    // FRONTEND
    // ========================================
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: Tailwind,
    },
    REACT: {
        name: "React",
        class: "bg-[#227086] text-white",
        classIcon: "text-[#00D8FF]",
        icon: React,
    },
    REACT_NATIVE: {
        name: "React Native",
        class: "bg-[#227086] text-white",
        classIcon: "text-[#61DAFB]",
        icon: React,
    },
    FLUTTER: {
        name: "Flutter",
        class: "bg-[#002C52] text-white",
        icon: Flutter,
    },

    // ========================================
    // BACKEND
    // ========================================
    MICRONAUT: {
        name: "Micronaut",
        class: "bg-[#000] text-white",
        icon: Micronaut,
    },
    NESTJS: {
        name: "NestJS",
        class: "bg-[#661226] text-white",
        icon: NestJS,
    },
    GRAPHQL: {
        name: "GraphQL",
        class: "bg-[#E535AB] text-white",
        icon: GraphQL,
    },

    // ========================================
    // DATABASES
    // ========================================
    MARIA_DB: {
        name: "MariaDB",
        class: "bg-[#003545] text-white",
        icon: MariaDB,
    },
    MONGODB: {
        name: "MongoDB",
        class: "bg-[#13AA52] text-white",
        icon: MongoDB,
    },
    SQLITE: {
        name: "SQLite",
        class: "bg-[#003B57] text-white",
        icon: SQLite,
    },

    // ========================================
    // SERVICES & TOOLS
    // ========================================
    FIREBASE: {
        name: "Firebase",
        class: "bg-[#775C08] text-white",
        icon: Firebase,
    },
    SENTRY: {
        name: "Sentry",
        class: "bg-[#362D59] text-white",
        icon: Sentry,
    },
    FIGMA: {
        name: "Figma",
        class: "bg-[#5C1E0B] text-white",
        icon: Figma,
    },
    STRIPE: {
        name: "Stripe",
        class: "bg-[#6772E5] text-white",
        icon: Stripe,
    },
    VERCEL: {
        name: "Vercel",
        class: "bg-[#000] text-white",
        icon: Vercel,
    },

    // ========================================
    // SYSTEMS & OTHERS
    // ========================================
    WINDOWS: {
        name: "Windows",
        class: "bg-[#0078D7] text-white",
        icon: Windows,
    },
};
