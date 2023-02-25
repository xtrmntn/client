import { FC } from 'react';
import {
  Divider, Grid, Heading, Stack, Text,
} from '@chakra-ui/react';
import { Property } from '@/services/products';

interface PropertiesProps {
  properties: Property[];
}

const Properties: FC<PropertiesProps> = ({ properties }) => (
  <Stack as="section" gap="20px">
    <Heading size="md">Характеристики</Heading>

    <Stack gap="5px">
      {properties.map((property) => (
        <Grid
          key={property.id}
          templateColumns="auto 1fr auto"
          alignItems="center"
          gap="20px"
        >
          <Text>{property.property.name}</Text>
          <Divider />
          <Text>{property.value}</Text>
        </Grid>
      ))}
    </Stack>
  </Stack>
);

export default Properties;
