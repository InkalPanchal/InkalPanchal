using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class CustomerAddress
    {
        public int AddressId { get; set; }
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string AddressLine { get; set; }
        public int Pincode { get; set; }
        public string Landmark { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public long MobileNumber { get; set; }
        public int? AddressType { get; set; }

        public virtual Attribute AddressTypeNavigation { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
