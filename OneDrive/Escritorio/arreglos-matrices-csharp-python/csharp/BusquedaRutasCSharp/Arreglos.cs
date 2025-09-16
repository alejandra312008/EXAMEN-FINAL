using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusquedaRutasCSharp
{
    internal class Arreglos
    {
        public void Ejecutar()
        {
            int[] arreglo = { 1, 2, 3, 4, 5 };

            // Multiplicar por índice
            for (int i = 0; i < arreglo.Length; i++)
                arreglo[i] = arreglo[i] * i;

            Console.WriteLine("Después de multiplicar por índice:");
            foreach (int val in arreglo)
                Console.Write(val + " ");
            Console.WriteLine();

            // Búsqueda lineal
            int valorABuscar = 0;
            int posicion = -1;
            for (int i = 0; i < arreglo.Length; i++)
            {
                if (arreglo[i] == valorABuscar)
                {
                    posicion = i;
                    break;
                }
            }

            if (posicion != -1)
                Console.WriteLine($"Valor {valorABuscar} encontrado en posición {posicion}");
            else
                Console.WriteLine($"Valor {valorABuscar} no encontrado");
        }
    }
}