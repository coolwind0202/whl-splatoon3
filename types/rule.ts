const Rules = {
  TURF_WAR: 0,
  SPLAT_ZONES: 1,
  TOWER_CONTROL: 2,
  RAINMAKER: 3,
  CLAM_BLITZ: 4,
  SALMON_RUN: 5,
} as const;

interface RuleType {
  type: typeof Rules[keyof (typeof Rules)];
}

type RuleTurfWar = {
  type: typeof Rules.TURF_WAR;
};

type RuleSplatZones = {
  type: typeof Rules.SPLAT_ZONES;
};

type RuleTowerControl = {
  type: typeof Rules.TOWER_CONTROL;
};

type RuleRainMaker = {
  type: typeof Rules.RAINMAKER;
};

type RuleClamBlitz = {
  type: typeof Rules.CLAM_BLITZ;
};

type RuleSalmonRun = {
  type: typeof Rules.SALMON_RUN;
};

export { Rules };
export type {
  RuleClamBlitz,
  RuleRainMaker,
  RuleSalmonRun,
  RuleSplatZones,
  RuleTowerControl,
  RuleTurfWar,
  RuleType,
};
