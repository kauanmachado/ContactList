using ContactList.API.Contracts;
using ContactList.API.Infraestructure;
using ContactList.API.Model;

namespace ContactList.API.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ConnectionContext _context;
    public UserRepository(ConnectionContext context)
    {
        _context = context;
    }
    public bool? SignIn(User user)
    {
        var userExists = _context.users.FirstOrDefault(u => u.email == user.email && u.password == user.password);
        return userExists != null;
    }
    public void SignOut(int id)
    {
        throw new NotImplementedException();
    }
    public void SignUp(User user)
    {
        try
        {
            user.id = Guid.NewGuid();

            _context.users.Add(user);
            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao cadastrar usuário no banco de dados.", ex);
        }
        
    }

    private string HashPassword(string password)
    {   
        var hash = GetSha2
        return hash;
    }
}
