using ContactList.API.Model;

namespace ContactList.API.Contracts;

public interface IUserRepository
{
    public User SignIn(string email, string password);
    public void SignUp(User user);
    public void SignOut();
    bool ExistUserWithEmail(string email);
}
