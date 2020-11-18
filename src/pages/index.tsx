export default function Index() {
  return <h1 className="text-blue-400">Oi</h1>;
}

/*
import SEO from "@/components/SEO";
import { GetServerSideProps } from "next";
import { Title } from "@/styles/pages/Home";

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }:HomeProps) {
  return <>
    <SEO title="Home"/>
    <div>
      <Title>Products</Title>
      <ul>
        {recommendedProducts?.map((product => <li key={product.id}>{product.title}</li> ))}
      </ul>
    </div>
  </>
}


export const getServerSideProps:GetServerSideProps<HomeProps> = async() => {
  //const response = await fetch('http://localhost:3333/recommended');
  //const recommendedProducts = await response.json();

  const recommendedProducts = [];
  return {
    props: {
      recommendedProducts
    }
  };
}
*/
