using ContactList.API.Contracts;
using ContactList.API.Infraestructure;
using ContactList.API.Model;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;


namespace ContactList.API.Repositories;

public class ContactRepository : IContactRepository
{
    private readonly ConnectionContext _context;
    public ContactRepository(ConnectionContext context)
    {
        _context = context;

    }
    public void Add(Contact contact)
    {
        try
        {
            _context.contacts.Add(contact);
            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao adicionar contato.");
        }
    }
    public bool Delete(int contactId)
    {
        throw new NotImplementedException();
    }
    public List<Contact> GetContacts()
    {
        return null;
    }
    public void Update(int contactId, Contact contact)
    {
        _context.contacts.Update(contact);
    }
}
