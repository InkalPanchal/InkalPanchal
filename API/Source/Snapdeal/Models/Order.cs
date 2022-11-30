using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public int? Total { get; set; }
        public int? OrderStatus { get; set; }
        public int? PaymentId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ObjectAttribute OrderStatusNavigation { get; set; }
        public virtual Payment Payment { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
