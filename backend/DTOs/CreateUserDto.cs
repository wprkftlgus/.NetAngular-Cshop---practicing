namespace backend.Dtos;

public class CreateUserDto
{
    public string Name {get; set;} = null!;
    public string Email {get; set;} = null!;
}

public class CreatePostDto
{
    public string Title {get; set;} = null!;
    public string Content {get; set;} =null!;
}