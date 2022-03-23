import { Modes } from '../types/mode.ts';
import type { ModeType } from '../types/mode.ts';
import { Rules } from '../types/rule.ts';
import type { RuleType } from '../types/rule.ts';

const getRules = (mode: ModeType): RuleType[] => {
  const rankedRules: RuleType[] = [
    Rules.SPLAT_ZONES,
    Rules.TOWER_CONTROL,
    Rules.RAINMAKER,
    Rules.CLAM_BLITZ,
  ].map((rule) => ({ type: rule }));
  switch (mode.type) {
    case Modes.REGULAR_BATTLE:
      return [
        {
          type: Rules.TURF_WAR,
        },
      ];
    case Modes.RANKED_BATTLE:
    case Modes.LEAGUE_BATTLE:
      return rankedRules;
    case Modes.PRIVATE_BATTLE:
      return [
        {
          type: Rules.TURF_WAR,
        },
        ...rankedRules,
      ];
    case Modes.SALMON_RUN:
      return [
        {
          type: Rules.SALMON_RUN,
        },
      ];
  }
};

export { getRules };
