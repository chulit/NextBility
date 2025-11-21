# Konfigurasi

Kontrol widget melalui atribut `data-visua11y-agent-*` pada tag script atau dengan memanggil helper pada `window.Visua11yAgentPlugin` setelah dimuat.

## Contoh Quick Start

```html
<script
  src="https://unpkg.com/visua11y-agent"
  data-visua11y-agent-lang="id"
  data-visua11y-agent-position="bottom-right"
  data-visua11y-agent-offset="24,24"
  defer
></script>
```

## Atribut Script

| Atribut                        | Deskripsi                                          | Contoh                                            |
| ------------------------------ | -------------------------------------------------- | ------------------------------------------------- |
| `data-visua11y-agent-lang`     | Atur bahasa UI default.                            | `data-visua11y-agent-lang="id"`                   |
| `data-visua11y-agent-position` | Pilih di mana launcher muncul.                     | `data-visua11y-agent-position="bottom-right"`     |
| `data-visua11y-agent-offset`   | Sesuaikan offset launcher (`x,y`).                 | `data-visua11y-agent-offset="24,24"`              |
| `data-visua11y-agent-size`     | Ubah ukuran tombol (`default`, `medium`, `small`). | `data-visua11y-agent-size="medium"`               |
| `data-visua11y-agent-icon`     | Berikan HTML kustom untuk ikon launcher.           | `data-visua11y-agent-icon="<span>♿️</span>"`      |

## Helper JavaScript

| Helper                                                 | Deskripsi                                         | Contoh                                                                                                                                        |
| ------------------------------------------------------ | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `window.Visua11yAgentPlugin.setIcon(html)`             | Ganti ikon launcher floating.                     | `Visua11yAgentPlugin.setIcon("<span>🌈</span>")`                                                                                              |
| `window.Visua11yAgentPlugin.changeLanguage(code)`      | Ubah bahasa UI saat runtime.                      | `Visua11yAgentPlugin.changeLanguage("id")`                                                                                                    |
| `window.Visua11yAgentPlugin.registerLanguage(options)` | Daftarkan terjemahan baru secara langsung.        | `Visua11yAgentPlugin.registerLanguage({ code: "id", label: "Bahasa Indonesia", dictionary: { "Accessibility Menu": "Menu Aksesibilitas" } })` |
| `window.Visua11yAgentPlugin.setWidgetSize(size)`     | Ubah ukuran tombol widget.                        | `Visua11yAgentPlugin.setWidgetSize("small")`                                                                                                  |
| `window.Visua11yAgentPlugin.setPosition(position)`     | Pindahkan widget ke posisi baru.                  | `Visua11yAgentPlugin.setPosition("top-left")`                                                                                                 |
| `window.Visua11yAgentPlugin.setOffset(offset)`         | Sesuaikan offset widget.                          | `Visua11yAgentPlugin.setOffset("50,50")`                                                                                                      |
| `window.Visua11yAgentPlugin.openMenu()`                | Buka menu aksesibilitas.                          | `Visua11yAgentPlugin.openMenu()`                                                                                                              |
| `window.Visua11yAgentPlugin.closeMenu()`               | Tutup menu aksesibilitas.                         | `Visua11yAgentPlugin.closeMenu()`                                                                                                             |
| `window.Visua11yAgentPlugin.toggleTool(key, enable)`   | Toggle alat tertentu on atau off.                 | `Visua11yAgentPlugin.toggleTool("high-contrast", true)`                                                                                       |
| `window.Visua11yAgentPlugin.setProfile(profileId)`     | Atur profil aksesibilitas aktif.                  | `Visua11yAgentPlugin.setProfile("blind")`                                                                                                     |
| `window.Visua11yAgentPlugin.getSettings()`             | Dapatkan objek pengaturan pengguna saat ini.      | `console.log(Visua11yAgentPlugin.getSettings())`                                                                                              |
| `window.Visua11yAgentPlugin.hideFooter(hide)`          | Sembunyikan atau tampilkan footer menu.           | `Visua11yAgentPlugin.hideFooter(true)`                                                                                                        |
| `window.Visua11yAgentPlugin.setFooterSize(size)`       | Atur ukuran footer menu.                          | `Visua11yAgentPlugin.setFooterSize("small")`                                                                                                  |
| `window.Visua11yAgentPlugin.resetAll()`                | Kembalikan default widget dan hapus pengaturan.   | `Visua11yAgentPlugin.resetAll()`                                                                                                              |

Lihat `demo/index.html` untuk contoh praktis.
