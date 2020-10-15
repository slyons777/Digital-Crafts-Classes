username = "Pablo"
password = "Picasso!"
allowed = 3
max_try = 0

sign_in = input("Enter your username: \n")
keycode = input("Enter your password: \n")


while max_try < allowed:
    if sign_in == username and keycode == password:
        print("You're in! How can we help you today?")
        break
    elif sign_in != username or keycode != password:
        print("Login info is incorrect please try again.")
        max_try += 1
        sign_in = input("Enter your username: \n")
        keycode = input("Enter your password: \n")

   
 
    

