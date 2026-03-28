import { useContext, useState } from "react";
import SessionCard from "./components/SessionCard";
import SessionForm from "./components/SessionForm";
import { SessionContext } from "./context/SessionContext";

function App() {
  // const data = useContext(SessionContext)
  // console.log(data)
  return (
    <div className="bg-zinc-800 text-white h-screen w-full flex items-center">
      {/* <div className="bg-background text-on-surface font-body min-h-screen">
        <h1 className="font-headline font-extrabold text-4xl text-slate-900 p-6">
          Student Study Planner
        </h1>
      </div>      */}
      {/* <StudySessions /> */}
      <SessionForm />
    </div>
  );
}

export default App;
