using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContactList.API.Model;

[Table("contacts")]
public class Contact
{
    public Contact(Guid id, string contactname, string email, string tel, Guid user_id)
    { 
           
    }

    [Key]
    public Guid id { get; set; }
    public string contactname { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string tel { get; set; } = string.Empty;
    public Guid user_id { get; set; }

}
