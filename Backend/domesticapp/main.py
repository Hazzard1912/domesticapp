from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import login

app = FastAPI()

# CORS
origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"]
)

app.include_router(login.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}