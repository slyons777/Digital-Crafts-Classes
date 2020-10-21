def mul_two(a, b):
    try:
        print(a * b)
    except ValueError:
        print("You did not enter a number.")
        

mul_two(1, 3)
mul_two(4, 2)
mul_two(3, 6)
