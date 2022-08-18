using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface IOrderService : IRepository<Order>
    {
    }
    public class OrderService :Repository<Order>, IOrderService
    {
        public OrderService(snapdeal2442inkalbenContext DbContext) : base(DbContext) { }

        
    }
}
