import { Flex, Heading } from '@chakra-ui/react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { Banner } from './components/Banner';
import { Divider } from './components/Divider';
import Header from './components/Header';
import { Carousel } from './components/Carousel';
import { TravelTypes } from './components/TravelTypes';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <Flex w="100%" h="100vh" direction="column">
        <Header />

        <Banner />

        <TravelTypes />

        <Divider />

        <Flex w="100%" justify="center">
          <Heading
            fontSize={{ base: '26', md: '30', lg: '30', xl: '36' }}
            py="10"
            textAlign="center"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>
        </Flex>

        <Flex
          w="100%"
          px={{ base: '0', lg: '32' }}
          paddingBottom={{ base: '8', lg: '10' }}
        >
          <Carousel />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
