const MODES = ['dev', 'prod', 'test'] as const;

type ModeType = (typeof MODES)[number];

export type { ModeType };

export { MODES };
