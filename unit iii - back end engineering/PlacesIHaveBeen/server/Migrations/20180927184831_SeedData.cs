using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PlacesTravelled.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "Id", "Date", "Note", "Place", "TimesVisited", "WillIGoBack" },
                values: new object[] { 1, new DateTime(2018, 9, 25, 14, 48, 29, 766, DateTimeKind.Local), "Fancy Food", "Taco Bell", 1, true });

            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "Id", "Date", "Note", "Place", "TimesVisited", "WillIGoBack" },
                values: new object[] { 2, new DateTime(2018, 9, 24, 14, 48, 29, 767, DateTimeKind.Local), "Fancier Food", "Burger King", 1, true });

            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "Id", "Date", "Note", "Place", "TimesVisited", "WillIGoBack" },
                values: new object[] { 3, new DateTime(2018, 9, 22, 14, 48, 29, 767, DateTimeKind.Local), "Fancieset Food", "Taco King", 1, true });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
