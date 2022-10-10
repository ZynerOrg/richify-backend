import { ITransactionJournal } from "./TransactionJournal";

export interface ITransactionCurrency {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  enabled: boolean;
  code: string;
  name: string;
  symbol: string;
  decimal_places: number;
  budgetLimits: IBudgetLimit[];
  transactionJournals: ITransactionJournal[];
  transactions: ITransaction[];
}
