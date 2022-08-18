using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Snapdeal.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface IJWTManagerRepository
    {
        Tokens login(Customer user);
    }
    public class JWTManagerRepository : IJWTManagerRepository
    {
        private snapdeal2442inkalbenContext dbcontext { get; set; }
        private readonly IConfiguration iConfiguration;
        public JWTManagerRepository(IConfiguration configuration)
        {
            iConfiguration = configuration;
        }
        public Tokens login(Customer user)
        {
            dbcontext = new snapdeal2442inkalbenContext();
            var users = dbcontext.Customer.SingleOrDefault(x => x.PhoneNumber == user.PhoneNumber || x.EmailAddress == user.EmailAddress && x.Password == user.Password);
            if(users == null)
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes(iConfiguration["JWT:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, users.EmailAddress),
                    new Claim(ClaimTypes.Role, users.Role)
                }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens { Token = tokenHandler.WriteToken(token) };


        }
    }
}
