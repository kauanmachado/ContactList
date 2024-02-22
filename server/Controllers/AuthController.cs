using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers;
[ApiController]
[Route("api/auth")]
public class AuthController : Controller
{
    [HttpPost]
    public IActionResult Auth()
    {
        return View();
    }
}
