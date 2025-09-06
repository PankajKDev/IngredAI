"use client";
import { DeleteRecipeByID } from "@/lib/actions/general.action";
import { Trash2 } from "lucide-react";

import React from "react";

function DeleteButton({ id, mode }: { id: string; mode: string }) {
  return (
    <form
      action={DeleteRecipeByID}
      onSubmit={(e) => {
        if (!confirm("Are you sure you want to delete this recipe?")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
      >
        <Trash2 className="w-4 h-4" />
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
