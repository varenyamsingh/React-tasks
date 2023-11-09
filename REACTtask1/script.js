import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ParagraphWordCounter = () => {
  const [paragraphText, setParagraphText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const text = event.target.value;
    setParagraphText(text);

    const words = text.split(' ');
    const filteredWords = words.filter((word) => word.trim().length > 0);
    setWordCount(filteredWords.length);
  };

  return (
    <div className="word-counter-container">
      <textarea
        className="paragraph-input"
        placeholder="Enter your paragraph here..."
        value={paragraphText}
        onChange={handleTextChange}
      />
      <div className="word-count-display">
        Word Count: {wordCount}
      </div>
    </div>
  );
};

ReactDOM.render(<ParagraphWordCounter />, document.getElementById('root'));