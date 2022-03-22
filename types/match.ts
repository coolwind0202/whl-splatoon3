import type { i18n } from '../i18n/i18n.ts';

interface Match {
  mode: i18n['mode']['LEAGUE_BATTLE'];
  rule:
    | i18n['leagueModes']
    | i18n['rankedModes']
    | i18n['leagueModes']
    | i18n['privateModes']
    | i18n['salmonRunModes'];
}

export type { Match };
