import { NextPage } from "next";
import Head from "next/head";
import Board from "~/components/Board";

const Play: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>Quiz Solstice</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Board />
    </>
  );
};

export default Play;
