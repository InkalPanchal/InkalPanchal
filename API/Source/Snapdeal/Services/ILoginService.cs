using Microsoft.EntityFrameworkCore;
using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface ILoginService: IRepository<Customer>
    {
        Task<Customer> Login(Customer user);
        Task<Customer> OtpVerify(Customer user);
    }
    public class LoginService:Repository<Customer>, ILoginService
    {
        public LoginService(snapdeal2442inkalbenContext context) :base(context){ }
        snapdeal2442inkalbenContext dbcontext = new snapdeal2442inkalbenContext();
        public async Task<Customer> Login(Customer user)
        {
            var obj = await dbcontext.Customers.Where(x => x.PhoneNumber == user.PhoneNumber || x.EmailAddress == user.EmailAddress).FirstOrDefaultAsync();
            Random random = new Random();
            var otp = random.Next(1000, 9999).ToString();

            if(obj != null)
            {
                obj.Otp = otp;
                await base.Update(obj);
                return obj;
                
            }else
            {
                throw new Exception("Fisrt Sing up!");
            }
        }

        public async Task<Customer> OtpVerify(Customer user)
        {
            var obj = await dbcontext.Customers.Where(x => x.Otp == user.Otp).SingleOrDefaultAsync();
            if(obj != null)
            {
                return obj;
            }
            else
            {
                return null;
            }
        }

        
    }
}
