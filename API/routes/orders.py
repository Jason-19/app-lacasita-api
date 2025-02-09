
from fastapi import APIRouter, Depends
from requests import Session
from config.db import get_db
from schemas.schemas import MenuItem, Order
from config import crud
from typing import List

router =  APIRouter(
    tags=['ORDERS']
)

# Endpoint para obtener el menú
@router.get("/menu/", response_model=List[MenuItem])
def read_menu(db: Session = Depends(get_db)):
    items = crud.get_items_menu(db)
    return items

@router.post("/orders/", response_model=Order)
def create_orden(orden: Order, db: Session = Depends(get_db)):
    return crud.create_orden(db, orden)