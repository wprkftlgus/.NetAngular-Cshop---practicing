namespace backend.Models
{
    public class User
    {
        public int Id {get; set;}
        public string Name {get; set;}
        public string Email {get; set;}
        public DateTime CreatedAt {get; set;}
    }

    public class Post
    {
        public int Id {get; set;}
        public string Title {get; set;}
        public string Content {get; set;}
        public DateTime CreatedAt {get; set;}
    }
}