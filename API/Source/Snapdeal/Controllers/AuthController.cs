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
    public class AuthController : ControllerBase
    {
        private readonly IJWTManagerRepository _jwtManeger;
        public AuthController(IJWTManagerRepository jwtManager)
        {
            this._jwtManeger = jwtManager;
        }
        
        [AllowAnonymous]
        // POST api/<AuthController>
        [HttpPost]
        [Route("authenticate")]
        public IActionResult Post([FromBody] Customer user)
        {
            var token = _jwtManeger.login(user);
            if(token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }

        
    }
}
