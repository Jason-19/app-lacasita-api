from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey,DateTime, func
from sqlalchemy.orm import relationship
from config.db import Base, engine

# hostorial de sessciones
class SessionHistory(Base):
    __tablename__ = "session_history"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("customer.id"))
    login_time = Column(DateTime, default=func.now())
    ip_address = Column(String(50), nullable=False)

    user = relationship("Customer", back_populates="session_history")

# usuarios
class Customer(Base):
    __tablename__ = "customer"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(100), nullable=False)
    role = Column(String(20), default="user")
    is_active = Column(Boolean, default=True)
    create_at = Column(String(50), nullable=False)
    session_history = relationship("SessionHistory", back_populates="user")
    
    
# productos
class Product(Base):
    __tablename__ = "product"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(String(255))
    price = Column(Float, nullable=False)
    stock = Column(Integer, nullable=False)
    available = Column(Boolean, default=True)
    image_url = Column(String(255))  
    create_at = Column(String(50), nullable=False)



# menu 
class MenuItem(Base):
    __tablename__ = "items_menu"
    id = Column(Integer, primary_key=True, index=True)
    name= Column(String(100), nullable=False)
    description = Column(String(255))
    base_price = Column(Float, nullable=False)
    category = Column(String(50), nullable=False)
    customizable = Column(Boolean, default=False)

    custom_options = relationship("CustomOptions", back_populates="item")

# menu/custom options ingredints or 
class CustomOptions(Base):
    __tablename__ = "custom_options"
    id = Column(Integer, primary_key=True, index=True)
    ingredient = Column(String(100), nullable=False)
    extra_price = Column(Float, nullable=False)
    item_id = Column(Integer, ForeignKey("items_menu.id"))

    item = relationship("MenuItem", back_populates="custom_options")


class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    date = Column(String(50), nullable=False)
    delivery_type = Column(String(50), nullable=False)
    total = Column(Float, nullable=False)
    state = Column(String(50), nullable=False)

    items = relationship("OrderItem", back_populates="order")


class OrderItem(Base):
    __tablename__ = "items_orden"
    id = Column(Integer, primary_key=True, index=True)
    cantidad = Column(Integer, nullable=False)
    unit_price = Column(Float, nullable=False)
    order_id = Column(Integer, ForeignKey("orders.id"))
    item_id = Column(Integer, ForeignKey("items_menu.id"))

    # Relación con la orden y el item del menu
    order = relationship("Order", back_populates="items")
    item = relationship("MenuItem")
    
     
Base.metadata.create_all(bind=engine)