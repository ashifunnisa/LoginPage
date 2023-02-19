function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","../Asset/IMAGES/monkey.jpg")
}
function hid()
{
        document.getElementById("b").setAttribute("src","../Asset/IMAGES/monkey1.jpg")
        document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="rama@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","./index.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=" "
    }
    else if(useremail!==email&& userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="purple"
        document.getElementById("result").innerHTML="Entered the wrong Email"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,red,yellow)"
        
    
    }
    else if(useremail==email&& userpass!==password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("email").style.borderColor="yellow"
        document.getElementById("result").innerHTML="Entered the wrong Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(105deg,green,red)"
    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").innerHTML="red"
        document.getElementById("result").innerHTML="Entered the wrong Email and  password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(105deg,brown,red)"

    }
    }



