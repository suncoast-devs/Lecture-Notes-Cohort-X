using System;
using System.Collections.Generic;

namespace intro_to_sharp_review
{
    class Program
    {
        static void DisplayWelcomeMessage()
        {
            System.Console.WriteLine("Welcome to my app");
        }

        static string CreateGreeting(string name = "No Name", int count = 5)
        {

            return $"Hello, {name}! You have {count} apples!";
        }

        static List<string> GetPlayerNames()
        {
            return new List<string>() { "Holly", "Kate", "Hanna" };
        }

        static decimal getRandomNumber()
        {
            var randomNumber = 7;
            return randomNumber;
        }

        static void Main(string[] args)
        {

            System.Console.WriteLine("Welcome, what are your names?");
            var input = Console.ReadLine();
            if (input == "Billy")
            {
                Console.WriteLine(CreateGreeting(count: 10));
                System.Console.WriteLine("How are old are you?");
                var age = Console.ReadLine();
                var height = 10.5;
                var other = (int)height;
                bool.Parse("true");
                char.Parse("a");


                System.Console.WriteLine(other);


            }
            else
            {
                System.Console.WriteLine("Sorry, we are looking for Billy");
            }

            System.Console.WriteLine(getRandomNumber());


        }
    }
}
