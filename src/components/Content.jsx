import AddTaskButton from "./AddTaskButton";

function Content() {
  const addTaskHandler = () => {
    console.log("task added");
  };
  return (
    <>
      <div className="flex justify-between space-x-4">
        <input
          type="text"
          placeholder="Enter your task"
          className="flex-1 border border-purple-500 rounded-md px-4"
        />
        <AddTaskButton title="Add Task" onPress={addTaskHandler} />
      </div>
    </>
  );
}
export default Content;
