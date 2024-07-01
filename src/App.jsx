import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  const [task, setTask] = useState("");

  return (
    <>
      <div className="space-y-20">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <Content />
        </div>
      </div>
    </>
  );
}

export default App;
