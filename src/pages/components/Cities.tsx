import { Flex, Grid, Heading } from '@chakra-ui/react';
import { Card } from './Card';

export const Cities = () => {
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
      >
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
        <Card
          city="Londres"
          country="Reino Unido"
          image="../images/continents/europe.jpg"
          flag="../images/continents/europe.jpg"
        />
      </Grid>
    </Flex>
  );
};
