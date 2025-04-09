//! using promise and fetch
/*


const res = fetch("https://restcountries.com/v3.1/all")

res.then((data)=>data.json())
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

*/

//! using async-await and fetch

/*
async function foo(){
    const res = await fetch("https://restcountries.com/v3.1/all")
    const data = await res.json();
    console.log(data);   
}
foo()

*/

//! async-await with error handling
/*
async function foo() {
  try{
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
foo()

*/

//!printing values from api
/*
async function foo() {
    try{
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      //console.log(data);
      for(let i=0;i<data.length;i++){
        console.log(data[i].name.common);
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  foo()
  */
/*
  async function foo() {
    try{
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      for(let i=0;i<data.length;i++){
        console.log(data[i].name.common);
        console.log(data[i].region);
        console.log(data[i].subregion);
        console.log(data[i].population);   
      }
    } catch (error) {
      console.log(error);
    }
  }
  foo()
  */

async function foo() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="container border w-auto h-auto flex flex-col justify-center rounded-md items-center py-0 mx-auto mt-10 bg-white" >
        <header class="cardheader flex items-center justify-center w-full px-2 py-2 mb-4 mt-0 rounded-t-md bg-purple-500 ">
            <h1 class="name text-2xl font-bold uppercase text-black  ">${data[i].name.common}</h1>
        </header>
        <div class="cardimage px-2 py-2 mt-2 mb-2 flex justify-center w-auto h-24 items-center"><img src="${data[i].flags.png}" alt="1" class="w-auto h-24 shadow-md shadow-black"></div>
        <div class="details flex flex-col w-full mt-4 mb-0 rounded-b-md bg-gray-400">
            <p class="region text-xl font-semibold capitalize flex gap-2 justify-start text-start p-2 mx-2 mt-4"><span class=" font-bold">Region:</span>${data[i].region}</p>
            <p class="subregion text-xl font-semibold  capitalize flex gap-2 justify-start text-start p-2 mx-2"><span class=" font-bold">Subegion:</span> ${data[i].subregion}</p>
            <p class="population text-xl font-semibold  capitalize flex gap-2 justify-start text-start p-2 mx-2 mb-4"><span class=" font-bold">Population:</span>${data[i].population}</p>
        </div>
    </div>`;
      document.body.append(div);
    }
  } catch (error) {
    console.log(error);
  }
}
foo();
