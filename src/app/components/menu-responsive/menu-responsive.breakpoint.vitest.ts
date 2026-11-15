import { describe, expect, it } from 'vitest';
import { COMPACT_MENU_BREAKPOINT, isCompactMenu } from './menu-responsive.helpers';

describe('isCompactMenu', () => {
  it('uses the compact menu below the breakpoint', () => {
    expect(isCompactMenu(COMPACT_MENU_BREAKPOINT - 1)).toBe(true);
  });

  it('uses the full menu at the breakpoint', () => {
    expect(isCompactMenu(COMPACT_MENU_BREAKPOINT)).toBe(false);
  });

  it('uses the full menu above the breakpoint', () => {
    expect(isCompactMenu(COMPACT_MENU_BREAKPOINT + 1)).toBe(false);
  });
});
