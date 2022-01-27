import { Flex, Heading, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { BannerContinent } from '../components/BannerContinent';
import Header from '../components/Header';

const Continent = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <Flex w="100%" h="100vh" direction="column">
        <Header />

        <BannerContinent />
      </Flex>
    </>
  );
};

export default Continent;
