import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import Chat from "@/components/Chat/Chat";
import Message from "@/components/Message/Message";
import Question from "@/components/Question/Question";
import Answer from "@/components/Answer/Answer";
import Feedback from "@/components/Feedback/Feedback";

const GameAISamplePage = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <Layout>
      <Chat title="Review test and provide feedback">
        <Question
          content="Review this test and provide feedback on how it can be improved or adjusted to better measure the student's knowledge and understanding of the subject being tested."
          time="Just now"
        />
        <Answer loading />
        <Answer time="Just now">
          <Feedback />
        </Answer>
      </Chat>
      <Message
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        // document="Student-test.pdf"
      />
    </Layout>
  );
};

export default GameAISamplePage;
