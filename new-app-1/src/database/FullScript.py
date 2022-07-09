import sqlite3
import pandas as pd

#creating existing users table
drop_users = ''' 
DROP TABLE IF EXISTS users
; 
'''

create_users = '''
    CREATE TABLE users(
        userid nvarchar(10) PRIMARY KEY,
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
    conn = sqlite3.connect('./LifeHack.db')
    print("LifeHack.db created and connected.")
    
    conn.execute(drop_users)
        
    conn.execute(create_users)
    
    cursor = conn.cursor()
    cursor.executemany(populate_users, records_to_insert)
    conn.commit()
    print("Users Table created and populated.", "\n")
    
    df_users = pd.read_sql_query(print_users,conn)
    
except sqlite3.Error as error:
    print("Error while connecting to database",error)
    
#create "Paid Inventory" table for userid 001
drop_pi = ''' 
DROP TABLE IF EXISTS paid_inventory
; 
'''
userid = '001'

create_pi = '''
    CREATE TABLE paid_inventory(
        userid nvarchar(10),
        serialno nvarchar (20)PRIMARY KEY,
        category nvarchar(255),
        category_id nvarchar(10),
        sub_category nvarchar(255),
        sub_category_id nvarchar(10),
        item_desc nvarchar(255),
        item_ID nvarchar(10),
        date_purchased nvarchar(255),
        man_date nvarchar(255),
        expiry_date nvarchar(255)
        )       
;
'''

populate_pi = '''
    INSERT INTO paid_inventory (
        userid,
        serialno, 
        category, 
        category_id,
        sub_category,
        sub_category_id,
        item_desc,
        item_ID,
        date_purchased,
        man_date,
        expiry_date
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?)
;
'''

pi_records = [
    (userid,'01-02-593','Baby','01','Baby Formula','02',"Similac Total Comfort 2'FL Stage 3 820g",'593','9/7/22','16/03/2020','21/12/2022'),
    (userid,'01-02-453','Baby','01','Baby Formula','02',"Similac Total Comfort 2'-FL Stage 3 820g",'453','9/7/22','26/04/2021','25/09/2022'),
    (userid,'02-02-804','Beverages','02','Cheese','02','Cottage Cheese Original 200g','804','9/7/22','14/01/2018','02/02/2019'),
    (userid,'03-01-132','Cleaning','03','All Purpose Cleaner','01','Antibac All Purpose Cleaner 490ml-Rhubarb','132','9/7/22','21/06/2020','21/12/2022'),
    (userid,'04-01-605','Condiments','04','Honey','01','Hosen Honey, 1kg','605','9/7/22','10/11/2019','18/10/2022'),
    (userid,'06-01-151','Meats','06','Pork','01','INDO Minced Pork 100g','151','9/7/22','25/02/2018','20/07/2020'),
    (userid,'07-02-974','Personal Care','07','Facial Care','02','Cetaphil Gentle Skin Cleanser 500 ml','974','9/7/22','08/08/2018','16/02/2021'),
    (userid,'08-02-068','Snacks','08','Cookies','02','Meadows Assorted Biscuit 1kg','068','9/7/22','07/06/2019','09/05/2022'),
    (userid,'02-03-849','Beverages','02','Soda','03','Coca-Cola Zero Sugar 1.5L,','849','9/7/22','04/05/2019','19/02/2022'),
    (userid,'05-01-890','Eggs & Dairy','05','Butter','01','Anchor Unsalted Grass-Fed Butter 227g','890','9/7/22','29/07/2018','21/10/2019')


]

print_pi = '''
     SELECT * FROM paid_inventory
;
'''

try: 
    conn.execute(drop_pi)
    conn.execute(create_pi)
    cursor = conn.cursor()
    cursor.executemany(populate_pi, pi_records)
    conn.commit()
    print("Paid Inventory Table created and populated.", "\n")
    
    df_pi = pd.read_sql_query(print_pi,conn)
    
except sqlite3.Error as error:
    print("Error while connecting to database",error)

#create Backend Table
drop_user_be = ''' 
DROP TABLE IF EXISTS user_be
; 
'''

create_user_be= '''
    CREATE TABLE user_be(
        userid nvarchar(10),
        username nvarchar(255),
        first_name nvarchar(255),
        last_name nvarchar(255),
        email nvarchar(255),
        password nvarchar(255),
        serialno nvarchar(20),
        category nvarchar(255),
        category_id nvarchar(10),
        sub_category nvarchar(255),
        sub_category_id nvarchar(10),
        item_desc nvarchar(255),
        item_ID nvarchar(10),
        date_purchased nvarchar(255),
        man_date nvarchar(255),
        expiry_date nvarchar(255)
        )
;
'''

populate_user_be = '''
    INSERT INTO user_be 
    SELECT users.userid,username,first_name,last_name,email,password,serialno,category,category_id,
    sub_category,sub_category_id,item_desc,item_ID,date_purchased,man_date,expiry_date    
    FROM users
    INNER JOIN paid_inventory
    WHERE users.userid = paid_inventory.userid
    
;
'''    

print_user_be = '''   
    SELECT * FROM user_be
;
'''

try:
    conn.execute(drop_user_be)
    conn.execute(create_user_be)
    conn.execute(populate_user_be)
    conn.commit()
    print('User Backend Table created and populated.')
    
    df_user_be = pd.read_sql_query(print_user_be,conn)
    
except sqlite3.Error as error:
    print("Error while connecting to database",error)
    
#create Frontend Table
drop_user_fe = ''' 
DROP TABLE IF EXISTS user_fe
; 
'''

create_user_fe= '''
    CREATE TABLE user_fe(
        username nvarchar(255),
        item_desc nvarchar(255),
        item_ID nvarchar(10),
        date_purchased nvarchar(255),
        man_date nvarchar(255),
        expiry_date nvarchar(255)
        )
;
'''

populate_user_fe= '''
    INSERT INTO user_fe 
    SELECT username, item_desc, item_ID, date_purchased,man_date,expiry_date FROM user_be
;
'''    

print_user_fe = '''   
    SELECT * FROM user_fe
;
'''

try:
    conn.execute(drop_user_fe)
    conn.execute(create_user_fe)
    conn.execute(populate_user_fe)
    conn.commit()
    print('User Frontend Table created and populated.')
    
    df_user_fe = pd.read_sql_query(print_user_fe,conn)
    
except sqlite3.Error as error:
    print("Error while connecting to database",error)
    
#printing User Frontend Table
df_user_fe
