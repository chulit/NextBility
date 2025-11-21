# Universal Usage Guide

Visua11y Agent sekarang mendukung **berbagai cara penggunaan** untuk fleksibilitas maksimal!

## 🎯 Cara 1: Modern ES Module (Recommended)

```typescript
import { createVisua11yAgent } from 'visua11y-agent';

const plugin = createVisua11yAgent({
  lang: 'id',
  position: 'bottom-right',
  size: 'medium'
});

// Gunakan API
plugin.setWidgetSize('small');
plugin.openMenu();
plugin.changeLanguage('en');
```

## 🎯 Cara 2: Default Import

```javascript
import visua11yAgent from 'visua11y-agent';

const plugin = visua11yAgent({
  options: {
    lang: 'id',
    position: 'bottom-right'
  }
});

plugin.setPosition('top-left');
```

## 🎯 Cara 3: CDN dengan window (Auto-init)

```html
<script
  src="https://cdn.jsdelivr.net/npm/visua11y-agent/dist/visua11y-agent.umd.js"
  data-visua11y-agent-lang="id"
  data-visua11y-agent-position="bottom-right"
  defer
></script>

<script>
  // Otomatis tersedia di window
  window.Visua11yAgentPlugin.setWidgetSize('small');
</script>
```

## 🎯 Cara 4: Vue 3 Composable

```javascript
// composables/useVisua11y.js
import { ref, onMounted } from 'vue';
import { createVisua11yAgent } from 'visua11y-agent';

export function useVisua11y(options = {}) {
  const plugin = ref(null);

  onMounted(() => {
    plugin.value = createVisua11yAgent(options);
  });

  return {
    setSize: (size) => plugin.value?.setWidgetSize(size),
    openMenu: () => plugin.value?.openMenu(),
    closeMenu: () => plugin.value?.closeMenu(),
    changeLanguage: (lang) => plugin.value?.changeLanguage(lang),
    getSettings: () => plugin.value?.getSettings()
  };
}
```

**Penggunaan:**
```vue
<script setup>
import { useVisua11y } from '@/composables/useVisua11y';

const { setSize, openMenu, changeLanguage } = useVisua11y({
  lang: 'id',
  position: 'bottom-right'
});
</script>

<template>
  <button @click="setSize('small')">Small Widget</button>
  <button @click="openMenu()">Open Menu</button>
  <button @click="changeLanguage('en')">English</button>
</template>
```

## 🎯 Cara 5: React Hook

```javascript
// hooks/useVisua11y.js
import { useEffect, useRef } from 'react';
import { createVisua11yAgent } from 'visua11y-agent';

export function useVisua11y(options = {}) {
  const pluginRef = useRef(null);

  useEffect(() => {
    pluginRef.current = createVisua11yAgent(options);
    
    return () => {
      // Cleanup if needed
      pluginRef.current = null;
    };
  }, []);

  return {
    setSize: (size) => pluginRef.current?.setWidgetSize(size),
    openMenu: () => pluginRef.current?.openMenu(),
    closeMenu: () => pluginRef.current?.closeMenu(),
    changeLanguage: (lang) => pluginRef.current?.changeLanguage(lang),
    getSettings: () => pluginRef.current?.getSettings()
  };
}
```

**Penggunaan:**
```jsx
import { useVisua11y } from './hooks/useVisua11y';

function App() {
  const { setSize, openMenu, changeLanguage } = useVisua11y({
    lang: 'id',
    position: 'bottom-right'
  });

  return (
    <div>
      <button onClick={() => setSize('small')}>Small Widget</button>
      <button onClick={() => openMenu()}>Open Menu</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}
```

## 🎯 Cara 6: Pinia Store (Vue)

```javascript
// stores/accessibility.js
import { defineStore } from 'pinia';
import { createVisua11yAgent } from 'visua11y-agent';

export const useAccessibilityStore = defineStore('accessibility', {
  state: () => ({
    plugin: null,
    isMenuOpen: false
  }),
  
  actions: {
    init(options = {}) {
      this.plugin = createVisua11yAgent({
        lang: 'id',
        position: 'bottom-right',
        ...options
      });
    },
    
    setSize(size) {
      this.plugin?.setWidgetSize(size);
    },
    
    openMenu() {
      this.plugin?.openMenu();
      this.isMenuOpen = true;
    },
    
    closeMenu() {
      this.plugin?.closeMenu();
      this.isMenuOpen = false;
    },
    
    changeLanguage(lang) {
      this.plugin?.changeLanguage(lang);
    },
    
    getCurrentSettings() {
      return this.plugin?.getSettings();
    }
  }
});
```

## 🎯 Cara 7: React Context

```jsx
// contexts/AccessibilityContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { createVisua11yAgent } from 'visua11y-agent';

const AccessibilityContext = createContext(null);

export function AccessibilityProvider({ children, options = {} }) {
  const [plugin, setPlugin] = useState(null);

  useEffect(() => {
    const instance = createVisua11yAgent({
      lang: 'id',
      position: 'bottom-right',
      ...options
    });
    setPlugin(instance);
  }, []);

  const value = {
    plugin,
    setSize: (size) => plugin?.setWidgetSize(size),
    openMenu: () => plugin?.openMenu(),
    closeMenu: () => plugin?.closeMenu(),
    changeLanguage: (lang) => plugin?.changeLanguage(lang),
    getSettings: () => plugin?.getSettings()
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
```

## ✨ Keuntungan Universal API

✅ **Fleksibel** - Pilih cara yang paling cocok untuk project Anda  
✅ **Type-safe** - Full TypeScript support dengan autocomplete  
✅ **Framework-agnostic** - Bekerja dengan Vue, React, Angular, Svelte, dll  
✅ **Backward compatible** - Tidak break existing code  
✅ **Tree-shakeable** - Bundler bisa optimize dengan baik  
✅ **SSR-friendly** - Aman untuk server-side rendering  
✅ **No globals required** - Tidak perlu `window` jika tidak mau  

Sekarang Visua11y Agent benar-benar **universal**! 🚀
