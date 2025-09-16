from collections import deque

def bfs_buscar_ruta(mapa, inicio, fin):
    filas, columnas = len(mapa), len(mapa[0])
    visitado = [[False]*columnas for _ in range(filas)]
    movimientos = [(1,0), (-1,0), (0,1), (0,-1)]
    cola = deque([(inicio, [inicio])])
    
    while cola:
        (x, y), ruta = cola.popleft()
        if (x, y) == fin:
            return ruta
        for dx, dy in movimientos:
            nx, ny = x+dx, y+dy
            if 0 <= nx < filas and 0 <= ny < columnas and not visitado[nx][ny] and mapa[nx][ny] == 0:
                visitado[nx][ny] = True
                cola.append(((nx, ny), ruta + [(nx, ny)]))
    return None

def mostrar_ruta(mapa, ruta):
    for (x, y) in ruta:
        mapa[x][y] = "*"
    for fila in mapa:
        print(" ".join(str(c) for c in fila))
