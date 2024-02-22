using ContactList.API.Model;

namespace ContactList.API.Contracts;

public interface IUserRepository
{
    public bool? SignIn(User user);
    public void SignUp(User user);
    public void SignOut(int id);
}
