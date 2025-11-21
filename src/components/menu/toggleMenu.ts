import { $menu } from './menu';

export default function toggleMenu(force?: boolean) {
  if (typeof force === 'boolean') {
    $menu.style.display = force ? 'block' : 'none';
  } else {
    $menu.style.display = $menu.style.display === 'none' ? 'block' : 'none';
  }
}
