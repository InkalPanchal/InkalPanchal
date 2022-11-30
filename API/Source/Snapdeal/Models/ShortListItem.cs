using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class ShortListItem
    {
        public int ListId { get; set; }
        public int? ShortListId { get; set; }
        public int? ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual ShortList ShortList { get; set; }
    }
}
