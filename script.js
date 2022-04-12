// let res=document.createElement("div");
// res.setAttribute("id","result");

// let search=document.createElement("div");
// search.setAttribute("id","search");
//  let button=document.createElement("INPUT");
//  button.setAttribute("type","button");
//  button.setAttribute("name","search");
//  button.setAttribute("id","button");
// //  document.getElementById("button").onclick= function(){show()};


//  document.body.append(button);
// document.body.append(res);
// document.body.append(search);



// async function foo(){
//     let result= await fetch("https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane");
//     let result1=await result.json();
   
//     console.log(result1);
//     return result1;

// }
//     function show()
// {
//     let res=result1;
//     console.log(res);
//     return res;
// //         let res1 =res.filter((ele)=>
// //     ele.name===document.getElementById("search").value);
// //     if(true){
// //  document.getElementById("result").innerHTML= res1;
// // }
// //  else{
// //      alert("this is invalid name");
// //  }
// // return res1;
// //  })
// // //  document.getElementById("button").onclick= function(){show()};

// // }
// }

//  foo();
//  show();

var label=document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","true");

var br1=document.createElement("br");

var br2=document.createElement("br");

var input1=document.createElement("div");
input1.setAttribute("id","text1");

var br3=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="Search";

document.body.append(label,br,input,br1,button,br2,input1,br3);
async function foo(){
    let cc=document.getElementById("text").value;
    let res=await fetch(`https://api.nationalize.io?name=${cc}`);
    let res1=await res.json();
console.log(res1);
  //  let final=res1.toString();
  //  let final1=Object.values(final);
    document.getElementById("text1").innerHTML=res1;


}
