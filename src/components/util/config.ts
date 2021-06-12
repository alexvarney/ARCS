export enum Breakpoint {
  'base' = 'base',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

export const VARIANTS = new Map<Breakpoint, number>([
  [Breakpoint.base, -1],
  [Breakpoint.md, 500],
  [Breakpoint.lg, 1024],
  [Breakpoint.xl, 1440],
]);
