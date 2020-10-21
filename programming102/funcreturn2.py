def total_count(list):
    list_1 = [{"list_length" : len(list) , 
        "total_chars" : len(str(list))
        }]
    return list_1
   
   

totals = total_count(["I ", "am", "cool"])
totals1 = total_count(["I ", "am", "relaxed"])
totals2 = total_count(["I ", "am", "sleepy"])

print(totals)
print(totals1)
print(totals2)




