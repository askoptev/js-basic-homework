function sortArray(data, orderBy = 1) {
  if (!Array.isArray(data)) {
    return false;
  }
  if ((orderBy !== 1 && orderBy !== -1)) {
    return false;
  }

  if (orderBy === 1) {
    for (let i in data) {
      for (let j in data) {
        if (data[j] > data[Number(j) + 1]) {
          const temp = arr[j];
          data[j] = data[Number(j) + 1];
          data[Number(j) + 1] = temp;
        }
      }
    }
  }

  if (orderBy === -1) {
    for (let i in data) {
      for (let j in data) {
        if (data[j] < data[Number(j) + 1]) {
          const temp = arr[j];
          data[j] = data[Number(j) + 1];
          data[Number(j) + 1] = temp;
        }
      }
    }
  }

  return data;
}

const arr = [1, 40, -5, 10, 0];

console.log(sortArray(arr, -1));
