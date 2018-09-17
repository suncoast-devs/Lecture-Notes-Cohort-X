using System;
using intro_to_orms.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace intro_to_orms
{
    public partial class HobbiesContext : DbContext
    {
        public HobbiesContext()
        {
        }

        public HobbiesContext(DbContextOptions<HobbiesContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;Database=Hobbies");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}


        public DbSet<BoardGames> BoardGamesTable { get; set; }
    }
}
