using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _context;

        public UserRepository(DatabaseContext context)
        {
            _context = context;

            User user = new User { 
                userName = "admin",
                password = "admin",
                email = "admin@email.com"
            };

            if (FindByUserName(user.userName) == null)
            {
                Create(user);
            }
        }

        public void Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public User FindByUserName(string userName)
        {
            var userByuserName = _context.Users.FirstOrDefault(c => c.userName == userName);
            return userByuserName;
        }

        public User FindByUserNameAndPassword(string userName, string password)
        {
            var userByuserNameAndPassword = _context.Users.FirstOrDefault(c => c.userName == userName && c.password == password);
            return userByuserNameAndPassword;
        }

        public void Remove(int id)
        {
            var userToRemove = _context.Users.FirstOrDefault(c => c.id == id);
            if (userToRemove != null)
                _context.Users.Remove(userToRemove);
            _context.SaveChanges();
        }
    }
}
