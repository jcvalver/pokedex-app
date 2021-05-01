var xmlhttp = new XMLHttpRequest();
var url = "https://pokeapi.co/api/v2/pokemon";
var name="prueba";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    console.log("data dev:" +myArr);
    myFunction(myArr.results);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
   
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
      console.log("recor:"+arr[i].url);
      this.name=arr[i].name;
    out += '<tr><td>' + this.name + '</td><td><button onclick="myFunction2('+(i+1)+',\''+(this.name)+'\')">Ver Detalles</button></td></tr>';
  }
  document.getElementById("id01").innerHTML = out;
}



function myFunction2(i,name) {
   console.log("clickedd.."+name);

   //detalle
   xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      console.log("data dev:" +myArr);
      myFunction3(myArr.sprites.front_default,name,myArr.weight,myArr.height);
    }
   };
   xmlhttp.open("GET", url+"/"+i, true);
   xmlhttp.send();
  }

  function myFunction3(url,name,peso,altura) {
    var out = "";
    var out2 = "";
    console.log("clickedd 3.."+url);
 
    out += '<img src="'+url+'">';
    document.getElementById("imageee").innerHTML = out;

    out2 += '<p>Nombre:'+name+'</p>';
    out2 += '<p>Peso:'+peso+'</p>';
    out2 += '<p>Altura:'+altura+'</p>';
    document.getElementById("data_det").innerHTML = out2;
 
   }
 