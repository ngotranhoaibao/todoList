import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function DialogTodo({
  open,
  onOpenChange,
  titleDialog,
  inputValue,
  onSubmit,
  isEditing,
}) {
  const [value, setValue] = useState(inputValue);
  useEffect(() => {
    if (open) {
      setValue(inputValue ?? "");
    }
  }, [open, inputValue]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{titleDialog}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter task title..."
            className="shadow-[3px_3px_0px_#000] focus:outline-none w-full p-3 border-3 border-black bg-white"
          />
          <button
            onClick={() => onSubmit(value)}
            className="px-4 py-2 border-3 border-black shadow-[3px_3px_0px_#000] bg-[#7bf1a8] font-bold"
          >
            {isEditing ? "Save changes" : "Add task"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
