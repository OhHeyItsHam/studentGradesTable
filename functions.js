var rows = 1;
var cols = 2;
var cells = 4;
var assignNo = 1;
var cookieS = "";
var cookieNo = 0;
var checked = true;
var deleteRow = false;


avgFunction = function() {
	var Table = document.getElementById('myTable');
    var rowLength = Table.rows.length;
  	
    for(i=1;i<rowLength;i++){
    	var tableCells = Table.rows.item(i).cells;
    	var sum = 0;
    	for(j=2;j<tableCells.length;j++){
        	var cellVal = tableCells.item(j).innerHTML;	
        	var currentCell = parseInt(cellVal);
        	if(currentCell >= 0 && currentCell <101){
        		sum += currentCell;
        	}
        }
        var cells = j-3;
        var average = sum/cells;
        if(average >=0 && average < 41){
        	tableCells.item(j-1).style.backgroundColor = "#FC6E44";
        }
        tableCells.item(j-1).innerHTML = Math.round(average) +"%";
        tableCells.item(j-1).contentEditable = "false";
    }
   
}

addRow = function() {
	rows++;
	var table = document.getElementById('myTable');
    var row = table.insertRow(rows);
    for(i=0;i<cells;i++){
    	var cell = row.insertCell(i);
    	if(i==0){
        	cell.innerHTML = "Student" + " " + rows;
            cell.addEventListener("click",test);
        }
        else if(i==1){
    		cell.innerHTML = "1234000" + rows-1;
        }
        
        else{
        	cell.innerHTML = '-';
        }
        
       }
}

addColumn = function() {
	cols++;
    cells++;
    assignNo++;
    var table = document.getElementById('myTable');
    var row = table.rows.length;
    for(i=0;i<rows+1;i++){
    	var cell = table.rows.item(i).insertCell(cols);
        if(i==0){
        	cell.innerHTML = '<div class="heading">Assignment</div>';
        }
        else{
        	cell.innerHTML = '-';
        }
    }
 
}

test = function() {
	var Table = document.getElementById('myTable');
    var redBtn = document.getElementById('Deletebtn');
    if(checked){
    	Table.rows.item(1).style.backgroundColor="yellow";
            checked = false;
            deleteRow = true;
            
    		redBtn.style.background = "red";
    }
    else{
    	Table.rows.item(1).style.backgroundColor="white";
        checked = true;
        redBtn.style.background = "#FF8E9F";
    }

}



