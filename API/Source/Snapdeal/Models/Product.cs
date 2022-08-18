using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class Product
    {
        public Product()
        {
            CartItem = new HashSet<CartItem>();
            OrderItems = new HashSet<OrderItem>();
            ProductAttributes = new HashSet<ProductAttribute>();
            ProductImages = new HashSet<ProductImage>();
            ShortListItems = new HashSet<ShortListItem>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string Description { get; set; }
        public string Availability { get; set; }
        public int Quantity { get; set; }
        public string Highlights { get; set; }
        public string OtherSpecifications { get; set; }
        public int? BrandId { get; set; }
        public int? ProductCategoryId { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual Category ProductCategory { get; set; }
        public virtual ICollection<CartItem> CartItem { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public virtual ICollection<ProductAttribute> ProductAttributes { get; set; }
        public virtual ICollection<ProductImage> ProductImages { get; set; }
        public virtual ICollection<ShortListItem> ShortListItems { get; set; }
    }
}
