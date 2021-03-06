var lastResultInfinity = false;
var enterPremuto = false;

document.addEventListener('keydown', logKey);

function logKey(e) {
    var tastoPremuto=event.key;
    if(lastResultInfinity){
        document.getElementById("infinito").style.color="black";
        document.getElementById("result").innerText="";
        lastResultInfinity = false;
    }
    if(enterPremuto && tastoPremuto == "Enter"){
      return;
    }
    if(parseInt(tastoPremuto) || ["+","-","/","*","0","Enter","Backspace","Delete"].includes(tastoPremuto)){
      enterPremuto = false;
      switch(tastoPremuto){
        case "Backspace":
          var number = document.getElementById("result").innerHTML;
          numberUpdated = number.substring(0, number.length-1);
          document.getElementById("result").innerHTML=numberUpdated;
          break;
        case "Delete":
          document.getElementById("result").innerText="";
          break;
        case "Enter":
          y = document.getElementById("result").innerText;
          if(eval(y)=="Infinity"){
            document.getElementById("infinito").style.color="grey";
            //document.getElementById("infinito").style.width="100%";
            document.getElementById("result").style.textTransform="uppercase";
            //document.getElementById("result").style.fontFamily="Poppins, sans-serif";
            //document.getElementById("result").style.fontSize="100px";
            //document.getElementById("result").style.color="#110b1e";
            //document.getElementById("result").style.webkitTextStroke="0.3vw gold";
            document.getElementById("result").innerText=eval(y)+infinito;
            lastResultInfinity = true;
            
          }
          document.getElementById("result").innerText=eval(y);
          enterPremuto = true;
          break;
        default:
          document.getElementById("result").innerText+=tastoPremuto;
          break;
      }
    }
  }