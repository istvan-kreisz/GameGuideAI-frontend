import Layout from "@/components/Layout";
import Main from "./Main";

const HomePage = () => {
  return (
    <Layout hideRightSidebar={true} smallSidebar={true}>
      <Main />
    </Layout>
  );
};

export default HomePage;
