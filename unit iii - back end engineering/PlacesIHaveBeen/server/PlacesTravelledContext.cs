using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using PlacesTravelled.DataModel;

namespace PlacesTravelled
{
    public partial class PlacesTravelledContext : DbContext
    {
        public PlacesTravelledContext()
        {
        }

        public PlacesTravelledContext(DbContextOptions<PlacesTravelledContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("server=localhost; Database=PlacesTravelled");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Locations>().HasData(
                new Locations { Place = "Taco Bell", Date = DateTime.Now.AddDays(-2), Note = "Fancy Food", WillIGoBack = true, Id = 1 },
                new Locations { Place = "Burger King", Date = DateTime.Now.AddDays(-3), Note = "Fancier Food", WillIGoBack = true, Id = 2 },
                new Locations { Place = "Taco King", Date = DateTime.Now.AddDays(-5), Note = "Fancieset Food", WillIGoBack = true, Id = 3 }
            );

        }

        public DbSet<Locations> Locations { get; set; }
    }
}
