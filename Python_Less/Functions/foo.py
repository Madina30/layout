# from math import pi

# def AreaOfTheCirce(radius, pi = 3.14):
#     return pi*radius**2

# b = radius=float(input("Enter:"))
# a = pi=float(input("Enter pi:"))
# print(AreaOfTheCirce(b,a))



# def hipo(a, b):
#     c = round((a**2 + b**2)**0.5,1)
#     return c
# print(hipo(2,3))

# if __name__ == "__main__":
#     c,b = 1,5
#     print(hipo(c,b)) #Vlad delal)

# def calc(op, *args):
#     res = 0
#     if op == 'sum':
#         res = 0
#         for el in args:
#            res += el

#     if op == 'dif':
#         for el in args:
#             res -= el
#     return res    

# print(calc('dif', 1,2,3,4,5))

def min(*args):
    res = args[0]
    for el in args:
        if el < res:
            res = el
    return res
print(min(23, 45, 34, 4, 9))

num = [3,5,1,9,2,6]
min_num = min(num)
print(min_num)