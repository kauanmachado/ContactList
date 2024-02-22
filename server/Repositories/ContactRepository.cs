using ContactList.API.Contracts;
using ContactList.API.Infraestructure;
using ContactList.API.Model;

namespace ContactList.API.Repositories;

public class ContactRepository : IContactRepository
{
    private readonly ConnectionContext _context;
    public ContactRepository(ConnectionContext context)
    {
        _context = context;
    }
    public bool Add(int userId, Contact contact)
    {
        throw new NotImplementedException();
    }
    public bool Delete(int userId, int contactId)
    {
        throw new NotImplementedException();
    }
    public List<Contact> GetContacts(int userId)
    {
        throw new NotImplementedException();
    }
    public bool Update(int userId, Contact contact)
    {
        throw new NotImplementedException();
    }
}
