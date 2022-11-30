using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface IOrderService : IRepository<Order>
    {
        Task<Order> Add(Order order);
    }
    public class OrderService :Repository<Order>, IOrderService
    {
        private snapdeal2442inkalbenContext Dbcontext { get; set; }
        public OrderService(snapdeal2442inkalbenContext DbContext) : base(DbContext) {
            Dbcontext = DbContext;
        }

        public async Task<Order> Add(Order order)
        {
            order.ModifiedDate = DateTime.Now;
            order.CreatedDate = DateTime.Now;
            order.OrderStatus = 277;

            await base.Add(order);
            await Dbcontext.SaveChangesAsync();
            return order;

            
        }
        

      
    }
}
