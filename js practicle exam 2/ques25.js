let n = parseInt(prompt("Enter a number"));

var j;
var count = 0;

for (j=1; j<=n; j++){
    if(n%j==0){
        count++;
    }
}

if(count<=2){
    console.log("Prime number");
}
else{
    console.log("Composite Number");
}