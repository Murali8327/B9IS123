
import productdb from "./module";

let db=productdb("Productdb", {
    products: '++id, name, seller, price'
  } );
  //input tags
const userid=document.getElementById("userid");
const proname=document.getElementById("proname");