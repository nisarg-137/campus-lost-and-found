let existingReports= JSON.parse(localStorage.getItem("allReports"))|| [];
function SubmitReport(event){
    event.preventDefault();
   
    let nameValue= document.getElementById("itemName").value
    let locValue= document.getElementById("location").value
    let statusValue= document.getElementById("status").value
   
    let newEntry= {name: nameValue, location: locValue, status: statusValue };
    existingReports.push(newEntry);
   
    localStorage.setItem("allReports", JSON.stringify(existingReports));

    document.getElementById("output").innerText = "Successs! reported: "+ nameValue + " with status: " + statusValue;
}
function renderCards(){
    const lostContainer= document.querySelector('#Lost .cards-container')||
    document.querySelector('#Lost');
    const foundContainer= document.querySelector('#Found .cards-container')||
    document.querySelector('#Found');

    if (!lostContainer || !foundContainer) return;
    lostContainer.innerHTML=" ";
    foundContainer.innerHTML=" ";
    
    let allReports= JSON.parse(localStorage.getItem("allReports"))|| [];
    allReports.forEach((item, index) => {
        let cardHTML= `
            <div class="card">
                <h3>${item.name}</h3>
                <p>Location: ${item.location}</p>
                <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
                </div>
        `;
        if(item.status =="lost"){
            lostContainer.innerHTML += cardHTML;
        }
        else if (item.status == "found"){
            foundContainer.innerHTML += cardHTML;
        }
    });
}

function deleteItem(index){
    let allReports= JSON.parse(localStorage.getItem("allReports"))|| [];
    allReports.splice(index,1);
    localStorage.setItem("allReports", JSON.stringify(allReports));
}
renderCards();

