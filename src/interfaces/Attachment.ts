import { INote } from "./Note";
import { IUser } from "./User";

export interface IAttachment {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  user_id: number;
  attachable_id: number;
  attachable_type: string;
  file_exists: boolean;
  md5: string;
  filename: string;
  title?: string;
  description?: string;
  mime: string;
  size: number;
  uploaded: boolean;
  notes_text: string;
  notes: INote[];
  user: IUser;
  user_group_id?: number;
}
