person = [
    {
        "first_name" : "Sarina",
        "last_name" : "Lyons",
        "age" : "31",
        "hair_color" : "Dark Brown"
    }
]

for key in person:
    print([key])
    print("Hello " + key["first_name"] + " " + key["last_name"] + ".")
    print("Since you are " + key["age"]+ " years old you are too old to ride this ride, but you do have nice " + key["hair_color"] + " hair." )
    

