import { IAttachment } from "./Attachment";
import { INote } from "./Note";
import { IObjectGroup } from "./ObjectGroup";
import { ITransactionCurrency } from "./TransactionCurrency";
import { ITransactionJournal } from "./TransactionJournal";
import { IUser } from "./User";

export interface IBill {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  user_id: number;
  transaction_currency_id?: number;
  name: string;
  match: string;
  amount_min: string;
  amount_max: string;
  date: Date;
  end_date?: string;
  extension_date?: string;
  repeat_freq: string;
  skip: number;
  automatch: boolean;
  active: boolean;
  name_encrypted: boolean;
  match_encrypted: boolean;
  order: number;
  attachments: IAttachment[];
  notes: INote[];
  objectGroups: IObjectGroup[];
  transactionCurrency?: ITransactionCurrency;
  transactionJournals: ITransactionJournal[];
  user: IUser;
  user_group_id?: number;
}
