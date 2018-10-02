using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HerokuDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartoonsController : ControllerBase
    {
        private CartoonsContext _db = null;

        public CartoonsController(CartoonsContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public ActionResult GetAllCartoons()
        {
            return Ok(this._db.Cartoons.OrderBy(o => o.Name));
        }

        [HttpGet("{id}")]
        public ActionResult GetOne(int id)
        {
            var cartoon = this._db.Cartoons.FirstOrDefault(f => f.Id == id);
            if (cartoon == null){
                return NotFound();
            } else{
                return Ok(cartoon);
            }
        }



    }
}