using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface ICategoryService : IRepository<Category>
    {
        Task<Category> Update(int id, Category category);
    }

    public class CategoryService : Repository<Category>, ICategoryService
    {
        public CategoryService(snapdeal2442inkalbenContext context) : base(context)
        {

        }
        public async Task<Category> Update(int id, Category category)
        {
            var catgry = await base.GetById(id);
            catgry.CategoryId = category.CategoryId;
            catgry.CategoryName = category.CategoryName;
            catgry.ParentCategory = category.ParentCategory;
            await base.Update(catgry);
            return catgry;
        }
        
    }

}
