let num=prompt("Enter the number:")
if (num>=1 && num<=1000000){
    document.write(num)
}
else{
    alert("Invalid number")
}

let sum=0
for(i=1;i<=num;i++)
{
sum=sum+i;


}
document.write("sumof number up to",num," is:",sum)
