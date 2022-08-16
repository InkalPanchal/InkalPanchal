using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class CustomerAddresses
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
