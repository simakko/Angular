using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Services
{
    public interface IService
    {
        List<Contact> FindAllContacts();
        Contact FindContactById(int id);
        void CreateContact(Contact contact);
        void UpdateContact(int id, Contact contact);
        void DeleteContact(int id);
    }
}
