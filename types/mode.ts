import type * as Rules from './rule.ts';

const Modes = {
  REGULAR_BATTLE: 1,
  RANKED_BATTLE: 2,
  LEAGUE_BATTLE: 3,
  SALMON_RUN: 4,
  PRIVATE_BATTLE: 5,
} as const;

type ModeRegular = {
  type: typeof Modes.REGULAR_BATTLE;
  rule: Rules.RuleTurfWar;
};

type RuleRanked =
  | Rules.RuleSplatZones
  | Rules.RuleTowerControl
  | Rules.RuleRainMaker
  | Rules.RuleClamBlitz;

type ModeRanked = {
  type: typeof Modes.RANKED_BATTLE;
  rule: RuleRanked;
};

type ModeLeague = {
  type: typeof Modes.LEAGUE_BATTLE;
  rule: RuleRanked;
};

type ModePrivate = {
  type: typeof Modes.PRIVATE_BATTLE;
  rule: Rules.RuleTurfWar | RuleRanked;
};

type ModeSalmonRun = {
  type: typeof Modes.SALMON_RUN;
  rule: Rules.RuleSalmonRun;
};

type ModeType =
  | ModeRegular
  | ModeRanked
  | ModeLeague
  | ModePrivate
  | ModeSalmonRun;

export type { ModeLeague, ModePrivate, ModeRanked, ModeRegular, ModeSalmonRun };
export type { ModeType };
export { Modes };
