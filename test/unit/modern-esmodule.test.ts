import { test, expect } from 'vitest';
import visua11yAgent from '../../src/index';

test('default export should be a function', () => {
  expect(typeof visua11yAgent).toBe('function');
});

test('default export should return an API object with expected methods', () => {
  const api = visua11yAgent({ options: {} });
  expect(api).toHaveProperty('changeLanguage');
  expect(api).toHaveProperty('setIcon');
  expect(api).toHaveProperty('setWidgetSize');
  expect(api).toHaveProperty('setPosition');
  expect(api).toHaveProperty('setOffset');
  expect(api).toHaveProperty('openMenu');
  expect(api).toHaveProperty('closeMenu');
  expect(api).toHaveProperty('toggleTool');
  expect(api).toHaveProperty('setProfile');
  expect(api).toHaveProperty('getSettings');
  expect(api).toHaveProperty('hideFooter');
  expect(api).toHaveProperty('setFooterSize');
  expect(api).toHaveProperty('registerLanguage');
  expect(api).toHaveProperty('resetAll');
});
