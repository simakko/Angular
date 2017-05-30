using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsApp.Controllers.Authentication
{
    public class AuthenticationRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public AuthenticationRequest(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }
    }
}
