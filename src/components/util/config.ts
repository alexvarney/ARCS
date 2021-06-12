export enum Breakpoint {
  'base' = 'base', //  > Base case, not actually a breakpoint
  'md' = 'md', //    |
  'lg' = 'lg', //    | > Custom Breakpoint Sizes
  'xl' = 'xl', //    |
}

export const LAYOUT_MAX_WIDTH = 1440;

export const BreakpointSizes = new Map<Breakpoint, number>([
  [Breakpoint.base, -1],
  [Breakpoint.md, 500],
  [Breakpoint.lg, 1024],
  [Breakpoint.xl, LAYOUT_MAX_WIDTH],
]);
