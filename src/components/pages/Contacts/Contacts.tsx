/* eslint-disable react/jsx-one-expression-per-line */
import { FC } from 'react';
import {
  Container, Stack, Heading,
} from '@chakra-ui/react';
import { formatPhoneNumber } from '@/utils/format';
import {
  email, inn, ogrn, phone,
} from '@/core/constants';
import Layout from '@/components/common/Layout';
import Link from '@/components/common/Link';

const Contacts: FC = () => (
  <Layout title="Контакты">
    <Container>
      <Stack spacing="10px">
        <Heading as="h1" size="md">Контакты</Heading>
        <p>Электронная почта: <Link href={`mailto:${email}`}>{email}</Link></p>
        <p>Номер телефона: <Link href={formatPhoneNumber(phone)}>{phone}</Link></p>
        <p>ИП Кравец В. Л.</p>
        <p>ИНН {inn}</p>
        <p>ОГРН {ogrn}</p>
        <p>Прием заказов и консультации по телефону с 09:00 до 18:00</p>
        <p>Прием заказов через сайт круглосуточно</p>
        <p>Доставка с 10:00 до 18:00 в рабочие дни</p>
        <p>Доставка в вечернее время и выходные дни оговаривается отдельно</p>
      </Stack>
    </Container>
  </Layout>
);

export default Contacts;
