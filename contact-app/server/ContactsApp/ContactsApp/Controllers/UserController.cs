using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;
using ContactsApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ContactsApp.Controllers
{
    [Route("api/user")]
    [Authorize("Bearer")]
    public class UserController : Controller
    {
        private readonly IUserService _iUserService;
        
        public UserController(IUserService iUserService)
        {
            _iUserService = iUserService;
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]User user)
        {
            _iUserService.CreateUser(user);
        }

        // DELETE api/contacts/1
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _iUserService.DeleteUser(id);
        }

        [HttpPut]
        public IActionResult Signin()
        {
            var user = _iUserService.FindUserByUserName(User.Identity.Name);
            return new JsonResult(user);
        }
    }
}
