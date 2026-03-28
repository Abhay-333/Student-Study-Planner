import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SessionContext } from "../context/SessionContext";
import { nanoid } from "nanoid/non-secure";
import SessionList from "./SessionList";

const SessionForm = () => {
  const { setSessions } = useContext(SessionContext);
  const [showList, setShowList] = useState(false);
  const [editingSession, setEditingSession] = useState(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  const handleFormSubmit = (data) => {
    if (editingSession) {
      setEditingSession((prev)=>({...prev, }))
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.userId === editingSession.userId
            ? { ...session, ...data, isEditing: false}
            : session,
        ),
      );
      setShowList((prev)=>!prev)
    } else {
      const id = nanoid();
      setSessions((prevSessions) => [
        ...prevSessions,
        { ...data, userId: id, isEditing: false },
      ]);
      reset();
    }
  };

  const onDeleteSession = (id) => {
    console.log(id);
    setSessions((prevSessions)=>prevSessions.filter((session)=>session.userId !== id))  
  };

  useEffect(() => {
    if (editingSession) {
      reset(editingSession);
    } else {
      reset({
        topic: "",
        subject: "DSA",
        duration: "",
        priority: "Medium",
        date: "",
      });
    }
  }, [editingSession, reset]);

  return showList ? (
    <SessionList
      setShowList={setShowList}
      onDelete={onDeleteSession}
      editingSession={editingSession}
      setEditingSession={setEditingSession}
    />
  ) : (
    <div className="max-w-xl mx-auto bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800">
      <h2 className="text-xl font-semibold text-white mb-6">
        Add Study Session
      </h2>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* Topic */}
        <div>
          <label className="text-sm text-zinc-400">Topic Name</label>
          <input
            {...register("topic", { required: true })}
            type="text"
            name="topic"
            // value={form.topic}
            // onChange={handleChange}
            placeholder="Enter topic name"
            required
            className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm text-zinc-400">Subject</label>
          <select
            {...register("subject", { required: true })}
            name="subject"
            // value={form.subject}
            // onChange={handleChange}
            className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
          >
            <option value="DSA">DSA</option>
            <option value="Web Dev">Web Dev</option>
            <option value="DBMS">DBMS</option>
            <option value="OS">OS</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="text-sm text-zinc-400">
            Duration in minutes (min 10 mins)
          </label>
          <input
            {...register("duration", { required: true, min: 10 })}
            type="number"
            name="duration"
            // value={form.duration}
            // onChange={handleChange}
            placeholder="Enter duration"
            className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="text-sm text-zinc-400">Priority</label>
          <select
            {...register("priority", { required: true })}
            name="priority"
            // value={form.priority}
            // onChange={handleChange}
            className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm text-zinc-400">Date</label>
          <input
            {...register("date", { required: true })}
            type="date"
            name="date"
            // value={form.date}
            // onChange={handleChange}
            className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white"
          />
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-1/2 cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg transition"
          >
            {editingSession?.isEditing ? "Update Session" : "Add Session"}
          </button>

          <button
            onClick={() => setShowList((prev) => !prev)}
            type="button"
            className="w-1/2 cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg transition"
          >
            Show All Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
