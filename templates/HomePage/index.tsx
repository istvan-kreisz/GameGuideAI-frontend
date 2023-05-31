import Layout from "@/components/Layout/Layout";
import Main from "./Main/Main";

const HomePage = () => {
  return (
    <Layout hideRightSidebar={true}>
      <Main />
    </Layout>
  );
};

export default HomePage;
