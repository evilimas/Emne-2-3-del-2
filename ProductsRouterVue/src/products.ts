export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'USB-C Hub',
    price: 499,
    description: 'En praktisk USB-C hub med HDMI, USB-A og SD-kortleser.',
  },
  {
    id: 2,
    name: 'Støydempende hodetelefoner',
    price: 1499,
    description:
      'Trådløse hodetelefoner med aktiv støydemping og 40 timers batteritid.',
  },
  {
    id: 3,
    name: 'Mekanisk tastatur',
    price: 899,
    description:
      'RGB-bakbelyst tastatur med blå brytere og solid aluminiumsramme.',
  },
];

export function getNextProductId(currentId: number): number | undefined {
  const currentIndex = products.findIndex(
    (product) => product.id === currentId
  );
  if (currentIndex !== -1 && currentIndex + 1 < products.length) {
    return products[currentIndex + 1].id;
  }
  return undefined;
}

export function goToNextProduct(currectId: number) {}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
