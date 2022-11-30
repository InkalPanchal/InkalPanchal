using Microsoft.EntityFrameworkCore;
using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface IOrderItemsService :IRepository<OrderItem>
    {
        Task<List<OrderItem>> GetOrderItems();
    }
    public class OrderItemService :Repository<OrderItem>, IOrderItemsService
    {
        private snapdeal2442inkalbenContext DbContext { get; set; }
        public OrderItemService(snapdeal2442inkalbenContext Dbcontext) : base(Dbcontext) {
            DbContext = Dbcontext;
        }

        public async Task<List<OrderItem>> GetOrderItems()
        {
            var obj = await DbContext.OrderItems.Include(x => x.Product)
                                                .Include(x => x.Order)
                                                .ToListAsync();
            if(obj != null)
            {
                return obj;
            }else
            {
                return null;
            }
        }
    }
}
