using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Cart = new HashSet<Cart>();
            CustomerAddresses = new HashSet<CustomerAddress>();
            Orders = new HashSet<Orders>();
            ShortList = new HashSet<ShortList>();
        }

        public int CustomerId { get; set; }
        public string UserName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public long? PhoneNumber { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Role { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
        public virtual ICollection<ShortList> ShortList { get; set; }
    }
}
