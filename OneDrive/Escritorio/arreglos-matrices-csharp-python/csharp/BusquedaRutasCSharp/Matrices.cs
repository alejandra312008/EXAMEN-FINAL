using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusquedaRutasCSharp
{
    internal class Matrices
    {
        public void Ejecutar()
        {
            int[,] matriz = { { 1, 2, 3 }, { 4, 5, 6 } };

            Console.WriteLine("Matriz:");
            for (int i = 0; i < matriz.GetLength(0); i++)
            {
                for (int j = 0; j < matriz.GetLength(1); j++)
                {
                    Console.Write(matriz[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}