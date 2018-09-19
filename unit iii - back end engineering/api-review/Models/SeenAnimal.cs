using System;

namespace api_review
{
    public class SeenAnimal{
        public int Id { get; set; }
        public string Species { get; set; }
        public int CountOfTimesSeen { get; set; } = 1;
        public string LocationOfLastSeen { get; set; }
        public DateTime LastSeenAt { get; set; } = DateTime.Now;

    }
}
