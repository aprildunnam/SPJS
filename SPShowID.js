<script language="javascript" type="text/javascript">
  
_spBodyOnLoadFunctionNames.push("showID");
  
function showID()
{
var querystring = location.search.substring(1, location.search.length);
var ids = querystring.split("&")[0];
var id = ids.split("=")[1];
var Td1 = document.createElement("td");
Td1.className = "ms-formlabel";
Td1.innerHTML ="<h3 class ='ms-standardheader'>ID</h3>";
var Td2 = document.createElement("td");
Td2.className =  "ms-formbody";
Td2.innerHTML = id;
var Tr1 = document.createElement("tr");
Tr1.appendChild(Td1);
Tr1.appendChild(Td2);
var Location = GetSelectedElement(document.getElementById("idAttachmentsRow"),"TABLE").getElementsByTagName("TBODY")[0];
Location.insertBefore(Tr1,Location.firstChild);
}
</script>