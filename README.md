# Stage 0 – Profile Endpoint API

## 🚀 Overview

This project is a simple RESTful API built using **NestJS**. It exposes a single endpoint **GET /me**, which returns profile information along with a **dynamic cat fact** fetched from an external API (`https://catfact.ninja/fact`).

This task showcases the ability to:

* Consume third-party APIs
* Format and return structured JSON responses
* Handle external API errors gracefully
* Use environment variables and best backend practices

---

## ✅ Features

* Dynamic **cat fact** fetched on every request
* Returns current **UTC timestamp** in ISO 8601 format
* Structured JSON response following defined schema
* Uses **NestJS HttpModule** and **ConfigModule (.env support)**
* Graceful fallback when external API fails

---

## 📡 API Endpoint

| Method | Endpoint | Description                                   |
| ------ | -------- | --------------------------------------------- |
| `GET`  | `/me`    | Returns profile details and a random cat fact |

### ✅ Example Response

```json
{
  "status": "success",
  "user": {
    "email": "you@example.com",
    "name": "Your Full Name",
    "stack": "NestJS / TypeScript"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

---

## 🛠️ Tech Stack

* **NestJS** (TypeScript)
* **HttpModule** for API requests
* **ConfigModule** for environment variables

---

## 📂 Project Setup

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```
EMAIL=you@example.com
FULLNAME=Your Name
STACK=NestJS Developer
PORT=3000
```

### 4️⃣ Run Locally

```bash
npm run start:dev
```

> Server will start at: `http://localhost:3000/me`

---

## 🌍 Deployment

* Hosted on **Railway**
* Ensured environment variables are properly configured on the hosting platform.

---

## 🧠 Lessons & Best Practices Applied

* Using `HttpService` with `firstValueFrom` for API integration
* Handling API errors with `try/catch`
* Clean controller-service separation
* Dynamic timestamp generation using `toISOString()`
* Environment variables managed via `ConfigModule`

---

## 🧪 Tested the Endpoint

Tested using **Postman**

```
GET http://localhost:3000/me
```

Ensured:

* Response format matches the project stated schema ✅
* Timestamp updates on every request ✅
* Cat fact is dynamic ✅
* `Content-Type` is `application/json` ✅

---

## 📝Tasks Done

* ✅ Fully working `/me` endpoint with error handling
* ✅ Hosted API online
* ✅ Provided GitHub repo with README
* ✅ Publish write-up on **LinkedIn / Dev.to / Hashnode / X / Medium** explaining:

  * thought process
  * Screenshots

---

Backend Wizard 🧙‍♂️🔥

---

