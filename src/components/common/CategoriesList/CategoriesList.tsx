import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import {
  AspectRatio,
  Card,
  CardBody,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Category } from '@/services/categories';

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: FC<CategoriesListProps> = ({ categories }) => (
  <SimpleGrid
    columns={{ sm: 2, md: 3, lg: 4 }}
    gap="20px"
  >
    {categories.map((category) => (
      <Link
        key={category.id}
        href={`/catalog/${category.slug}`}
      >
        <Card overflow="hidden">
          <CardBody>
            <Stack textAlign="center" gap="10px">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={category.image ? `${process.env.UPLOADS_URL}/${category.image}` : '/placeholder.svg'}
                  alt={category.name}
                  priority
                  fill
                />
              </AspectRatio>

              <Text as="h3">{category.name}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    ))}
  </SimpleGrid>
);

export default CategoriesList;
