# BE-Mock-Controller

Let's say you're developing an application for an online notetaking service. You want to set up an API route to retrieve all existing notes. Use Express.js and the mock database technique with lowdb to implement this functionality.

Task:

1. create a new Express.js project.
2. install the required dependencies, including lowdb.
3. create a JSON file as a mock database to store notes. Initialize it with some sample data. (See example)
4. create a controller in the "controllers" directory of your project.
5. define a route for the GET method that listens to "/api/notes" and calls the corresponding controller.
6. in the controller, read all the notes from the mock database and return them as a JSON response.
7. test the implementation by starting the server and sending a GET request to "/api/notes". Verify that you received the saved notes as JSON.

Sample mock database

```json
{
    "content": [
        {
            "id": 1,
            "title": "Einkaufsliste",
            "content": "Milch, Eier, Brot"
        },
        {
            "id": 2,
            "title": "Meeting Notizen",
            "content": "Besprechung um 14:00 Uhr"
        },
        {
            "id": 3,
            "title": "Ideen für den Blog",
            "content": "Neuer Artikel: Die Bedeutung von künstlicher Intelligenz"
        }
    ]
}
```
