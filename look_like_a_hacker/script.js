const doc = document.querySelector('.container');

async function hackerman() {
  let p1 = new Promise((resolve,reject)=>{
setTimeout(()=>{
      resolve("hacking wifi.......Please wait..............")
    doc.innerHTML += '<h1 class="my" >Initializing hack program . . .</h1>';
},2000);
});
  let p2 = new Promise((resolve,reject)=>{
setTimeout(()=>{
      resolve("hacking wifi.......Please wait..............")
    doc.innerHTML += '<h1 class="my" >hacking wifi.......Please wait..............</h1>';
  
},4000);
});
  let p3 = new Promise((resolve,reject)=>{
setTimeout(()=>{
      resolve("information on the way.......Please wait...............")
    doc.innerHTML += '<h1 class="my" >information on the way.......Please wait..............</h1>';
  
},6000);
});
  let p4 = new Promise((resolve,reject)=>{
setTimeout(()=>{
      resolve("...username detected .......Please wait.........")
    doc.innerHTML += '<h1 class="my" >...username detected .......Please wait........</h1>';
  
},8000);
});
  let p5 = new Promise((resolve,reject)=>{
setTimeout(()=>{
      resolve("fatching Ram's instagram Id......Please wait........")
    doc.innerHTML += '<h1 class="my" >fatching Ram instagram Id......Please wait.....</h1>';
  
},10000);
});
  
  const a1 = await p1;
  const a2 = await p2;
  const a3 = await p3;
  const a4 = await p4;
  const a5 = await p5;
 
   return [a1,a2,a3,a4,a5];
  }
hackerman()
