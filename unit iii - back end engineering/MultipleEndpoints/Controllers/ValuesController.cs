using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MultipleEndpoints.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // PUT api/values/5
        [HttpPatch("{id}/{value}")]
        public ActionResult Vote(int id, string value)
        {
            if (value == "up"){
                return Ok("Up");
            } else if ( value == "down"){
                return Ok("down");
            } else {
                return NotFound();
            }
        }

        // [HttpPatch("{id}/down-vote")]
        // public ActionResult Downvote(int id)
        // {
        //     return Ok("down");
        // }
    }
}
