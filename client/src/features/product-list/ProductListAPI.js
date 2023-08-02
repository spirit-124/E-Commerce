// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  // TODO :To Add more logic over here

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

// A mock function to mimic making an async request for data
export function fetchProductsByFilter(filter) {
  // filter = {"category":"smartPhne", }
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  // TODO :To Add more logic over here

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
