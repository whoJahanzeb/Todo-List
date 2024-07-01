function AddTaskButton({ title, onPress }) {
  return (
    <>
      <button
        onClick={onPress}
        className="bg-purple-500 text-white text-lg rounded-md px-4 py-2"
      >
        {title}
      </button>
    </>
  );
}
export default AddTaskButton;
