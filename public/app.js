var CATS_ARRAY = [
  {name: "Boba", favouriteFood: "Sock Fluff", Picture: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  {name: "Barnaby", favouriteFood: "Tuna", Picture: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'},
  {name: "Max", favouriteFood: "Whiskas Temptations", Picture: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'}
]

var app = function(){

  addCat("Alfie", "Wiskas", 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg');

  for (var i = 0; i < CATS_ARRAY.length; i++) {
    addCat(CATS_ARRAY[i].name, CATS_ARRAY[i].favouriteFood, CATS_ARRAY[i].Picture);
  }

};

var addCat = function(name, favFood, picture){
    var catDescription = document.createElement('ul');
    catDescription.classList.add('cat');

    var catName = document.createElement('li');
    catName.innerText = "Name: " + name;

    var catFavouriteFood = document.createElement('li');
    catFavouriteFood.innerText = "Favourite Food: " + favFood;

    var catPicture = document.createElement('li');

    catPicture.innerHTML = '<img width="500" src=' + picture + '>';
    // catPicture.appendChild(catPic);
    catDescription.appendChild(catName);
    catDescription.appendChild(catFavouriteFood);
    catDescription.appendChild(catPicture);

    var cats = document.querySelector('#cats');
    cats.appendChild(catDescription);
}

window.onload = app;