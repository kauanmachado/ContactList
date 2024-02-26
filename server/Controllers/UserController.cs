using ContactList.API.Contracts;
using ContactList.API.Model;
using ContactList.API.Services;
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

    [HttpPost("sign-up")]
    public IActionResult SignUp(SignUpUserViewModel userView)
    {
        try
        {
            var user = new User(userView.username, userView.email, userView.password, userView.created_at, userView.updated_at);
            _userRepository.SignUp(user);
            var token = TokenService.GenerateToken(user);

            return Ok(token);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
        
    }

    [HttpPost("sign-in")]
    public IActionResult SignIn([FromBody]SignInUserViewModel user)
    {
        try
        {
            if (string.IsNullOrEmpty(user.email) || string.IsNullOrEmpty(user.password))
            {
                return BadRequest("Email and password are required.");
            }

            var _user = _userRepository.SignIn(user.email, user.password);

            if (_user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            var token = TokenService.GenerateToken(_user);
            return Ok(token);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
        
    }
}
