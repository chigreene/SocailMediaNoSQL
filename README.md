# NoSQL Social Media Database

## Description

This app is created using MongoDB for the database, Mongoose ODM, and ExpressJS for routing. The app creates the backend of a social media site and can handle large amounts of unstructured data. The database has models for USERS and THOUGHTS. A schema exists to create reactions to thoughts. The server allows users preform all CRUD operations for USERS and THOUGHTS. The reaction schema is a subdocument of the THOUGHT model. Users are able to add and delete reactions to thoughts. Users are able to add and delete friends.

- My motivation was to learn to use MongoDB and Mongoose to create a NoSQL database

- I built this project as a precursor to a group project I am working on.

- This app solves the problem of handling large amounts of unstructured data.

- What I learned is how create and query a database using MongoDB, Mongoose, and ExpressJS. In doing so I learned about subdocuments, embedded documents, virtuals, and various querying methods.

## Usage

![Screenshot of querying database in Insomnia and database in MongoDB Compass](<./media/Screenshot (70).png>)

To use the app you need way to test API routes like Insomnia. If you want to view the data in the database with out using API calls through Insomnia you will need MongoDB Compass.

Walkthrough link: https://drive.google.com/file/d/1oiOR0F6VNpX_Le5MYVEIedrvUww6Q2oN/view

GitHub Link: https://github.com/chigreene/SocailMediaNoSQL

## Credits

Ross, Matt, EdX, MongoDB, Mongoose, ChatGPT
