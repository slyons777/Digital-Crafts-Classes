shopping_list = [['apples', 'kiwi'], ['bread','tortilla'], ['juice','water']]
titles = ['fruit', 'breads', 'drinks']


index = 0

while index < len(shopping_list):
    for category in shopping_list:
        print(index, category[index])
    index += 1
        
    
