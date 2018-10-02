﻿// <auto-generated />
using System;
using HerokuDemo;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HerokuDemo.Migrations
{
    [DbContext(typeof(CartoonsContext))]
    [Migration("20181002125043_first")]
    partial class first
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("HerokuDemo.Models.Cartoons", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday");

                    b.Property<string>("Name");

                    b.Property<string>("Show");

                    b.HasKey("Id");

                    b.ToTable("Cartoons");

                    b.HasData(
                        new { Id = 1, Birthday = new DateTime(1982, 11, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), Name = "Mickey Mouse", Show = "Steamboat Willie" },
                        new { Id = 2, Birthday = new DateTime(1840, 7, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), Name = "Bugs Bunny", Show = "Looney Tunes" },
                        new { Id = 3, Birthday = new DateTime(1989, 12, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), Name = "Homer Simpson", Show = "The Simpsons" },
                        new { Id = 4, Birthday = new DateTime(2005, 2, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), Name = "General Iroh", Show = "Avatar: The Last Airbender" }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}