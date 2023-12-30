document.write(" the program takes a random integer between 1 and 10 to print 'good morning'  else 'not matched'"+"<br>");
function test8(num){
    for(let i=1;i<=10;i++){
        if(i==num)
        {
            return "Good Morning";
        }
    }
    return "Not matched";
}    
document.write("num=10"+"<br>")
document.write(test8(10)+"<br><br>");