import { saveUserSettings, userSettings } from '@/config/userSettings';
import { LANGUAGES, resolveLanguageCode, loadLanguages } from './Languages';
import translateWidget from '@/components/menu/translateWidget';
import { $menu } from '@/components/menu/menu';

export async function changeLanguage(newLang) {
  const resolvedCode = resolveLanguageCode(newLang);

  if (!LANGUAGES.some((language) => language.code === resolvedCode)) {
    return;
  }

  if (userSettings.lang !== resolvedCode) {
    userSettings.lang = resolvedCode;

    const $lang = $menu?.querySelector<HTMLSelectElement>('#visua11y-agent-language');
    if ($lang) {
      $lang.value = resolvedCode;
    }

    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = resolvedCode;
    }

    // Ensure dictionaries are loaded before re-rendering labels
    await loadLanguages();
    translateWidget();
    saveUserSettings();
  }

  if (typeof document !== 'undefined' && typeof CustomEvent !== 'undefined') {
    document.dispatchEvent(
      new CustomEvent('visua11y-agent:language:changed', { detail: { code: resolvedCode } })
    );
  }
}
