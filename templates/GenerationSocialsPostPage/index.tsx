import { useState } from "react";
import Layout from "@/components/Layout/Burger/Burger";
import Chat from "@/components/Chat/Chat";
import Message from "@/components/Message/Message";
import Question from "@/components/Question/Question";
import Answer from "@/components/Answer/Answer";
import SocialsPost from "@/components/SocialsPost/SocialsPost";
import SchedulePost from "@/components/SchedulePost/SchedulePost";
import ScheduleResult from "@/components/ScheduleResult/ScheduleResult";

import { socailsPost } from "@/mocks/socialsPost";

const GenerationSocialsPostPage = () => {
  const [message, setMessage] = useState<string>("");

  return (
    <Layout>
      <Chat title="Promotional content">
        <Question
          content="Create promotional content for this post to share on social media with the link: https://dribbble.com/shots/17687623-Hiring-Platform-Mobile-App with link and hashtag for Twitter, Facebook"
          time="Just now"
        />
        <Answer loading />
        <Answer time="Just now">
          <SocialsPost items={socailsPost} />
        </Answer>
        <Answer time="Just now">
          <SchedulePost />
        </Answer>
        <Answer time="Just now">
          <ScheduleResult />
        </Answer>
      </Chat>
      <Message
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
      />
    </Layout>
  );
};

export default GenerationSocialsPostPage;
