import { useState, useEffect } from "react";

function Ayah() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch  ayah
  const fetchAyah = async () => {
    setLoading(true);
    try {
      // quran has 6236 ayahs, pick one 
      const getAyah = Math.floor(Math.random() * 6236) + 1;
        const response = await fetch(
        `https://api.alquran.cloud/v1/ayah/${getAyah}`
        );
        const data = await response.json();

        setAyah(data.data);
    } catch (error) {
        setAyah({
        text: " Failed to load ayah. Please try again later.",
        surah: { englishName: "", number: "" },
        });
    } finally {
        setLoading(false);
    }
    };

  // load first ayah on mount
    useEffect(() => {
    fetchAyah();
    }, []);

    return (
    <div className="my-5 p-5 bg-gray-50 border-l-4 border-green-600 rounded-lg text-center max-w-2xl mx-auto">
  {loading ? (
    <div className="w-6 h-6 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>
  ) : (
    <>
      <p className="text-lg text-gray-700 leading-relaxed mb-3">
        📖 {ayah.text}
      </p>
      <p className="text-sm font-bold text-gray-600 mb-4">
        — {ayah.surah.englishName} (Surah {ayah.surah.number})
      </p>
      <button
        onClick={fetchAyah}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
      >
        Get  Ayah
      </button>
    </>
  )}
</div>

    );
}

export default Ayah;
