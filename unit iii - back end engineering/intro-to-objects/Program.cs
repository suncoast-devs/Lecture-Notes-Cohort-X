using System;
using System.Collections.Generic;
using System.Linq;

namespace intro_to_objects
{
    class Program
    {
      
        static int Sum(int x, int y) => x + y;
      
        static void Main(string[] args)
        {

            Employee CEO = new Employee("Susan")
            {
                Job = "CEO"
            };

            var CTO = new Employee();

            CEO.Id = 1;
            CEO.Birthday = new DateTime(1984, 6, 20);


            var company = new List<Employee>();
            company.Add(CEO);

            var cLevel = company
                .Where(w => w.Job.Contains("C"))
                .OrderBy(o => o.Name);

            System.Console.WriteLine(CEO.GetEmailSignature());

            Console.WriteLine("Hello World!");
        }
    }
}
