# CareNova - Disease Prediction System

A full-stack web application that uses AI/ML to predict diseases based on symptoms and vital signs.

## ⚡ Start Locally

From the project root, install dependencies once:

```bash
cd /f/minor\ project
cp .env.example .env
cd frontend
npm install
cd ../backend
npm install
cd disease_model
python -m venv ../../.venv
../../.venv/Scripts/python.exe -m pip install -r requirements.txt
```

Open three terminals and start the services:

**Terminal 1 — Flask model service**

```bash
cd /f/minor\ project
cd backend/disease_model
../../.venv/Scripts/python.exe model_server.py
```

**Terminal 2 — Express backend**

```bash
cd /f/minor\ project
cd backend
npm start
```

**Terminal 3 — React frontend**

```bash
cd /f/minor\ project
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser. The backend runs on port `4000` and the model service runs on port `5000`.

## 🚀 Features

- **AI-Powered Diagnosis**: Machine learning model for disease prediction
- **Comprehensive Health Assessment**: Vital signs and symptom analysis
- **Responsive Design**: Mobile-friendly interface
- **Real-time Health Monitoring**: Service status indicators

## 🛠️ Tech Stack

### Frontend
- React 19 with Vite
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT authentication
- CORS enabled
- Environment-based configuration

### AI/ML Service
- Python Flask server
- Scikit-learn for ML models
- Pandas for data processing
- NumPy for numerical computations

## 📦 Project Structure

```
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── api/        # API service functions
│   │   └── styles/     # CSS styles
│   ├── public/         # Static assets
│   └── package.json
├── backend/            # Express.js backend
│   ├── routes/         # API route handlers
│   ├── models/         # MongoDB schemas
│   ├── middleware/     # Custom middleware
│   ├── disease_model/  # ML model service
│   └── server.js       # Main server file
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MongoDB database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YuvrajD02/minor.git
   cd minor
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # The shared .env file is created from .env.example in the Start Locally section
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

4. **Setup Python ML Service**
   ```bash
   cd backend/disease_model
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:4000
   ```

2. **Start the AI Model Service**
   ```bash
   cd backend/disease_model
   python model_server.py
   # Service runs on http://localhost:5000
   ```

3. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   # Application runs on http://localhost:5173
   ```

## 🔧 Environment Variables

Create one `.env` file in the repository root. It is shared by the frontend and backend:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_FRONTEND_URL=http://localhost:5173
PORT=4000
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:4000
AI_SERVICE_URL=http://localhost:5000
MONGO_URI=
```

## 🧪 API Endpoints

### Prediction
- `POST /api/predict` - Disease prediction
- `GET /api/predict/health` - Service health check

### Other


## 🤖 ML Model

The system uses a trained machine learning model that analyzes:
- **Vital Signs**: Age, heart rate, temperature, blood pressure, oxygen saturation
- **Symptoms**: Fever, cough, headache, fatigue, and more
- **Demographics**: Age and gender factors

## 🚀 Deployment

Recommended free deployment:

1. **Netlify** for the React frontend.
2. **Render Web Service** for the combined Express backend and Flask model.

The repository includes `netlify.toml` for the frontend and `render.yaml` for the combined backend service. A Dockerfile packages Node.js and Python together, and the Flask model runs privately inside the same Render service, so users need only one public backend URL.

Deploy the frontend, Express backend, and Flask model service as separate services.
Do not deploy `.env`; set environment variables in the hosting provider:

- Netlify frontend: `VITE_BACKEND_URL`
- Backend: `AI_SERVICE_URL`, `FRONTEND_URL`, and `PORT`
- Optional backend database: `MONGO_URI`

After deployment, set these values:

```text
Netlify VITE_BACKEND_URL=https://<your-backend>.onrender.com
Render backend FRONTEND_URL=https://<your-site>.netlify.app
Render backend AI_SERVICE_URL=http://127.0.0.1:5000
```

Free Render services can sleep when inactive, so the first request after inactivity may be slow. Netlify serves the frontend quickly; paid always-on backend/model instances are required for consistently fast API responses.

See `PRODUCTION_READINESS.md` for deployment variables and verification steps.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for educational and informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns.

## 👥 Team

- **Yuvraj D** - [@YuvrajD02](https://github.com/YuvrajD02)

## 🙏 Acknowledgments

- Machine learning models and algorithms
- Healthcare data providers
- Open source community