import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type LinkProps = ChakraLinkProps;

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, ...props }) => (
  <ChakraLink
    as={NextLink}
    color="secondary"
    {...props}
  >
    {children}
  </ChakraLink>
);

export default Link;
