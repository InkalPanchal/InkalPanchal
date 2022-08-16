using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class Category
    {
        public Category()
        {
            InverseParentCategoryNavigation = new HashSet<Category>();
            Product = new HashSet<Product>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int? ParentCategory { get; set; }

        public virtual Category ParentCategoryNavigation { get; set; }
        public virtual ICollection<Category> InverseParentCategoryNavigation { get; set; }
        public virtual ICollection<Product> Product { get; set; }
    }
}
