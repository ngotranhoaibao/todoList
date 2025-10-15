function TodoHeader({ totalDone, totalTodo }) {
  const percentToDone = ((totalDone / totalTodo) * 100).toFixed(0);

  return (
    <div className="border-4 border-black max-w-2xl bg-[#53eafd] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 mb-6">
      <div className="text-center">
        <h2 className="text-2xl font-black text-black mb-[16px] ">
          MISSION PROGRESS
        </h2>
        <h2 className="text-3xl font-black text-black mb-4">
          You've completed {totalDone}/{totalTodo} tasks
        </h2>
        <div className="bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none h-8 overflow-hidden">
          <div
            className="bg-[#05df72] h-full"
            style={{ width: `${(totalDone / totalTodo) * 100}%` }}
          >
            {percentToDone}%
          </div>
        </div>
        <p className="text-[1.125rem] font-[700] text-black mt-[16px]">
          {totalTodo - totalDone} missions remaining
        </p>
      </div>
    </div>
  );
}

export default TodoHeader;
