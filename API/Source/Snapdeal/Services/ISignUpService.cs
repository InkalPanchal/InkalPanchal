using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface ISignUpService : IRepository<Customer>
    {
        Task<Customer> Add(Customer user);
    }
    public class SignUpService : Repository<Customer>, ISignUpService
    {
        private snapdeal2442inkalbenContext DBContext { get; set; }
        public SignUpService(snapdeal2442inkalbenContext Dbcontext) : base(Dbcontext) { }

    }
}
