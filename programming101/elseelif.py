number = input("Guess a number between 1 and 100: \n")
number_2 = 45

if int(number) > number_2:
    print("Your guess is too high!")
elif int(number) == number_2:
    print("You got it!")
else:
    print("Oh no, your number is too low.")