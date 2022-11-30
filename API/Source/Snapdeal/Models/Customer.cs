using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
            ShortLists = new HashSet<ShortList>();
        }

        public int CustomerId { get; set; }
        public string UserName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public long? PhoneNumber { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Role { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Otp { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<ShortList> ShortLists { get; set; }
    }
}
