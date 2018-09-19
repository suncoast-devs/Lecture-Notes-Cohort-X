using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace api_review
{
    public partial class SafariAdventureContext : DbContext
    {

        public SafariAdventureContext()
        {
        }

        public SafariAdventureContext(DbContextOptions<SafariAdventureContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("server=localhost;database=SafariAdventure");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<SeenAnimal> SeenAnimals { get; set; }

    }
}
