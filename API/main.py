from fastapi import FastAPI
from fastapi.exceptions import HTTPException
from routes import orders, user, product

app = FastAPI(
    title='La Casita Restaurant & Garden'
)

# USER
app.include_router(user.router)

# PRODUCT
app.include_router(product.router)

# ORDERS 
app.include_router(orders.router)

