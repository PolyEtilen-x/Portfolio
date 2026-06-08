import React, { useState, useEffect } from 'react';

const Typewriter = ({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    let timer;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting state
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing state
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Handle word completion
    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400">
      {currentText}
      <span className="w-[3px] h-[1em] ml-1 bg-cyan-400 inline-block align-middle animate-pulse"></span>
    </span>
  );
};

export default Typewriter;
