const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
const products = [
  {
      id: 1,
      name: "Mezcla original 200 g ¥ 500",
      price: 500,
  },
  {
      id: 2,
      name: "Mezcla original 500 g ¥ 900",
      price: 900,
  },
  {
      id: 3,
      name: "Mezcla especial 200 g ¥ 700",
      price: 700,
  },
  {
      id: 4,
      name: "Mezcla especial 500 g, 1.200 yenes",
      price: 1200,
  },

];

function add() {
  const productid = parseInt(priceElement.value);
  const producto = products.find(function (item){
    if(item.id == productid ){
      console.log('entra');
      return item;
    }
  })
  const number = parseInt(numberElement.value);
  let purchase = {
    producto,
    number,
    
  };
  console.log(producto);
  const productoEncontrado = purchases.find(item =>item.producto.id == purchase.producto.id)
    if(productoEncontrado){ 
      productoEncontrado.number += number;
      console.log('entra'); 
    } else {
      purchases.push(purchase);
    }
  
  window.alert(`${display()}\n Total hasta el momento${subtotal()}円`);
  console.log(purchase,purchases);
  
}

function display() {
  let string = "Se añadio: \n";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].number} de ${purchases[i].producto.name} al carrito, con un precio de ${purchases[i].producto.price}円 la unidad \n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].producto.price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\nLa compra tiene un costo total de ${sum}円, el envio un costo de ${postage}円\nEl total es: ${sum + postage}円\nGracias Por la Compra`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
  priceElement.codigo = "";
  priceElement.name = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}

