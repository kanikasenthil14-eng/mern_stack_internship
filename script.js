/*
var v=12
let l="kani"
const c=1.3
console.log(v)
console.log(c)
console.log(l)
//c=2.3
//console.log(c)
let a
console.log(a)
let b=null
console.log(b)
let c1="4"
let d=4
console.log(c1==d)//true
console.log(c1===d)//false

//normal function
function sum(a,b){
    return a+b
}
console.log(sum(10,20))

//arrow function
let s=(a,b)=>console.log(a+b)
s(10,30)

//aunomemus function
let s1= function(a,b){
    console.log(a+b)
}
s1(10,40)

console.log("start")
setTimeout(()=>{
    console.log("delayed time")
},2000)
console.log("waiting")
console.log("end")

//promises
const myPromise=new Promise((resolve,reject)=>{
    let orderPlaced=false
    if(orderPlaced){
        resolve("order placed successfully")
    }else{
        reject("order not placed")
    }
});
myPromise.then((reject)=>{
    console.log(reject)
}).catch((result)=>{
    console.log(result)
}).finally(()=>{
    console.log("no order")
});

*/


/*
async function getDatas() {
    return "helloworld"
}
getDatas().then((res)=>{
    console.log(res)
})
//helloworld
*/


/*
function getData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("delayed time")
            //resolve()
        },2000)
    })
}
async function display()
{
    console.log("start");
    let res=await getData();
    console.log(res);
    console.log("end")
}
display()
//output
//start
//delayed time
*/


/*
function getData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("delayed time")
            resolve()
        },2000)
    })
}
async function display()
{
    console.log("start");
    let res=await getData();
    console.log(res);
    console.log("end")
}
display()
//output
//start
//delayed time
//undefined
//end
*/


/*
function getData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("delayed time")
            resolve()
        },2000)
    })
}
async function display()
{
    console.log("start");
    let res=await getData();
    //console.log(res);
    console.log("end")
}
display()
//output
//start
//delayed time
//end
*/


function getData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("delayed time")
            resolve()
        },2000)
    })
}
async function display()
{
    console.log("start");
    await getData();
    console.log("end")
}
display()
//output
//start
//delayed time
//end



