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
            var obj = await CategoryService.GetAll();
            if (obj != null)
            {
                return Ok(obj);
            }
            else return NotFound("Data not found.");
        }

        // GET api/<CategoryController>/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await CategoryService.GetById(id);
            if (obj != null)
            {
                return Ok(obj);
            }
            else return NotFound("Data not found.");
        }

        // POST api/<CategoryController>/addCategory
        [HttpPost("addCategory")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Post([FromBody] Category category)
        {
            if (string.IsNullOrEmpty(category.CategoryName))
            {
                return BadRequest();
            }
            return Ok(await CategoryService.Add(category));
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Put(int id, [FromBody] Category category)
        {
            return Ok(await CategoryService.Update(id, category));
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var obj = await CategoryService.GetById(id);
            if (obj != null)
            {
                return Ok(await CategoryService.Delete(id));
            }
            else
            {
                return NotFound("Data not exists.");
            }
            
        }

        [AllowAnonymous]
        [HttpGet("parentCatList")]
        public async Task<IActionResult> GetParentCategoryList()
        {
            return Ok(await CategoryService.GetParentCategories());
        }

        [AllowAnonymous]
        [HttpGet("subCategories/{id}")]
        public async Task<IActionResult> GetSubCategoryList(int id)
        {
            return Ok(await CategoryService.GetSubCategories(id));
        }

        [AllowAnonymous]
        [HttpPost("categories/searchCategory")]
        public async Task<IActionResult> SearchCategories([FromBody] Category category)
        {
            return Ok(await CategoryService.SearchCategory(category));
        }

        [AllowAnonymous]
        [HttpGet("getSubSubCat/{id}")]
        public async Task<IActionResult> GetSUbSubCategories(int id) 
        {
            return Ok(await CategoryService.GetSubSubCategories(id));
        }
    }
}
