const resuluEl=document.getElementById('result');
const LengthEl=document.getElementById('Length');
const uppercaseEl=document.getElementById('uppercase');
const lowercaseEl=document.getElementById('lowercase');
const numbersEl=document.getElementById('numbers');
const symbolsEl=document.getElementById('symbols');
const gererateEl=document.getElementById('gererate');
const clipboardEl=document.getElementById('clipboard');
const randomFunc ={
      lower:getRandomLower,
      upper:getRandomUpper,
      number:getRandomNumber,
      symbol:getRandomSymbol
}
clipboardEl.addEventListener('click',()=>{
    const textarea=document.createElement('textarea');
    const password=resuluEl.innerText;
    if(!password){
        return
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("password copied to clipboard")
})
gererateEl.addEventListener('click',()=>{
    
    const length = +LengthEl.value
    const hasLower = lowercaseEl.checked;
    const hasupper = uppercaseEl.checked;
    const hasnumber = numbersEl.checked;
    const hassymbol = symbolsEl.checked;
    resuluEl.innerText = generatepassword(hasLower,hasupper,hasnumber,hassymbol,length)
})

function generatepassword(lower,upper,number,symbol,length){
    
     let generatedpassword=''
     const typesCount = lower + upper + number + symbol;
     const typesArray=[{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
     if(typesCount === 0 ){
        return ''
     }
     
     for(let i=0; i < length;i += typesCount){
       typesArray.forEach(type =>{
           const fucName = Object.keys(type)[0];
           generatedpassword += randomFunc[fucName]()
       })
     }
     const finalpassword = generatedpassword.slice(0,length)
     return finalpassword;
}
function getRandomLower(){
   
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}
function getRandomSymbol(){
    const symbols ='!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
