import { IBotDescription } from './ibot-description'

export interface IGameDescription {
    GAME_ID: number;
    BOT_1: IBotDescription;
    BOT_2: IBotDescription;
    ROUNDS: number;
    DATE: Date;
}
