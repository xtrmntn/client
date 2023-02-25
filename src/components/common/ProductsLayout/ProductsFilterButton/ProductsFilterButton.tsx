import { FC } from 'react';
import { MdOutlineFilterAlt } from 'react-icons/md';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import ProductsFilters from '../ProductsFilters';

const ProductsFilterButton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant="outline"
        aria-label="Открыть фильтры"
        color="gray.400"
        icon={<MdOutlineFilterAlt size="20px" />}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>Фильтры</DrawerHeader>

          <DrawerCloseButton />

          <DrawerBody>
            <ProductsFilters />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProductsFilterButton;
