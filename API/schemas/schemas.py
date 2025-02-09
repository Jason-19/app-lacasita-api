from pydantic import BaseModel, EmailStr
from typing import List, Optional


# users
class Customer(BaseModel):
    id: int
    name: str
    email: EmailStr 
    password_hash: str 
    is_active: bool
    create_at: str
    
# Productos 
class Product(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    price: float
    stock: int
    available: bool
    image_url : str
    create_at: str

# opcones personlizadas
class CustomOptions(BaseModel):
    id: int
    ingredient :str
    extra_price: float

# shema para para productos del menu
class MenuItem(BaseModel):
    id :int
    name:str
    description:str
    base_price :float
    category: str
    customizable : bool
    
    custom_options: List[CustomOptions] = []

# items de una orden
class OrderItem(BaseModel):
    cantidad: int
    precio_unitario: float
    item_id: int
    

# orders
class Order(BaseModel):
    id: int
    date: str
    delivery_type: str
    total: float
    state: str
    items: List[OrderItem]