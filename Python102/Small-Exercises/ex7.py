##declared list and factor
nums = [5, 6, 8, 2]
factor = 3

##empty list
new_nums = []

##multiplication loop
for number in nums:
    new_nums.append(number*3)


##print statement
print(new_nums)

##to do it in one line would be
print([num * factor for num in nums])