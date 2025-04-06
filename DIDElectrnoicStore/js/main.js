
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
const btnupdate=document.getElementById("btn-update");
const btndelete=document.getElementById("btn-delete");

//notfound
const notfound = document.getElementById("notfound");

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

table();
let insertmsg = document.querySelector(".insertmsg");

getMsg(flag,insertmsg);
}
//create event on btn read button
btnread.onclick=table;

//update event
btnupdate.onclick=()=>{
  const id=parseInt(userid.value||0);
  if(id){
    db.products.update(id,{
      name:proname.value,
      seller:seller.value,
      price:price.value
    }).then((updated)=>{
      let get=updated?'data Updated':'data is not Updated'
      console.log(get);

    })
  }
}

//delete records
btndelete.onclick = ()=>{
  db.delete();
  db = prodb("Productdb",{
    products:`++id,name,seller,price`
  });
  db.open();
  table();
}
//window onload event
window.onload=()=>{
  textID(userid);
}
function textID(textid){
  getData(db.products,data=>{
    textboxid.value=data.id+1||1;
  })
}
function table(){
  const tbody=document.getElementById("tbody");

  while(tbody.hasChildNodes()){
    tbody.removeChild(tbody.firstChild);
  }

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
              i.setAttribute('data-id',data.id);
              i.onclick=editbtn;
            })
          })
        createEle("td",tr,td=>{
          createEle("i",td,i=>{
            i.className+="fas fa-trash-alt btndelete";
            i.setAttribute('data-id',data.id);
            i.onclick=deletebtn;
          });
        })
      });
    
  
} else {
  notfound.textContent="No records found in the database...!";
}

  });
}
function editbtn(event){
  
  let id=parseInt(event.target.dataset.id);
  
  db.products.get(id,data=>{
    userid.value=data.id||0;
    proname.value=data.name||"";
    seller.value=data.seller||"";
    price.value=data.price||""
    
  })
}



const deletebtn = event => {
  let id = parseInt(event.target.dataset.id);
  db.products.delete(id);
  table();
}

function getMsg(flag,element){
  if(flag){
    element.className+="movedown";

    setTimeout(()=>{
      element.classList.forEach(classname=>{
        classname=="movedown"?undefined:element.classList.remove("movedown");
      });
    },4000);


     
  }
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



