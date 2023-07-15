const products: { title: string; company: string }[] = [
  {
    title: "high-back bench",
    company: "ikea",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "ikea",
  },
];

const result: string[] = [
  "all",
  ...new Set(products.map((item) => item.company)),
];
console.log(result);
