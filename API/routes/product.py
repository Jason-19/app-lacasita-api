

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from schemas.schemas import Product
from config.db import get_db
from config import crud

router =  APIRouter(
    tags=['PRODUCTS']
)

@router.get("/products", response_model=list[Product])
def read_productos(db: Session = Depends(get_db)):
    productos = crud.get_productos(db)
    return productos


@router.post("/productos", response_model=Product)
def create_producto(producto:Product, db: Session = Depends(get_db)):
    return crud.create_producto(db, producto)