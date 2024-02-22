using ContactList.API.Model;
using Microsoft.EntityFrameworkCore;

namespace ContactList.API.Infraestructure;

public class ConnectionContext : DbContext
{
    public DbSet<User> users { get; set; }
    public DbSet<Contact> contacts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("server=localhost;database=contactlist;trusted_connection=true;TrustServerCertificate=True;");
    }
}
