import "./App.css";
import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";
import DialogTodo from "./components/DialogTodo";
function App() {
  const [open, setOpen] = useState(false);
  const [titleDialog, setTitleDialog] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [listTodo, setListTodo] = useState(
    JSON.parse(localStorage.getItem("listTodo")) || [
      {
        id: 1,
        title: "Build a rocket ship",
        status: "in-progress",
      },
      {
        id: 2,
        title: "Design Neo-brutalism UI",
        status: "done",
      },
    ]
  );
  const totalTodo = listTodo.length;
  console.log(totalTodo);
  const totalDone = listTodo.filter((item) => item.status === "done").length;
  console.log(totalDone);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const handleAddNew = () => {
    setTitleDialog("Add New Task");
    setEditingId(null);
    setInputValue(""); 
    setOpen(true);
  };
  const handleEdit = (todo) => {
    setTitleDialog("Edit Task");
    setEditingId(todo.id);
    setInputValue(todo.title);
    setOpen(true);
  };
  const handleSubmit = (value) => {
    const title = value ?? "";
    if (!title) return;
    if (editingId !== null) {
      const updatedList = listTodo.map((task) => {
        if (task.id === editingId) {
          return { ...task, title: title };
        }
        return task;
      });
      setListTodo(updatedList);
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title: title,
        status: "in-progress",
      };
      setListTodo([...listTodo, newTask]);
    }
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
    setInputValue("");
  }, [listTodo]);
  const handleChangeStatus = (id) => {
    const newTodo = listTodo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === "done" ? "in-progress" : "done",
        };
      }
      return item;
    });
    setListTodo(newTodo);
  };
  const handleDelete = (id) => {
    const newTodo = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodo);
  };

  const searchvalue = search.toLowerCase();
  let filteredList = listTodo.filter((t) =>
    searchvalue ? t.title.toLowerCase().includes(searchvalue) : true
  );
  if (statusFilter === "active") {
    filteredList = filteredList.filter((t) => t.status !== "done");
  } else if (statusFilter === "completed") {
    filteredList = filteredList.filter((t) => t.status === "done");
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#ffdf20] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none p-8 mb-8">
          <h1 className="text-4xl font-black text-black mb-2 text-center">
            FUTURE TO DO LIST
          </h1>
          <p className="text-lg font-bold text-black text-center mb-6">
            Your mission control dashboard
          </p>
          <TodoHeader totalTodo={totalTodo} totalDone={totalDone} />
          <button
            onClick={handleAddNew}
            className="bg-[#7bf1a8] w-full border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none p-4 border-black"
          >
            <p className="text-xl font-black text-black">Add New Task</p>
          </button>
          <div className="flex gap-3 mt-6">
            <button
              className="bg-[#ffdf20] items-center px-4 w-full border-3 border-black py-2"
              onClick={() => setStatusFilter("all")}
            >
              All
            </button>
            <button
              className="bg-[#7bf1a8] px-4 w-full border-3 border-black py-2"
              onClick={() => setStatusFilter("active")}
            >
              Active
            </button>
            <button
              className="bg-[#ffb86a] px-4 w-full border-3 border-black py-2"
              onClick={() => setStatusFilter("completed")}
            >
              Completed
            </button>
          </div>
          <input
            placeholder="Search tasks....."
            className="shadow-[3px_3px_0px_#000] focus:outline-none w-full mt-[24px] p-3 border-3 border-black bg-white"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <TodoItem
          listTodo={filteredList}
          onEdit={handleEdit}
          onChangeStatus={handleChangeStatus}
          onDelete={handleDelete}
        />
        <DialogTodo
          open={open}
          onOpenChange={setOpen}
          titleDialog={titleDialog}
          inputValue={inputValue}
          onSubmit={handleSubmit}
          isEditing={editingId !== null}
        />
      </div>
    </div>
  );
}

export default App;
