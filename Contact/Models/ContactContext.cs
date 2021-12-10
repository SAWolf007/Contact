using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;


namespace Contact.Models
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options)
        {

        }
        public DbSet<ContactItem> Contacts { get; set; } = null!;

    }
}
