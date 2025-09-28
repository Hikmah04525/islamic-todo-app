function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="w-full max-w-3xl p-10 bg-white rounded-2xl shadow-lg text-center transition hover:shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
          About This App
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          This Islamic Task Manager was built to help you organize your daily
          goals while staying connected to the Qur’an Ayahs.
          Manage tasks, track progress, and stay motivated insha’Allah.
        </p>
      </div>
    </div>
  );
}

export default About;
