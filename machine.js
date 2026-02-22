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

function parseHTML(cardInfo){
    return `
        <div class="Card flex justify-between p-5">
            <!-- card left side element -->
            <div class="left space-y-3">
                <div>
                    <h2 class="companyName text-2xl font-bold">Mobile First Corp</h2>
                    <p class="position">React Native Developer</p>
                </div>
                <div class="flex gap-2">
                    <p class="location">Remote</p>
                    <p>.</p>
                    <p class="type">Full-time</p>
                    <p>.</p>
                    <p class="salary">$130,000-$175,000</p>
                </div>
                <div class="badge badge-soft badge-secondary">NOT APPLIED</div>
                <p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <div class="card-actions">
                    <button id="interview-btn" class="btn btn-outline btn-success">INTERVIEW</button>
                    <button id='rejected-btn' class="btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
            <!-- card right side delete element -->
            <div class="right delete border border-amber-700 w-10 h-10 flex items-center justify-center">
                <img class="delete" src="./Vector.png">
            </div>
            </div>
    `
}

