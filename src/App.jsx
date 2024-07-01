import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
