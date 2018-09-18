using System;
using System.Collections.Generic;

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

        public List<ArticleFavorite> ArticleFavorite { get; set; }

    }
}