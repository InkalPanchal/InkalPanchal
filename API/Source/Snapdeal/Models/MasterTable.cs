using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class MasterTable
    {
        public MasterTable()
        {
            Attribute = new HashSet<Attribute>();
        }

        public int AttributeTypeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Attribute> Attribute { get; set; }
    }
}
