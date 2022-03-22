interface regularModes {
  TURF_WAR: string;
}

interface rankedModes {
  SPLAT_ZONES: string;
  TOWER_CONTROL: string;
  RAINMAKER: string;
  CLAM_BLITZ: string;
}

interface privateModes extends rankedModes, regularModes {}

interface salmonRunModes {
  SALMON_RUN: string;
}

interface i18n {
  mode: {
    REGULAR_BATTLE: string;
    RANKED_BATTLE: string;
    LEAGUE_BATTLE: string;
    SALMON_RUN: string;
    PRIVATE_BATTLE: string;
  };
  regularModes: regularModes;
  rankedModes: rankedModes;
  leagueModes: rankedModes;
  privateModes: privateModes;
  salmonRunModes: salmonRunModes;
}

export type { i18n };
