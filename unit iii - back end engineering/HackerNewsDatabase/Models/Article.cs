using System;

namespace HackerNewsDatabase.Models
{
    public class Article{
        public int Id { get; set; }
        public string Url { get; set; }
        public int Karma { get; set; }
        public string Title { get; set; }
        public DateTime Created { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

    }
}