import Ayah from "../components/Ayah";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4 sm:px-6 lg:px-8">
       <Ayah />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-6">
        Welcome to My Islamic To-Do App
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
        Stay productive while keeping barakah. Organize your daily tasks with
        an Islamic touch.
      </p>
    </div>
  );
}

export default Home;
