const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-no");
const checkButton = document.querySelector("#check-btn")
const luckReturn = document.querySelector("#check-luck");
const message = document.querySelector("#message");


checkButton.addEventListener("click",function validateInput(){
    
    if(luckyNumber.value=="" || birthDate.value==""){
        luckReturn.style.display = "none";
        message.innerHTML="Both Inputs are Required to Know Your Luck";
    }else if(parseInt(luckyNumber.value) <= 0){
        luckReturn.style.display = "none";
        message.innerHTML="Lucky Number should be Greater than Zero !";
    }else{
        luckReturn.style.display = "block";
        const newDate = birthDate.value.replaceAll("-","") 
        const sum = calculateSum(newDate);
        checkLuck(sum,parseInt(luckyNumber.value));
    }

});

function calculateSum(dob){
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + (dob.charAt(i));
    }
    return sum;
}

function checkLuck(dob,lucky){
    var abc = dob%lucky;
    console.log(abc);
    if(dob%lucky===0){
        luckReturn.innerHTML="You're Very Lucky !";
        message.innerHTML="";
    }else{
        luckReturn.innerHTML="Seems that You're Not Lucky";
        message.innerHTML="*Attention : This was Just for Fun, No Numerology Added !*";
    }
}