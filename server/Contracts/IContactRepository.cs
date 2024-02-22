using ContactList.API.Model;

namespace ContactList.API.Contracts;

public interface IContactRepository
{
    public bool Add(int userId, Contact contact);
    public bool Update(int userId, Contact contact);
    public bool Delete(int userId, int contactId);
    public List<Contact> GetContacts(int userId);
}
