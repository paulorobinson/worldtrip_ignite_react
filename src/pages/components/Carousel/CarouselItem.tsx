import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

interface CarouselItemProps {
  image: string;
  title: string;
  description: string;
}

export const CarouselItem = ({
  image,
  title,
  description,
}: CarouselItemProps) => {
  return (
    <Link href="/" passHref>
      <Flex
        as="a"
        w="100%"
        minH={{ base: '400', lg: '500', xl: '600' }}
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
            fontSize={{ base: '30', md: '32', lg: '36', xl: '40' }}
            fontWeight="bold"
            color="gray.200"
            marginBottom="4"
          >
            {title}
          </Heading>
          <Heading
            fontSize={{ base: '15', md: '16', lg: '18', xl: '20' }}
            fontWeight="bold"
            color="gray.300"
          >
            {description}
          </Heading>
        </Flex>
      </Flex>
    </Link>
  );
};
