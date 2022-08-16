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
            CustomerAddresses = new HashSet<CustomerAddresses>();
            Orders = new HashSet<Orders>();
            PaymentPaymentStatusNavigation = new HashSet<Payment>();
            PaymentPaymentTypeNavigation = new HashSet<Payment>();
            ProductAttributesColor = new HashSet<ProductAttributes>();
            ProductAttributesSize = new HashSet<ProductAttributes>();
        }

        public int AttributeId { get; set; }
        public int? TypeId { get; set; }
        public string AttributesValue { get; set; }

        public virtual MasterTable Type { get; set; }
        public virtual ICollection<CustomerAddresses> CustomerAddresses { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
        public virtual ICollection<Payment> PaymentPaymentStatusNavigation { get; set; }
        public virtual ICollection<Payment> PaymentPaymentTypeNavigation { get; set; }
        public virtual ICollection<ProductAttributes> ProductAttributesColor { get; set; }
        public virtual ICollection<ProductAttributes> ProductAttributesSize { get; set; }
    }
}
