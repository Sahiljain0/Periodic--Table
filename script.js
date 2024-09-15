const grid= document.querySelector('.gridContainer');
console.log(grid);
import samp from "./sample.js";

let b= samp();
console.log(b);
// let j = 0;
for(let i = 0;i<118;i++){
    let ele = document.createElement('div');
    if(i==1){
        let v = document.createElement('div');
        v.classList.add('first');
        grid.appendChild(v);
    }
    if(i==4 || i==12){
        let v = document.createElement('div');
        v.classList.add('second');
        grid.appendChild(v);
    }
    
    
    let weight = document.createElement('div');
    let name = document.createElement('div');
    let number = document.createElement('div');
    ele.innerText = b.elements[i].symbol;
    name.innerText = b.elements[i].name;
    name.classList.add('name');
    number.innerText = b.elements[i].number;
    number.classList.add('number');
    
    weight.innerText = String(b.elements[i].atomic_mass).substring(0,5);
    weight.classList.add('weight');
    ele.appendChild(number);
    ele.appendChild(weight);
    ele.appendChild(name);
    // ele.classList.add('trans');
    ele.classList.add('element');
    grid.appendChild(ele);
    if(i==56){
        i=70;
    }
    if(i==88){
        i=102;
    }
    
    // j++;
}
let fot = document.querySelector('.fot');
for(let i = 57;i<71;i++){
    let elem = document.createElement('div');
    
    
    
    let weight = document.createElement('div');
    let name = document.createElement('div');
    let number = document.createElement('div');
    elem.innerText = b.elements[i].symbol;
    elem.classList.add('element');
    name.innerText = b.elements[i].name;
    name.classList.add('name');
    number.innerText = b.elements[i].number;
    number.classList.add('number');
    
    weight.innerText = String(b.elements[i].atomic_mass).substring(0,5);
    weight.classList.add('weight');
    elem.appendChild(number);
    elem.appendChild(weight);
    fot.appendChild(elem);
    elem.appendChild(name);
}
for(let i = 89;i<103;i++){
    let eleme = document.createElement('div');
    
    
    
    let weight = document.createElement('div');
    let name = document.createElement('div');
    let number = document.createElement('div');
    eleme.innerText = b.elements[i].symbol;
    eleme.classList.add('element');
    name.innerText = b.elements[i].name;
    name.classList.add('name');
    number.innerText = b.elements[i].number;
    number.classList.add('number');
    
    weight.innerText = String(b.elements[i].atomic_mass).substring(0,5);
    weight.classList.add('weight');
    eleme.appendChild(number);
    eleme.appendChild(weight);
    fot.appendChild(eleme);
    eleme.appendChild(name);
}
function handleClick(e){
    console.log("clicked");
    let index = e.target.firstElementChild.innerText;
    console.log(b.elements[index-'0'-1].name);
    let page = document.createElement('div');

    let name = document.createElement('div');
    name.innerHTML = `<div class="wrapper">
    <div class="head">
        <h1 class="headingg" >${b.elements[index-'0'-1].name.toUpperCase()}</h1>
        <button class="crossbtn">X</button>
    </div>   
<div class="prop">
    
    <div class="detail">

        <div><span>name</span>  : <span>${b.elements[index-'0'-1].name}</span></div>
        <div><span>appearance</span>  : <span>${b.elements[index-'0'-1].appearance}</span></div>
        <div><span>atomic_mass</span>  : <span>${b.elements[index-'0'-1].atomic_mass}</span></div>
        <div><span>boil</span>  : <span>${b.elements[index-'0'-1].boil}</span></div>
        <div><span>category</span>  : <span>${b.elements[index-'0'-1].category}</span></div>
        <div><span>density</span>  : <span>${b.elements[index-'0'-1].density}</span></div>
        <div><span>discovered_by</span>  : <span>${b.elements[index-'0'-1].discovered_by}</span></div>
        <div><span>melt</span>: <span>${b.elements[index-'0'-1].melt}</span></div>
        <div><span>named_by</span>  : <span>${b.elements[index-'0'-1].named_by}</span></div>
        <div><span>number</span>  : <span>${b.elements[index-'0'-1].number}</span></div>
        <div><span>period</span>  : <span>${b.elements[index-'0'-1].period}</span></div>
        <div><span>group</span>  : <span>${b.elements[index-'0'-1].group}</span></div>
        <div><span>source</span>  : <span>${b.elements[index-'0'-1].source}</span></div>
        <div><span>summary</span>  : <span>${String(b.elements[index-'0'-1].summary).substring(0,100)}</span></div>
        <div><span>symbol</span>  : <span>${b.elements[index-'0'-1].symbol}</span></div>
        
    </div>
    <div class="img">
        <img src=${b.elements[index-'0'-1].image.url} alt="" width="400px" height="350px" >
        <div><span>title</span>  : <span>${String(b.elements[index-'0'-1].image.title).substring(0,40)}</span></div>
        <div><span>block</span>  : <span>${b.elements[index-'0'-1].block}</span></div>
    </div>
    </div>`;
    name.classList.add('add');
    document.body.appendChild(name);
    let btn = document.querySelector('button');
    btn.addEventListener('click',()=>{
        name.remove();
    })


}

let ele = document.querySelectorAll('.element');
ele.forEach((ele) => {
    ele.addEventListener('click',(e)=>{
            handleClick(e);
    });
});