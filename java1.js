let name = prompt("What is your name?");
let catConfirm = confirm("Do you like cats?");
catName = "Messi Tuxedo5";
catName2 = "My pet is cat";
catAge = "My pet is not 7th years old";
catAge2 = "My pet is 5 years old";
catInfo = "you don't get my cat's information";
if (catConfirm){
    alert(catName);
    alert(catName2);
    alert(catAge);
    alert(catAge2);
} 
else{
    alert(catInfo);
    alert(catName2);
    alert(catAge);
    alert(catAge2);
}


let catAdd = prompt("How old is your cat?");
age = 2;

if(catAdd){
    alert(age);
    alert(age + catAdd);
    alert(parseInt(catAdd)+ age);
    
}else{
    alert(age);
    alert("NaN");
}
document.write("Welcome to my page" + name);


  