// eslint-disable-next-line import/no-anonymous-default-export
export default {
  categories: [
    {
      id: 0,
      nombre: "asd",
      activo:true,
      productos: [
        { id: 10, nombre: "product1", precio: 6.00,activo:true },
        { id: 110, nombre: "product2", precio: 6.99,activo:true },
        { id: 120, nombre: "product3", precio: 7.99,activo:true },
        { id: 130, nombre: "product4", precio: 8.99,activo:true },
        { id: 140, nombre: "product5", precio: 9.99,activo:true },
      ],
    },
    {
      id: 1,
      nombre: "asd2",
      activo:true,
      productos: [
        { id: 112, nombre: "product2", precio: 5.99,activo:true },
        { id: 111, nombre: "product3", precio: 10.99,activo:true },
      ],
    },
    {
      id: 2,
      nombre: "asd3",
      activo:true,
      productos: [{ id: 12, nombre: "product3", precio: 12.99,activo:true }],
    },
    {
      id: 3,
      nombre: "asd4",
      activo:false,
      productos: [{ id: 13, nombre: "product10", precio: 15.99,activo:true }],
    },
  ],
  selectedMenuCategory: { id: 0, hasUserSelected: false },
  selectedCatalogueCategory: { id: 0, hasUserSelected: false },
  shopList: [
    { id: 13, nombre: "product10", precio: 15.99, quantity: 2 },
    { id: 10, nombre: "product1", precio: 5.99, quantity: 5 },
  ],
  alreadyPayed: false,
  paymentInfo: {
    totalPrice: 0.0,
    payedWith: 0.0,
  },
  noTicket:1
};
