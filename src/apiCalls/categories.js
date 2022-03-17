import axios from "axios";
export const api_loadCategories = () => {
  return axios
    .post(`https://data.mongodb-api.com/app/data-wokwx/endpoint/data/beta/action/find`,{
            "collection": "categorias",
            "database": "POSQubit",
            "dataSource": "Cluster0"
    }, {
      validateStatus: function (status) {
        return status < 500;
      },
      headers: {
        'api-key': `LxamU7gMwM80TAnLo0PNAqYAlqzWIZFUzC4DsBjRdboyEhFgdaIRLwsh5B73ZNhm`
      }
    })
    .then((data) => {
      return data;
    })
    .catch((e) => e);
};
