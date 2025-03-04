import { useEffect, useState } from "react";

const useGame = () => {
    const [isStart, setStart] = useState(false);
    const [highscore, setHighscore] = useState(0);
    const [countdown, setCountdown] = useState(2);
    const [isGame, setGame] = useState<boolean>(false);
    const [isGameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const highscoree = localStorage.getItem("highscore");
        if (highscoree) {
            setHighscore(parseInt(highscoree));
        } else {
            setHighscore(0);
        }
    }, []);

    useEffect(() => {
        const gameState = localStorage.getItem("isGame");

        if (gameState === "true") {
            setGame(true);
        }

        if (!isStart) {
            return;
        }

        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setGame(true);
            localStorage.setItem("isGame", "true");
        }
    }, [countdown, isStart, isGameOver]);
    return {
        isStart,
        setStart,
        highscore,
        setHighscore,
        isGame,
        setGame,
        isGameOver,
        setGameOver,
        score,
        setScore,
        countdown,
        setCountdown,
    };
};

export default useGame;
