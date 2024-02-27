using ContactList.API.Contracts;
using ContactList.API.Infraestructure;
using ContactList.API.Model;
using Microsoft.AspNetCore.Authorization;
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
            throw new Exception("Erro ao adicionar contato.", ex);
        }
    }
    public void Delete(Guid contactId)
    {
        try
        {
            var contact = _context.contacts.FirstOrDefault(c => c.id == contactId);

            if (contact == null)
            {
                throw new Exception($"Contato com ID {contactId} não encontrado.");
            }

            _context.contacts.Remove(contact);
            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao remover contato.", ex);
        }
    }
    public List<Contact> GetContacts(Guid userId)
    {
        try
        {
            return _context.contacts
            .Where(contact => contact.user_id.Equals(userId))
            .ToList();
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao listar contatos.", ex);
        }
       
    }
    public void Update(Guid contactId, Contact updatedContact)
    {
        try
        {
            var contact = _context.contacts.FirstOrDefault(c => c.id.Equals(contactId));

            if (contact == null)
            {
                throw new Exception($"Contato com ID {contactId} não encontrado.");
            }

            contact.contactname = updatedContact.contactname;
            contact.email = updatedContact.email;
            contact.tel = updatedContact.tel;

            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao atualizar contato.", ex);
        }
    }
}
