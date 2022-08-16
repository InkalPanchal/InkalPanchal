using Microsoft.EntityFrameworkCore;
using Snapdeal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snapdeal.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<TEntity> Add(TEntity entity);
        Task<TEntity> Update(TEntity entity);
        Task<List<TEntity>> GetAll();
        Task<TEntity> GetById(int id);
        Task<bool> Delete(int id);

    }
    public class Repository<T> : IRepository<T> where T : class
    {
        snapdeal2442inkalbenContext DbContext { get; set; }

        public Repository(snapdeal2442inkalbenContext dbcontext)
        {
            DbContext = dbcontext;
        }
        public async Task<T> Add(T entity)
        {
            DbContext.Add(entity);
            await DbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<bool> Delete(int id)
        {
            var obj = await GetById(id);
            DbContext.Remove(obj);
            await DbContext.SaveChangesAsync();
            return true;
        }

        public async Task<List<T>> GetAll()
        {
            var obj = await DbContext.Set<T>().ToListAsync();
            return obj;
        }

        public async Task<T> GetById(int id)
        {
            var obj = await DbContext.Set<T>().FindAsync(id);
            return obj;
        }

        public async Task<T> Update(T entity)
        {
            DbContext.Update(entity);
            await DbContext.SaveChangesAsync();
            return entity;
        }
    }
}
