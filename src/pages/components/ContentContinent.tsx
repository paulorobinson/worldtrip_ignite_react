import { Flex, Grid, GridItem, Text, Tooltip } from '@chakra-ui/react';

import { AiOutlineInfoCircle } from 'react-icons/ai';

export const ContentContinent = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap="10"
      px={{ base: '10', lg: '32' }}
      py={{ base: '8', lg: '20' }}
    >
      <GridItem>
        <Text fontSize={{ base: '16', lg: '20' }}>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </GridItem>
      <GridItem>
        <Flex w="100%" h="100%" justify="space-between" align="center">
          <Flex flexDirection="column" justify="center" align="center">
            <Text
              fontSize={{ base: '30', lg: '40' }}
              fontWeight="semibold"
              color="yellow.900"
              lineHeight="1"
            >
              50
            </Text>
            <Text
              fontSize={{ base: '16', lg: '20' }}
              fontWeight="semibold"
              color="gray.900"
            >
              países
            </Text>
          </Flex>
          <Flex flexDirection="column" justify="center" align="center">
            <Text
              fontSize={{ base: '30', lg: '40' }}
              fontWeight="semibold"
              color="yellow.900"
              lineHeight="1"
            >
              60
            </Text>
            <Text
              fontSize={{ base: '16', lg: '20' }}
              fontWeight="semibold"
              color="gray.900"
            >
              línguas
            </Text>
          </Flex>
          <Flex flexDirection="column" justify="center" align="center">
            <Text
              fontSize={{ base: '30', lg: '40' }}
              fontWeight="semibold"
              color="yellow.900"
              lineHeight="1"
            >
              27
            </Text>
            <Flex align="center" justify="center">
              <Text
                fontSize={{ base: '16', lg: '20' }}
                fontWeight="semibold"
                color="gray.900"
                paddingRight="2"
              >
                cidades +100
              </Text>
              <Tooltip
                color="gray.900"
                bg="gray.300"
                label="As cidades +100 são as cidades que o continente possui que estão entre as 100 cidades mais visitadas do mundo."
              >
                <span>
                  <AiOutlineInfoCircle color="#999999" />
                </span>
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};
