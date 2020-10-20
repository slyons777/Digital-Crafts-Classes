##declare lists
nums_1 = [2, 4, 5]
nums_2 = [4, 1, 2]

nums_3 = []


while len(nums_3) <= 2:
    nums_3.append(nums_1[0] * nums_2[0])
    nums_3.append(nums_1[1] * nums_2[1])
    nums_3.append(nums_1[2] * nums_2[2])

print(nums_3)
    
  