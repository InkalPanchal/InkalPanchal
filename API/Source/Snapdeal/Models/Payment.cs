using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class Payment
    {
        public Payment()
        {
            Orders = new HashSet<Orders>();
        }

        public int PaymentId { get; set; }
        public int? PaymentType { get; set; }
        public DateTime? PaymentDate { get; set; }
        public int? PaymentStatus { get; set; }
        public decimal? Amount { get; set; }

        public virtual Attribute PaymentStatusNavigation { get; set; }
        public virtual Attribute PaymentTypeNavigation { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }
}
