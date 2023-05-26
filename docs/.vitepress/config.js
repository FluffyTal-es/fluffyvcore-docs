import { getSidebar } from './sidebar';
import { defineConfig } from 'vitepress'

const BASE_URL = '/';

export default defineConfig({
    base: BASE_URL,
    title: 'FluffyVCore Docs',
    description: 'FluffyVCore documentation for the Athena alt:v Framework',
    ignoreDeadLinks: true,
    lastUpdated: true,
    mpa: true,
    cleanUrls: 'without-subfolders',
    markdown: {
        lineNumbers: false,
        defaultHighlightLang: 'ts'
    },
    themeConfig: {
        logo: '/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/fluffytal-es/fluffyv' },
            { icon: 'discord', link: 'https://discord.gg/fluffytales' },
        ],
        // Search
        search: {
            provider: 'local'
        },
        // Navigation - Top of the Documentation Page Links
        nav: [
            {
                text: 'API',
                link: 'index'
            },
            {
                text: 'Links',
                items: [
                    {
                        text: 'alt:V Client',
                        link: 'https://altv.mp',
                    },
                    {
                        text: 'alt:V Native Database',
                        link: 'https://natives.altv.mp',
                    },
                    {
                        text: 'GTA:V Data Browser',
                        link: 'https://forge.plebmasters.de/',
                    },
                ],
            },
        ],
        // Footer - Bottom of the Documentation Page
        footer: {
            message: 'Created by the FluffyTales Dev Team | © 2023',
        },
        // Page - Next & Previous Buttons
        docFooter: {
            prev: 'Prev',
            next: 'Next',
        },
        // Page - Show Last Update on Page
        lastUpdatedText: 'Updated Date',
        sidebar: getSidebar(),
    },
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: BASE_URL + 'favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: BASE_URL + 'site.webmanifest' }],
        ['meta', { name: 'msapplication-TileColor', content: '#131419' }],
    ],
});
