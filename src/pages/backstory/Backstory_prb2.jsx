import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Backstory_prb2 = () => {
    const [text, setText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const navigate = useNavigate();

    // Replace all newline characters with spaces
    const sourceText = `  Inside the temple premises lie a sword with a key attached to the other end. The elder keeper’s copy of Sangam had: A relic of keys, not touch nor swipe, Where numbers spoke, both day and night Scribbled on T9th page… On the sword a lock had the text below engraved: 64638336074989034448`;
    const typingSpeed = 3;

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < sourceText.length) {
                // Append the next character if it exists
                setText((prev) => prev + (sourceText[index] || ""));
                index++;
            } else {
                clearInterval(interval);
                setIsTypingComplete(true);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center flex-col h-screen relative">
            {/* Background Image */}
            <img
                src="src/assets/levels/Level_2.jpg"
                alt="Background"
                className="object-cover w-full h-full absolute z-0"
            />
            {/* Text Container */}
            <div className="relative bg-black bg-opacity-70 p-6 rounded-lg w-[48%] z-10 h-[50%] text-white border-2 border-white">
                <h1 className="text-2xl tracking-wide">
                    {text}
                    {!isTypingComplete && <span className="animate-pulse">|</span>}
                </h1>
                {isTypingComplete && (
                    <button
                        onClick={() => navigate("/level_2")}
                        className="absolute bottom-[-4rem] right-0 px-6 py-3 bg-black bg-opacity-70 text-2xl tracking-wide rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 border-2 border-white"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Backstory_prb2;
