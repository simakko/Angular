using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Services
{
    public interface IUserService
    {
        User FindUserByUserName(string userName);
        User FindUserByUserNameAndPassword(string userName, string password);
        void CreateUser(User user);
        void DeleteUser(int id);
    }
}
