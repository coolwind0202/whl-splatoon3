import type { Page } from '../../../types/page.ts';
import type { i18n } from '../../../i18n/i18n.ts';

type ModeChangeProps = {
  modes: i18n['mode'];
  selected: string;
  onChange: (mode: string) => void;
};

const ModeChange: Page<ModeChangeProps> = ({ modes, selected, onChange }) => {
  const modeTuple = Object.keys(modes) as (keyof i18n['mode'])[];
  return {
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
            })),
          },
        ],
      },
    ],
  };
};

export { ModeChange };
