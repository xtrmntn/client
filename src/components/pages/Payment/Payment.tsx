/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { FC } from 'react';
import {
  Container, Stack, Heading,
} from '@chakra-ui/react';
import { formatPrice } from '@/utils/format';
import Layout from '@/components/common/Layout';
import Link from '@/components/common/Link';

const Payment: FC = () => (
  <Layout title="Оплата и доставка">
    <Container>
      <Stack spacing="30px">
        <Stack spacing="10px">
          <Heading as="h1" size="md">Оплата и доставка</Heading>
          <p>Доставка осуществляется курьером в пределах г. Оренбрга</p>
          <p>Стоимость {formatPrice(300)}</p>
          <p> Минимальная сумма заказа {formatPrice(1000)}</p>
          <p>Доставка осуществляется на следующий день после заказа при поступлении заявки с 09:00 до 18:00</p>
          <p>При наличии возможности доставка может быть организована в тот же день, если заказ сделан до 10:00</p>
          <p>Доставка курьерской службой производится с понедельника по пятницу с 10:00 до 19:00</p>
          <p>Доставка в вечернее время и выходные дни оговаривается отдельно</p>
          <p>После того, как вы сделали заказ с Вами свяжется менеджер</p>
          <p>Если у вас остались вопросы по доставке, обращайтесь по электронной почте или телефонам, указанным на странице <Link href="/contacts">контакты</Link></p>
        </Stack>

        <Stack spacing="10px">
          <Heading as="h2" size="md">Самовывоз</Heading>
          <p>Товар можно забрать из пункта выдачи заказов</p>
          <p>г. Оренбург, пр. Гагарина, д. 27/5 (ЦВЗ Восток)</p>
          <p>г. Оренбург, ул. Терешковой, д. 251 (Озон)</p>
        </Stack>

        <Stack spacing="10px">
          <Heading as="h2" size="md">Доставка по России</Heading>
          <p>Доставка по России осуществляется курьерской службой доставки СДЭК до пунктов выдачи в Вашем городе или по указанному адресу</p>
          <p>Возможен вариант доставки любой другой транспорной компанией (Почта России, Деловые линии, ПЭК и т.д.) — оговаривается отдельно</p>
          <p>Отправка оплачивается отдельно в Вашем городе при получении товара</p>
          <p>Расчет стоимости доставки производится по тарифам транспортной компании</p>
          <p>Менеджер свяжется с Вами для уточнения деталей отправки (по электронной почте, Whatsapp или телефону)</p>
          <p>Полезные ссылки: <Link href="https://www.cdek.ru/ru" isExternal>СДЭК</Link>, <Link href="https://www.cdek.ru/ru/tracking" isExternal>Отслеживание заказа</Link>, <Link href="https://www.cdek.ru/ru/calculate" isExternal>Рассчитать стоимость доставки</Link>, <Link href="https://www.cdek.ru/ru/offices" isExternal>Пункты выдачи</Link></p>
        </Stack>
      </Stack>
    </Container>
  </Layout>
);

export default Payment;
