using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api_review.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {

        private SafariAdventureContext db { get; set; }
        
        public AnimalController()
        {
            this.db = new SafariAdventureContext();
        }

        [HttpGet]
        public ActionResult<IEnumerable<SeenAnimal>> Get()
        {
            return this.db.SeenAnimals;
        }

        [HttpPost]
        public ActionResult<SeenAnimal> Post([FromBody] string species)
        {
            var animal = new SeenAnimal
            {
                Species = species,
                LocationOfLastSeen = "Outside",
            };

            this.db.SeenAnimals.Add(animal);

            this.db.SaveChanges();

            return animal;

        }
    }
}