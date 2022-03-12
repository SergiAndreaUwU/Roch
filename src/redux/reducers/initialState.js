// eslint-disable-next-line import/no-anonymous-default-export
export default {
  categories: [
    {
      id: 0,
      nombre: "asd",
      active:true,
      products: [
        { id: 10, nombre: "product1", price: 6.00,active:true },
        { id: 110, nombre: "product2", price: 6.99,active:true },
        { id: 120, nombre: "product3", price: 7.99,active:true },
        { id: 130, nombre: "product4", price: 8.99,active:true },
        { id: 140, nombre: "product5", price: 9.99,active:true },
      ],
    },
    {
      id: 1,
      nombre: "asd2",
      active:true,
      products: [
        { id: 112, nombre: "product2", price: 5.99,active:true },
        { id: 111, nombre: "product3", price: 10.99,active:true },
      ],
    },
    {
      id: 2,
      nombre: "asd3",
      active:true,
      products: [{ id: 12, nombre: "product3", price: 12.99,active:true }],
    },
    {
      id: 3,
      nombre: "asd4",
      active:false,
      products: [{ id: 13, nombre: "product10", price: 15.99,active:true }],
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
