using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using backend.Dtos;

namespace backend.Controllers;

[ApiController]
[Route("api/[Controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult getUsers()
    {
        return Ok(_context.Users.ToList());
    }

    [HttpPost]
    public IActionResult addUser([FromBody] CreateUserDto dto)
    {   
        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            CreatedAt = DateTime.Now
        };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Ok(user);
    }

    [HttpDelete("{id}")]

    public IActionResult deleteUser(int id)
    {
        var user = _context.Users.Find(id);

        if(user == null)
        {
            return NotFound();
        }

        _context.Users.Remove(user);
        _context.SaveChanges();

        return NoContent();
    }
}

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
    public IActionResult addPost()
    {
        
    }
}
