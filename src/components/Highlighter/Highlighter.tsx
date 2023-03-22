type HighlighterProps = {
  wordList: string[];
  text: string;
};

export default function Highlighter({ text, wordList }: HighlighterProps) {
  // const regex = new RegExp(words.join("|"), "gi");
  const words = text.split(" ");
  return (
    <p>
      {words.map((word, i) =>
        wordList.includes(word) ? (
          <span key={i} style={{ color: "red" }}>
            {`${word} `}
          </span>
        ) : (
          <span key={i}>{`${word} `}</span>
        )
      )}
    </p>
  );
}
