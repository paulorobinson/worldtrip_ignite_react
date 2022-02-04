import { Flex, Heading } from '@chakra-ui/react';

interface BannerContinentProps {
  continentName: string;
  image: string;
}

export const BannerContinent = ({ continentName, image }) => {
  return (
    <Flex position="relative">
      <Flex
        w="100%"
        minH={{ base: '200', lg: '300', xl: '400' }}
        flexDirection="column"
        justify="center"
        align="center"
        bgImage={image}
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
            {continentName}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
