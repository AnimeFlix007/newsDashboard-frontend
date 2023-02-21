export const UniqueItems = (data) => {
    return data?.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.topic === current.topic)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
};

export const UniqueItemsSectors = (data) => {
    return data?.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.sector === current.sector)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
};