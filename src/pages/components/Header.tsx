import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex w="100%" direction="column">
      <Flex justify="center" align="center" p="6">
        <Link href="/" passHref>
          <a>
            <Image src="/images/Logo.svg" alt="worldtrip" h="10" />
          </a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
