# Instalasi

Visua11y Agent dapat diinstal dengan beberapa cara:

## Opsi A — npm

```bash
npm install visua11y-agent
```

Kemudian import package di entry point bundler Anda. Package akan bootstrap sendiri dan melampirkan `window.Visua11yAgentPlugin` ketika dokumen siap.

```js
import 'visua11y-agent';
```

## Opsi B — CDN

Gunakan bundle yang sudah dibuat di `dist/visua11y-agent.umd.js` atau host dari CDN Anda sendiri.

```html
<script src="https://unpkg.com/visua11y-agent" defer></script>
```
