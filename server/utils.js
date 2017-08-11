const utils = {
  getProductFromMLResponse: function(data) {
    return {
      id: data.id,
      title: data.title,
      picture: data.thumbnail,
      free_shipping: data.shipping.free_shipping,
      condition: data.condition,
      price: {
        currency: data.currency_id,
        amount: data.price
      }
    }
  },

  getCompleteProductFromMLResponse: function(data) {
    let product = utils.getProductFromMLResponse(data);

    product.condition = data.condition;
    product.sold_quantity = data.sold_quantity;

    return product;
  }
}

module.exports = utils;
