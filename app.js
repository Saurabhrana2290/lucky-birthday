const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

checkButton.addEventListener('click',
    function IsBirthdayLucky(){
        hideMessage();
        const sum = calculateSum(dateOfBirth.value);
        compareValues(sum,luckyNumber.value);
    }
);

function calculateSum(dob){
    let sum=0;
    dob = dob.replaceAll('-',"");
    for(let i = 0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(summation,luckyNum){
    if(summation % luckyNum == 0){
        showMessage("Your birthday is lucky😍");
    }else{
        showMessage("Your birthday is not lucky🙁");
    }
}

function hideMessage(){
    outputBox.style.display = "none";
}
function showMessage(msg){
    outputBox.style.display= "block";
    outputBox.innerText=msg;
}