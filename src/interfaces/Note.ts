export interface INote {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  noteable_id: number;
  noteable_type: string;
  title?: string;
  text?: string;
}
