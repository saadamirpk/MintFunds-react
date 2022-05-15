export interface trans {
  id: number;
  text: string;
  amount: number;
}

export type TransContextState = {
  transactions: trans[];
  addTransaction: (text: string, amount: number) => void;
  deleteTransaction: (id: number) => void;
};
