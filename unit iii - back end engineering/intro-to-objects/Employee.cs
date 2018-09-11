using System;

namespace intro_to_objects
{
    public class Employee
    {

        public Employee()
        {
            
        }
        public Employee(string name)
        {
            this.Name = name;
        }
        public Employee(int id)
        {
            this.Id = id;
        }


        // access-modifier type name {get;set;}
        public string Name { get; set; }
        public int Id { get; set; }
        public string Job { get; set; }

        public DateTime Birthday { get; set; }

        private decimal salary { get; set; }


        public string GetEmailSignature ()
        {
            return $"Thank You, {this.Name}, {this.Job}";
        } 

    }
}