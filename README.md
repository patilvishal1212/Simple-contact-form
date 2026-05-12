# Simple Contact Form

Simple full-stack project with a Python/Flask backend and a React/Vite frontend.

## Backend

1. Open a terminal in `backend`
2. Install dependencies:
   - `pip install flask flask-cors psycopg2`
3. Start the backend:
   - `python app.py`

The backend runs on `http://127.0.0.1:5000` by default.

### Database env setup

Create `backend/database/.env` with your local PostgreSQL settings:

```
DB_HOST=localhost
DB_NAME=contact_db
DB_USER=postgres
DB_PASSWORD=your_password_here
```


## Frontend

1. Open a terminal in `frontend`
2. Install dependencies:
   - `npm install`
3. Start the frontend:
   - `npm run dev`

The frontend runs on a Vite dev server, usually `http://localhost:5173`.

## Notes

- The backend uses `routes/user_routes.py` and `models/user_model.py`.
- The frontend is in `frontend/src` with React components.
- Use the backend and frontend terminals at the same time for local development.
