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
        Task<int> Add(Product product);
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

        public async Task<int> Add(Product product)
        {
            await base.Add(product);
            return product.ProductId;
        }

    }
}
