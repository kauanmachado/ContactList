using ContactList.API.Contracts;
using ContactList.API.Filters;
using ContactList.API.Model;
using ContactList.API.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers;

[ApiController]
[Route("/user/{user_id}/contacts")]
[Authorize]
public class ContactController : Controller
{
    private readonly IContactRepository _contactRepository;

    public ContactController(IContactRepository contactRepository) {  _contactRepository = contactRepository; }


    [HttpGet]
    public IActionResult GetContacts([FromRoute] Guid user_id)
    {
        try
        {
            var contacts = _contactRepository.GetContacts(user_id);
            return Ok(contacts);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public IActionResult Add([FromRoute] Guid user_id, ContactViewModel contact)
    {
        try
        {
            var _contact = new Contact(contact.contactname, contact.email, contact.tel);
            _contact.user_id = user_id;
            _contactRepository.Add(_contact);
            return Created();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut]
    public IActionResult Update(Guid contactid, ContactViewModel contact)
    {   
        try
        {
            var _contact = new Contact(contact.contactname, contact.email, contact.tel);
            _contactRepository.Update(contactid, _contact);
       
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
        
    }

    [HttpDelete]
    public IActionResult Delete(Guid contactid)
    {   
        try
        {   
            _contactRepository.Delete(contactid);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
        
    }
}
