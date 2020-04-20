import { Method } from './enums/method.enum';

export interface IBot {
    NAME: string;
    POINTS: number;
    TIME: number;
    USED: Method;
}
