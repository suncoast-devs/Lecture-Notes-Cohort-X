using System;
using System.Linq;
using intro_to_orms.Models;

namespace intro_to_orms
{
    class Program
    {
        static void Main(string[] args)
        {
            // add board game, that the user names
            // System.Console.WriteLine("Enter a Board Game to add:");
            // var name = Console.ReadLine();

            // var newgame = new BoardGames{
            //     Name = name
            // };

            // var db = new HobbiesContext();

            // db.BoardGamesTable.Add(newgame);

            // db.SaveChanges();


            // Get all Board games
            // SQL : SELECT * FROM BoardGamesTable
            var db = new HobbiesContext();

            var games = db.BoardGamesTable;

            foreach (var game in games)
            {
                System.Console.WriteLine($"game:{game.Name} ");
            }

            // Get all board games Where title = Risk
            // SQL : SELECT * FROM BoardGamesTable WHERE Name = 'Risk'

            var favoriteGame = db.BoardGamesTable
                                .FirstOrDefault(game => game.Name == "Risk");

            System.Console.WriteLine($"my favorite game is {favoriteGame.Name}");


        }
    }
}
