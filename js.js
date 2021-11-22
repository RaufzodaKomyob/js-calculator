'use strict';
let buttons = document.querySelectorAll('.number');
let __result = document.querySelector('.result__bl');
let cur = false;
if(__result.innerHTML === "+"){
 "+".replace("+","+");
}
for(let i = 0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(e)=>{
        cur= false;
        if(__result.innerHTML === '0'   ) __result.innerHTML = '';
        __result.innerHTML+= Number(e.target.innerHTML);
    });
}
let lastEl = __result.innerHTML.substring(0,__result.innerHTML.length - 1);
function operatorMath(n){
    if(lastEl !== n  && !cur) cur = true;
    else if(n  && cur || lastEl === n) return;
    __result.innerHTML+= n;
}
let zero = "Koma";
let arr = [];
function equal(){
    arr.push(...__result.innerHTML);
    console.log(arr);
    let lastCh = String(__result.innerHTML.substr(__result.innerHTML.length - 1));
     __result.innerHTML.replace('&times;','*')
let replaceChar;
    if(lastCh === "+" 
    || lastCh === "&ndash;"
     || lastCh === "&times;"
     || lastCh === "&divide;"
     || lastCh === "." 
     || lastCh === "%"   
    ){
        return __result.innerHTML = `0`;
    }else{
        return replaceChar =
         __result.innerHTML.replace(/÷/g,'/')
         .replace(/×/g,'*').replace(/–/g,'-').replace(/,/g,'.'),
        __result.innerHTML = (eval(replaceChar));
    }

}
function Sqrt(){
    return __result.innerHTML = Math.sqrt(__result.innerHTML);
}
function procent(){
return __result.innerHTML /= 100;
}

function backLast(){
    if(
        __result.innerHTML === '0' ) return;
    if(
        __result.innerHTML.length === 1) return __result.innerHTML = '0';
    __result.innerHTML = __result.innerHTML.substring(
        0,__result.innerHTML.length - 1);
}

function clearAll(cl){
    __result.innerHTML = cl;
}