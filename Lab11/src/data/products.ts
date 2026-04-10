export const products = Array.from({ length: 500 }).map((_, index) => ({
  id: index.toString(),
  name: `Hyped Sneaker ${index}`,
  price: `$${100 + index}`,
  image: "https://picsum.photos/400/400",
  description:
    "Premium streetwear drop inspired by global sneaker culture.",
}));
