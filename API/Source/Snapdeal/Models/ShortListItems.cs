using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class ShortListItems
    {
        public int ListId { get; set; }
        public int? ShortListId { get; set; }
        public int? ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual ShortList ShortList { get; set; }
    }
}
