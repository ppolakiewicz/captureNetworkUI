export interface Statistics{
  exploit: number;
  infect: number;
  nop: number;
  overhear: number;
  overload: number;
  patch: number;
  scan: number;
}

export interface WonWithMethods{
  NAME: string;
  STATISTICS: Statistics;
}

export interface ChartData{
  data: number[];
  label: string;
}
