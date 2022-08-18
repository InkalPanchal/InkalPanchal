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
    public class ProductsController : ControllerBase
    {
        private IProductService ProductService { get; set; }
        public ProductsController(IProductService productService)
        {
            ProductService = productService;
        }

        [AllowAnonymous]
        // GET: api/<ProductsController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var obj = await ProductService.GetAll();
            if(obj != null)
            {
                return Ok(obj);

            }else
            {
                return NotFound("Data not availbale.");
            }
        }

        [AllowAnonymous]
        // GET api/<ProductsController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await ProductService.GetById(id);
            if(obj != null)
            {
                return Ok(obj);
            }else
            {
                return NotFound("Data not available.");
            }
        }

        // POST api/<ProductsController>
        [HttpPost("addProduct"), Authorize(Roles = "admin")]
        public async Task<IActionResult> Post([FromBody] Product product )
        {
            if (string.IsNullOrEmpty(product.ProductName))
            {
                return BadRequest();
            }
            return Ok(await ProductService.Add(product));
        }

        // PUT api/<ProductsController>/5
        [HttpPut("{id}"), Authorize(Roles = "admin")]
        public async Task<IActionResult> Put(int id, [FromBody] Product product)
        {
            return Ok(await ProductService.Update(id,product));
        }

        // DELETE api/<ProductsController>/5
        [HttpDelete("{id}"), Authorize(Roles = "admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var obj = await ProductService.GetById(id);
            if (obj != null)
            {
                return Ok(await ProductService.Delete(id));
            }
            else
            {
                return NotFound("Data not exists.");
            }
        }
    }
}
