import { Box, BoxProps, Image, Text } from '@chakra-ui/react';

interface TravelItemProps extends BoxProps {
  image: string;
  title: string;
}

export const TravelItem = ({ title, image, ...rest }: TravelItemProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: 'row', lg: 'column' }}
      {...rest}
    >
      <Image src={image} alt={title} display={{ base: 'none', lg: 'flex' }} />
      <Box
        w="10px"
        h="10px"
        bg="yellow.900"
        borderRadius="50%"
        m="4"
        display={{ base: 'flex', lg: 'none' }}
      />
      <Text
        fontWeight={{ base: 'medium', lg: 'semibold' }}
        py="6"
        fontSize="22"
      >
        {title}
      </Text>
    </Box>
  );
};
