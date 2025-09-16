import random

def crear_arreglo(n=10, minimo=0, maximo=100):
    return [random.randint(minimo, maximo) for _ in range(n)]

def recorrer_for(arreglo):
    for i in range(len(arreglo)):
        print(f"i={i}, val={arreglo[i]}")

def recorrer_foreach(arreglo):
    for val in arreglo:
        print(val, end=" ")
    print()

def cambiar_impares_cero(arreglo):
    return [0 if x % 2 != 0 else x for x in arreglo]

def multiplicar_por_indice(arreglo):
    return [arreglo[i] * i for i in range(len(arreglo))]

def busqueda_lineal(arreglo, valor):
    for i, v in enumerate(arreglo):
        if v == valor:
            return i
    return -1
