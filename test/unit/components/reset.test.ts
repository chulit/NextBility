import { describe, expect, it, beforeEach } from 'vitest';

import reset from '@/components/menu/reset';
import { userSettings } from '@/config/userSettings';

describe('reset', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="visua11y-agent-menu">
        <div class="visua11y-agent-amount">150%</div>
        <div class="visua11y-agent-minus" data-key="font-size" aria-pressed="true"></div>
        <div class="visua11y-agent-plus" data-key="font-size" aria-pressed="true"></div>
      </div>
    `;

    userSettings.states = { fontSize: 1.5 };
  });

  it('should reset font size UI back to 100%', () => {
    reset();

    const amount = document.querySelector<HTMLElement>('.visua11y-agent-amount');
    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>('[data-key="font-size"][aria-pressed]')
    );

    expect(amount?.textContent).toBe('100%');
    expect(buttons.every((btn) => btn.getAttribute('aria-pressed') === 'false')).toBe(true);
  });
});
