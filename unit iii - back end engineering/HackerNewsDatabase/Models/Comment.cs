using System;

namespace HackerNewsDatabase.Models
{
    public class Comment{
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }

        // Navigation to Users
        public int UserId { get; set; }
        public User User { get; set; }
        // Navigation to Article
        public int ArticleId { get; set; }
        public Article Article { get; set; }


    }


}