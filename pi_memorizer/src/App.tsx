import Start from "./components/Start";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import useGame from "./hooks/useGame";

function App() {
    const {
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
    } = useGame();
    return (
        <>
            {isGame ? (
                isGameOver ? (
                    <GameOver
                        highscore={highscore}
                        setGame={setGame}
                        setGameOver={setGameOver}
                    />
                ) : (
                    <Game
                        isGameOver={isGameOver}
                        setGameOver={setGameOver}
                        score={score}
                        setScore={setScore}
                        highscore={highscore}
                        setHighscore={setHighscore}
                    />
                )
            ) : (
                <Start
                    isStart={isStart}
                    setStart={setStart}
                    countdown={countdown}
                />
            )}
        </>
    );
}

export default App;
