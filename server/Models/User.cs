using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContactList.API.Model;

[Table("users")]
public class User
{
    public User(string username, string email, string password, DateTime created_at, DateTime updated_at)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    [Key]
    public Guid id { get; set; }
    public string username { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
    public DateTime created_at {  get; set; } 
    public DateTime updated_at { get; set; }

}
