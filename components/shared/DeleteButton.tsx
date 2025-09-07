"use client";
import { DeleteObjectByID } from "@/lib/actions/general.action";
import { Trash2 } from "lucide-react";

import React, { FormEvent, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

function DeleteButton({ id, mode }: { id: string; mode: string }) {
  const [open, setOpen] = useState(false);
  const handleConfirmDelete = () => {
    const form = document.getElementById(
      `delete-form-${id}`
    ) as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      DeleteObjectByID(formData);
    }
    setOpen(false);
  };
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <>
      <form
        action={DeleteObjectByID}
        id={`delete-form-${id}`}
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="mode" value={mode} />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </form>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this{" "}
              {mode}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default DeleteButton;
