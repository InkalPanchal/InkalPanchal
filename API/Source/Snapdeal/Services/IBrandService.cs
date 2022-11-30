using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface IBrandService : IRepository<Brand>
    {
        new Task<int> Add(Brand brand);
        Task<int> Update(int id, Brand brand);
    }

    public class BrandService : Repository<Brand>, IBrandService
    {

        public BrandService(snapdeal2442inkalbenContext DbContext) :base(DbContext) { }

        public new async Task<int> Add(Brand brand)
        {
            await base.Add(brand);
            return brand.BrandId;
        }

        public async Task<int> Update(int id, Brand brand)
        {
            var obj = await base.GetById(id);
            obj.BrandId = brand.BrandId;
            obj.BrandName = brand.BrandName;
            obj.Description = brand.Description;
            obj.BrandLogo = brand.BrandLogo;

            await base.Update(obj);
            return obj.BrandId;
        }

        //public async Task<List<Brand>> SearchCategory(Brand brand)
        //{
        //    //var obj = await Dbcontext.Categories.Where(x => x.CategoryName.ToLower() == category.ToLower()).ToListAsync();

        //    //var obj = await Dbcontext.Categories.Where(x => x.CategoryName.Contains(category.CategoryName)).ToListAsync();
        //    var obj = await Dbcontext.Categories.Where(x => x.CategoryName.StartsWith(category.CategoryName)).ToListAsync();
        //    if (obj != null)
        //    {
        //        return obj;
        //    }
        //    else
        //    {
        //        return null;
        //    }
        //}
    }
}
