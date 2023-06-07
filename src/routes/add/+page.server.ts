import { db } from "$lib/db";
import { redirect, type Actions } from "@sveltejs/kit";
import { format } from "date-fns";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");

    const createdDate = format(new Date(), "yyyy-MM-dd");

    const response = await db.query(
      "INSERT INTO Note (title, content, createdDate, updatedAt) VALUES (? ,? ,?, ?)",
      [title, content, createdDate, createdDate]
    );

    console.log(response);

    throw redirect(303, "/");
  },
};
