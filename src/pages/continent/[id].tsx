import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { BannerContinent } from '../components/BannerContinent';
import { ContentContinent } from '../components/ContentContinent';
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

        <ContentContinent />
      </Flex>
    </>
  );
};

export default Continent;
