from database.db_config import conn, cursor


def insert_user(name, email, phone_number, message):
    query = """
    INSERT INTO users (name, email, phone_number, message)
    VALUES (%s, %s, %s, %s)
    """

    cursor.execute(query, (name, email, phone_number, message))
    conn.commit()


def get_all_users():
    cursor.execute("SELECT * FROM users ORDER BY id DESC")

    rows = cursor.fetchall()

    users = []

    for row in rows:
        users.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "phone_number": row[3],
            "message": row[4]
        })

    return users