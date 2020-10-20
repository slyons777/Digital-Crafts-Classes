nums_1 = [[1,2],[3,4]]
nums_2 = [[5,4],[3,2]]

for i in range(len(nums_1)):
    for j in range(len(nums_1[0])):
        totals = nums_1[i][j] + nums_2[i][j]
        print(totals)