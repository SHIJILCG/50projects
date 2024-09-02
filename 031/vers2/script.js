const generatebtn=document.getElementById('large-butt');
const lengthEl=document.getElementById('length')
const uppercaseEl=document.getElementById('uppercase')
const lowercaseEl=document.getElementById('lowercase')
const numbersEl=document.getElementById('numbers')
const symbolsEl=document.getElementById('symbols')
const resultEl=document.getElementById('result')
const clipboardEl=document.getElementById('clipboard')

let thefunctions={
    upper:getrandomuppercase,
    lower:getrandomlowercase,
    number:getrandomnumbers,
    symbol:getrandomsynbols

}

generatebtn.addEventListener('click',()=>{
     let thepasswrdlength=lengthEl.value;
     const upper = uppercaseEl.checked;
     const lower = lowercaseEl.checked;
     const number = numbersEl.checked
     const symbol = symbolsEl.checked
     resultEl.innerHTML = cratethepassword(upper,lower,number,symbol,thepasswrdlength)
})

clipboardEl.addEventListener('click',()=>{
     if(resultEl.innerText === ''){
        return
     }
     const textarea=document.createElement('textarea');
     textarea.value=resultEl.innerText;
     document.body.appendChild(textarea);
     textarea.select();
     document.execCommand('copy');
     textarea.remove();
     alert("The password is copyed to clipboard");
})
function cratethepassword(upper,lower,number,symbol,length){
      let thepassowardstore = '';
      const thenumberoftrue = upper + lower + number + symbol;
      if(thenumberoftrue === 0){
         return ''
      }
      thetruefunc=[{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
      for(let i=0; i <= length; i+=thenumberoftrue){
         thetruefunc.forEach( fun => {
            const funs = Object.keys(fun)[0];
            thepassowardstore += thefunctions[funs]();
         });
      }
      
      const finalpassword = thepassowardstore.slice(0,length)
      return finalpassword;
}


function getrandomuppercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getrandomlowercase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getrandomnumbers(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getrandomsynbols(){
    let text = '!@#$%^&*()-={}[]?,./'
    return text[Math.floor(Math.random() * text.length)]
}