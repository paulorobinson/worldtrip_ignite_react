import { Flex, Heading } from '@chakra-ui/react';

export const BannerContinent = () => {
  return (
    <Flex position="relative">
      <Flex
        w="100%"
        minH={{ base: '200', lg: '300', xl: '400' }}
        flexDirection="column"
        justify="center"
        align="center"
        bgImage="../../images/continents/europe.jpg"
        bgSize="cover"
        bgPos="center"
        zIndex="0"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '100%',
          background: 'rgba(0,0,0,0.6)',
        }}
      >
        <Flex
          zIndex="1"
          display="flex"
          flexDirection="column"
          justify="center"
          align="center"
        >
          <Heading
            fontSize={{ base: '30', lg: '40', xl: '50' }}
            fontWeight="semibold"
            color="gray.200"
          >
            Europa
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
