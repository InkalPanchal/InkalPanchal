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
    public class LoginController : ControllerBase
    {
        private ILoginService loginService { get; set; }
        private IRepository _jwtManeger { get; set; }
        public LoginController(ILoginService loginservice, IRepository jWTManager) {
            loginService = loginservice;
            _jwtManeger = jWTManager;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Customer user)
        {
            try
            {
                return Ok(await loginService.Login(user));
            }
            catch
            {
                return NotFound("Wrong credentials!");
            }
            //return Ok(await loginService.Login(user));
        }

        [HttpPost("otpVerify")]
        public async Task<IActionResult> VerifyOtp([FromBody] Customer user)
        {
            var obj = await loginService.OtpVerify(user);
            if(obj != null)
            {
                var token = _jwtManeger.authenticate(obj);
                if (token == null)
                {
                    return Unauthorized();
                }
                else
                {    
                    return Ok(token);
                }
            }
            else
            {
                return BadRequest(new { message="Otp doesn't match." });
            }
        }
    }
}
