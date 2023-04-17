import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Order from '@/components/pages/Order';

const OrderPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  number,
}) => (
  <Order number={number} />
);

export const getServerSideProps: GetServerSideProps<{
  number: string,
}> = async ({ params }) => ({
  props: {
    number: params?.number as string,
  },
});

export default OrderPage;
