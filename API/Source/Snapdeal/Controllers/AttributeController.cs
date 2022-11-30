using Microsoft.AspNetCore.Mvc;
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
    public class AttributeController : ControllerBase
    {
        private IAttributeService attributeService { get; set; }
        private ITypeTable typetable { get; set; }
        public AttributeController(IAttributeService attributeservice, ITypeTable typeTable )
        {
            attributeService = attributeservice;
            typetable = typeTable;
        }
        // GET: api/<AttributeController>
        [HttpGet("{name}")]
        public async Task<IActionResult> GetTypeIdByName(string name)
        {
            var typeId = await typetable.GetByName(name);
            if(typeId > 0)
            {

                return Ok(typeId);
            }else
            {
                return BadRequest("Data not found!");
            }

        }

        [HttpGet("attr/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var obj = await attributeService.GetColor(id);
            if(obj != null)
            {
                return Ok(obj);
            }else
            {
                return BadRequest("Data not available!");
            }
        }

        //pass productid to id
        [HttpGet("attrColors/productId/{id}")]

        public async Task<IActionResult> GetColors(int id)
        {
            var obj = await attributeService.GetAttrColors(id);
            if (obj != null)
            {
                return Ok(obj);
            }
            else
            {
                return BadRequest("Data not available!");
            }
        }

        //pass productid to id
        [HttpGet("attrSizes/productId/{id}")]

        public async Task<IActionResult> GetSizes(int id)
        {
            var obj = await attributeService.GetAttrSizes(id);
            if (obj != null)
            {
                return Ok(obj);
            }
            else
            {
                return BadRequest("Data not available!");
            }
        }
    }
}
