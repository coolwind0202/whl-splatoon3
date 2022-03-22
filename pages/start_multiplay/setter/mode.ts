import type { Page } from '../../../types/page.ts';
import type { i18n } from '../../../i18n/i18n.ts';

type ModeChangeProps = {
  modes: i18n['mode'];
  selected?: keyof i18n['mode'];
  messages: Pick<i18n['message'], 'PLEASE_SELECT_MODE'>;
};

const ModeChange: Page<ModeChangeProps> = (
  { modes, selected, messages },
) => {
  const modeTuple = Object.keys(modes) as (keyof i18n['mode'])[];
  return {
    content: messages.PLEASE_SELECT_MODE,
    components: [
      {
        type: 1,
        components: [
          {
            type: 3,
            custom_id: '',
            options: modeTuple.map((mode) => ({
              label: modes[mode],
              value: mode,
              default: mode === selected,
            })),
          },
        ],
      },
    ],
  };
};

export { ModeChange };
