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
      <Chat title="Skyrim Chat">
        <Question
          content="In skyrim what is the fastest way to increase gold?"
          time="Just now"
        />
        <Answer loading />
        <Answer time="Just now">
          There are several ways to increase your gold in Skyrim quickly: Sell
          items: One of the easiest ways to make money quickly in Skyrim is by
          selling items. You can sell items you don't need to merchants, such as
          weapons, armor, potions, and ingredients. Invest in a store: You can
          invest in a store by talking to the owner and giving them some gold.
          Once you do this, the store will have more gold available to buy your
          items, allowing you to make more money.
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
