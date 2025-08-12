import { useState } from 'react'

function App() {
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo]= useState(false)

  function handleInfo(){
    setInfo(!info);
  }
  function handledob(e){
    setDob(e.target.value);
  }

  const handleSubmit = () => {
    if (!dob) {
      setMessage("Please enter your date of birth.");
      return;
    }

    const birthDate = new Date(dob);
    const age = Math.floor((Date.now() - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

    setMessage(
      age >= 18
        ? ` You are ${age} years old. You are eligible!`
        : ` You are ${age} years old. You are NOT eligible.`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-red-500 text-3xl font-bold mb-6">Age Validator</h1>
      
      <div className="flex flex-col gap-4 items-center bg-red-100 shadow-md p-6 rounded-lg w-96">
        <h2 className="text-gray-700 text-lg">
          Find out if you are eligible to use our server!
        </h2>

        <label htmlFor="dob" className="text-gray-600 font-medium">
          What is your DOB:
        </label>
        <input
          id="dob"
          type="date"
          value={dob}
          onChange={handledob}
          className="border border-gray-300 rounded bg-red-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Submit
        </button>

        {message && (
          <p
            className={`mt-4 font-bold ${
              message.includes("NOT") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
        <button onClick={handleInfo} className='text-red-500 underline'>Why do you need to know your DOB?</button>
        {info && <div className='border border-1 flex flex-wrap bg-red-300'>Your date of birth determine if you can use our plaleform. you must be at leaast 18 years old to use our service.</div>}
      </div>
    </div>
  );
}

export default App;
