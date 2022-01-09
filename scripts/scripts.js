var btn = document.getElementById("btn")
var name_ = document.getElementById("name")
var welcome_name = document.getElementById("welcome_name_text")
var askName = document.getElementById("askName")
function changeName(){
    askName.style.cssText = 'display: none;';
    name_.style.cssText = 'display: none;';
    btn.style.cssText = 'display: none;';
     welcome_name.innerHTML = "Olá, "+ name_.value + "!"
     welcome_name.style.cssText = 'display: block;';
    
}