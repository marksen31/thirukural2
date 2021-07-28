const api = 'https:api-thirukkural.vercel.app/api?num='




async function getData() {
    var id = document.getElementById('id').value
console.log(api+id)

if(id<=1330){
    try {
        let res = await fetch(api+id)
        let data = await res.json()
        console.log(data)
        display(data)
    } catch (error) {
        console.log(error)
    }
}
else{
    alert("Please Enter value from 1 to 1330")
}

}

function display(data){
    let row = document.getElementById('row')

    row.innerHTML=`
    <div class="row" id="row" >
    <div class="col-4 mb3">
                <div class="card h-100">
                    <div >
                   <p> <h3> Kural No:${data.number} </h3></p>
                   <p> <h4 style="font-weight: bold;">${data.chap_tam}</h4></p>
                   <p> <h5>${data.line1}</h5></p>
                   <p> <h5>${data.line2}</h5></p>
                   <p>விளக்கம்: ${data.tam_exp}</p>
                   <p>பால்: ${data.sect_tam}</p>
                   <p>அதிகாரம்: ${data.chapgrp_tam}</p>
                   <p><h3>English Translation</h3></p>
                     <p><h4>${data.chap_eng}</h4></p>
                     <p>English: ${data.eng}</p>
                     <p>English Explanation: ${data.eng_exp}</p>
                     <p>Section Name: ${data.sect_eng}</p>
                   <p>Chapter Group Name: ${data.chapgrp_eng}</p>
                     </div>
                 </div>
             </div>
             </div>`
             
}
