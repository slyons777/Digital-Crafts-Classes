things = ["cup", "pen", "calendar", "notebook"]
index = 0


while index < len(things):
    print("%d: %s" % (index + 1, things[index]))
    index += 1

user_choice = input("Which item do you find interesting? Choose 1-4.")

if user_choice == "1":
    print("You chose " + things[0] + ", you must like cups!" )
elif user_choice == "2":
    print("You chose " + things[1] + ", you must like pens!" )
elif user_choice == "3":
    print("You chose " + things[2] + ", you must like calendars!")
elif user_choice == "4":
    print("You chose " + things[3] + ", you must like notebooks!" )

