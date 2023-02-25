export const formatPhoneNumber = (phone: string) => (
  `tel:${phone.replace(/[\s()-]/g, '')}`
);

export const formatPrice = (price: number) => (
  price.toLocaleString('ru', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
  })
);

export const formatEnding = (count: number, forms: string[]) => {
  const lastNumber = count % 10;
  const [first, second, third] = forms;
  let currentForm: string | null = null;

  if (lastNumber === 1) {
    currentForm = first;
  } else if (lastNumber > 1 && lastNumber < 5) {
    currentForm = second;
  } else {
    currentForm = third;
  }

  return `${count} ${currentForm}`;
};
