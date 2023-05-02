

let arr = [0,0,0,0,0,0,0,0,0];
let x = "X";
let o = "O";
let counter = 0;
for (let i = 1; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener("click", () =>{
        if(counter % 2 === 0 ){
            document.getElementById(i.toString()).innerHTML = x;
            document.getElementById(i.toString()).style.color= "red";
            document.getElementById(i.toString()).style.background = "blue";
            arr[i-1] = 1;
        }else {
            document.getElementById(i.toString()).innerHTML = o;
            document.getElementById(i.toString()).style.color = "green";
            document.getElementById(i.toString()).style.background = "yellow";
            arr[i-1] = 2;
        }
        counter++;
        alert(arr);
    });
}

function isWin (){

}


