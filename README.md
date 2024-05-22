# Sprint 7 project

## Description
This project is to check the hability of writing tests for GET, POST, PUT and DELETE requests. It includes functionalities to check order details such as delivery prices, delivery time and product lists. 

## Technologies and Techniques
- We used Node.js, Jest and Fetch API technologies in this project.

- General techniques used for writing tests:
** GET request is a test to fecthing data from the server.
** POST request is a test to create a new resource on the server.
** PUT request is a test to update an existing resource on the server.
** DELETE request is a test to delete a resource for the server.

- We used 'const' and 'let' variables. Using 'const' by default helps to make it clear that the value should not be reassigned and can help prevent accidental changes. Use 'let' if you know that the value of the variable will change during the course of the program. As in loops or when updating values conditionally.

## Running Tests
To run the tests for this project, use the following command:
npx jest tests/getHandlers.test.js
npx jest tests/postHandlers.test.js
npx jest tests/putHandlers.test.js
npx jest tests/deleteHandlers.test.js