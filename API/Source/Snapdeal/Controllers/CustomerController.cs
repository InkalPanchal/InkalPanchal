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
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private ICustomerService CustomerService { get; set; }
        public CustomerController(ICustomerService customerService)
        {
            CustomerService = customerService;
        }
        // GET: api/<CustomerController>
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var obj = await CustomerService.GetAll();
            if (obj != null)
            {
                return Ok(obj);
            }
            else return NotFound("Data not found.");
        }

        // GET api/<Customer>/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await CustomerService.GetById(id);
            if (obj != null)
            {
                return Ok(obj);
            }
            else return NotFound("Data not found.");
        }


        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Put(int id, [FromBody] Customer customer)
        {
            return Ok(await CustomerService.Update(id, customer)) ;
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var obj = await CustomerService.GetById(id);
            if (obj != null)
            {
                return Ok(await CustomerService.Delete(id));
            }
            else
            {
                return NotFound("Data not exists.");
            }

        }
    }
}
