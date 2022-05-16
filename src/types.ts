export interface trans {
  id: string;
  text: string;
  amount: number;
}

export type TransContextState = {
  transactions: trans[];
  addTransaction: (obj: trans) => void;
  deleteTransaction: (id: string) => void;
};
