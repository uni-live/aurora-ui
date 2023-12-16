import { composite } from 'seemly';

export function createPressedColor(rgb: string): string {
  return composite(rgb, [0, 0, 0, 0.12]);
}
