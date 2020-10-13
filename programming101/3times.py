person = "Sarina"
today = "Tuesday"
emotion = "relaxed."

print("Hello " + person + ",\nI hope that your " + today + " is going well.\n" + "I'm personally really " + emotion)

combined = f"Hello {person}, \nI hope that your {today} is going well.\nI'm personally really {emotion}"
print(combined)

print("Hello %s,\nI hope that your %s is going well.\nI'm personally really %s" % (person, today, emotion))