using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HerokuDemo.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cartoons",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(nullable: true),
                    Show = table.Column<string>(nullable: true),
                    Birthday = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cartoons", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Cartoons",
                columns: new[] { "Id", "Birthday", "Name", "Show" },
                values: new object[,]
                {
                    { 1, new DateTime(1982, 11, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mickey Mouse", "Steamboat Willie" },
                    { 2, new DateTime(1840, 7, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bugs Bunny", "Looney Tunes" },
                    { 3, new DateTime(1989, 12, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "Homer Simpson", "The Simpsons" },
                    { 4, new DateTime(2005, 2, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "General Iroh", "Avatar: The Last Airbender" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cartoons");
        }
    }
}
