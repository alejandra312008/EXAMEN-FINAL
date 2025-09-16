
from Arreglos import *
from Matrices import *
from BusquedaRutas import *

if __name__ == "__main__":
    # ==== Arreglos ====
    print("=== Arreglos ===")
    arreglo = crear_arreglo()
    print("Original:", arreglo)

    print("Recorrido con for:")
    recorrer_for(arreglo)

    print("Recorrido con foreach:")
    recorrer_foreach(arreglo)

    arreglo = cambiar_impares_cero(arreglo)
    print("Impares a cero:", arreglo)

    arreglo = multiplicar_por_indice(arreglo)
    print("Multiplicado por indice:", arreglo)

    valor = 10
    pos = busqueda_lineal(arreglo, valor)
    print(f"Busqueda de {valor}: {'Encontrado en posicion ' + str(pos) if pos != -1 else 'No encontrado'}")

    # ==== Matrices ====
    print("\n=== Matrices ===")
    matriz = crear_matriz_3x3()
    imprimir_matriz(matriz)

    print("Recorrido por columnas:")
    recorrer_por_columnas(matriz)

    print("Suma de elementos:", sumar_elementos(matriz))

    print("Intercambio de primera y ultima fila:")
    matriz = intercambiar_primera_ultima(matriz)
    imprimir_matriz(matriz)

    # ==== Busqueda de Rutas ====
    print("\n=== Busqueda de Rutas ===")
    mapa = [
        [0, 1, 0, 0],
        [0, 1, 0, 1],
        [0, 0, 0, 0],
        [1, 1, 0, 0]
    ]
    inicio = (0, 0)
    fin = (3, 3)
    ruta = bfs_buscar_ruta(mapa, inicio, fin)
    if ruta:
        print("Ruta encontrada:", ruta)
        mostrar_ruta(mapa, ruta)
    else:
        print("No hay ruta encontrada")
