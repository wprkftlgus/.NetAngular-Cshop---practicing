using Microsoft.AspNetCore.Mvc;
using backend.Data;

namespace backend.Controllers;

[ApiController]
[Route("api/hello")]
public class NotesControllers : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(Note.Notes);
    }
}