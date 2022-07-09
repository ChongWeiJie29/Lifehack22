import sqlite3
import pandas as pd

drop_table = ''' 
DROP TABLE IF EXISTS users
; 
'''

create_users = '''
    CREATE TABLE users(
        userid nvarchar(255) PRIMARY KEY,
        username nvarchar(255),
        first_name nvarchar(255),
        last_name nvarchar(255),
        email nvarchar(255),
        password nvarchar(255)
        )       
;
'''

populate_users = '''
    INSERT INTO users (userid, username, first_name,last_name, email, password)
    VALUES(?,?,?,?,?,?)
;
'''

records_to_insert = [
    ('001','kyledilao','Kyle', 'Lao', 'Abc123@gmail.com','Password_1'),
    ('002','ntyythepro','Nicholas','Tan','Abc456@gmail.com','Password_2'),
    ('003','chongweijie','Wei Jie','Chong','Def123@gmail.com','Password_3'),
    ('004','shangkun','Shang Kun','Lu','Def456@gmail.com','Password_4'),
    ('005','random_005','Timothy','Loh','Ghi123@gmail.com','Password_5')
]

print_users = '''
    SELECT * FROM users
;
'''

try: 
    conn = sqlite3.connect('LifeHack.db')
    print("Database created and connected.")
    

    conn.execute(drop_table)
        
    conn.execute(create_users)
    
    cursor = conn.cursor()
    cursor.executemany(populate_users, records_to_insert)
    conn.commit()
    print("Table created and populated.", "\n")
    
    cursor = conn.execute(print_users)
    for row in cursor:
        print("userid = ", row[0])
        print("username = ", row[1])
        print("first_name = ", row[2])
        print("last_name = ", row[3])
        print("email = ", row[4])
        print("password = ", row[5], "\n")
        
    
    
except sqlite3.Error as error:
    print("Error while connecting to database",error)
