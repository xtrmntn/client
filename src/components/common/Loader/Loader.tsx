import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

const Loader: FC = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const onStart = () => setLoading(true);
    const onComplete = () => setLoading(false);

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onComplete);
    router.events.on('routeChangeError', onComplete);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onComplete);
      router.events.off('routeChangeError', onComplete);
    };
  }, [router.events]);

  if (!isLoading) return null;

  return (
    <Center
      position="fixed"
      width="100vw"
      height="100vh"
      zIndex={1000}
      backgroundColor="blackAlpha.100"
      backdropFilter="blur(2px)"
    >
      <Spinner color="white" />
    </Center>
  );
};

export default Loader;
