namespace ContactList.API.ViewModel;

public class SignUpUserViewModel
{
    public string username { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public string password { get; set; } = string.Empty;
    public DateTime created_at { get; set; } = DateTime.UtcNow;
    public DateTime updated_at { get; set;} = DateTime.UtcNow;
}
