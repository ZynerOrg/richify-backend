import { IAccount } from "./Account";

export interface ILocation {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  locatable_id: number;
  locatable_type: string;
  latitude?: string;
  longitude?: string;
  zoom_level?: number;
  accounts: IAccount[];
}
