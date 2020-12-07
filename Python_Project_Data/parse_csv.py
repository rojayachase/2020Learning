import csv  #import csv module 

with open('data.csv', 'r') as csv_file:  # import our csv file  / parse data file
    csv_reader = csv.DictReader(csv_file) # create a variable for our csv file / dict = adds field names   

    for line in csv_reader:  #loop through each line in csv file
        print(line) #output each line

