export const COMPACT_MENU_BREAKPOINT = 768;

export function isCompactMenu(viewportWidth: number): boolean {
  return viewportWidth < COMPACT_MENU_BREAKPOINT;
}
