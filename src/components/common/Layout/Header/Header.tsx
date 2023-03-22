import Image from 'next/image';
import { FC } from 'react';
import { MdPhone } from 'react-icons/md';
import {
  Box, Container, HStack, Text,
} from '@chakra-ui/react';
import { formatPhoneNumber } from '@/utils/format';
import { company, phone } from '@/core/constants';
import logo from '@/assets/img/logo.png';
import Link from '@/components/common/Link';
import Navigation from './Navigation';
import Actions from './Actions';
import Search from './Search';
import styles from './Header.module.scss';

const Header: FC = () => (
  <Box as="header" marginBottom="40px">
    <Container>
      <HStack className={styles.stack}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt={company}
            width={200}
            height={50}
            priority
          />
        </Link>

        <Search />

        <Link href={formatPhoneNumber(phone)} flexShrink="0">
          <HStack color="secondary">
            <MdPhone />
            <Text>{phone}</Text>
          </HStack>
        </Link>

        <Actions />
      </HStack>
    </Container>

    <Navigation />
  </Box>
);

export default Header;
