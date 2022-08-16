using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class ProductAttribute
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
