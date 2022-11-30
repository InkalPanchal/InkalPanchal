using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Snapdeal.Models;
using Snapdeal.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Services
{
    public interface IProductService : IRepository<Product>
    {
        Task<int> Update(int id, Product product);
        new Task<int> Add(Product product);
        Task<List<Product>> GetProductImages();
        Task<List<Product>> GetProductDetail();
        Task<Product> GetByProdId(int id);
        Task<List<Product>> SearchProduct(Product product);

    }
    public class ProductService : Repository<Product>, IProductService
    {
        public ProductService(snapdeal2442inkalbenContext dbcontext) : base(dbcontext) { }
        public async Task<int> Update(int id, Product product)
        {
            var obj = await base.GetById(id);
            obj.ProductId = product.ProductId;
            obj.ProductName = product.ProductName;
            obj.ProductPrice = product.ProductPrice;
            obj.Quantity = product.Quantity;
            obj.BrandId = product.BrandId;
            obj.ProductCategoryId = product.ProductCategoryId;
            obj.Highlights = product.Highlights;
            obj.Availability = product.Availability;
            await base.Update(obj);
            return obj.ProductId;
        }

        public new async Task<int> Add(Product product)
        {

            product.ModifiedDate = DateTime.Now;    
            await base.Add(product);

            return product.ProductId;
        }

        snapdeal2442inkalbenContext Dbcontext = new snapdeal2442inkalbenContext();
        public async Task<List<Product>> GetProductImages()
        {
            //var obj = await base.GetAll();
            var obj = await Dbcontext.Products.Include(p => p.ProductImages).ToListAsync();
            return obj;
            
        }
        public async Task<List<Product>> GetProductDetail()
        {
            var obj = await Dbcontext.Products.Include(p => p.Brand)
                                              .Include(p => p.ProductCategory)
                                              .Include(p=>p.ProductImages)
                                              .ToListAsync();
            return obj;
        }

        public async Task<Product> GetByProdId(int id)
        {

            var obj = await Dbcontext.Products.Include(p => p.Brand)
                                              .Include(p => p.ProductImages)
                                              .Include(p => p.ProductAttributes)
                                              .Where(p => p.ProductId == id).FirstOrDefaultAsync();
            return obj;
        }
        public async Task<List<Product>> SearchProduct(Product product)
        {
            var obj = await Dbcontext.Products.Where(x => x.ProductName.Contains(product.ProductName)).ToListAsync();
            if(obj != null)
            {
                return obj;
            }else
            {
                return null;
            }
        }



    }
}
