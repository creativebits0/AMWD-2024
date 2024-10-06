// VALIDATING MARKS TASK ----------------------------
function onClick(){
    const stdName = document.getElementById('studentName').value
    const stdMarks = document.getElementById('studentMarks').value
    let students =""
    if (stdMarks > 60) {
        students= stdName + " is passed with a score of "+ stdMarks;
    }
    else{
        students = stdName + " is fail";
    }
   document.getElementById('dsply').innerText =students;
    
}

// VALIDATING USING REGEX TASK ------------------------

function onchangeText (){
    const validate = document.getElementById('form-input').value;
    const reg = /^(0|[1-9]\d*)(\.\d+)?$/ ;
    if(reg.test(validate)){
        document.getElementById('error').innerText="Valid Input";
        document.getElementById('error').style.color ='green';
  
    }
    else{
 
        document.getElementById('error').innerText="InValid Input";
        document.getElementById('error').style.color ='red';
    
    }
}

// CHAT GIRL TASK -------------------------------------
function onMouseOver(){
    document.getElementById('chat_1').src = "Assets/chat-c-1.png";
    document.getElementById('chat_1').style.display ='none';
    document.getElementById('chat_2').style.display ='block';
}
function onMouseOut(){
    document.getElementById('chat_2').src = "Assets/chat-c-2.png";
    document.getElementById('chat_2').style.display ='none';
    document.getElementById('chat_1').style.display ='block';
}


// Task - 3 -----------------taking input in short form and giving the full form 

// function full_form(){
//     const short = document.getElementById('short').value ;
//     const lower_short = short.toLowerCase();
    
//     let fullform = "";
//     switch (lower_short) {
//         case "se" :
//             fullform = "Software Engineer"; 
//             break;
//         case "ase" :
//             fullform = "Assistent Software Engineer"; 
//             break;
//         case "tl" :
//             fullform = "Tech Lead"; 
//             break;
//         case "atl" :
//             fullform = "Assistent Tech Lead"; 
//             break;
//         case "intern" :
//             fullform = "intern Software Engineer"; 
//             break;
//         case "sse" :
//             fullform = "Senior Software Engineer"; 
//             break;
//         default :
//             fullform = "Error Key"; 
            
//     }
//     document.getElementById('display-full').innerText = fullform;
// }

//  Task - 4 -----------------taking 1-100 random numbers in an array and finding module to a 
//  particular given number in an input field


// var randomNumbers =[];
// while (randomNumbers.length <=100){
//     var randomArr = (Math.floor(Math.random() * 100)+1);
//     randomNumbers.push(randomArr);
// }

// document.getElementById('random').innerText=randomNumbers
// function onSubmit(){
//     var input_num = document.getElementById('input_num').value;
//     var display =[];
  
//     for (let number of randomNumbers) {
//         if (number % input_num === 0) {
//           display.push(number);
//         }
//       }
  
//     document.getElementById('display_num').innerText = input_num + ' are : ';
//     document.getElementById('multiple').innerText = display;
 
// }

//  Task - 5 -----------------username and password check
var uName = "AdMin";
var uPsw  = "admin123";

function onCheck(){
    var input_id = document.getElementById('input_id').value;
    var input_Psw = document.getElementById('input_Psw').value;

    if (uName === input_id && uPsw === input_Psw){
        document.getElementById('display_msg').textContent="Login Successful.....!";
        // alert("Login Success.......!")
        
    }
    else{
        document.getElementById('display_msg').textContent="Login Fail......!";
        // alert('Login Fail..........!')

    }
}

