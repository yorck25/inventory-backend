# inventory-backend

# Information

--- Dev ---
* Port = 8080
* Base-url = /dev-inventory
* Dev-Url = http://localhost:Port/base-url

--- Prod ---
* Port = 3030
* Base-url =/prod-inventory
* Prod-Url = http://localhost:Prod/

# all item funtions

* /getAllItems
    HTTPMethod = Get
    Header atributes = token: string
    Description = Get all items for the current logged in user 

* /item
    HTTPMethod = Post
    Header atributes = token: string
    Body = {"item": string, "buy": number ,"sell": number, "buyindate": string ,"selldate": string, "memo": string }
    Description = Creates a new Item in the collection

# all item funtions
