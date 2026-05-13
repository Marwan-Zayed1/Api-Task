



async function getApi() {
  var result = await fetch("https://fakestoreapi.com/products");
  var maro = await result.json();
  
  var ali = "";
  for (i = 0; i < maro.length; i++) {
    var cartoona = `  
          <div class="col-md-4">
          <img src="${maro[i].image}" class="w-100" />
          <h3 class="text-center">${maro[i].category}</h3>
          <h6 class="text-center">Price : ${maro[i].price}</h6>
          <h6 class="text-center">  ${maro[i].title}</h6>
         
        </div>
                     `;

    ali = ali + cartoona;
  }
  document.querySelector(".test").innerHTML = ali;
}

getApi();
