using ContactList.API.Model;

namespace ContactList.API.Contracts;

public interface IContactRepository
{
    public void Add(Contact contact);
    public void Update(Guid contactId, Contact contact);
    public void Delete(Guid contactId);
    public List<Contact> GetContacts(Guid userId);
}
