const readLine=require('readline');
const rl = readLine.createInterface({input : process.stdin, output : process.stdout});
let n1=Math.floor((Math.random()*10)+1);
let n2=Math.floor((Math.random()*10)+1);
let ans=n1+n2;
rl.question(`What is ${n1} + ${n2}?`,(userInput)=>{
    if(userInput.trim()==ans){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect Response! Please Try Again!!');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==ans){
                rl.close();
            }
            else{
                rl.setPrompt(`Your answer of ${ userInput } is incorrect try again`);
                rl.prompt();
            }
        })
    }
});


rl.on('close',()=>{
    console.log('Correct!!!!!');
});