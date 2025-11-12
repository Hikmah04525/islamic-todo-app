function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl bg-white rounded-3xl shadow-md hover:shadow-lg transition-all p-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6">
          About Itqan Task Manager 
        </h1>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Itqan Task Manager is more than just a productivity tool  it’s a reminder
          to live each day with purpose, gratitude, and discipline. 
          Designed to blend your daily goals with spiritual mindfulness, 
          it helps you stay productive while nurturing your soul.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-green-50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-green-700 text-xl font-semibold mb-2">🌿 Intentional Living</h3>
            <p className="text-gray-600 text-sm">
              Set meaningful goals and track your progress with sincerity and focus.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-green-700 text-xl font-semibold mb-2">📿 Faith-Centered Focus</h3>
            <p className="text-gray-600 text-sm">
              Connect your actions to faith by integrating daily ayahs and reminders.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-green-700 text-xl font-semibold mb-2">🌸 Balance & Barakah</h3>
            <p className="text-gray-600 text-sm">
              Find peace in structure where worldly duties and spiritual growth align.
            </p>
          </div>
        </div>

        <p className="mt-10 text-gray-600 text-sm sm:text-base">
          Built with purpose by a dedicated learner through the{" "}
          <span className="font-medium text-green-700">NSDA Mentorship Program</span> 
          a journey filled with growth, guidance, and inspiration to build with purpose
          and strive for balance in both dunya and akhirah.
        </p>
      </div>
    </div>
  );
}

export default About;

