import type { RowDataPacket } from "mysql2";
import { db } from "../lib/db";

export const load = async () => {
  const response = await db.query<RowDataPacket[]>("SELECT * FROM Note");

  return {
    notes: response[0],
  };
};
