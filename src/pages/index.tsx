import { Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <Flex w="100%" h="100vh" direction="column">
        <Header />

        <Flex
          backgroundImage="/images/Background.png"
          w="100%"
          h="80"
          backgroundSize="cover"
        >
          <Flex align="center" w="50%" p="10">
            <Heading>
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
          </Flex>

          <Flex align="center" w="50%" p="10">
            <h1>Imagem</h1>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
