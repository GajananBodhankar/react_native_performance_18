export interface appState {
  count: number;
  name: string;
}

export interface Iprops {
  name: string;
  setName(value: string): void;
}
