const findItem = (itemsArray, productId) => {
  return itemsArray.some((item) => item._id === productId);
};
export { findItem };
