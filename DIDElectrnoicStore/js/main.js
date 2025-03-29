
import prodb,{
  bulkcreate,
  getData,
  createEle
} from "./module.js";

let db = prodb("Productdb", {
    products: '++id, name, seller, price'
  } );
  //input tags
const userid=document.getElementById("userid");
const proname=document.getElementById("proname");
const seller=document.getElementById("seller");
const price=document.getElementById("price");
//buttons
const btncreate=document.getElementById("btn-create");
const btnread=document.getElementById("btn-read");
const btnupdate=document.getElementById(" btn-update");
const btndelete=document.getElementById("btn-delete");

//insert value using create button
btncreate.onclick= async event=>{
 let flag=  await bulkcreate(db.products, {
    name: proname.value,
    seller: seller.value,
    price: price.value
  });
  // console.log(flag);

  /*proname.value="";
  seller.value="";
  price.value="";
  */
 proname.value = seller.value = price.value = "";

 getData(db.products, data=> {
  userid.value = data.id+1 || 1;

  
 }); 
}
//create event on btn read button
btnread.onclick=table;

function table(){
  const tbody=document.getElementById("tbody");

  getData(db.products,(data)=>{
    if(data){

      createEle("tr",tbody,tr=>{

        for(const value in data){

          createEle("td",tr,td=>{
            td.textContent=data.price===data[value]?`$${data[value]}`:data[value];

          })

          }
          createEle("td",tr,td=>{
            createEle("i",td,i=>{
              i.className+="fas fa-edit btnedit";
            })
          })
        
      })
    }
  })
}

// Notes:

// Relaxed Binding
// Camel case : btnCreate
// Snake cae : btn_create
// kebab case : btn-create
// snakeupper : btn_Create

//let td=document.createElement("td");
//console.log(tbody);
//tbody.appendChild(td);
//console.log(td); (created td using java script)



