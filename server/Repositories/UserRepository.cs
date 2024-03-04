using BCrypt.Net;
using ContactList.API.Contracts;
using ContactList.API.Filters;
using ContactList.API.Infraestructure;
using ContactList.API.Model;
using ContactList.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContactList.API.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ConnectionContext _context;

    public UserRepository(ConnectionContext context)
    {
        _context = context;
    }
    public User SignIn(string email, string password)
    {
        try
        {
            var user = _context.users.FirstOrDefault(u => u.email == email);

            if (user == null) 
            {
                throw new Exception("Usuario nao encontrado.");
            }

            if (!VerifyPassword(password, user.password))
            {
                throw new Exception("Senha incorreta.");
            }

            return user;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
    public void SignOut()
    {
        try
        {     
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }
    public void SignUp(User user)
    {
        try
        {
            if (ExistUserWithEmail(user.email))
            {
                throw new Exception("O email fornecido já está em uso.");
            }

            user.id = Guid.NewGuid();
            user.password = HashPassword(user.password);
            _context.users.Add(user);
            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            throw new Exception("Erro ao cadastrar usuário no banco de dados.", ex);
        }       
    }
    public bool ExistUserWithEmail(string email)
    {
        return _context.users.Any(user => user.email.Equals(email));
    }
    private bool VerifyPassword(string inputPassword, string hashedPassword)
    {
        return BCrypt.Net.BCrypt.Verify(inputPassword, hashedPassword);
    }
    private string HashPassword(string password)
    {   
        return BCrypt.Net.BCrypt.HashPassword(password);
    }
}
