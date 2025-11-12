import Ayah from "../components/Ayah";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50 flex flex-col items-center justify-center text-center px-6 py-12">
      {/* Quranic Ayah */}
      <Ayah />

      {/* Hero Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 text-gray-900">
        Welcome to <span className="text-green-700">Itqan Task Manager</span> 
      </h1>

      <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl">
        Bring harmony to your day by balancing your worldly tasks with spiritual growth. 
        Organize, reflect, and progress with purpose — all in one place.
      </p>

      {/* Feature Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-5xl w-full">
        <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition-all">
          <div className="text-green-600 text-3xl mb-3">📖</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Daily Qur'anic Reflections
          </h3>
          <p className="text-gray-600 text-sm">
            Begin your mornings with short verses and reflections that set your heart in peace.
          </p>
        </div>

        <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition-all">
          <div className="text-green-600 text-3xl mb-3">🗓️</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Manage Your Day
          </h3>
          <p className="text-gray-600 text-sm">
            Create, track, and complete daily goals  from study to salah with ease and clarity.
          </p>
        </div>

        <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition-all">
          <div className="text-green-600 text-3xl mb-3">🌟</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Build Good Habits
          </h3>
          <p className="text-gray-600 text-sm">
            Strengthen consistency and earn barakah through small, daily acts done sincerely.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button 
      onClick={() => navigate("/tasks")}
      className="mt-10 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all">
        Begin Your Journey
      </button>
    </div>
  );
}

export default Home;

