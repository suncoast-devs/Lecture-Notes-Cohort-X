using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using HerokuDemo.Models;
namespace HerokuDemo
{
    public partial class CartoonsContext : DbContext
    {
        public CartoonsContext()
        {
        }

        public CartoonsContext(DbContextOptions<CartoonsContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
               var conn = Environment.GetEnvironmentVariable("CONNECTION_STRING") ?? "server=localhost;database=Cartoons";
               optionsBuilder.UseNpgsql(conn);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cartoons>().HasData(
                new Cartoons{Id = 1, Name = "Mickey Mouse", Show="Steamboat Willie", Birthday = new DateTime(1982, 11, 18)},  
                new Cartoons{Id = 2, Name = "Bugs Bunny", Show="Looney Tunes", Birthday = new DateTime(1840, 7, 27)},  
                new Cartoons{Id = 3, Name = "Homer Simpson", Show="The Simpsons", Birthday = new DateTime(1989, 12, 17)},  
                new Cartoons{Id = 4, Name = "General Iroh", Show="Avatar: The Last Airbender", Birthday = new DateTime(2005, 2, 21)}  
            );


        }

        public DbSet<Cartoons> Cartoons { get; set; }
    }
}
