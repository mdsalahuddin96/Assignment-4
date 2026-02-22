function getElement(id){
    return document.getElementById(id);
}

function getElementValue(id){
    const number=document.getElementById(id).innerText;
    return Number(number);
}
function setValue(id,value){
    document.getElementById(id).innerText=value;
}

function getText(parent, selector){
    const el = parent.querySelector(selector);
    return el ? el.innerText : "";
};

function getCardInfo(event){
    const left=event.target.closest(".Card").children[0];
    const companyName=getText(left,'.companyName');
    const position=getText(left,'.position');
    const location=getText(left,'.location');
    const type=getText(left,'.type');
    const salary=getText(left,'.salary');
    const badge=getText(left,'.badge');
    const description=getText(left,'.description');
    const cardInfo={
        companyName,
        position,
        location,
        type,
        salary,
        badge,
        description
    }
    return cardInfo;
}
function parseHTML(cardInfo){
    return `
        <div class="Card flex justify-between p-5">
            <!-- card left side element -->
            <div class="left space-y-3">
                <div>
                    <h2 class="companyName text-2xl font-bold">${cardInfo.companyName}</h2>
                    <p class="position">${cardInfo.position}</p>
                </div>
                <div class="flex gap-2">
                    <p class="location">${cardInfo.location}</p>
                    <p>.</p>
                    <p class="type">${cardInfo.type}</p>
                    <p>.</p>
                    <p class="salary">${cardInfo.salary}</p>
                </div>
                <div class="badge badge-soft badge-secondary">${cardInfo.badge}</div>
                <p class="description">${cardInfo.description}</p>
                <div class="card-actions">
                    <button id="interview-btn" class="btn btn-outline btn-success">INTERVIEW</button>
                    <button id='rejected-btn' class="btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
            <!-- card right side delete element -->
            <div class="right delete border border-gray-400 w-7 h-7 rounded-md flex items-center justify-center">
                <img class="delete" src="./Vector.png">
            </div>
            </div>
    `
}

