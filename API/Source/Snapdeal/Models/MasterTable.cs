using System;
using System.Collections.Generic;

#nullable disable

namespace Snapdeal.Models
{
    public partial class MasterTable
    {
        public MasterTable()
        {
            ObjectAttributes = new HashSet<ObjectAttribute>();
        }

        public int AttributeTypeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ObjectAttribute> ObjectAttributes { get; set; }
    }
}
