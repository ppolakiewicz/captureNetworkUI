import { IGameRoundBot } from './igame-round-bot';

export interface IGameRound {
  advantage: number;
  bot_1: IGameRoundBot;
  bot_2: IGameRoundBot;
  round: string;
  time: Date;
  winner: number;
}
