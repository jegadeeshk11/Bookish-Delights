var add = document.querySelector(".btnadding")
var box = document.querySelector(".boxadd")
add.addEventListener("click",function(){
    
    
box.style . display = "block"
})

var canceltn = document.querySelector(".cancel")
canceltn.addEventListener("click",function(event) {
    event.preventDefault()
    box.style.display ="none"
})

var conting = document.querySelector(".container")
var bookadd = document.querySelector(".add-book")
var bookname = document.getElementById("book-name")
var bookauthor = document.getElementById("book-author")
var textplace = document.querySelector(".text-place")
var addbtning = document.querySelector(".addopn")
var addcount = document.querySelector(".cont1")

addbtning.addEventListener("click",function(event){
event.preventDefault()
var newbtn = document.createElement("div")
newbtn.setAttribute("class","cont1")
newbtn.innerHTML=`<h2>${bookname.value}</h2>
<h4>${bookauthor.value}</h4>
<p>${textplace.value}</p>
<br><button onclick="delbtn(event)">Delete</button>
`
conting.append(newbtn)
box.style.display ="none"

})

function delbtn(event){
event.target.parentElement.remove()
}