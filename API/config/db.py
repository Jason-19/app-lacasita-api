from fastapi.exceptions import HTTPException
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from mysql.connector import Error
import mysql.connector
import logging
log = logging.getLogger(__name__)


DATABASE_URL = "mysql+mysqlconnector://jason:admin@localhost:5001/lacasita"
engine = create_engine(
    DATABASE_URL,
    pool_size=10,      
    max_overflow=20,    
    pool_timeout=60,    
    pool_recycle=1800
)# FIXED #1

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()



def get_db():
    db = SessionLocal()
    
    try:
        yield db
    except Exception as e:
        log.error(str(e))
        db.close()
        raise HTTPException(status_code=500, detail='ERROR - DATABASE FAIL')
    finally:
        log.error("Finally connextion closed,..")
        db.close()
        
    # TODO #1: FIXED WITH POOL_SIZE IN ENGINE
    # sqlalchemy.exc.TimeoutError: QueuePool limit of size 5 overflow 10 reached, 
    # connection timed out, timeout 30.00 (Background on this error at: https://sqlalche.me/e/20/3o7r)
    