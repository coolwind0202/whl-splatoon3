import { i18n } from './i18n.ts';

const _regularModes: i18n['regularModes'] = {
  TURF_WAR: 'ナワバリバトル',
};
const _rankedModes: i18n['rankedModes'] = {
  SPLAT_ZONES: 'ガチエリア',
  TOWER_CONTROL: 'ガチヤグラ',
  RAINMAKER: 'ガチホコ',
  CLAM_BLITZ: 'ガチアサリ',
};

const JA: i18n = {
  mode: {
    REGULAR_BATTLE: 'レギュラーマッチ',
    RANKED_BATTLE: 'ガチマッチ',
    LEAGUE_BATTLE: 'リーグマッチ',
    PRIVATE_BATTLE: 'プライベートマッチ',
    SALMON_RUN: 'サーモンラン',
  },
  regularModes: _regularModes,
  rankedModes: _rankedModes,
  leagueModes: _rankedModes,
  privateModes: { ..._regularModes, ..._rankedModes },
  salmonRunModes: {
    SALMON_RUN: 'サーモンラン',
  },

  message: {
    PLEASE_SELECT_MODE: 'マッチを選択してください。',
  },
};

export { JA };
