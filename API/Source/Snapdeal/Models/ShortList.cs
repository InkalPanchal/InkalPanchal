using System;
using System.Collections.Generic;

#nullable disable

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
