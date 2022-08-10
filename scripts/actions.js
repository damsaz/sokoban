

var H_P = {
  width: 0,
  height: 0,
}
var maprol=tileMap01.mapGrid;
let Gtags=[];
var moves=0;
function displayDate() {
  
}
function Drawing_map() {
  var height=tileMap01.height;
  var lengt=tileMap01.width;
  var element = document.getElementById("win");
  element.innerText=moves +"  moves";
   
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < lengt;j++) {
    var tag = document.createElement("div");
    tag.id="i"+i+"_"+j;
    if(maprol[i][j]!=" ")
    {
      if(maprol[i][j]=="G")
      {
        Gtags.push(tag.id);
      }
    tag.className=maprol[i][j];
    if(maprol[i][j]=="P"){
    H_P.height=i;
    H_P.width=j;
}
    }
    else
    tag.className="Empty";
    var element = document.getElementById("gametable");
    element.appendChild(tag);
  }
}

}
function isvalid(key) {
   
  let act=false;
  switch(key) {
    case "ArrowUp":
      if(maprol[H_P.height-1][H_P.width]!="W")
      act=true;
      if(maprol[H_P.height-1][H_P.width]=="B"){
        act=false;
        Movebox(key);
      }

      break;
    case "ArrowDown":
      if(maprol[H_P.height+1][H_P.width]!="W")
      act=true;
      if(maprol[H_P.height+1][H_P.width]=="B"){
        act=false;
        Movebox(key);
      }

      break;
      case "ArrowLeft":
        if(maprol[H_P.height][H_P.width-1]!="W")
        act=true;
        if(maprol[H_P.height][H_P.width-1]=="B"){
          act=false;
          Movebox(key);
        }

        break;
        case "ArrowRight":
          if(maprol[H_P.height][H_P.width+1]!="W")
          act=true;
          if(maprol[H_P.height][H_P.width+1]=="B"){
            act=false;
            Movebox(key);
          }

          break;
    default:
      act=false;
  }
  if(act)
  moves++;
  return act;
}


function Movebox(key) {

 var x,x2,x3;
 var element,element2;
  switch(key) {
    case "ArrowUp":
      if(maprol[H_P.height -2][H_P.width]!="W")
       if(maprol[H_P.height-2][H_P.width]!="B"){
        moves++;
        x2="i"+H_P.height+"_"+(H_P.width);
        x="i"+(H_P.height-1)+"_"+(H_P.width);  
        x3="i"+(H_P.height-2)+"_"+(H_P.width);
        element = document.getElementById(x);
        element2 = document.getElementById(x2);
        element3 = document.getElementById(x3);
        element.className="P";
        if(maprol[H_P.height -1][H_P.width]=="G")
        element3.className="G";
        else
        element3.className="B";
        element2.className="Empty";
        element.append();
        element2.append();
        element3.append();
        maprol[H_P.height-1][H_P.width]=" ";
        maprol[H_P.height-2][H_P.width]="B";
        H_P.height-=1;
       }
      break;
    case "ArrowDown":
      if(maprol[H_P.height +2][H_P.width]!="W")
       if(maprol[H_P.height+2][H_P.width]!="B"){
        moves++;
        x2="i"+H_P.height+"_"+(H_P.width);
        x="i"+(H_P.height+1)+"_"+(H_P.width);  
        x3="i"+(H_P.height+2)+"_"+(H_P.width);
        element = document.getElementById(x);
        element2 = document.getElementById(x2);
        element3 = document.getElementById(x3);
        element.className="P";
        element3.className="B";
        element2.className="Empty";
        element.append();
        element2.append();
        element3.append();
        maprol[H_P.height+1][H_P.width]=" ";
        maprol[H_P.height+2][H_P.width]="B";
        H_P.height+=1;
       }
      break;
      case "ArrowLeft":
        if(maprol[H_P.height][H_P.width-2]!="W")
       if(maprol[H_P.height][H_P.width-2]!="B"){
        moves++;
        x2="i"+H_P.height+"_"+(H_P.width);
        x="i"+(H_P.height)+"_"+(H_P.width-1);  
        x3="i"+(H_P.height)+"_"+(H_P.width-2);
        element = document.getElementById(x);
        element2 = document.getElementById(x2);
        element3 = document.getElementById(x3);
        element.className="P";
        element3.className="B";
        element2.className="Empty";
        element.append();
        element2.append();
        element3.append();
        maprol[H_P.height][H_P.width-1]=" ";
        maprol[H_P.height][H_P.width-2]="B";
        H_P.width-=1;
      }
        break;
        case "ArrowRight":
          if(maprol[H_P.height][H_P.width+2]!="W" )
          if(maprol[H_P.height][H_P.width+2]!="B"){
            moves++;
            x2="i"+H_P.height+"_"+(H_P.width);
            x="i"+(H_P.height)+"_"+(H_P.width+1);  
            x3="i"+(H_P.height)+"_"+(H_P.width+2);
            element = document.getElementById(x);
            element2 = document.getElementById(x2);
            element3 = document.getElementById(x3);
            element.className="P";
            element3.className="B";
            element2.className="Empty";
            element.append();
            element2.append();
            element3.append();
            maprol[H_P.height][H_P.width+1]=" ";
            maprol[H_P.height][H_P.width+2]="B";
            H_P.width+=1;
          }
          break;
    default:
      
  }
  

}

function move(key) {
  var x = {
    width: 0,
    height: 0,
  }
  var x2 = {
    width: 0,
    height: 0,
  }
  
 if(isvalid(key)){
 if(key=="ArrowUp"){
   x.height=(H_P.height-1);x.width=(H_P.width);
   x2.height=H_P.height;
   x2.width=(H_P.width);
   H_P.height-=1;
  
 }
 if(key=="ArrowDown"){
  x.height=(H_P.height+1);x.width=(H_P.width);
  x2.height=H_P.height;
  x2.width=(H_P.width);
  H_P.height+=1;
}
if(key=="ArrowLeft"){
  x.height=H_P.height;
  x.width=(H_P.width-1);
  x2.height=H_P.height;
  x2.width=(H_P.width);
  H_P.width-=1;
}
if(key=="ArrowRight"){
   x.height=(H_P.height);x.width=(H_P.width+1);
    x2.height=H_P.height;
   x2.width=(H_P.width);
  H_P.width+=1;
}
     var element = document.getElementById("i"+x.height+"_"+x.width);
     var element2 = document.getElementById("i"+x2.height+"_"+x2.width);
     element.className="P";
     element2.className="Empty";
     maprol[x2.height][x2.width]=" ";
     element.append();
     element2.append();
     
    }
}
window.onload=  Drawing_map();
window.on=  displayDate();
document.addEventListener('keydown', (event) => {
  var name = event.key;
  

  move( event.key);
  Gol();
  var element = document.getElementById("win");
  element.innerText=moves +"  moves";
}, false);


function Gol() {
  let winner =true;
  for (let i = 0; i < Gtags.length; i++) {
  
    element = document.getElementById(Gtags[i]);
    if(element.className!="G")
    {
      switch(element.className) {
        case "Empty":
          element.className="G";
          break;
        case "B":
          element.className="GD";
          break;
          case "P":
            element.className="PD";
            break;
        default:
          // code block
      }
 
    }

  
  }
  for (let i = 0; i < Gtags.length; i++) {
      
    element = document.getElementById(Gtags[i]);
    if(element.className!="GD")
    {
      winner=false;
    }
  }
  if(winner)
  alert("you won!! by" +moves+" moves")
}
window.onscroll = () => { window.scroll(0, 0); }; 