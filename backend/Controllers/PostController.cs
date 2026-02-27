using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using backend.Dtos;

[ApiController]
[Route("api/[controller]")]
public class PostController : ControllerBase
{
    private readonly AppDbContext _context;

    public PostController(AppDbContext context)
    {
        _context = context;
    } 
    [HttpGet]
    public IActionResult getPosts()
    {
        return Ok(_context.Posts.ToList());
    }

    [HttpPost]
    public IActionResult addPost([FromBody] CreatePostDto dto)
    {
        var post = new Post
        {
            Title = dto.Title,
            Content = dto.Content,
            CreatedAt = DateTime.Now
        };
        _context.Posts.Add(post);
        _context.SaveChanges();

        return Ok(post);

    }
}
