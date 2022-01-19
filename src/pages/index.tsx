import { Flex, Heading, Image, Text } from '@chakra-ui/react';
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
          px={{ base: '10', md: '10', lg: '32' }}
        >
          <Flex
            align="center"
            w="100%"
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Heading
              color="gray.200"
              fontWeight="medium"
              fontSize={{ base: '26', md: '30', lg: '30', xl: '36' }}
              lineHeight="1.4"
              paddingBottom="4"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text color="gray.300" fontSize="18">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>

          <Flex
            align="center"
            w="100%"
            position="relative"
            display={{ sm: 'none', lg: 'flex' }}
          >
            <Image
              src="/images/Airplane.svg"
              alt="worldtrip"
              position="absolute"
              right={0}
              bottom={-6}
              h={{ lg: '240', xl: '300' }}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
