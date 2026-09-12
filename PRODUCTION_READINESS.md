# Production readiness

HealthCheck AI is split into three deployable services:

- `frontend/`: React/Vite application
- `backend/`: Express prediction API
- `backend/disease_model/`: Flask model code and trained pickle files

## Recommended free deployment

- Netlify hosts the frontend using `netlify.toml`.
- Render hosts one combined Express + Flask Docker service using `render.yaml` and `backend/Dockerfile`.
- Free services may sleep when inactive; the first request after inactivity can be slow.

## Local configuration

Use one ignored `.env` file in the repository root. Start from `.env.example`.

- Frontend reads `VITE_BACKEND_URL` through `frontend/vite.config.js`.
- Backend reads the same root file through `backend/server.js`.
- MongoDB is optional for the active prediction workflow.

## Deployment variables

Set these in the hosting provider; do not commit `.env`:

### Frontend

- `VITE_BACKEND_URL=https://<backend-host>`
- `VITE_FRONTEND_URL=https://<frontend-host>`

### Combined backend and model service

- `PORT` supplied by the host
- `NODE_ENV=production`
- `AI_SERVICE_URL=http://127.0.0.1:5000`
- `FRONTEND_URL=https://<frontend-host>`
- `MODEL_PORT=5000`
- `MONGO_URI` only if database features are enabled

The Docker service starts Flask with `backend/start_all.sh`. Flask listens only on `127.0.0.1:5000`, while Express listens on Render's public `PORT`.

## Verification

Before deployment, run:

- `npm run lint` and `npm run build` in `frontend/`
- `node --check server.js` and `node --check routes/predict.js` in `backend/`
- `python -m py_compile model_server.py` in `backend/disease_model/`
- `GET /` on the backend
- `GET /health` on the model service
- `GET /api/predict/health` on the backend

The prediction feature is informational and does not replace professional medical diagnosis or treatment.
