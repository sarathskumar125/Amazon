import bcrypt from "bcrypt";

const data = {
  users: [
    {
      name: "Sarath S",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    {
      name: "Steve Jobs",
      email: "user@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: "1",
      name: "Nike slim shirt",
      slug: "nike-slim-shirt",
      category: "shirts",
      image: "/images/p1.jpg", // 679 x 829
      price: 120,
      countInStock: 6,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: "2",
      name: "Adidas fit shirt",
      slug: "adidas-fit-shirt",
      category: "shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      // _id: "3",
      name: "Nike slim pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      // _id: "4",
      name: "Adidas fit pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;
