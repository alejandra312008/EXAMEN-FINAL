using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusquedaRutasCSharp
{
    internal class BusquedaRutas
    {
        public void Ejecutar()
        {
            // Ejemplo simple: buscar valor 9 en una matriz
            int[,] matriz = { { 0, 1, 2 }, { 3, 9, 5 } };
            bool encontrado = false;
            for (int i = 0; i < matriz.GetLength(0); i++)
                for (int j = 0; j < matriz.GetLength(1); j++)
                    if (matriz[i, j] == 9) encontrado = true;

            Console.WriteLine("¿Se encontró el número 9?: " + encontrado);
        }
    }
}