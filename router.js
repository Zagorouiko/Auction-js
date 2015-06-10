Auction.Router.map(function() {
  this.resource('products', {path:'/'});
  this.resource('new-product');
  this.resource('product', {path: 'products/:product_id'})
});
