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
    public class SignUpController : ControllerBase
    {
        private ISignUpService SignUpService { get; set; }
      
        public SignUpController(ISignUpService signupService)
        {
            SignUpService = signupService;
           
        }

        //api/[SignUp]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Customer user)
        {
            
            if(string.IsNullOrEmpty(user.EmailAddress) && (user.PhoneNumber < 0) || string.IsNullOrEmpty(user.UserName) || user.Password.Length == 0)
            {
                return BadRequest("Fill the data to sign up.");
            }
            else
            {
                return Ok(await SignUpService.Add(user));
            }
        }
    }
}
