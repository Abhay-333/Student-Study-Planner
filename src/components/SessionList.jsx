import React, { useContext } from "react";
import SessionCard from "./SessionCard";
import { SessionContext } from "../context/SessionContext";

const SessionList = ({
  setShowList,
  onEditSession,
  onDeleteSession,
}) => {
  const { sessions } = useContext(SessionContext);
  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-indigo-300">
            Study Queue
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Session List</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Apni upcoming study sessions ko yahan clean card layout mein track
            karo.
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <button
            type="button"
            onClick={() => setShowList((prev) => !prev)}
            className="cursor-pointer rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-indigo-400/40 hover:bg-zinc-800 hover:text-white"
          >
            Back
          </button>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Total Sessions
            </p>
            <p className="mt-1 text-2xl font-semibold text-white">
              {sessions.length}
            </p>
          </div>
        </div>
      </div>

      {sessions.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sessions.map((session) => (
            <SessionCard
              key={session.userId || `${session.topic}-${session.date}`}
              session={session}
              onEdit={onEditSession}
              onDelete={onDeleteSession}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/80 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-white">
            No study sessions yet
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Form se session add karte hi cards yahan show hone lagenge.
          </p>
        </div>
      )}
    </section>
  );
};

export default SessionList;
