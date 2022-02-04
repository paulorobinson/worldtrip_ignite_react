import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { api } from '../../services/api';
import { BannerContinent } from '../components/BannerContinent';
import { Cities } from '../components/Cities';
import { ContentContinent } from '../components/ContentContinent';
import Header from '../components/Header';

type plus100 = {
  position: number;
  country: string;
  city: string;
  flag: string;
  image: string;
};

interface ContinentProps {
  continent: {
    id: number;
    continentName: string;
    subtitle: string;
    description: string;
    image: string;
    totalCountries: number;
    totalLanguages: number;
    plus100: plus100[];
  };
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <>
      <Head>
        <title>{continent.continentName} | worldtrip</title>
      </Head>
      <Flex w="100%" paddingBottom="10" direction="column">
        <Header />

        <BannerContinent
          continentName={continent.continentName}
          image={continent.image}
        />

        <ContentContinent
          description={continent.description}
          totalCountries={continent.totalCountries}
          totalLanguages={continent.totalLanguages}
          totalCitiesPlus100={continent.plus100.length}
        />

        <Cities cities={continent.plus100} />
      </Flex>
    </>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await api.get('/continents');

  const paths = continents.data.map((continent) => ({
    params: {
      id: continent.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const data = await api.get(`/continents/${id}`);

  const continent = data.data;

  return {
    props: { continent },
    revalidate: 60, // 1 min
  };
};
