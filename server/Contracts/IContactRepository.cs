using ContactList.API.Model;

namespace ContactList.API.Contracts;

public interface IContactRepository
{
    public void Add(Contact contact);
    public void Update(int contactId, Contact contact);
    public bool Delete(int contactId);
    public List<Contact> GetContacts();
}
