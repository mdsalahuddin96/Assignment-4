const allBtn=document.getElementById('allBtn');
const interviewBtn=document.getElementById('interviewBtn');
const rejectBtn=document.getElementById('rejectBtn');
const cardSection=document.getElementById('card-container');
const noJobSection=document.getElementById('no-job-section');
interviewBtn.addEventListener('click',(event)=>{
    cardSection.classList.add('hidden');
    noJobSection.classList.remove('hidden');
    event.target.classList.remove('btn-soft')
    event.target.classList.add('btn-success')
    allBtn.classList.remove('btn-primary')
    allBtn.classList.add('btn-soft')
})
allBtn.addEventListener('click',()=>{
    cardSection.classList.remove('hidden');
    noJobSection.classList.toggle('hidden');
})