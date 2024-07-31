let num=prompt("Enter the number:")
if (num>=1 && num<=1000000){
    console.log("Number:",num)
}
else{
    alert("Invalid number")
}

let sum=0
for(i=1;i<=num;i++)
{
sum=sum+i;


}
console.log("sumof number up to",num," is:",sum)