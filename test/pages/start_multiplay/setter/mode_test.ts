import { JA } from '../../../../i18n/ja.ts';
import { ModeChange } from '../../../../pages/start_multiplay/setter/mode.ts';
import { assertEquals } from 'https://deno.land/std@0.130.0/testing/asserts.ts';

Deno.test('test mode change message', () => {
  const page = ModeChange({
    modes: JA.mode,
    selected: 'REGULAR_BATTLE',
    messages: JA.message,
  });
  assertEquals(page, {
    content: JA.message.PLEASE_SELECT_MODE,
    components: [
      {
        type: 1,
        components: [
          {
            type: 3,
            custom_id: '',
            options: [
              {
                label: JA.mode.REGULAR_BATTLE,
                value: 'REGULAR_BATTLE',
                default: true,
              },
              {
                label: JA.mode.RANKED_BATTLE,
                value: 'RANKED_BATTLE',
                default: false,
              },
              {
                label: JA.mode.LEAGUE_BATTLE,
                value: 'LEAGUE_BATTLE',
                default: false,
              },
              {
                label: JA.mode.PRIVATE_BATTLE,
                value: 'PRIVATE_BATTLE',
                default: false,
              },
              {
                label: JA.mode.SALMON_RUN,
                value: 'SALMON_RUN',
                default: false,
              },
            ],
          },
        ],
      },
    ],
  });
});
