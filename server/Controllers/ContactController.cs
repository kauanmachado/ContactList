using ContactList.API.Contracts;
using ContactList.API.Filters;
using ContactList.API.Model;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers;

[ApiController]
[Route("/api/user/{user_id}/contacts")]
public class ContactController : Controller
{
    private readonly IContactRepository _contactRepository;

    public ContactController(IContactRepository contactRepository) {  _contactRepository = contactRepository; }

    [HttpPost]
    [ServiceFilter(typeof(AuthenticationUserAttribute))]
    public IActionResult Add([FromRoute] Guid user_id, Contact contact)
    {
        var _contact = new Contact(contact);
        _contact.user_id = user_id;
        _contactRepository.Add(_contact);
        return View();
    }
}
