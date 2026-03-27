import { useState } from "react";
import StudySessions from "./components/StudySessions";
import StudyForm from "./components/StudyForm";

function App() {
  return (
    <div className="bg-zinc-800 text-white h-screen w-full">
      {/* <div className="bg-background text-on-surface font-body min-h-screen">
        <h1 className="font-headline font-extrabold text-4xl text-slate-900 p-6">
          Student Study Planner
        </h1>
      </div>      */}
      {/* <StudySessions /> */}

      <StudyForm />
    </div>
  );
}

export default App;
