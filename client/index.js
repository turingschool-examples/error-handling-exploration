// General GET, POST URL 
// This url should always work and will only send you a 400 level response if data is missing from the request. (test by leaving a field blank when in the form)
const peopleURL = 'http://localhost:3001/api/v1/people';

// This url will always give you a 500 level response. Use it to test your error handling!
const testURL500 = 'http://localhost:3001/api/v1/500-response';

// To test other errors, turn off your server and use the app in the UI. 

// ---------------------------------------- //

// QUERY SELECTORS
const peopleSection = document.querySelector('.people');
const form = document.querySelector('.new-person-form');

// GET REQUEST
const getAllPeople = () => {
  fetch(peopleURL)
  .then(response => response.json())
  .then(peopleData => renderPeople(peopleData))
  .catch((error) => alert(error));
}

// POST REQUEST
const addPerson = (newPerson) => {
  fetch(peopleURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPerson)
  })
  .then(response => response.json())
  .then(person => updatePeopleHTML(person))
  .catch((error) => alert(error));
}

const renderPeople = (people) => {
  people.forEach((person) => updatePeopleHTML(person));
}

const updatePeopleHTML = (person) => {
  peopleSection.innerHTML += `<p>${person.name}: ${person.fun_fact}</p>`
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newPerson = {
    id: peopleSection.childElementCount + 1,
    name: formData.get('name'),
    fun_fact: formData.get('fun_fact')
  };
  addPerson(newPerson);
  e.target.reset();
});

// load the app:
getAllPeople();