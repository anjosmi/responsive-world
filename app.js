(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Acqua di Gioia',
    brand: 'Giorgio Armani',
    price: 92.00,
    description: 'Acqua simply meaning water in Italian, captures the inspiration of the legendary Island of Pantelleria, where the sun and earth meet and create the perfect image of the Mediterranean landscape and the deep blue-green sea. Gioia captures the essence of Joy and brings to mind happiness, serenity and a sense of optimism.',
    canPurchase: true,
    soldOut:false,
  },
  {
    name: 'Brit Rhythm Women Floral ',
    brand: 'Burberry',
    price: 95.00,
    description: 'Brit Rhythm Women Floral Eau De Toilette Spray by Burberry is a sensual, floral fragrance with an unexpected fruity twist. Fresh top notes of orchard fruit, Sicilian lemon and orange open up to an intoxicating heart of Egyptian jasmine, lotus blossom and dewy lilac. Base notes of ambery woods, driftwood and musk give a sultry dry down.',
    canPurchase: true,
    soldOut:false,
    }
  ];
})();
