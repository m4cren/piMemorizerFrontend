import React, { Dispatch } from "react";

interface Props {
    isStart: boolean;
    setStart: Dispatch<React.SetStateAction<boolean>>;
    countdown: number;
}
const Start = ({ setStart, isStart, countdown }: Props) => {
    return (
        <div className="flex h-screen bg-black/69 backdrop-blur-sm">
            {!isStart ? (
                <button
                    onClick={() => setStart(true)}
                    className="m-auto text-white text-2xl p-4 border-1 rounded-2xl hover:scale-110 cursor-crosshair font-mono"
                >
                    START
                </button>
            ) : (
                <h1 className="m-auto font-mono text-4xl text-white font-extrabold">
                    {countdown}
                </h1>
            )}
        </div>
    );
};

export default Start;
