export default function TodoItem({
  listTodo,
  onEdit,
  onChangeStatus,
  onDelete,
}) {
  return (
    <div className="space-y-4">
      {listTodo.map((item) => {
        const done = item.status === "done";
        return (
          <div
            key={item.id}
            className={`${
              done ? "bg-[#7bf1a8]" : "bg-[#ffb86a]"
            } border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none p-4 relative transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}
          >
            <div className="flex items-center gap-4">
              <div
                onClick={() => onChangeStatus(item.id)}
                className="text-3xl cursor-pointer "
              >
                <svg
                  width="30"
                  fill={done ? "#008336" : "#ca3500"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    d={
                      done
                        ? "M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"
                        : "M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z"
                    }
                  ></path>
                </svg>
              </div>

              <div className="flex-1">
                <p
                  className={`text-black font-bold text-xl ${
                    done ? "line-through" : ""
                  }`}
                >
                  {item.title}
                </p>
                <p
                  className={`text-sm font-bold mt-1 ${
                    done ? "text-[#00824c]" : "text-[#cd3500]"
                  }`}
                >
                  {done ? "Task completed!" : "In progress..."}
                </p>

                <button
                  type="button"
                  onClick={() => onEdit(item)}
                  className="absolute right-20 top-1/2 -translate-y-1/2 px-3 py-1 border-3 border-black rounded-lg shadow-[2px_2px_0px_#000] bg-transparent"
                >
                  <svg
                    className="!w-6 !h-6"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M100.4 417.2C104.5 402.6 112.2 389.3 123 378.5L304.2 197.3L338.1 163.4C354.7 180 389.4 214.7 442.1 267.4L476 301.3L442.1 335.2L260.9 516.4C250.2 527.1 236.8 534.9 222.2 539L94.4 574.6C86.1 576.9 77.1 574.6 71 568.4C64.9 562.2 62.6 553.3 64.9 545L100.4 417.2zM156 413.5C151.6 418.2 148.4 423.9 146.7 430.1L122.6 517L209.5 492.9C215.9 491.1 221.7 487.8 226.5 483.2L155.9 413.5zM510 267.4C493.4 250.8 458.7 216.1 406 163.4L372 129.5C398.5 103 413.4 88.1 416.9 84.6C430.4 71 448.8 63.4 468 63.4C487.2 63.4 505.6 71 519.1 84.6L554.8 120.3C568.4 133.9 576 152.3 576 171.4C576 190.5 568.4 209 554.8 222.5C551.3 226 536.4 240.9 509.9 267.4z"></path>
                  </svg>
                </button>

                <button
                  onClick={() => onDelete(item.id)}
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 border-3 border-black rounded-lg shadow-[2px_2px_0px_#000]"
                >
                  <svg width="24" height="24" fill="red" viewBox="0 0 640 640">
                    <path d="M232.7 69.9L224 96H128C110.3 96 96 110.3 96 128s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H416l-8.7-26.1C402.9 56.8 390.7 48 376.9 48H263.1c-13.8 0-26 8.8-30.4 21.9zM512 208H128l21.1 323.1C150.7 556.4 171.7 576 197 576h246c25.3 0 46.3-19.6 47.9-44.9L512 208z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
