fetch("MOCK_DATA.json")

.then(function(response){
    return response.json();
})

.then(function(MOCK_DATA) {
    let placeholder = document.querySelector("#tableData");

    let out = "";

    for(let product of MOCK_DATA)
    {
        out += `
                    <tr>
                        <h1><td id="id">${product.id}</td></h1>
                        <td id="fname"><img src = "${product.img_src}">&nbsp;&nbsp; ${product.first_name} ${product.last_name}</td>
                        <td id="gender">${product.gender}</td>
                        <td id="class">${product.class}</td>
                        <td id="marks">${product.marks}</td>
                        <td id="passing">${product.passing}</td>
                        <td id="email">${product.email}</td>                       
                    </tr>
                `;
    }

    placeholder.innerHTML = out;

})

let increasingOrder = document.getElementById("increasingOrderBtn");
let decreasingOrder = document.getElementById("decreasingOrderBtn");
let marksSorting = document.getElementById("marksSortingBtn");
let passSorting = document.getElementById("passSortingBtn");
let classSorting = document.getElementById("classSortingBtn");
let genderSorting = document.getElementById("genderSortingBtn");


