import { IAccount } from "./Account";

export interface IAccountMeta {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  account_id?: Date;
  name: string;
  data: any;
  account: IAccount;
}
