// const allBtn=getElement('allBtn');
// const interviewBtn=getElement('interviewBtn');
// const rejectBtn=getElement('rejectBtn');
const interviewList=[];
const cardSection=getElement('card-container');
const noJobSection=getElement('no-job-section');
const allJobContainer=getElement('all-job-container');
const interviewSection=document.querySelector(".interview-section");


// Total update  
const totalCountValue=getElementValue('totalCount')
const totalJobs=allJobContainer.children.length;
setValue('totalCount',totalJobs);

// three button toggle
getElement('three-btn').addEventListener('click',(event)=>{
    const threeBtn=getElement('three-btn').children;
    if(event.target.tagName=='BUTTON'){
        for(let btn of threeBtn){
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-soft');
        }
        const selectedButton=event.target;
        selectedButton.classList.remove('btn-soft');
        selectedButton.classList.add('btn-primary');
    }
    
    if(event.target.id=='allBtn'){
        console.log(event.target.id);
        if(allJobContainer.children.length==0){
            allJobContainer.classList.add('hidden');
            interviewSection.classList.add('hidden');
            noJobSection.classList.remove('hidden');  
        }
        else{
            allJobContainer.classList.remove('hidden');
            noJobSection.classList.add('hidden');
            interviewSection.classList.add('hidden');
        }
        
    }
    if(event.target.id=='interviewBtn'){
        allJobContainer.classList.add('hidden');
        if(interviewList.length<1){
            noJobSection.classList.remove('hidden');
            interviewSection.classList.add('hidden');
        }
        else{
            interviewSection.classList.remove('hidden')
             noJobSection.classList.add('hidden');
        }
        
    }
    if(event.target.id=='rejectBtn'){
        console.log(event.target.id);
        allJobContainer.classList.add('hidden');
        noJobSection.classList.remove('hidden');
        interviewSection.classList.add('hidden');
    }
})

// All Job container;

allJobContainer.addEventListener('click',(event)=>{
    if(event.target.id=='interview-btn'){
        const cardInfo=getCardInfo(event)
        const exist=interviewList.find((item)=>item.companyName==cardInfo.companyName);
        if(!exist){
            interviewList.push(cardInfo);
        }
        else{
            alert('already selected!')
        }
        
        const interviewTotalCount=getElement('interviewCount');
        interviewTotalCount.innerText=interviewList.length;
        interviewSection.innerHTML="";
        for(const interview of interviewList){
            interviewSection.insertAdjacentHTML('beforeend',parseHTML(interview))
        }
    }
    if(event.target.className=='delete'){
       event.target.closest('.Card').remove()
       const totalJobs=allJobContainer.children.length;
       setValue('totalCount',totalJobs);
       if(totalJobs==0){
        allJobContainer.classList.add('hidden');
        noJobSection.classList.remove('hidden')
       }
    }
})
console.log(interviewList.length);
