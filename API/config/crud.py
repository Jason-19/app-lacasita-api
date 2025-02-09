from sqlalchemy.orm import Session

from schemas.schemas import Customer, Product, Order
from models.models import Product,MenuItem,Order, Customer


# users
def get_user(db:Session):
    return db.query(Customer).all()

def create_user(db:Session, user: Customer):
    db_user = Customer(**user.model_dump())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
    

# productos
def get_productos(db: Session):
    return db.query(Product).all()

# crear producto
def create_producto(db: Session, producto: Product):
    db_producto = Product(**producto.model_dump())
    db.add(db_producto)
    db.commit()
    db.refresh(db_producto)
    return db_producto
# 
def get_items_menu(db: Session):
    return db.query(MenuItem).all()

def create_orden(db: Session, orden: Order):
    db_orden = Order(orden)
    db.add(db_orden)
    db.commit()
    db.refresh(db_orden)
    return db_orden