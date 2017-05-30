using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using ContactsApp.Controllers.Authentication;
using ContactsApp.Model;
using ContactsApp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsApp.Controllers
{
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService) //constructor
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authentication([FromBody] AuthenticationRequest authenticationRequest)
        {
            var existUser = _userService.FindUserByUserNameAndPassword(authenticationRequest.UserName, authenticationRequest.Password);
            if (existUser == null) return Unauthorized();
            var token = GenerateToken(existUser);
            return new JsonResult(new AuthenticationResponse(existUser.id.ToString(), token));

        }

        private string GenerateToken(User user)
        {
            var handler = new JwtSecurityTokenHandler();
            var expires = DateTime.Now + TokenAuthOption.ExpiresSpan;

            var identity = new ClaimsIdentity(
                new GenericIdentity(user.userName, "TokenAuth"),
                new[] {
                    new Claim("ID", user.id.ToString())
                }
            );

            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = TokenAuthOption.Issuer,
                Audience = TokenAuthOption.Audience,
                SigningCredentials = TokenAuthOption.SigningCredentials,
                Subject = identity,
                Expires = expires
            });
            return handler.WriteToken(securityToken);
        }
    }
}
