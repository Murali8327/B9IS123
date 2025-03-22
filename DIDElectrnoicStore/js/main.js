
import productdb,{
  bulkcreate
} from "./module";

let db=productdb("Productdb", {
    products: '++id, name, seller, price'
  } );
  //input tags
const userid=document.getElementById("userid");
const proname=document.getElementById("proname");
const seller=document.getElementById("seller");
const price=document.getElementById("price");
//buttons
const btncreate=document.getElementById("btncreate");
const btnread=document.getElementById("btnread");
const btnupdate=document.getElementById(" btnupdate");
const btndelete=document.getElementById("btndelete");

//insert value using create button
btncreate.onclick=(event)=>{
 let flag= bulkcreate(db.products,{
    name:proname.value,
    seller:seller,value,
    price:price.value,
  })
  console.log(flag);
}