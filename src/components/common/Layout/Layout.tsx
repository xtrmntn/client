import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  description: string;
  keywords: string[];
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  title, description, keywords, children,
}) => (
  <>
    <Head>
      <title>
        {title ? `${title} – ${process.env.COMPANY_NAME}` : process.env.COMPANY_NAME}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
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
