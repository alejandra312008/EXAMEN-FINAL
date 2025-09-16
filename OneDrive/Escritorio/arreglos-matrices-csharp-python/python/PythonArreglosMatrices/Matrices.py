def crear_matriz_3x3():
    matriz = [[(i * 3 + j + 1) for j in range(3)] for i in range(3)]
    return matriz

def imprimir_matriz(matriz):
    for fila in matriz:
        print(fila)

def recorrer_por_columnas(matriz):
    for j in range(len(matriz[0])):
        for i in range(len(matriz)):
            print(matriz[i][j], end=" ")
        print()

def sumar_elementos(matriz):
    return sum(sum(fila) for fila in matriz)

def intercambiar_primera_ultima(matriz):
    matriz[0], matriz[-1] = matriz[-1], matriz[0]
    return matriz
