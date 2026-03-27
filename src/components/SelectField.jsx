const SelectField = () => {
  return (
    <select className="w-full px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <option value="dsa">DSA</option>
      <option value="web-development">Web Development</option>
      <option value="dbms">Duration</option>
      <option value="os">Priority</option>
      <option value="other">Other</option>
    </select>
  );
};

export default SelectField;
