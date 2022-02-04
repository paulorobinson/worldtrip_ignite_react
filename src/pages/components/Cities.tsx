import { Flex, Grid, Heading } from '@chakra-ui/react';
import { Card } from './Card';

type plus100 = {
  country: string;
  city: string;
  flag: string;
  image: string;
};

interface CitiesProps {
  cities: plus100[];
}

export const Cities = ({ cities }: CitiesProps) => {
  return (
    <Flex direction="column" px={{ base: '10', lg: '32' }}>
      <Heading
        fontSize={{ base: '28', lg: '36' }}
        paddingBottom={{ base: '4', md: '8' }}
        fontWeight="medium"
      >
        Cidades +100
      </Heading>
      <Grid
        gridTemplateColumns={{
          base: 'repeat(1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap="10"
        gridAutoRows="1fr"
      >
        {cities.map(({ city, country, flag, image }, index) => (
          <Card
            key={index}
            city={city}
            country={country}
            image={image}
            flag={flag}
          />
        ))}
      </Grid>
    </Flex>
  );
};
