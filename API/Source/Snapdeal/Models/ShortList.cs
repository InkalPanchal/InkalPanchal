using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class ShortList
    {
        public ShortList()
        {
            ShortListItems = new HashSet<ShortListItem>();
        }

        public int ShortListId { get; set; }
        public int? CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<ShortListItem> ShortListItems { get; set; }
    }
}
