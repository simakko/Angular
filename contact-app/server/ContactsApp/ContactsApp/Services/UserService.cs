using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;
using ContactsApp.Repository;

namespace ContactsApp.Services
{
    public class UserService : IUserService
    {
            private readonly IUserRepository _userRepository;

            public UserService(IUserRepository userRepository)
            {
                _userRepository = userRepository;
            }

            public User FindUserByUserName(string userName)
            {
                return _userRepository.FindByUserName(userName);
            }

            public User FindUserByUserNameAndPassword(string userName, string password)
            {
                return _userRepository.FindByUserNameAndPassword(userName, password);
            }

            public void CreateUser(User user)
            {
                _userRepository.Create(user);
            }

            public void DeleteUser(int id)
            {
                _userRepository.Remove(id);
            }

        }
}
