using System;

namespace intro_to_orms.Models
{
    public class BoardGames
    {
        public int Id { get; set; }
        public int NumberOfPlayers { get; set; }
        public int MinimalAge { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Difficulty { get; set; }
        public int TimeLength { get; set; }

        public DateTime LastPlayed { get; set; }
    }
}