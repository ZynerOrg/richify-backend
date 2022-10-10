import { IAccount } from "./Account";
import { IAttachment } from "./Attachment";
import { INote } from "./Note";
import { IObjectGroup } from "./ObjectGroup";

export interface IPiggyBank {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  account_id: number;
  name: string;
  targetamount: string;
  startdate?: Date;
  targetdate?: Date;
  order: number;
  active: boolean;
  encrypted: boolean;
  account: IAccount;
  attachments: IAttachment[];
  notes: INote[];
  objectGroups: IObjectGroup[];
  piggyBankEvents: IPiggyBankEvent[];
  piggyBankRepetitions: IPiggyBankRepetition[];
}
