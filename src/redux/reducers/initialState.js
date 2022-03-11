// eslint-disable-next-line import/no-anonymous-default-export
export default {
  categories: [
    {
      id: 0,
      nombre: "asd",
      products: [
        { id: 10, nombre: "product1", price: 5.99 },
        { id: 110, nombre: "product2", price: 6.99 },
        { id: 120, nombre: "product3", price: 7.99 },
        { id: 130, nombre: "product4", price: 8.99 },
        { id: 140, nombre: "product5", price: 9.99 },
      ],
    },
    {
      id: 1,
      nombre: "asd2",
      products: [
        { id: 112, nombre: "product2", price: 5.99 },
        { id: 111, nombre: "product3", price: 10.99 },
      ],
    },
    {
      id: 2,
      nombre: "asd3",
      products: [{ id: 12, nombre: "product3", price: 12.99 }],
    },
    {
      id: 3,
      nombre: "asd4",
      products: [{ id: 13, nombre: "product10", price: 15.99 }],
    },
  ],
  selectedMenuCategory: { id: 0, hasUserSelected: false },
  selectedCatalogueCategory: { id: 0, hasUserSelected: false },
  shopList: [
    { id: 13, nombre: "product10", price: 15.99, quantity: 2 },
    { id: 10, nombre: "product1", price: 5.99, quantity: 5 },
  ],
  alreadyPayed: false,
  paymentInfo: {
    totalPrice: 0.0,
    payedWith: 0.0,
  },
  noTicket:1
};
