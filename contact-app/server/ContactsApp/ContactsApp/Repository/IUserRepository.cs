using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Repository
{
    public interface IUserRepository
    {
        User FindByUserName(string userName);
        User FindByUserNameAndPassword(string userName, string password);
        void Remove(int id);
        void Create(User user);
    }
}
