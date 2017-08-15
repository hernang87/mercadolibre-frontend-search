const utils = {
  getProductFromMLResponse: function(data) {
    let location = data.address ? data.address.state_name : '';
    if(!location) location = data.seller_address ? data.seller_address.state.name : '';

    return {
      id: data.id,
      title: data.title,
      picture: data.thumbnail,
      free_shipping: data.shipping.free_shipping,
      condition: data.condition,
      location: location,
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
    product.category = data.attributes.filter(e => e.attribute_group_id === 'MAIN').map(e => e.value_name);

    return product;
  }
}

module.exports = utils;
