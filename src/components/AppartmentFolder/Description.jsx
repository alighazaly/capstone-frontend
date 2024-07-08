import React, { useEffect, useState } from 'react';

const Description = (props) => {
  const [wordsPerLine, setWordsPerLine] = useState(getWordsPerLine());

  useEffect(() => {
    function handleResize() {
      setWordsPerLine(getWordsPerLine());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getWordsPerLine() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      return 22; // Adjust for large screens (lg)
    } else if (screenWidth >= 768) {
      return 15; // Adjust for medium screens (md)
    } else {
      return 10; // Adjust for small screens (sm)
    }
  }

  const limitWordsPerLine = (text) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length > wordsPerLine) {
        lines.push(currentLine.trim());
        currentLine = '';
      }
      currentLine += word + ' ';
    });

    if (currentLine.trim() !== '') {
      lines.push(currentLine.trim());
    }

    return lines.join('\n');
  };

  return (
    <div className='w-[80%] lg:ml-[9rem] md:ml-[2rem] sm:ml-[2rem] border-b border-gray-500 mb-5 pb-5'>
      <p className='text-2xl mb-3'>Description:</p>
      <p className='font-playfair'>{limitWordsPerLine(props.description)}</p>
    </div>
  );
};

export default Description;
