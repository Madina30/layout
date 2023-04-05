
mood = ['optimist','pessimist','troll']
philosophy = ['glass half full','glass half empty', 'drink from the tap']
# rave =dict(zip(mood,philosophy))
# print(rave)
new_dict = { mood:philosophy for mood, philosophy in zip(mood,philosophy)} 
print(new_dict)