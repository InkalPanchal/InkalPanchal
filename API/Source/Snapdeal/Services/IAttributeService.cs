using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Snapdeal.Models;
using Microsoft.EntityFrameworkCore;

namespace Snapdeal.Services
{
    public interface IAttributeService :IRepository<ObjectAttribute>
    {
        Task<List<ObjectAttribute>> GetColor(int id);
        Task<List<ObjectAttribute>> GetByAttrId(int id);
        Task<List<ObjectAttribute>> GetAttrColors(int id);
        Task<List<ObjectAttribute>> GetAttrSizes(int id);
    }

    public class AttributeService : Repository<ObjectAttribute>, IAttributeService
    {
        private snapdeal2442inkalbenContext Dbcontext { get; set; }
        public AttributeService(snapdeal2442inkalbenContext dbcontext) : base(dbcontext)
        {
            Dbcontext = dbcontext;
        }

        public async Task<List<ObjectAttribute>> GetColor(int id)
        {

            var obj1 = await Dbcontext.ObjectAttributes.Where(x => x.TypeId == id).ToListAsync();
            if (obj1 != null)
            {
                return obj1;
            } else
            {
                return null;
            }
        }

        public async Task<List<ObjectAttribute>> GetByAttrId(int id)
        {
            var obj = await Dbcontext.ObjectAttributes.Include(p => p.ProductAttributeColors).Where(x => x.AttributeId == id).ToListAsync();
            return obj;
        }

        //pass productId in id
        //method for get colors
        public async Task<List<ObjectAttribute>> GetAttrColors(int id)
        {
            var obj = await Dbcontext.ObjectAttributes.FromSqlRaw($"exec uspProdColors {id}").ToListAsync();
            return obj;
        }

        //pass productId in id
        //method for get size
        public async Task<List<ObjectAttribute>> GetAttrSizes(int id)
        {
            var obj = await Dbcontext.ObjectAttributes.FromSqlRaw($"exec uspProdSize {id}").ToListAsync();
            return obj;
        }





    }
    
}
