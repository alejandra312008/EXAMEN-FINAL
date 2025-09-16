using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusquedaRutasCSharp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Arreglos arreglos = new Arreglos();
            arreglos.Ejecutar();

            Matrices matrices = new Matrices();
            matrices.Ejecutar();

            BusquedaRutas busqueda = new BusquedaRutas();
            busqueda.Ejecutar();

            Console.WriteLine("Presiona una tecla para salir...");
            Console.ReadKey();
        }
    }
}