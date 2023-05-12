import Image from "next/image";
import boardImage from "public/boardImage.png";
import { useState } from "react";
import { z } from "zod";

const questionSchema = z.object({
  title: z.string(),
  question: z.string(),
  imageLink: z.optional(z.string()),
  answer: z.string(),
});

export default function Board() {
  const [questionInfo, setQuestionInfo] = useState<null | z.infer<
    typeof questionSchema
  >>(null);

  return (
    <>
      {questionInfo !== null && (
        <QuestionModal
          title="GEO 101"
          question="What country is this?"
          imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Italian_regions_provinces_white_no_labels.svg/1200px-Italian_regions_provinces_white_no_labels.svg.png"
          answer="Italy"
          onClose={() => {
            setQuestionInfo(null);
          }}
        />
      )}

      <div className="flex h-full w-full flex-grow flex-col items-center justify-center px-5 pt-3">
        <div className="text-3xl">Board</div>
        <div className="mt-10">
          <Image src={boardImage} height={900} width={1600} alt="board image" />
        </div>
        <div className="flex w-full items-center justify-start gap-2">
          <div className="h-5 w-5 rounded-full bg-red-600" />
          <p className="text-lg">Tim Ayam</p>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
        <div className="flex w-full items-center justify-start gap-2">
          <div className="h-5 w-5 rounded-full bg-blue-600" />
          <p className="text-lg">Tim Ikan</p>
        </div>
        <div className="flex w-full items-center justify-start gap-2">
          <div className="h-5 w-5 rounded-full bg-green-600" />
          <p className="text-lg">Tim Kangkung</p>
        </div>
        <button
          onClick={() => {
            setQuestionInfo({
              title: "GEO 101",
              question: "What country is this?",
              imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Italian_regions_provinces_white_no_labels.svg/1200px-Italian_regions_provinces_white_no_labels.svg.png",
              answer: "Italy",
            });
          }}
        >
          TEST OPEN QUESTION
        </button>
      </div>
    </>
  );
}

function QuestionModal({
  title,
  question,
  imageLink,
  answer,
  onClose,
}: {
  title: string;
  question: string;
  imageLink?: string;
  answer: string;
  onClose: () => void;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="absolute z-10 flex min-h-screen w-screen flex-col items-center gap-3 bg-blue-50 pt-3">
      <button
        className="absolute right-10 text-sm underline"
        onClick={() => {
          onClose();
        }}
      >
        X Close
      </button>
      <h1 className="text-4xl">{title}</h1>
      <p className="text-lg">{question}</p>
      {typeof imageLink !== "undefined" && (
        <Image
          src={imageLink}
          height={200}
          width={400}
          alt="some image"
          className="mt-3"
        />
      )}
      <button
        className="rounded-md bg-slate-700 px-2 py-1 text-lg text-white"
        onClick={() => {
          setShowAnswer((show) => !show);
        }}
      >
        {showAnswer ? "Hide" : "Show"} Answer
      </button>
      {showAnswer && <p className="text-2xl">{answer}</p>}
    </section>
  );
}