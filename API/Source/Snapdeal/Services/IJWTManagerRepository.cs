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
    public interface IRepository
    {
        Tokens authenticate(Customer user);
    }
    public class JWTManagerRepository : IRepository
    {
        
        
        private readonly IConfiguration iConfiguration;
        public JWTManagerRepository(IConfiguration configuration)
        {
            iConfiguration = configuration;
        }
        public Tokens authenticate(Customer user)
        {
            
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes(iConfiguration["JWT:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Role, user.Role)
                }),
                Expires = DateTime.UtcNow.AddMinutes(10),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return new Tokens { Token = tokenHandler.WriteToken(token) };


        }
    }
}
