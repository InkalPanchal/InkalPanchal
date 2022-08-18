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
        Task<int> Add(Brand brand);
        Task<int> Update(int id, Brand brand);
    }

    public class BrandService : Repository<Brand>, IBrandService
    {
        public BrandService(snapdeal2442inkalbenContext DbContext) :base(DbContext) { }

        public async Task<int> Add(Brand brand)
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
    }
}
