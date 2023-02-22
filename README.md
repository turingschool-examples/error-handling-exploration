# Error Handling Exploration
---

## Backend Installation / Set up
1. git clone the repo
2. cd into the cloned repo
3. run npm install
4. run npm start. The server should be running locally on port 3001 - This is a local server. You will need to have it running in order to make calls to it.
You can make sure it's working by navigating to the endpoint you're trying to request in the browser (ie if you want to GET users, navigate to http://localhost:3001/api/v1/people in the browser).

## Frontend Setup

In the client directory, there are some files we can use as a makeshift client.

1. run open client/index.html from your command line
2. Modify the code in client/index.js or client/index.html to practice error handling!

## Get Familiar

🚨 Note: There is no live reloading on this repo, so you will have to refresh your browser any time you make changes to the JS. 

- Read through the GET and POST fetch request code in `index.js`.
- Play around with the UI. Add a new person using the form.
- When you add a new person, it should show up in the list! 
- Try adding a new person without filling out the form entirely. What happens? What do you see in the console? Does the `.catch` handle this error?
- There's another URL that is available in the index.js file. It will ALWAYS return a 500 level response. (See the endpoints documentation for more information). Try replacing the URL in the GET and POST requests with the testing url for a 500 level response (`testURL500`). What happens when you use the application? Does the `.catch` work for this? Is the error accurate in the alert?
- Try turning off your server. What happens when you use the application? Does the `.catch` work for this?
- Replace the url in the GET and POST reqeusts with the original, fully working URL (`peopleURL`)

## Challenge

1. Handle the 422 error that comes back when the form is submitted with an empty field(s), and display an informative message to the user on the DOM (get rid of the existing alert functionality).

2. How can you prevent the user from submitting the form with an empty field to begin with? Update the form to accomplish that.

3. Handle the case where something is wrong with the server. Display an informative message to the user on the DOM. This scenario could be caused by many things: maybe the server is completely down (try turning off your server), maybe the server is responding with a 500 status. Regardless of what's going on, the user needs to know that something is wrong. Tip: You can use the `testURL500` URL to see if it's working!

### People Endpoints

| url       | verb | options | sample response |
| ----------|------|---------|---------------- |
| `http://localhost:3001/api/v1/people`  | GET | not needed | Array of all existing users: `[{ id: 1, name: 'Bill', fun_fact: 'Knows how to juggle' }]` |
| `http://localhost:3001/api/v1/users`| POST | `{ id: <Number>, name: <String>, status: <String>, interests: <String> }` | New user: `{ id: 55, name: 'Fran', fun_fact: 'Has met a hippo' }` |

### Fake 500 Response Endpoints

| url       | verb | options | sample response |
| ----------|------|---------|---------------- |
| `http://localhost:3001/api/v1/500-response`  | GET | not needed | '500 Mock Internal Server Error |
| `http://localhost:3001/api/v1/500-response`| POST | '500 Mock Internal Server Error|