using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Snapdeal.Models;
using Snapdeal.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private ICartService cartService { get; set; }

        public CartController(ICartService cartservice)
        {
            cartService = cartservice;
        }

        //api/Cart
        [HttpPost, Authorize(Roles = "user")]
        public async Task<IActionResult> Post([FromBody] CartItem cartItem)
        {
            return Ok(await cartService.Add(cartItem));
        }

        

    }
}
