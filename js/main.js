function getApi() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText; //string
      var maro = JSON.parse(result);
      var mo = maro.data
      var ali = "";
      for (i = 0; i < mo.length; i++) {
        var cartoona = `
          <div class="col-md-4">
          <img src="${mo[i].image}" class="w-100" />
          <h5 class="text-center">${mo[i].title}</h5>
          <h5 class="text-center">${mo[i].category}</h5>

          
          
        </div>
                     `;

        ali = ali + cartoona;

      }
      document.querySelector(".test").innerHTML = ali;
    }
  };
  xhttp.open("GET", "https://fakestoreapiserver.reactbd.org/api/walmartproducts", true);
  xhttp.send();
}

getApi();
//=====================================================================

// fetch("https://dummyjson.com/products")
//   .then(function (result) {
//     return result.json();
//   })
//   .then(function (maro) {
//     var mo = maro.products;
//     var ali = "";
//     for (i = 0; i < mo.length; i++) {
//       var cartoona = `
//           <div class="col-md-4">
//           <img src="${mo[i].images[0]}" class="w-100" />
//           <h3 class="text-center">${mo[i].category}</h3>
//           <h6 class="text-center">Price : ${mo[i].price}</h6>
//           <h6 class="text-center"> Rating : ${mo[i].rating}</h6>
//           <h6 class="text-center"> Comment : ${mo[i].reviews[0].comment}</h6>
//         </div>
//                      `;

//       ali = ali + cartoona;
//     }

//     document.querySelector(".test").innerHTML = ali;
//   });

//=======================================

// async function getApi() {
//   var result = await fetch("https://fakestoreapi.com/products");
//   var maro = await result.json();
  
//   var ali = "";
//   for (i = 0; i < maro.length; i++) {
//     var cartoona = `  
//           <div class="col-md-4">
//           <img src="${maro[i].image}" class="w-100" />
//           <h3 class="text-center">${maro[i].category}</h3>
//           <h6 class="text-center">Price : ${maro[i].price}</h6>
//           <h6 class="text-center">  ${maro[i].title}</h6>
         
//         </div>
//                      `;

//     ali = ali + cartoona;
//   }
//   document.querySelector(".test").innerHTML = ali;
// }

// getApi();
