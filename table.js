/*
HTML:
<table>  
<tr class="clickable-row" data-href="link.html">  
<td>Row 1 Column 1</td>  
<td>Row 1 Column 2</td>  
</tr>  
<tr class="clickable-row" data-href="link2.html">  
<td>Row 2 Column 1</td>  
<td>Row 2 Column 2</td>  
</tr>  
</table> 
CSS:
.clickable-row { cursor: pointer; } 
JavaScript:
var table = document.getElementsByTagName("table")[0];  
 
var rows = table.getElementsByTagName("tr");  
 
for (var i = 0; i < rows.length; i++) {  
var currentRow = table.rows[i];  
var createClickHandler = function(row) { return function() {  
    var cell = row.getElementsByTagName("td")[0];  
    var id = cell.innerHTML;  
    window.location.href = "link.html";  
  };  
  };  
currentRow.onclick = createClickHandler(currentRow);  
} 

*/
//**************************************** */
/*
To make an entire table row clickable in HTML, you can use JavaScript and CSS to add an event listener to the row and change its style on hover or click. Here's an example:

<style> 
  tr:hover { 
    cursor: pointer; 
    background-color: #f5f5f5; 
  } 
</style> 
 
<table> 
  <tr onclick="location.href='http://example.com';"> 
    <td>Column 1</td> 
    <td>Column 2</td> 
    <td>Column 3</td> 
  </tr> 
</table> 

*/
//******************************* */
/*
To make an entire table row clickable in HTML, you can use JavaScript to add an event listener to the row that triggers a function when the row is clicked. Here is an example code:

<table> 
  <tr onclick="clickFunction()"> 
    <td>Row 1, Column 1</td> 
    <td>Row 1, Column 2</td> 
  </tr> 
  <tr onclick="clickFunction()"> 
    <td>Row 2, Column 1</td> 
    <td>Row 2, Column 2</td> 
  </tr> 
</table> 
 
<script> 
function clickFunction() { 
  // Your code here to handle the click event 
} 
</script> 


*/