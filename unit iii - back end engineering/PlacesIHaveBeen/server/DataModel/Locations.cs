using System;
using System.ComponentModel.DataAnnotations;

namespace PlacesTravelled.DataModel {
    public class Locations {
        public int Id { get; set; }
        [Required]
        public string Place { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;

        public string Note { get; set; }

        public bool WillIGoBack { get; set; }

        public int TimesVisited { get; set; } = 1;

    }
}