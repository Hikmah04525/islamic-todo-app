import { useState, useEffect } from "react";
import "./Ayah.css";

function Ayah() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch random ayah
  const fetchRandomAyah = async () => {
    setLoading(true);
    try {
      // quran has 6236 ayahs, pick one randomly
      const randomAyah = Math.floor(Math.random() * 6236) + 1;
        const response = await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomAyah}`
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
    fetchRandomAyah();
    }, []);

    return (
    <div className="ayah-container">
        {loading ? (
        <div className="spinner"></div>
        ) : (
        <>
            <p className="ayah">📖 {ayah.text}</p>
            <p className="surah">
            — {ayah.surah.englishName} (Surah {ayah.surah.number})
            </p>
            <button onClick={fetchRandomAyah} className="ayah-btn">
            Get Random Ayah
            </button>
        </>
        )}
    </div>
    );
}

export default Ayah;
