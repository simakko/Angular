using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsApp.Model
{
    public class User
    {
        public User(int id, string userName, string password, string email)
        {
            this.id = id;
            this.userName = userName;
            this.password = password;
            this.email = email;
        }

        public User ()
        {
        }

        [Key]
        public int id { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string email { get; set; }
    }
}
