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
        <div class="container border w-[400px] h-[400px]flex flex-col  justify-center items-center py-2 mx-auto bg-red-200" >
        <header class="cardheader flex items-center justify-center px-2 py-2 mt-2">
            <h1 class="name text-xl font-bold uppercase text-black  ">${data[i].name.common}</h1>
        </header>
        <div class="cardimage px-2 py-2 mt-2 mb-2 flex justify-center w-auto h-24 items-center"><img src="${data[i].flags.png}" alt="1" class="w-auto h-24"></div>
        <div class="details flex flex-col">
            <h2 class="region text-xl font-semibold capitalize flex justify-center text-center p-4 mx-2 ">${data[i].region}</h2>
            <h2 class="subregion text-xl font-semibold  capitalize flex justify-center text-center p-4 mx-2">${data[i].subregion}</h2>
            <h2 class="population text-xl font-semibold  capitalize flex justify-center text-center p-4 mx-2">${data[i].population}</h2>
        </div>
    </div>`;
      document.body.append(div);
    }
  } catch (error) {
    console.log(error);
  }
}
foo();
