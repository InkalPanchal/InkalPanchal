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
    public class CategoryController : ControllerBase
    {
        private ICategoryService CategoryService { get; set;}

        public CategoryController(ICategoryService categoryService)
        {
            CategoryService = categoryService;
        }
        // GET: api/<CategoryController>
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await CategoryService.GetAll());
        }

        // GET api/<CategoryController>/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await CategoryService.GetById(id));
        }

        // POST api/<CategoryController>/addCategory
        [HttpPost("addCategory")]
        public async Task<IActionResult> Post([FromBody] Category category)
        {
            return Ok(await CategoryService.Add(category));
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Category category)
        {
            return Ok(await CategoryService.Update(id, category));
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await CategoryService.Delete(id));
        }
    }
}
