import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Second() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);


    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState("");

    const generateSoal = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;

        setA(num1);
        setB(num2);
        setAnswer("");
        setResult("");
    };

    const checkAnswer = () => {
        if (parseInt(answer) === a * b) {
            setResult("✓ Benar!");
            generateSoal();
        } else {
            setResult(`✗ Salah! Jawaban benar: ${a * b}`);
        }
    };

    useEffect(() => {
    setCountdown(10); // reset countdown setiap a/b berubah

    const interval = setInterval(() => {
        setCountdown(prev => {
            if (prev === 1) {
                generateSoal();  // jalankan saat countdown habis
            }
            return prev - 1;
        });
    }, 1000);

    return () => clearInterval(interval);
}, [a, b]);

    return (
        <div className="w-full mt-36 mb-36 flex items-center justify-center p-4">
            <div className="shadow-2xl border-blue-500 border-2 p-6 rounded-2xl text-center w-full max-w-sm">
                <h2 className="text-4xl font-bold mb-10">Tes Perkalian </h2>
                <p>Sisa waktu: {countdown} detik</p>

                <h3 className="text-4xl mb-4">{a} × {b} = ?</h3>

                <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            checkAnswer();
                        }
                    }}
                    className="w-full border p-2 text-4xl text-center rounded"
                />

                <div className="mt-4">
                    <button
                        onClick={checkAnswer}
                        className="bg-gray-200 font-bold text-slate-700 px-4 py-2 rounded mr-2 hover:bg-gray-300"
                    >
                        Cek
                    </button>

                    <button
                        onClick={generateSoal}
                        className="bg-red-200 text-slate-700 font-bold px-4 py-2 rounded mr-2 hover:bg-red-300"
                    >
                        Soal Baru
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded hover:bg-slate-300"
                    >
                        Kembali
                    </button>
                </div>

                <p className="mt-4 text-lg">{result}</p>
            </div>
        </div>

    );
}

export default Second;
