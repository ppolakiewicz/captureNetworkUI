import { IBotDescription } from './ibot-description';

export interface IGameDescription {
  game_id: number;
  bot_1: IBotDescription;
  bot_2: IBotDescription;
  rounds: number;
  date: Date;
}
