using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsApp.Controllers.Authentication
{
    public class AuthenticationResponse
    {
        public string UserId { get; set; }
        public string Token { get; set; }

        public AuthenticationResponse(string userId, string token)
        {
            UserId = userId;
            Token = token;
        }
    }
}
