const query = {
  search: 'Вася',
  take: 10
}

const queryParams = (queryObject) => {
  let queryArray = [];
  for (const key in queryObject) {
    queryArray.push(`${key}=${queryObject[key]}`);
  }
  return queryArray.join("&");
};


const result = queryParams(query);
console.log(result);
