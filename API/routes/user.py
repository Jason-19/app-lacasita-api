
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas.schemas import Customer
from bcrypt import hashpw, gensalt

from config.db import get_db
from config import crud

router = APIRouter(
    tags=['USER']
)

#
@router.get('/user', response_model=list[Customer])
async def get_users(db:Session = Depends(get_db)):
    user = crud.get_user(db)
    return user

@router.post('/user/',response_model=list[Customer])
async def create_user(user:Customer,db:Session = Depends(get_db)):
    return crud.create_user(db, user)


def hash_password(password: str) -> str:
    return hashpw(password.encode("utf-8"), gensalt()).decode("utf-8")