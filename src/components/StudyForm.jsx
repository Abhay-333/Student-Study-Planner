import InputField from "./InputField";
import SelectField from "./SelectField";
import SubmitButton from "./SubmitButton";

const StudyForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-900 shadow-lg border border-zinc-800 space-y-4">
        <h2 className="text-xl font-semibold text-white text-center">
          Study Planner
        </h2>

        <InputField placeholder="Topic name" />

        <SelectField />

        <InputField placeholder="Enter duration (min 10 min)" />

        <InputField placeholder="Enter priority (High / Medium / Low)" />

        <InputField placeholder="Enter Date" type="date" />

        <SubmitButton />
      </div>
    </div>
  );
};

export default StudyForm;
