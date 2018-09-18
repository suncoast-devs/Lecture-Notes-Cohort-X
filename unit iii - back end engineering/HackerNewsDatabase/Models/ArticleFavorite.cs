namespace  HackerNewsDatabase.Models
{
    public class ArticleFavorite{
        public int Id { get; set; }
        public int ArticleId { get; set; }
        public int UserId { get; set; }

        public User User { get; set; }
        public Article Article { get; set; }
    }
}

// SELECT * 
// FROM ArticleFavorite 
// JOIN Users on Users.Id = ArticleFavorite.UserId
// JOIN Articles on Articles.Id = ArticleFavorite.ArticleId
