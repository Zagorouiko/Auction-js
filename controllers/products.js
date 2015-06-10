Auction.ProductsController = Ember.ArrayController.extend({
  currentPicture: 'http://lovelace-media.imgix.net/getty/465512236.jpg?w=373&h=280&fit=crop&crop=faces&q=70',
  pictures: ['http://lovelace-media.imgix.net/getty/465512236.jpg?w=373&h=280&fit=crop&crop=faces&q=70', 'http://lovelace-media.imgix.net/getty/453687409.jpg?w=373&h=280&fit=crop&crop=faces&q=70', 'http://lovelace-media.imgix.net/getty/469054278.jpg?w=373&h=280&fit=crop&crop=faces&q=70', 'http://lovelace-media.imgix.net/getty/492466685.jpg?w=373&h=280&fit=crop&crop=faces&q=70'],
  index: 0,
  actions: {
    nextPicture: function(increment) {
    //  debugger
      if ( this.index >= this.pictures.length -1 && increment > 0) {
        this.index = 0;
      } else if (this.index === 0 && increment < 0) {
        this.index = this.pictures.length - 1;
      }  else {
        this.index = this.index + increment;
      }
      this.set('currentPicture', this.pictures[this.index]);
    },
  }
});
