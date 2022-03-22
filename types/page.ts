import {
  RESTPostAPIChannelMessageJSONBody,
} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';

type Page<Props> = (props: Props) => Partial<RESTPostAPIChannelMessageJSONBody>;

export type { Page };
