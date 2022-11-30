using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class Payment
    {
        public Payment()
        {
            Orders = new HashSet<Order>();
        }

        public int PaymentId { get; set; }
        public int? PaymentType { get; set; }
        public DateTime? PaymentDate { get; set; }
        public int? PaymentStatus { get; set; }
        public decimal? Amount { get; set; }

        public virtual ObjectAttribute PaymentStatusNavigation { get; set; }
        public virtual ObjectAttribute PaymentTypeNavigation { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
