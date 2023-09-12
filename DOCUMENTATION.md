# API DOCUMENTATION

This document provides detailed information about the Node.js API for managing "Person" resources. Please refer to the following sections for information on requests, responses, sample usage, limitations, and deployment instructions.

## Standard Formats

The API follows standard RESTful conventions for requests and responses:

### Create a Person
**Request Format (POST /api)**
```json
{
  "name": "John Doe"
}
```
**Response Format (200 /OK)**
```json
{
  "_id": "6897373************",
  "name": "John Doe"
}

```
**Error Response Format (4xx or 5xx)**
```json
{
  "error": "Error message"
}

```

### Get a Person
**Request Format (GET /api/:user_id)**
- :user_id is the ID of the person.

**Response Format (200 /OK)**
```json
{
  "_id": "6897373************",
  "name": "John Doe"
}

```
**Error Response Format (4xx or 5xx)**
```json
{
  "error": "Error message"
}

```

### Update a Person
**Request Format (PUT /api/:user_id)**
- :user_id is the ID of the person.
```json
{
"name": "Updated Name"
}
```
**Response Format (200 /OK)**
```json
{
  "_id": "6897373************",
  "name": "Updated Name"
}

```
**Error Response Format (4xx or 5xx)**
```json
{
  "error": "Error message"
}

```

### Delete a Person
**Request Format (DELETE /api/:user_id)**
- :user_id is the ID of the person.

**Response Format (200 /OK)**
```json
{
  "message": "User successfully deleted"
}

```
**Error Response Format (4xx or 5xx)**
```json
{
  "error": "Error message"
}

```

## Sample Usage

Here are some examples of how to use the API:

### Create a Person
**Request (POST /api)**
```json
{
  "name": "Chukwuma Oyinkansola"
}
```
**Response (200 /OK)**
```json
{
  "_id": "650004116d21bb22d046f9cc",
  "name": "Chukwuma Oyinkansola"
}

```

### Get a Person
**Request (GET /api/650004116d21bb22d046f9cc)**

**Response (200 /OK)**
```json
{
  "_id": "650004116d21bb22d046f9cc",
  "name": "Chukwuma Oyinkansola"
}

```

### Update a Person
**Request Format (PUT /api/650004116d21bb22d046f9cc)**
```json
{
"name": "Dolapo Ighodaro"
}
```
**Response  (200 /OK)**
```json
{
  "_id": "650004116d21bb22d046f9cc",
  "name": "Dolapo Ighodaro"
}

```

### Delete a Person
**Request  (DELETE /api/650004116d21bb22d046f9cc)**

**Response Format (200 /OK)**
```json
{
  "message": "User successfully deleted"
}

```

## Limitations and Assumptions

- This API assumes a valid MongoDB connection URL in the .env file for database connectivity.

- Error responses provide basic error messages and may not cover all possible edge cases.


## Local Setup and Deployment

Follow these steps to set up and deploy the API locally:

1. Clone the repository: `git clone https://github.com/samuelorobosa/hngx2.git`
2. Install dependencies: `npm install`
3. Configure environment variables: Create a .env file and define MONGO_URL as described in the "Readme" section.
4. Make sure the Mongo credentials are valid
5. Run the API: `npm start`
6. The API will be accessible locally at `http://localhost:8000`.

##  Happy Hacking!