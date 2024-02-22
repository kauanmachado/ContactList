using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContactList.API.Model;

[Table("contacts")]
public class Contact
{   
    [Key]
    public int id { get; set; }
    public string contactname { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string tel { get; set; } = string.Empty;
    public int user_id { get; set; }

}
