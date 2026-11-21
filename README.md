<<<<<<< HEAD
# 🚀 DockMind AI

> **AI-Powered Document Assistant using RAG (Retrieval-Augmented Generation)**

DockMind AI is a modern full-stack AI application that allows users to upload PDF documents, ask natural language questions, and receive context-aware answers powered by Google's Gemini AI and Retrieval-Augmented Generation (RAG).

The application extracts document text, splits it into semantic chunks, generates vector embeddings, stores them in MongoDB Atlas, retrieves the most relevant context using Vector Search, and generates accurate AI responses using Gemini.

---

## 🌐 Live Demo

### Frontend
https://dock-mind-ai.vercel.app

### Backend API
https://dockmind-ai-backend.onrender.com

---

## 📂 GitHub Repository

https://github.com/GitWithKomal/DockMind-AI

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 📄 PDF Upload
- 🧠 AI-powered Question Answering
- 📚 Retrieval-Augmented Generation (RAG)
- 🔎 MongoDB Atlas Vector Search
- 💬 Persistent Chat History
- 📝 Conversation Rename
- 🗑 Conversation Delete
- 📱 Fully Responsive UI
- ⚡ Fast PDF Processing
- 🔒 Protected Routes
- 🎨 Modern Dark UI

---

# 🏗 Architecture

```
                React + Vite
                      │
                      │
              Axios REST API
                      │
                      ▼
             Express.js Backend
                      │
      ┌───────────────┼───────────────┐
      │               │               │
      ▼               ▼               ▼
 PDF Processing   Gemini API    MongoDB Atlas
      │               │               │
      ▼               ▼               ▼
 Text Chunking   Embeddings    Vector Database
      │               │               │
      └───────────────┼───────────────┘
                      ▼
               RAG Retrieval
                      ▼
             AI Generated Answer
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hook Form
- React Markdown
- React Hot Toast
- Framer Motion
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- Google Gemini AI
- LangChain Text Splitter

---

## AI Technologies

- Retrieval-Augmented Generation (RAG)
- Gemini Embeddings
- MongoDB Vector Search
- Semantic Search

---

## DevOps & Containerization

DockMind AI is containerized using Docker and Docker Compose for consistent local development and production-style deployment.

### Docker Implementation

- Created separate Dockerfiles for the Node.js/Express backend and React frontend.
- Used `node:24-alpine` for the backend container.
- Used Nginx to serve the production-built React frontend.
- Used Docker Compose to orchestrate the frontend and backend services.
- Configured environment variables through Docker Compose.
- Configured port mapping:
  - Frontend: `3000:80`
  - Backend: `5000:5000`
- Added Docker health checks for the backend service.
- Configured `restart: unless-stopped` for service recovery.
- Tested container lifecycle operations including build, start, stop, logs, restart and recovery.
- Verified MongoDB Atlas connectivity from the containerized backend.

### Docker Compose Architecture

```text
                    Browser
                       |
                 localhost:3000
                       |
                +--------------+
                |   Frontend   |
                | React + Nginx|
                +--------------+
                       |
                  API Requests
                       |
                 localhost:5000
                       |
                +--------------+
                |   Backend    |
                | Node/Express |
                +--------------+
                    /       \
                   /         \
                  v           v
          MongoDB Atlas    Gemini API

---

# 📁 Project Structure

```
DockMind-AI
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   └── server.js
│
├── docker-compose.yml
├── LICENSE
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/GitWithKomal/DockMind-AI.git

cd DockMind-AI
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

GEMINI_MODEL=gemini-embedding-001
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 🚀 Deployment

## Frontend

- Vercel

## Backend

- Render

## Database

- MongoDB Atlas

---

# 🔒 Authentication Flow

```
User Login
     │
     ▼
JWT Token Generated
     │
     ▼
Stored in Local Storage
     │
     ▼
Axios Interceptor
     │
     ▼
Protected API Routes
```

---

# 🧠 RAG Workflow

```
Upload PDF
      │
      ▼
Extract Text
      │
      ▼
Chunk Text
      │
      ▼
Generate Embeddings
      │
      ▼
Store in MongoDB Atlas
      │
      ▼
User Question
      │
      ▼
Vector Search
      │
      ▼
Retrieve Relevant Chunks
      │
      ▼
Gemini AI
      │
      ▼
Final Answer
```

---

# 📌 Future Improvements

- Source Citation
- Streaming AI Responses
- Multi-file Chat
- OCR Support
- Image Understanding
- Chat Export
- Dark / Light Theme
- Admin Dashboard
- Docker Deployment
- CI/CD Pipeline
- Unit Testing
- Rate Limiting

---

# 👩‍💻 Author

**Komal Nimje**

MCA Graduate | Full Stack Developer | AI Enthusiast

GitHub

https://github.com/GitWithKomal

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.

---

# 📄 License

This project is licensed under the MIT License.
=======
# aiPdf
ai pdf assistant project 2
>>>>>>> 042ff2abd341917201207778baca3cfb9d9ac214
