export const metadata = {
  title: "Contact",
  description: "contact",
  keywords: "a,b,c",
};

import { LoremIpsum } from "lorem-ipsum";
export default function Contact() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl ">contact</p>
      {lorem.generateParagraphs(17)}
    </div>
  );
}
