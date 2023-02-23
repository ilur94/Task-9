

let income = prompt ("შეიყვანეთ თქვენი ხელფასი")

if ( income <1000){
    alert("დაბალი ხელფასი :(")
}
else if(income >=1000 && income <2000){
    alert("საშუალო ხელფასი")
}
else if (income >=2000 && income < 3500){
    alert("საშუალოზე მაღალი ხელფასი")
}
else{
    alert("მაღალი ხელფასი :)")
}



var array = [1,4,18,24,15,2,3,19,55];
for (var i = 0; i < array.length; i++)
{
    if (array[i] > 54)
        continue;
    document.write(array[i] + "</br>");
}
 