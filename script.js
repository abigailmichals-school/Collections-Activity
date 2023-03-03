
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td>${item.title}</td>
            <td>${item.tagline}</td>
            <td> <img src='${item.image}'> </td>
            <td>${item.color}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});