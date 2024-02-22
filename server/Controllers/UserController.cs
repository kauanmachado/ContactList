using ContactList.API.Contracts;
using ContactList.API.Model;
using ContactList.API.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers;

[ApiController]
[Route("/api/user")]
public class UserController : ControllerBase
{
    private readonly IUserRepository _userRepository;

    
    public UserController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpPost]
    public IActionResult SignUp(UserViewModel userView)
    {
        var user = new User(userView.username, userView.email, userView.password_hash, userView.created_at, userView.updated_at);

        _userRepository.SignUp(user);

        return Ok();
    }
}
