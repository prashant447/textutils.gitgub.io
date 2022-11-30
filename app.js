const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;

const updateCounter = ()=>{
         char = charVal.value.length;

         totalCount.innerText = char;
         remainingCount.innerText = 150 - char;
}

charVal.addEventListener("keyup", () => updateCounter());


// copy the text code
const copyText = ()=>{
               charVal.select();
               char.setSelectionRange(0, 9999); /*mobile version*/
               navigator.clipboard.writeText(charVal.value);
}