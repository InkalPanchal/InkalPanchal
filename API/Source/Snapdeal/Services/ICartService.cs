using Microsoft.EntityFrameworkCore;
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
        //Task<CartItem> AddToCart(CartItem cartItems);
    }
    public class CartService : Repository<CartItem>, ICartService
    {
        private snapdeal2442inkalbenContext DbContext { get; set; }
        public CartService(snapdeal2442inkalbenContext Dbcontext) : base(Dbcontext) {
            DbContext = Dbcontext;
        }

        //public async Task<Cart> GetCartID(int id)
        //{
        //    var cartId = await DbContext.Carts.Where(x => x.CustomerId == id).FirstOrDefaultAsync();
        //    return cartId;
        //}
        //public async Task<CartItem> AddToCart(CartItem cartItems)
        //{
            
        //}
        
    }
}
