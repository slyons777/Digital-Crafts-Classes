try:
    num = int(input("Enter a number: \n"))
    while num > 0:
        num -=1
        print(num)
except ValueError:
    print("You did not enter a number.")
    

