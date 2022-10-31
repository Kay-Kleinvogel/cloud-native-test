import { Key } from "react";

export interface INote {
  _id?: string;
  name: string;
  tags: [string];
  participants: [string];
  notes: string;
  created: number;
}
