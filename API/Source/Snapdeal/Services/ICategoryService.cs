using Microsoft.EntityFrameworkCore;
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
        Task<List<Category>> GetParentCategories();
        Task<List<Category>> GetSubCategories(int id);
        Task<List<Category>> SearchCategory(Category category);
        Task<List<Category>> GetSubSubCategories(int id);
    }

    public class CategoryService : Repository<Category>, ICategoryService
    {
        public CategoryService(snapdeal2442inkalbenContext context) : base(context)
        {

        }
        public snapdeal2442inkalbenContext Dbcontext = new snapdeal2442inkalbenContext();
        public async Task<Category> Update(int id, Category category)
        {
            var catgry = await base.GetById(id);
            catgry.CategoryId = category.CategoryId;
            catgry.CategoryName = category.CategoryName;
            catgry.ParentCategory = category.ParentCategory;
            await base.Update(catgry);
            return catgry;
        }

        public async Task<List<Category>> GetParentCategories()
        {
            return await Dbcontext.Categories.Where(x => x.ParentCategory == null).ToListAsync(); //returns main categories

        }
        public async Task<List<Category>> GetSubCategories(int id)
        {
            return await Dbcontext.Categories.Where(x => x.ParentCategory == id).ToListAsync();
        }
        
        public async Task<List<Category>> GetSubSubCategories(int id)
        {
            return await GetSubCategories(id);
        }
        public async Task<List<Category>> SearchCategory(Category category)
        {
            //var obj = await Dbcontext.Categories.Where(x => x.CategoryName.ToLower() == category.ToLower()).ToListAsync();

            //var obj = await Dbcontext.Categories.Where(x => x.CategoryName.Contains(category.CategoryName)).ToListAsync();
            var obj = await Dbcontext.Categories.Where(x => x.CategoryName.StartsWith(category.CategoryName)).ToListAsync();
            if (obj != null)
            {
                return obj;
            }else
            {
                return null;
            }
        }
    }

}
