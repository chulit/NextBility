import { defineConfig } from 'vitepress';

const BASE = '/visua11y-agent/';
const isDev = process.env.NODE_ENV === 'development';
const demoLink = isDev ? '/demo/' : 'https://chulit.github.io/visua11y-agent/demo/';

export default defineConfig({
  base: BASE,
  title: 'Visua11y Agent',
  description: 'Accessibility Widget for Websites',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Live Demo', link: demoLink, target: '_self', rel: '' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/guide/' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Configuration', link: '/guide/configuration' },
              { text: 'Universal Usage', link: '/guide/universal-usage' }
            ]
          }
        ]
      }
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      link: '/id/',
      themeConfig: {
        nav: [
          { text: 'Beranda', link: '/id/' },
          { text: 'Panduan', link: '/id/guide/' },
          { text: 'Demo Langsung', link: demoLink, target: '_self', rel: '' }
        ],
        sidebar: [
          {
            text: 'Panduan',
            items: [
              { text: 'Pengenalan', link: '/id/guide/' },
              { text: 'Instalasi', link: '/id/guide/installation' },
              { text: 'Konfigurasi', link: '/id/guide/configuration' },
              { text: 'Penggunaan Universal', link: '/id/guide/universal-usage' }
            ]
          }
        ]
      }
    }
  }
});
