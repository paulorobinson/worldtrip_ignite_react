import { GridItem, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CardProps {
  image: string;
  country: string;
  city: string;
  flag: string;
}

export const Card = ({ image, country, city, flag }: CardProps) => {
  return (
    <GridItem>
      <Flex direction="column" borderRadius="10" overflow="hidden">
        <Image
          src={image}
          alt={city}
          maxH={{ base: '150', md: '200' }}
          w="100%"
          objectFit="cover"
        />
        <Flex
          px="6"
          border="1px solid"
          borderTop="none"
          borderColor="yellow.900"
          borderBottomRadius="10"
        >
          <Flex direction="column" py={{ base: '4', md: '8' }} w="100%">
            <Heading fontSize={{ base: '20', lg: '28' }} fontWeight="semibold">
              {city}
            </Heading>
            <Text
              fontSize={{ base: '22', lg: '20' }}
              fontWeight="semibold"
              color="gray.700"
            >
              {country}
            </Text>
          </Flex>
          <Flex justify="flex-end" align="center" w="100%">
            <Image src={flag} alt="Londres" w="10" h="10" borderRadius="50%" />
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};
