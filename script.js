function insert_Row() {
    //Write your code here
  let target = document.getElementById("sampleTable");
   let tr = document.createElement("tr");
   let td1 = "<td>New Cell1</td>";
   let td2 = "<td>New Cell2</td>";
   tr.insertAdjacentHTML("afterbegin" ,td1);
   tr.insertAdjacentHTML("beforeend" , td2);
   target.insertBefore(tr , target.childNodes[0]);
  
}
