using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class Attribute
    {
        public Attribute()
        {
            CustomerAddresses = new HashSet<CustomerAddress>();
            Orders = new HashSet<Orders>();
            PaymentPaymentStatusNavigation = new HashSet<Payment>();
            PaymentPaymentTypeNavigation = new HashSet<Payment>();
            ProductAttributesColor = new HashSet<ProductAttribute>();
            ProductAttributesSize = new HashSet<ProductAttribute>();
        }

        public int AttributeId { get; set; }
        public int? TypeId { get; set; }
        public string AttributesValue { get; set; }

        public virtual MasterTable Type { get; set; }
        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
        public virtual ICollection<Payment> PaymentPaymentStatusNavigation { get; set; }
        public virtual ICollection<Payment> PaymentPaymentTypeNavigation { get; set; }
        public virtual ICollection<ProductAttribute> ProductAttributesColor { get; set; }
        public virtual ICollection<ProductAttribute> ProductAttributesSize { get; set; }
    }
}
