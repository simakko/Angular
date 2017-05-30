using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Services
{
    public interface IContactService
    {
        List<Contact> FindAllContacts();
        Contact FindContactById(int id);
        void CreateContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
    }
}
