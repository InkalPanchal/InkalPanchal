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
    public class OrderItemController : ControllerBase
    {
        private IOrderItemsService OrderItemsService { get; set; }
        public OrderItemController(IOrderItemsService orderItemservice)
        {
            OrderItemsService = orderItemservice;
        }
        [HttpPost]
        
        public async Task<IActionResult> Post(OrderItem orderItem)
        {
            return Ok(await OrderItemsService.Add(orderItem));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await OrderItemsService.GetOrderItems());
        }

    }
}
