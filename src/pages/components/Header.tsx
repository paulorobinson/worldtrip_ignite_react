import { Flex, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex w="100%" direction="column">
      <Flex justify="center" align="center" p="6">
        <Image src="/images/Logo.svg" alt="worldtrip" h="10" />
      </Flex>
    </Flex>
  );
};

export default Header;
