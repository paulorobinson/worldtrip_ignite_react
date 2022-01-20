import { Flex, SimpleGrid } from '@chakra-ui/react';
import { TravelItem } from './TravelItem';

export const TravelTypes = () => {
  return (
    <Flex
      width="100%"
      px={{ base: '10', lg: '32' }}
      py={{ base: '8', lg: '10' }}
    >
      <SimpleGrid
        w="100%"
        display={{ base: 'grid', lg: 'flex' }}
        columns={2}
        justifyContent="space-between"
      >
        <TravelItem title="vida noturna" image="/images/Cocktail.svg" />
        <TravelItem title="praia" image="/images/Surf.svg" />
        <TravelItem title="moderno" image="/images/Building.svg" />
        <TravelItem title="clássico" image="/images/Museum.svg" />
        <TravelItem
          title="e mais..."
          image="/images/Earth.svg"
          gridColumnEnd="span 2"
        />
      </SimpleGrid>
    </Flex>
  );
};
