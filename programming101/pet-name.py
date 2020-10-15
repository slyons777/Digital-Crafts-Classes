pet_name = input("What is the name of your pet?\n")
 
if len(pet_name) > 3 and pet_name != "Daisy" and pet_name != "Shadow":
    print(f"AWWWW sweet {pet_name}.")
elif len(pet_name) > 3 and pet_name == "Daisy":
    print("Good Dog!")
elif len(pet_name) > 3 and pet_name == "Shadow":
    print("El Gato Diablo!")
else:
    print("This name is too short")
