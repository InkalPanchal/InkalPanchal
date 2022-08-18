using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Snapdeal.Models;
using Snapdeal.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Snapdeal.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private IBrandService BrandService { get; set; }
        public BrandController(IBrandService brandService)
        {
            BrandService = brandService;
        }

        // GET: api/<BrandController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var obj = await BrandService.GetAll();
            if(obj != null)
            {
                return Ok(obj);
            }else
            {
                return NotFound("Data not available.");
            }
        }

        // GET api/<BrandController>/5
        [HttpGet("{id}"), Authorize(Roles = "admin")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await BrandService.GetById(id);
            if(obj != null)
            {
                return Ok(obj);
            }else
            {
                return NotFound("Data not available.");
            }

        }

        // POST api/<BrandController>
        [HttpPost, Authorize(Roles = "admin")]
        public async Task<IActionResult> Post([FromBody] Brand brand)
        {
            if (string.IsNullOrEmpty("BrandName"))
            {
                return BadRequest();
            }else
            {
                return Ok(await BrandService.Add(brand));
            }
        }

        // PUT api/<BrandController>/5
        [HttpPut("{id}"), Authorize(Roles = "admin")]
        public async Task<IActionResult> Put(int id, [FromBody] Brand brand)
        {
            return Ok(await BrandService.Update(id, brand));
        }

        // DELETE api/<BrandController>/5
        [HttpDelete("{id}"), Authorize(Roles = "admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var obj = await BrandService.GetById(id);
            if(obj != null)
            {
                return Ok(await BrandService.Delete(id));
            }else
            {
                return NotFound("Data not exists.");
            }
        }
    }
}
