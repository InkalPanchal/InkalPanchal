using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

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

        public virtual DbSet<Brand> Brands { get; set; }
        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<CartItem> CartItems { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public virtual DbSet<MasterTable> MasterTables { get; set; }
        public virtual DbSet<ObjectAttribute> ObjectAttributes { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderItem> OrderItems { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductAttribute> ProductAttributes { get; set; }
        public virtual DbSet<ProductImage> ProductImages { get; set; }
        public virtual DbSet<ShortList> ShortLists { get; set; }
        public virtual DbSet<ShortListItem> ShortListItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=43.204.134.14;Database=snapdeal-2442-inkalben;User Id=snapdeal-2442-inkalben;Password=Bb9YejWHKilkTns;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("Brand");

                entity.Property(e => e.BrandId).HasColumnName("BrandID");

                entity.Property(e => e.BrandName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart");

                entity.Property(e => e.CartId).HasColumnName("CartID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__Cart__CustomerID__48CFD27E");
            });

            modelBuilder.Entity<CartItem>(entity =>
            {
                entity.ToTable("CartItem");

                entity.Property(e => e.CartItemId).HasColumnName("CartItemID");

                entity.HasOne(d => d.Cart)
                    .WithMany(p => p.CartItems)
                    .HasForeignKey(d => d.CartId)
                    .HasConstraintName("FK__CartItem__CartId__4BAC3F29");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CartItems)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__CartItem__Produc__4CA06362");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.ParentCategoryNavigation)
                    .WithMany(p => p.InverseParentCategoryNavigation)
                    .HasForeignKey(d => d.ParentCategory)
                    .HasConstraintName("FK__Category__Parent__32E0915F");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Otp).IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(12)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('user')");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomerAddress>(entity =>
            {
                entity.HasKey(e => e.AddressId)
                    .HasName("PK__Customer__091C2A1BD5FFDBED");

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
                    .HasConstraintName("FK__CustomerA__Addre__7F2BE32F");
            });

            modelBuilder.Entity<MasterTable>(entity =>
            {
                entity.HasKey(e => e.AttributeTypeId)
                    .HasName("PK__MasterTa__F3889B6164CF1C1E");

                entity.ToTable("MasterTable");

                entity.Property(e => e.AttributeTypeId).HasColumnName("AttributeTypeID");

                entity.Property(e => e.Name)
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ObjectAttribute>(entity =>
            {
                entity.HasKey(e => e.AttributeId)
                    .HasName("PK__Attribut__C189298A579FDD73");

                entity.ToTable("ObjectAttribute");

                entity.Property(e => e.AttributeId).HasColumnName("AttributeID");

                entity.Property(e => e.AttributesValue)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TypeId).HasColumnName("TypeID");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.ObjectAttributes)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("FK__Attribute__TypeI__2B3F6F97");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

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

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.Property(e => e.OrderItemId).HasColumnName("OrderItemID");

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

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.ToTable("Payment");

                entity.Property(e => e.PaymentId).HasColumnName("PaymentID");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.PaymentDate).HasColumnType("date");

                entity.HasOne(d => d.PaymentStatusNavigation)
                    .WithMany(p => p.PaymentPaymentStatusNavigations)
                    .HasForeignKey(d => d.PaymentStatus)
                    .HasConstraintName("FK__Payment__Payment__5070F446");

                entity.HasOne(d => d.PaymentTypeNavigation)
                    .WithMany(p => p.PaymentPaymentTypeNavigations)
                    .HasForeignKey(d => d.PaymentType)
                    .HasConstraintName("FK__Payment__Payment__4F7CD00D");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.ProductId).HasColumnName("ProductID");

                entity.Property(e => e.Availability)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.BrandId).HasColumnName("BrandID");

                entity.Property(e => e.Description).IsUnicode(false);

                entity.Property(e => e.Highlights).IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OtherSpecifications).IsUnicode(false);

                entity.Property(e => e.ProductCategoryId).HasColumnName("ProductCategoryID");

                entity.Property(e => e.ProductName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProductPrice).HasColumnType("money");

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.BrandId)
                    .HasConstraintName("FK__Product__BrandID__38996AB5");

                entity.HasOne(d => d.ProductCategory)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.ProductCategoryId)
                    .HasConstraintName("FK__Product__Product__6477ECF3");
            });

            modelBuilder.Entity<ProductAttribute>(entity =>
            {
                entity.Property(e => e.ProductAttributeId)
                    .ValueGeneratedNever()
                    .HasColumnName("ProductAttributeID");

                entity.Property(e => e.ColorId).HasColumnName("ColorID");

                entity.Property(e => e.SizeId).HasColumnName("SizeID");

                entity.HasOne(d => d.Color)
                    .WithMany(p => p.ProductAttributeColors)
                    .HasForeignKey(d => d.ColorId)
                    .HasConstraintName("FK__ProductAt__Color__44FF419A");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductAttributes)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ProductAt__Produ__4316F928");

                entity.HasOne(d => d.Size)
                    .WithMany(p => p.ProductAttributeSizes)
                    .HasForeignKey(d => d.SizeId)
                    .HasConstraintName("FK__ProductAt__SizeI__440B1D61");
            });

            modelBuilder.Entity<ProductImage>(entity =>
            {
                entity.Property(e => e.ProductImageId).HasColumnName("ProductImageID");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductImages)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK__ProductIm__Produ__3B75D760");
            });

            modelBuilder.Entity<ShortList>(entity =>
            {
                entity.ToTable("ShortList");

                entity.Property(e => e.ShortListId).HasColumnName("ShortListID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.ShortLists)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK__ShortList__Custo__267ABA7A");
            });

            modelBuilder.Entity<ShortListItem>(entity =>
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
