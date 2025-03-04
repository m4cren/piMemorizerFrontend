interface Props {
    highscore: number;
    setGame: React.Dispatch<React.SetStateAction<boolean>>;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameOver = ({ highscore, setGame, setGameOver }: Props) => {
    return (
        <div className="flex h-screen backdrop-blur-[7px] flex-col items-center justify-center gap-8">
            <h1 className=" text-white text-3xl ">Highscore: {highscore}</h1>
            <button
                className=" text-white text-2xl p-4 border-1 rounded-2xl hover:scale-110 cursor-crosshair font-mono w-fit"
                onClick={() => {
                    setGame(false);
                    setGameOver(false);
                }}
            >
                RESTART
            </button>
        </div>
    );
};

export default GameOver;
