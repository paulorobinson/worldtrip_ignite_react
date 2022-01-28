import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { BannerContinent } from '../components/BannerContinent';
import { Cities } from '../components/Cities';
import { ContentContinent } from '../components/ContentContinent';
import Header from '../components/Header';

const Continent = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <Flex w="100%" paddingBottom="10" direction="column">
        <Header />

        <BannerContinent />

        <ContentContinent />

        <Cities />
      </Flex>
    </>
  );
};

export default Continent;
