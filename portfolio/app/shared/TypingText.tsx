import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const TypingEffect = () => {
  const texts = ["Frontend Developer", "Backend Developer", "AWS DevOps", "DevOps"];

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0); 
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const currentText = texts[textIndex];

    if (!isDeleting && letterIndex < currentText.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 150); 
    }

    if (isDeleting && letterIndex > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setLetterIndex(letterIndex - 1);
      }, 100); 
    }

    if (letterIndex === currentText.length && !isDeleting) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); 
    }

    if (letterIndex === 0 && isDeleting) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); 
      }, 1000); 
    }

    return () => clearTimeout(timeoutId);
  }, [letterIndex, isDeleting, textIndex]);

  return <Text ms={2} color={"var(--color-cyan)"}>{ displayedText }</Text>;
};

export default TypingEffect;
