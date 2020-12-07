
    print("GforceZ =", x[7], "\n")
    print("TotalG =", x[8], "\n")


# To save the changes in the files. Never skip this. If we skip this, nothing will be saved in the database.
conn.commit()


conn.close()  # close the connection
