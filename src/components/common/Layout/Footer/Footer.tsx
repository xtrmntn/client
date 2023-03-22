import { FC, Fragment, ReactNode } from 'react';
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md';
import {
  Box, Container, Divider, HStack, SimpleGrid, Stack, Text, useMediaQuery,
} from '@chakra-ui/react';
import { formatPhoneNumber } from '@/utils/format';
import {
  email, inn, ogrn, phone,
} from '@/core/constants';
import Link from '@/components/common/Link';

interface MenuItem {
  text: string;
  link?: string;
  icon?: ReactNode;
}

const Footer: FC = () => {
  const [isTablet] = useMediaQuery('(max-width: 992px)');

  const lists: MenuItem[][] = [
    [
      { text: 'ИП Кравец В. Л.' },
      { text: `ИНН ${inn}` },
      { text: `ОГРН ${ogrn}` },
    ],
    [
      { link: '/payment', text: 'Оплата и доставка' },
      { link: '/return', text: 'Возврат товара' },
    ],
    [
      { link: '/privacy', text: 'Политика конфиденциальности' },
      { link: '/offer', text: 'Публичная оферта' },
    ],
    [
      { link: formatPhoneNumber(phone), text: phone, icon: <MdPhone /> },
      { link: `mailto:${email}`, text: email, icon: <MdEmail /> },
      { text: 'пр-д Автоматики, д. 12/1, кв. 25', icon: <MdLocationPin /> },
    ],
  ];

  return (
    <Box
      as="footer"
      color="white"
      backgroundColor="primary"
      padding="30px 0"
      marginTop="40px"
    >
      <Container>
        <SimpleGrid columns={{ md: 1, lg: 4 }}>
          {lists.map((list, index) => (
            <Fragment key={Math.random()}>
              <Stack
                as="ul"
                alignItems={{
                  base: 'center',
                  lg: index === lists.length - 1 ? 'flex-end' : 'flex-start',
                }}
              >
                {list.map((item) => (
                  <HStack key={item.text} as="li">
                    {item.link ? (
                      <Link href={item.link} color="white">
                        <HStack>
                          {item.icon}
                          <Text>{item.text}</Text>
                        </HStack>
                      </Link>
                    ) : (
                      <>
                        {item.icon}
                        <Text>{item.text}</Text>
                      </>
                    )}
                  </HStack>
                ))}
              </Stack>

              {isTablet && (
                <Divider
                  maxWidth="300px"
                  margin="10px auto"
                  _last={{ margin: '10px auto 0' }}
                />
              )}
            </Fragment>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
