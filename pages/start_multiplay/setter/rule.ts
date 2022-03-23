import { Page } from '../../../types/page.ts';
import type * as Modes from '../../../types/mode.ts';
import { Rules } from '../../../types/rule.ts';
import { getRules } from '../../../utils/get_rule.ts';
import type { i18n } from '../../../i18n/i18n.ts';

type RuleChangeProps = {
  mode: Modes.ModeType;
  ruleName: i18n['rule'];
};

const RuleChange: Page<RuleChangeProps> = ({ mode, ruleName }) => {
  const ruleCodes = Object.keys(ruleName) as (keyof typeof ruleName)[];

  return {
    components: [
      {
        type: 1,
        components: [
          {
            type: 3,
            custom_id: '',
            options: getRules(mode).map((rule) => {
              const code = ruleCodes.find((code) => {
                const type = Rules[code];
                return type === rule.type;
              });
              if (code !== undefined) {
                const name = ruleName[code];
                return {
                  label: name,
                  value: code,
                };
              }
            }).filter((item): item is NonNullable<typeof item> => item != null),
            // 型情報からundefinedを消去するfilter
            // https://zenn.dev/lollipop_onl/articles/eoz-ts-non-nullable
          },
        ],
      },
    ],
  };
};

export { RuleChange };
