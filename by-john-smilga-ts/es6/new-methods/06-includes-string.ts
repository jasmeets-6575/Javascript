const products: { title: string }[] = [
  { title: "Modern Poster" },
  { title: "Bar Stool" },
  { title: "Armchair" },
  { title: "Leather Chair" },
];

const text: string = "a";

const filteredProducts: { title: string }[] = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);

console.log(filteredProducts);
