using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class ProductAttributes
    {
        public int ProductAttributeId { get; set; }
        public int? ProductId { get; set; }
        public int? SizeId { get; set; }
        public int? ColorId { get; set; }

        public virtual Attribute Color { get; set; }
        public virtual Product Product { get; set; }
        public virtual Attribute Size { get; set; }
    }
}
