import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdPhone } from 'react-icons/md';
import {
  Box, Container, HStack, Text,
} from '@chakra-ui/react';
import { formatPhoneNumber } from '@/utils/format';
import logo from '@/assets/img/logo.png';
import Navigation from './Navigation';
import Actions from './Actions';
import Search from './Search';
import styles from './Header.module.scss';

const Header: FC = () => {
  const phone = '+7 (999) 123-45-67';

  return (
    <Box as="header" marginBottom="40px">
      <Container>
        <HStack className={styles.stack}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              alt={process.env.COMPANY_NAME as string}
              width={200}
              height={50}
              priority
            />
          </Link>

          <Search />

          <Box
            as="a"
            href={formatPhoneNumber(phone)}
            flexShrink="0"
          >
            <HStack color="secondary">
              <MdPhone />
              <Text>{phone}</Text>
            </HStack>
          </Box>

          <Actions />
        </HStack>
      </Container>

      <Navigation />
    </Box>
  );
};

export default Header;
