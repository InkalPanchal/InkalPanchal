using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface ICartService : IRepository<CartItem>
    {

    }
    public class CartService : Repository<CartItem>, ICartService
    {
        public CartService(snapdeal2442inkalbenContext Dbcontext) : base(Dbcontext) { }

    }
}
