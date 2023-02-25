import { FC, useCallback, useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { HStack, Text } from '@chakra-ui/react';
import { Order } from '@/core/types';

interface ProductsSortItemProps {
  text: string;
  active?: boolean;
  defaultValue?: Order;
  onClick: (order: Order) => void;
}

const activeStyles = {
  color: 'primary',
  fontWeight: 700,
};

const ProductsSortItem: FC<ProductsSortItemProps> = ({
  text, active, defaultValue = 'desc', onClick,
}) => {
  const [order, setOrder] = useState<Order>(defaultValue);

  const handleClick = useCallback(() => {
    const value = order === 'desc' ? 'asc' : 'desc';
    onClick(value);
    setOrder(value);
  }, [order, onClick]);

  return (
    <HStack
      as="button"
      onClick={handleClick}
      {...active && activeStyles}
    >
      <Text>{text}</Text>
      {order === 'desc' ? <MdExpandMore size="20px" /> : <MdExpandLess size="20px" />}
    </HStack>
  );
};

export default ProductsSortItem;
