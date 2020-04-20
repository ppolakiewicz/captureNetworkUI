import { IBot } from './ibot'

export interface IRound {

    ADVANTAGE: string;
    BOT_1: IBot;
    BOT_2: IBot;
    ROUND: string;
    TIME: Date;
    WINNER: string;
}
