import { Box, Flex } from '@chakra-ui/react';

export const Divider = () => {
  return (
    <Flex w="100%" justify="center">
      <Box
        w={{ base: '24', lg: '30' }}
        h={{ base: '1px', lg: '2px' }}
        bg="gray.900"
      />
    </Flex>
  );
};
