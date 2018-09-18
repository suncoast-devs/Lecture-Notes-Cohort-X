using System;
using HackerNewsDatabase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HackerNewsDatabase
{
    public partial class HackerNewsContext : DbContext
    {
        public HackerNewsContext()
        {
        }

        public HackerNewsContext(DbContextOptions<HackerNewsContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("server=localhost;database=HackerNews");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<User> Users { get; set; }

        public DbSet<Article> Articles { get; set; }

    }
}
