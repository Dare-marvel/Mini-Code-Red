import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Backstory_Level_1 = () => {
    const [text, setText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const navigate = useNavigate();

    // Replace all newline characters with spaces
    const sourceText = `  For the past 2000 years, keepers have protected the treasure of the great Chola empire. The elder keeper only has access to information regarding the treasure, but he is currently lying on his deathbed. You are Prataprao and you are the descendants of the keepers of historic royal treasure of the Chola empire. Your job is to find the treasure safeguarded by the elder keeper and shift it to a safer location.`;
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
                src="../../assets/levels/Level_1.jpg"
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
                        onClick={() => navigate("/backstory_prb1")}
                        className="absolute bottom-[-4rem] right-0 px-6 py-3 bg-black bg-opacity-70 text-2xl tracking-wide rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 border-2 border-white"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Backstory_Level_1;
