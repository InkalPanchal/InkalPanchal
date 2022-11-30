using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class ObjectAttribute
    {
        public ObjectAttribute()
        {
            CustomerAddresses = new HashSet<CustomerAddress>();
            Orders = new HashSet<Order>();
            PaymentPaymentStatusNavigations = new HashSet<Payment>();
            PaymentPaymentTypeNavigations = new HashSet<Payment>();
            ProductAttributeColors = new HashSet<ProductAttribute>();
            ProductAttributeSizes = new HashSet<ProductAttribute>();
        }

        public int AttributeId { get; set; }
        public int? TypeId { get; set; }
        public string AttributesValue { get; set; }

        public virtual MasterTable Type { get; set; }
        public virtual ICollection<CustomerAddress> CustomerAddresses { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Payment> PaymentPaymentStatusNavigations { get; set; }
        public virtual ICollection<Payment> PaymentPaymentTypeNavigations { get; set; }
        public virtual ICollection<ProductAttribute> ProductAttributeColors { get; set; }
        public virtual ICollection<ProductAttribute> ProductAttributeSizes { get; set; }
    }
}
