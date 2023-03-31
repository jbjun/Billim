import { useLoaderData } from "react-router";

const Home = () => {
  const { res }: any = useLoaderData();
  return <div>Home!!</div>;
};

export default Home;
