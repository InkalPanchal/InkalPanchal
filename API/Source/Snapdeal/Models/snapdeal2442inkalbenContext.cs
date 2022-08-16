using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Snapdeal.Models
{
    public partial class snapdeal2442inkalbenContext : DbContext
    {
        public snapdeal2442inkalbenContext()
        {
        }

        public snapdeal2442inkalbenContext(DbContextOptions<snapdeal2442inkalbenContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Attribute> Attribute { get; set; }
        public virtual DbSet<Brand> Brand { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<CartItem> CartItem { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<CustomerAddresses> CustomerAddresses { get; set; }
        public virtual DbSet<MasterTable> MasterTable { get; set; }
        public virtual DbSet<OrderItems> OrderItems { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Payment> Payment { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductAttributes> ProductAttributes { get; set; }
        public virtual DbSet<ProductImages> ProductImages { get; set; }
        public virtual DbSet<ShortList> ShortList { get; set; }
        public virtual DbSet<ShortListItems> ShortListItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=43.204.134.14;Database=snapdeal-2442-inkalben;User Id=snapdeal-2442-inkalben;Password=Bb9YejWHKilkTns;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Attribute>(entity =>
            {
                entity.Property(e => e.AttributeId).HasColumnName("AttributeID");

                entity.Property(e => e.AttributesValue)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TypeId).HasColumnName("TypeID");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Attribute)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("FK__Attribute__TypeI__2B3F6F97");
            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.Property(e => e.BrandId).HasColumnName("BrandID");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.CartId).HasColumnName("CartID");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Cart__CustomerID__48CFD27E");
            });

            modelBuilder.Entity<CartItem>(entity =>
            {
                entity.Property(e => e.CartItemId).HasColumnName("CartItemID");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.CartItem)
                    .HasForeignKey(d => d.CartId)
                    .HasConstraintName("FK__CartItem__CartId__4BAC3F29");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CartItem)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__CartItem__Produc__4CA06362");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.ParentCategoryNavigation)
                    .WithMany(p => p.InverseParentCategoryNavigation)
                    .HasForeignKey(d => d.ParentCategory)
                    .HasConstraintName("FK__Category__Parent__32E0915F");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(user_name())");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomerAddresses>(entity =>
            {
                entity.HasKey(e => e.AddressId)
                    .HasName("PK__Customer__091C2A1B34545A24");

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.AddressLine)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Landmark)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.AddressTypeNavigation)
                    .WithMany(p => p.CustomerAddresses)
                    .HasForeignKey(d => d.AddressType)
                    .HasConstraintName("FK__CustomerA__Addre__6A30C649");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerAddresses)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__CustomerA__Custo__68487DD7");
            });

            modelBuilder.Entity<MasterTable>(entity =>
            {
                entity.HasKey(e => e.AttributeTypeId)
                    .HasName("PK__MasterTa__F3889B6164CF1C1E");

                entity.Property(e => e.AttributeTypeId).HasColumnName("AttributeTypeID");

                entity.Property(e => e.Name)
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<OrderItems>(entity =>
            {
                entity.HasKey(e => e.OrderItemId)
                    .HasName("PK__OrderIte__57ED06A1A0FFAF90");

                entity.Property(e => e.OrderItemId)
                    .HasColumnName("OrderItemID")
                    .ValueGeneratedNever();

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK__OrderItem__Order__5812160E");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__OrderItem__Produ__59063A47");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PK__Orders__C3905BAFBFCD33C3");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Orders__Customer__534D60F1");

                entity.HasOne(d => d.OrderStatusNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.OrderStatus)
                    .HasConstraintName("FK__Orders__OrderSta__5441852A");

                entity.HasOne(d => d.Payment)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.PaymentId)
                    .HasConstraintName("FK__Orders__PaymentI__5535A963");
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.Property(e => e.PaymentId).HasColumnName("PaymentID");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.PaymentDate).HasColumnType("date");

                entity.HasOne(d => d.PaymentStatusNavigation)
                    .WithMany(p => p.PaymentPaymentStatusNavigation)
                    .HasForeignKey(d => d.PaymentStatus)
                    .HasConstraintName("FK__Payment__Payment__5070F446");

                entity.HasOne(d => d.PaymentTypeNavigation)
                    .WithMany(p => p.PaymentPaymentTypeNavigation)
                    .HasForeignKey(d => d.PaymentType)
                    .HasConstraintName("FK__Payment__Payment__4F7CD00D");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.Availability)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BrandId).HasColumnName("BrandID");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.Highlights).IsUnicode(false);

                entity.Property(e => e.OtherSpecifications).IsUnicode(false);

                entity.Property(e => e.ProductCategoryId).HasColumnName("ProductCategoryID");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice).HasColumnType("money");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.BrandId)
                    .HasConstraintName("FK__Product__BrandID__38996AB5");

                entity.HasOne(d => d.ProductCategory)
                    .WithMany(p => p.Product)
                    .HasForeignKey(d => d.ProductCategoryId)
                    .HasConstraintName("FK__Product__Product__6477ECF3");
            });

            modelBuilder.Entity<ProductAttributes>(entity =>
            {
                entity.HasKey(e => e.ProductAttributeId)
                    .HasName("PK__ProductA__00CE672716B6F28D");

                entity.Property(e => e.ProductAttributeId)
                    .HasColumnName("ProductAttributeID")
                    .ValueGeneratedNever();

                entity.Property(e => e.ColorId).HasColumnName("ColorID");

                entity.Property(e => e.SizeId).HasColumnName("SizeID");

                entity.HasOne(d => d.Color)
                    .WithMany(p => p.ProductAttributesColor)
                    .HasForeignKey(d => d.ColorId)
                    .HasConstraintName("FK__ProductAt__Color__44FF419A");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductAttributes)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ProductAt__Produ__4316F928");

                entity.HasOne(d => d.Size)
                    .WithMany(p => p.ProductAttributesSize)
                    .HasForeignKey(d => d.SizeId)
                    .HasConstraintName("FK__ProductAt__SizeI__440B1D61");
            });

            modelBuilder.Entity<ProductImages>(entity =>
            {
                entity.HasKey(e => e.ProductImageId)
                    .HasName("PK__ProductI__07B2B1D8ED4AEF19");

                entity.Property(e => e.ProductImageId).HasColumnName("ProductImageID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductImages)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ProductIm__Produ__3B75D760");
            });

            modelBuilder.Entity<ShortList>(entity =>
            {
                entity.Property(e => e.ShortListId).HasColumnName("ShortListID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ShortList)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__ShortList__Custo__267ABA7A");
            });

            modelBuilder.Entity<ShortListItems>(entity =>
            {
                entity.HasKey(e => e.ListId)
                    .HasName("PK__ShortLis__E3832865D40E9885");

                entity.Property(e => e.ListId).HasColumnName("ListID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ShortListItems)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ShortList__Produ__3F466844");

                entity.HasOne(d => d.ShortList)
                    .WithMany(p => p.ShortListItems)
                    .HasForeignKey(d => d.ShortListId)
                    .HasConstraintName("FK__ShortList__Short__3E52440B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
