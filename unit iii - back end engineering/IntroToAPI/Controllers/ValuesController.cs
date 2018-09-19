using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace IntroToAPI.Controllers
{

    public class ResponseObject
    {
        public bool WasSuccessful { get; set; }
        public object Results { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<ResponseObject> Get(int id)
        {
            var rv = new ResponseObject
            {
                WasSuccessful = true,
                Results = new List<int> { id, id + 1, id + 2, id + 3 }
            };

            return rv;
        }

        // POST api/values
        [HttpPost]
        public ActionResult<ResponseObject> Post([FromBody] string value)
        {
            return new ResponseObject { WasSuccessful = true, Results = $"Hello, {value}" };
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
