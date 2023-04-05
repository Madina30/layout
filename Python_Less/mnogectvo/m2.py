word = input()
dict = {}
for letter in set (word):
    dict.update({letter:word.count(letter)})
print(dict)