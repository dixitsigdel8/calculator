// let mynumber = 50;
// let userNumber;
//  userNumber = prompt("Enter the number");
// console.log("usernumber",userNumber);
// if(userNumber ==  mynumber) {
//    alert("You won the game")
// } else {
//     userNumber = prompt("Enter the number again");

// }

// let username = prompt("Enter your full name please!!");
// let lengthname = username.length;
// // console.log(lengthname,"dd"); 
// let newName = '@' + username + username.length;
// alert(`Your username is ${newName}`)

//  let heroes = ["heamn","mark","sam","micheal","racheal","sammy"];

//  for (let lado of heroes){
//    console.log(lado);
//  }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let i of marks) {
//  sum = sum+ i
// }
// console.log(sum)


// let marks = [85,96,88,55,32,91,88]

// let answer = marks.filter(checkmarks)

// function checkmarks(numbers) {
//    return numbers > 90;
// }

// console.log(answer)

// let usernumber = prompt("Enter a number")
// let arr = []

// for(i=1; i<usernumber; i++){
//    arr[i-1] = i

// }
// console.log(arr)

// let reduce = arr.reduce((prev,current)=>{
//    return prev + current;
// })

// console.log(reduce)

// let h2 = document.querySelector("h2")
// console.log(h2)
 
// h2.innerText = h2.innerText + " Appna College"

let currentInput = '';

function press(num) {
    currentInput += num;
    console.log("hhhh",currentInput)
    document.getElementById('display').value = currentInput;
    
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}
