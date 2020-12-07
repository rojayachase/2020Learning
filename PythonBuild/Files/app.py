# https://medium.com/analytics-vidhya/programming-with-a-in-python-using-sqlite-4cecbef51ab9
import sqlite3  # importing module

conn = sqlite3.connect('data.db')  # connecting to the database

cursor = conn.cursor()  # cursor

cursor.execute("SELECT * FROM LeftFixed ORDER BY Gforcex DESC LIMIT 10")

myresults = cursor.fetchall()

for x in myresults:  # Iterate through data
    print("Voltage =", x[0])
    print("TempCelius = ", x[1])
    print("EuleAngleDegx =", x[2], "\n")
    print("EulerAngleDegY =", x[3], "\n")
    print("EulerAngleDegZ =", x[4], "\n")
    print("GforceX =", x[5], "\n")
    print("GforceY =", x[6], "\n")
    print("GforceZ =", x[7], "\n")
    print("TotalG =", x[8], "\n")


# To save the changes in the files. Never skip this. If we skip this, nothing will be saved in the database.
conn.commit()


conn.close()  # close the connection
