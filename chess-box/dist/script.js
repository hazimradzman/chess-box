var numLine = 15;

for(var i=0;i<9;i++){
for(var j=0;j<9;j++){
  if((i%2==0 && j%2==0) || (i%2==1 && j%2==1)){
    document.write("#");
  }
  else{
    document.write("0")
  }
}   
    document.write("<br/>")
}