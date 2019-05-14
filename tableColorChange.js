function changeColor(color,id,number) {
   var tbl = document.getElementById(id);
   // 行に対するループ
   var rows = tbl.rows;
   var count = 0;
   for (var i=0, len=rows.length; i<len; i++) {
     var cols = rows[i].cells.length;
     // 列に対するループ
     for (var j=0; j<cols; j++) {
     	if(rows[i].cells[j].innerText>number)
     	{		
       		rows[i].cells[j].style.color = color;
       		count=count+1;
       	}
     }
   }  
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Colored:"+count); 
  newDiv.appendChild(newContent);
  newDiv.classList.add("new");
  newDiv.style.textAlign = "right";
  var currentDiv = document.getElementById(id); 
  currentDiv.appendChild(newDiv);
  document.body.insertBefore(newDiv, null); 

}
