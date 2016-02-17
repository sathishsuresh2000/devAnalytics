## Dev Analytics
    
    Dev Analytics is a tool to project the inventory data in bar chart using d3.js and contains the functionality to filter data by DAY or WEEK
    
### Pre-requisites
  
  * Node.js
  * PostgreSql

### PostgreSql Setup

  * Download PostgreSql from http://www.enterprisedb.com/products/pgdownload.do#osx. Download the appropriate version based on OS.
  * Create a database "Database_Name" and associate user to it.
  * Use the below script to create table inventory
            CREATE TABLE public.inventory
            (
              productid text,
              idate date,
              location text,
              hand_quantity integer,
              unit_cost numeric,
              on_hand_value numeric
            )
  * import the data from csv file to inventory table as follows. Give the absolute path of the file.
    
            copy inventory FROM '/Users/ssuresh/Daily Inventory.csv' DELIMITER ',' CSV

### Node JS Setup
  
  * Install node.js from https://nodejs.org/en/download/ . Download the appropriate version and package based on OS.
  
### Application Setup

  * Navigate to the path where you checked out the application.
  * Go to the app folder
  * do npm install . It will install all the dependencies required to run the application.
  * do npm run start to start the application.
  * Application will be available on http://localhost:3000

###UI

  * Dropdown option is available to filter data based on DAY or WEEK.