using System;
using System.Collections.Generic;
using System.Linq;

namespace intro_c_sharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // in JavaScript
            // const name = "Sue"
            // let age = 25

            int age = 25;
            const string name = "Sue";

            // Typings: 
            // Number -> int8, int16, int32, int64,  int, long, float, decimal and double 
            // String -> string
            // Booean -> bool
            // ??? -> char 


            // int limit = 25;
            // double height = 72.4;


            // var?!?!

            var limit = 25;

            System.Console.WriteLine($"The limit is {limit}");
            for (int i = 0; i < 10; i++)
            {
                limit++;

                if (limit > 30)
                {
                    System.Console.WriteLine("Made it!");
                }
                else
                {
                    System.Console.WriteLine("not yet");
                }
                // System.Console.WriteLine($"this limit is increasing to {limit}");
            }

            System.Console.WriteLine($"the limit is {limit} ");

            int otherLimit = 5;
            var category = "airplane";

            if (otherLimit == limit)
            {
                System.Console.WriteLine("it matches!");
            }

            // broken, because otherLimit is a int and category is a string
            // if (otherLimit == category)
            // {

            // }

            var scores = new int[10];
            System.Console.WriteLine(scores);
            for (int i = 0; i < scores.Length; i++)
            {
                System.Console.WriteLine(scores[i]);
            }

            foreach (int i in scores)
            {
                System.Console.WriteLine(i);
            }

            // List! 
            var teams = new List<string>();

            teams.Add("Cannons");
            teams.Add("Rays");

            System.Console.WriteLine(teams[1]);

            teams.RemoveAt(teams.Count - 1);


            var shirts = new List<string>();

            shirts.Add("plain orange");
            shirts.Add("orange polka dot");
            shirts.Add("plain blue");
            shirts.Add("red & orange");
            shirts.Add("red");

            // filter in JS
            var orangeShirts = shirts.Where(shirt =>
            {
                return shirt.Contains("orange");
            });

            foreach (var shirt in orangeShirts)
            {
                System.Console.WriteLine(shirt);
            }

            // map 
            var myShirts = shirts.Select(shirt => {
                return $"Mark owns a {shirt} shirt";
            });

            // reduce
            var totalShirts = shirts.Aggregate("", (acc, shirt) => {
                return acc += $",{shirt}";
            });

            System.Console.WriteLine(totalShirts);

            var shirtsAgain = totalShirts.Split(',');

        }
    }
}
