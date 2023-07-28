const input = document.querySelector("input"),
  guess = document.querySelector(".Tahminler"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".canlar"),
  cevap = document.querySelector(".cevap");

  input.focus();

  let randomNum = Math.floor(Math.random() * 100); //tutulan sayı
  console.log(randomNum);
chance = 10;

checkButton.addEventListener("click",()=>{
chance--;
let inputvalue = input.value;
remainChances.textContent = chance;
if(inputvalue!=randomNum){

    if(guess.textContent === "")
    { guess.textContent = inputvalue}
    else{
        guess.textContent += ","+inputvalue;
    }
    if( inputvalue<randomNum)
    {
        cevap.textContent = "tahmininiz çok az";
    }
    else if(inputvalue>randomNum)
    {
        cevap.textContent = "tahmininiz çok fazla";
    }
}
else{
    input.disabled = true;
    cevap.textContent ="bravo cevap:" + randomNum;
    checkButton.disabled = true;
}

if(chance <=0)
{

    checkButton.disabled = true;
    input.disabled = true;
    guess.textContent += "  \n*TAHMİN HAKKINIZ bitti*";
    cevap.textContent = "BAŞARAMADINIZ DOĞRU CEVAP :" + randomNum;
}
});