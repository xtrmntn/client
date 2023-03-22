import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { company } from '@/core/constants';
import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  title, description, keywords = [], children,
}) => (
  <>
    <Head>
      <title>{title ? `${title} – ${company}` : company}</title>
      <meta name="description" content={`${description ? `${description} ` : ''}Компания «${company}» — это молодой интернет-магазин, в котором есть все для дачи, дома, сада и огорода. Основной задачей нашей компании является забота о покупателях. Мы стараемся максимально быстро реагировать на запросы и пожелания наших клиентов. Мы всегда открыты для сотрудничества и продуктивных предложений. В нашем каталоге будет постоянно обновляться ассортимент. Компания «${company}» напрямую работает с крупнейшими поставщиками и официальными дистрибьюторами, поэтому мы гарантируем Вам подлинность и высокое качество представленных товаров.`} />
      <meta name="keywords" content={[company, title, ...keywords, 'товары для дачи', 'товары для сада', 'товары для огорода', 'средства от насекомых', 'средства от грызунов', 'средства от мышей', 'средства от тараканов', 'средства защиты растений', 'средства от мух', 'средства для септиков', 'удобрения', 'дезинсекция', 'дезинфекция', 'клопы', 'тараканы'].join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <div className={styles.layout}>
      <Header />

      <Box as="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </div>
  </>
);

export default Layout;
