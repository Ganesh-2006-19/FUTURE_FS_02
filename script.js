let leads = JSON.parse(localStorage.getItem("leads")) || [];

function saveData() {
    localStorage.setItem("leads", JSON.stringify(leads));
}

function displayLeads() {
    let leadList = document.getElementById("leadList");

    leadList.innerHTML = "";

    leads.forEach((lead, index) => {
        leadList.innerHTML += `
        <div class="lead">
            <h3>${lead.name}</h3>
            <p>${lead.email}</p>
            <p>${lead.phone}</p>
            <p>Status: ${lead.status}</p>

            <button onclick="deleteLead(${index})">
                Delete
            </button>
        </div>
        `;
    });
}

function addLead() {

    let lead = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        status: document.getElementById("status").value
    };

    leads.push(lead);

    saveData();
    displayLeads();

    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
}

function deleteLead(index){
    leads.splice(index,1);
    saveData();
    displayLeads();
}

displayLeads();