using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class Orders
    {
        public Orders()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public int? Total { get; set; }
        public int? OrderStatus { get; set; }
        public int? PaymentId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Attribute OrderStatusNavigation { get; set; }
        public virtual Payment Payment { get; set; }
        public virtual ICollection<OrderItems> OrderItems { get; set; }
    }
}
