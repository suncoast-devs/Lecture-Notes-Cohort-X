using System;

namespace HackerNewsDatabase.Models
{
    public class User {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int Karma { get; set; }
        public string About { get; set; }
        public DateTime Created { get; set; }
    }
}