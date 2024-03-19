numero1 = int(input("digite a idade de sua mãe: "))
numero2 = int(input("digite a idade de seu pai: "))

if numero1 > numero2 :
    print("a idade da sua mãe %d, é maior" %numero1)
else:
    if numero1 == numero2 :
        print("as idades são iguais")
    else:
        print("a idade de seu pai %d, é maior" %numero2)
        
    