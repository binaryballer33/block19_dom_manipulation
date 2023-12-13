const freelancers = [];
const names1 = prompt('Please Enter A List Of Names Separated By Commas', "Kerry,Terry,Barry,Larry,Mary,Perry").split(',');
const names2 = prompt('Please Enter A List Of Names Separated By Commas', "Lonny,Ronny,Donny,Konny,Bonny").split(',');
const occupations = prompt('Please Enter A List Of Occupations Separated By Commas', "Programmer,Model,Rapper,Athlete,Doctor").split(',');
const salaries = prompt('Please Enter A List Of Salaries Separated By Commas', "40000,75000,100000,500000,1000000")
    .split(',')
    .map(salary => parseInt(salary))
    .map(salary => salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

const populateFreelancers = (freelancers) => {
    const names = Math.random() > 0.5 ? names1 : names2;
    for( let i = 0; i < 5; i++ ) {
        const freelancer = {
            name: names[Math.floor(Math.random() * names.length)],
            salary: salaries[Math.floor(Math.random() * salaries.length)],
            occupation: occupations[Math.floor(Math.random() * occupations.length)],
        };
        freelancers.push(freelancer);
    }
}

const createFreelancerHtml = (freelancer) => {
    return `
        <div class="freelancers">
            <h1>${freelancer.name}</h1>
            <h2>${freelancer.occupation}</h2>
            <h3>${freelancer.salary}</h3>
        </div>
        `
}

const populateFreelancerDiv = (freelancerDiv, freelancers) => { 
    freelancerDiv.innerHTML += `<div class="freelancersDiv">${freelancers.map(freelancer => createFreelancerHtml(freelancer)).join('')}</div>`
}

populateFreelancers(freelancers);
const freelancerDiv = document.getElementById('myPeople');
populateFreelancerDiv(freelancerDiv, freelancers);

const generateMorePeopleButtonDiv = document.getElementById('generateMorePeopleButtonDiv');
const generateMorePeopleButton = document.createElement('button');
generateMorePeopleButton.innerHTML = `<button id="generateMorePeopleButton">Generate More People</button>`
generateMorePeopleButton.addEventListener('click', () => {
    const freelancers = [];
    populateFreelancers(freelancers)
    populateFreelancerDiv(freelancerDiv, freelancers);
});
generateMorePeopleButtonDiv.appendChild(generateMorePeopleButton);
