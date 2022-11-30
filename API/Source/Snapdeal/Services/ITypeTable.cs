using Microsoft.EntityFrameworkCore;
using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface ITypeTable : IRepository<MasterTable>
    {
        Task<int> GetByName(string AttrName);
    }

    public class TypeTable : Repository<MasterTable>, ITypeTable
    {  
        private snapdeal2442inkalbenContext DbContext { get; set; }
        
        public TypeTable(snapdeal2442inkalbenContext Dbcontext):base(Dbcontext)
        {
            this.DbContext = Dbcontext;
        }

        public async Task<int> GetByName(string AttrName)
        {
            //var obj = await base.GetById(AttrName)
            var obj = await DbContext.MasterTables.Where(x => x.Name.ToLower() == AttrName.ToLower()).FirstOrDefaultAsync();
            if (obj.AttributeTypeId > 0)
            {
                return obj.AttributeTypeId;
            }else
            {
                return 0;
            }
        }

    }
}
