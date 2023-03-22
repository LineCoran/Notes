type HighlighterProps = {
  wordList: string[];
  text: string;
};

export default function Highlighter({ text, wordList }: HighlighterProps) {
  const words = text.split(" ");
  return (
    <p>
      {words.map((word, i) =>
        wordList.includes(word) ? (
          <span key={i} style={{ backgroundColor: "rgba(255, 255, 0, 0.422)" }}>
            {`${word} `}
          </span>
        ) : (
          <span key={i}>{`${word} `}</span>
        )
      )}
    </p>
  );
}
