Auction.NewProductController = Ember.Controller.extend({
  actions: {
    add: function() {
      var newProduct = this.store.createRecord('product', {
        productName: this.get("productName"),
        description: this.get("description"),
        image: this.get("image"),
        price: this.get("price"),
        year: this.get("year")
      });

      newProduct.save();
      this.transitionToRoute('products')
    }
  }
});
