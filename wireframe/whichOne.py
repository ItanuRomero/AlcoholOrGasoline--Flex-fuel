from os import system
from time import sleep
system('clear')
print("Hey, I'm here to help you choose!!\n"
      "Where you are...")
sleep(3)
gasoline = float(input('What is the price of gasoline? '))
alcohol = float(input('And the price of alcohol? '))
system('clear')
if alcohol <= (gasoline * 0.7):
    print('You have to choose alcohol! (etanol)\n\n')
else:
    print('You have to choose gasoline!!\n\n')
sleep(5)
print('Still having doubts?\n'
      'Acess the link below:\n'
      'https://www.aluguefoco.com.br/blog/post/alcool-ou-gasolina--como-saber-qual-combustivel-compensa-maisr\n'
      '(Only in PT-BR, but you can translate it).')
'''
Program written by: Itanu Romero.
For more information please contact me:
https://www.linkedin.com/in/itanuromero/
'''
