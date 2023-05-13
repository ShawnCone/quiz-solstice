import Image from "next/image";
import boardImage from "public/boardImage.png";
import { useRef, useState } from "react";
import { z } from "zod";
import { questionBank, questionSchema } from "~/questions";
import DraggableDiv from "./DraggableDiv";

const teamEnumSchema = z.enum(["RED", "BLUE", "GREEN"]);

export default function Board() {
  const [questionInfo, setQuestionInfo] = useState<null | z.infer<
    typeof questionSchema
  >>(null);

  const usedQuestionIdRef = useRef<Set<number>>(new Set());
  const [currentTeam, setCurrentTeam] =
    useState<z.infer<typeof teamEnumSchema>>("RED");

  // Get question info with side effects
  function getQuestionInfo(title: string) {
    const candidateQuestions = questionBank.filter(
      (cQuestionInfo) =>
        cQuestionInfo.title === title &&
        !usedQuestionIdRef.current.has(cQuestionInfo.id)
    );

    const chosenQuestionInfo =
      candidateQuestions[Math.floor(Math.random() * candidateQuestions.length)];

    const parsedCheck = questionSchema.safeParse(chosenQuestionInfo);
    if (!parsedCheck.success) {
      // Indicate in question modal
      setQuestionInfo({
        id: -1,
        title: title,
        answer: "Pertanyaan habis, pilih yang lain brooo",
        question: "Yah nyangkut deh",
      });
      return;
    }

    setQuestionInfo(parsedCheck.data);
    usedQuestionIdRef.current.add(parsedCheck.data.id);
  }

  return (
    <>
      {questionInfo !== null && (
        <QuestionModal
          title={questionInfo.title}
          question={questionInfo.question}
          imageLink={questionInfo.imageLink}
          answer={questionInfo.answer}
          onClose={() => {
            setQuestionInfo(null);
          }}
        />
      )}

      <div className="flex h-full w-full flex-grow flex-col items-center justify-center px-5 pt-3">
        <div className="text-3xl">Board</div>
        <div className="relative mt-10">
          <button
            className="relative left-8 top-[269px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("GEO 101");
            }}
          />
          <button
            className="relative left-[166px] top-[269px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("MATH 101");
            }}
          />

          <button
            className="relative left-[300px] top-[180px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("PE 201");
            }}
          />
          <button
            className="relative left-[280px] top-[330px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("CHEM 201");
            }}
          />
          <button
            className="relative left-[575px] top-[330px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("SEX 201");
            }}
          />
          <button
            className="relative left-[773px] top-[335px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("???");
            }}
          />
          <button
            className="relative left-[755px] top-[500px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("STAT 201");
            }}
          />
          <button
            className="relative left-[980px] top-[500px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("BIO 301");
            }}
          />
          <button
            className="relative left-[1230px] top-[251px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("GEN 301");
            }}
          />
          <button
            className="relative left-[1370px] top-[251px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("ART 401");
            }}
          />
          <button
            className="relative left-[295px] top-[180px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("ENG 201");
            }}
          />

          <button
            className="relative left-[435px] top-[180px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("HIST 201");
            }}
          />
          <button
            className="relative left-[625px] top-[65px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("HIST 201");
            }}
          />
          <button
            className="relative left-[760px] top-[65px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("ECON 201");
            }}
          />
          <button
            className="relative left-[740px] top-[180px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("GEO 301");
            }}
          />
          <button
            className="relative left-[873px] top-[180px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("PHYS 301");
            }}
          />
          <button
            className="relative left-[860px] top-[55px] h-5 w-5 rounded"
            onClick={() => {
              getQuestionInfo("CS 301");
            }}
          />

          <Image
            src={boardImage}
            height={900}
            width={1600}
            alt="board image"
            className="pointer-events-none select-none"
            draggable={false}
          />
        </div>
        <div className=" flex w-full select-none flex-col">
          <div
            className="flex w-full cursor-pointer items-center justify-start gap-2"
            onClick={() => {
              setCurrentTeam("RED");
            }}
          >
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-red-600"
              onClick={() => {
                setCurrentTeam("BLUE");
              }}
            />
            <p className="text-lg">Tim Ayam</p>
            {currentTeam === "RED" && (
              <div className="h-2 w-2 rounded-full bg-black" />
            )}
          </div>
          <div className="flex w-full items-center justify-start gap-2">
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-blue-600"
              onClick={() => {
                setCurrentTeam("BLUE");
              }}
            />
            <p className="text-lg">Tim Ikan</p>
            {currentTeam === "BLUE" && (
              <div className="h-2 w-2 rounded-full bg-black" />
            )}
          </div>
          <div className="flex w-full items-center justify-start gap-2">
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-green-600"
              onClick={() => {
                setCurrentTeam("GREEN");
              }}
            />

            <p className="text-lg">Tim Kangkung</p>
            {currentTeam === "GREEN" && (
              <div className="h-2 w-2 rounded-full bg-black" />
            )}
          </div>
        </div>
        <DraggableDiv color="RED" disabled={currentTeam !== "RED"} />
        <DraggableDiv color="BLUE" disabled={currentTeam !== "BLUE"} />
        <DraggableDiv color="GREEN" disabled={currentTeam !== "GREEN"} />
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
      <div className="-mt-3 flex h-full flex-grow flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-2xl">{question}</p>
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
        {showAnswer && <p className="text-2xl font-semibold">{answer}</p>}
      </div>
    </section>
  );
}
