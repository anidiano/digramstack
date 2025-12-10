import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DiagramProvider } from "@/contexts/diagram-context";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "diagramstack - Instant AI Architect for Diagrams & Systems",
    description: "Enterprise-ready AI diagramming platform that transforms natural language into architecture diagrams, flowcharts, and system maps in seconds. Built for software architects, cloud engineers, and technical teams.",
    keywords: ["AI diagram generator", "AWS architecture", "Azure architecture", "GCP architecture", "flowchart creator", "system architecture", "cloud infrastructure diagrams", "technical diagrams", "diagram automation", "enterprise diagramming", "software architecture"],
    authors: [{ name: "diagramstack" }],
    creator: "diagramstack",
    publisher: "diagramstack",
    metadataBase: new URL("https://diagramstack.com"),
    openGraph: {
        title: "diagramstack - Instant AI Architect for Diagrams & Systems",
        description: "Enterprise-ready AI diagramming platform that transforms natural language into architecture diagrams, flowcharts, and system maps in seconds.",
        type: "website",
        url: "https://diagramstack.com",
        siteName: "diagramstack",
        locale: "en_US",
        images: [
            {
                url: "/logo-light.png",
                width: 1200,
                height: 630,
                alt: "diagramstack - AI-powered architecture diagram creation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "diagramstack - Instant AI Architect for Diagrams & Systems",
        description: "Enterprise-ready AI diagramming platform. Transform natural language into architecture diagrams in seconds.",
        images: ["/logo-light.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/logo-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'diagramstack',
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web Browser',
        description: 'Enterprise-ready AI diagramming platform that transforms natural language into architecture diagrams, cloud infrastructure maps, flowcharts, and system diagrams. Features diagram history, multi-provider AI support, and real-time collaboration.',
        url: 'https://diagramstack.com',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <DiagramProvider>{children}</DiagramProvider>
                <Analytics />
            </body>
            {process.env.NEXT_PUBLIC_GA_ID && (
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
            )}
        </html>
    );
}
