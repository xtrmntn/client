import { FC } from 'react';
import { Container, HStack, Text } from '@chakra-ui/react';
import Link from '@/components/common/Link';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const items = [
    { link: '/', text: 'Главная' },
    { link: '/catalog', text: 'Каталог' },
    { link: '/payment', text: 'Оплата и доставка' },
    { link: '/contacts', text: 'Контакты' },
  ];

  return (
    <HStack
      backgroundColor="primary"
      as="nav"
    >
      <Container
        className={styles.container}
        justifyContent={{ base: 'flex-start', sm: 'center' }}
        gap={{ base: '20px', sm: '40px', md: '60px' }}
      >
        {items.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            color="white"
          >
            <Text color="white" whiteSpace="nowrap">
              {item.text}
            </Text>
          </Link>
        ))}
      </Container>
    </HStack>
  );
};

export default Navigation;
