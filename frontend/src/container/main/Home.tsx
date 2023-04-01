import axios from "axios";
import { useLoaderData } from "react-router";

// TODO 일단 대충..
export const loader = async () => {
  const res = await axios.get("http://localhost:3000/products");
  return { products: res.data };
};

const Home = () => {
  const { products }: any = useLoaderData();
  console.log(products);
  return <div>Home!!</div>;
};

export default Home;
