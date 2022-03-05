// eslint-disable-next-line import/no-anonymous-default-export
export default {
  categories: [
    {
      id: 0,
      nombre: "asd",
      products: [
        { id: 10, nombre: "product1" },
        { id: 110, nombre: "product2" },
        { id: 120, nombre: "product3" },
        { id: 130, nombre: "product4" },
        { id: 140, nombre: "product5" },
      ],
    },
    {
      id: 1,
      nombre: "asd",
      products: [
        { id: 112, nombre: "product2" },
        { id: 111, nombre: "product3" },
      ],
    },
    { id: 2, nombre: "asd", products: [{ id: 12, nombre: "product3" }] },
    { id: 3, nombre: "asd", products: [{ id: 13, nombre: "product4" }] },
  ],
  selectedMenuCategory: { id: 0, hasUserSelected: false },
  selectedCatalogueCategory: { id: 0, hasUserSelected: false },
};
