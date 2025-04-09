import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuItem from './MenuItem';

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(4)
}));

interface MenuCategory {
  id: string;
  name: string;
  items: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
}

interface MenuSectionProps {
  categories: MenuCategory[];
  onAddItem?: (itemId: string) => void;
}

export default function MenuSection({ categories, onAddItem }: MenuSectionProps) {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {categories.map((category) => (
        <Box key={category.id}>
          <CategoryTitle variant="h5">
            {category.name}
          </CategoryTitle>
          {category.items.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              onAdd={() => onAddItem?.(item.id)}
            />
          ))}
        </Box>
      ))}
    </Container>
  );
} 