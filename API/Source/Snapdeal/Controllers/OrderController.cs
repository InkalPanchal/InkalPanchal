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
    public class OrderController : ControllerBase
    {
        private IOrderService orderService { get; set; }
        public OrderController(IOrderService orderservice)
        {
            orderService = orderservice;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Order order)
        {
            return Ok(await orderService.Add(order));
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await orderService.GetAll());
        }
    }
}
