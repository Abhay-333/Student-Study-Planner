import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const priorityStyles = {
  High: "bg-rose-500/15 text-rose-300 ring-1 ring-inset ring-rose-400/30",
  Medium: "bg-amber-500/15 text-amber-300 ring-1 ring-inset ring-amber-400/30",
  Low: "bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30",
};

const SessionCard = ({ session, onEdit, onDelete }) => {
  

  const {
    topic = "Untitled Session",
    subject = "General",
    duration = 0,
    priority = "Medium",
    date,
  } = session || {};

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "No date selected";

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-indigo-950/30">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium tracking-wide text-indigo-200 ring-1 ring-inset ring-indigo-400/20">
            {subject}
          </p>
          <h3 className="text-lg font-semibold text-white">{topic}</h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[priority] || priorityStyles.Medium}`}
        >
          {priority}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm text-zinc-300">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Duration
          </p>
          <p className="mt-1 font-medium text-white">{duration} mins</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-3">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Date
          </p>
          <p className="mt-1 font-medium text-white">{formattedDate}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => onEdit?.(session)}
          className="flex-1 cursor-pointer rounded-2xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete?.(session)}
          className="flex-1 cursor-pointer rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default SessionCard;
