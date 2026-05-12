import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="contact_db",
    user="postgres",
    password="vishal12"
)

cursor = conn.cursor()