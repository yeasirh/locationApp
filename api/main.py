from fastapi import FastAPI
from fastapi.responses import  JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from database import *


app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def getNotes():
    res = getLocation()
    content = jsonable_encoder(res)
    return JSONResponse(content=content)