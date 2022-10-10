import { IAccount } from "./Account";
import { IBill } from "./Bill";
import { IPiggyBank } from "./PiggyBank";
import { IUser } from "./User";

export interface IObjectGroup {
  id: number;
  user_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  title: string;
  order: number;
  accounts: IAccount[];
  bills: IBill[];
  piggyBanks: IPiggyBank[];
  user: IUser;
}
