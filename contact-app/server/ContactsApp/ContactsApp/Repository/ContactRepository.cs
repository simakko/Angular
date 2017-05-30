using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;

namespace ContactsApp.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly DatabaseContext _context;

        public ContactRepository(DatabaseContext context)
        {
            _context = context;
        }

        public void Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }

        public List<Contact> FindAll()
        {
            return _context.Contacts.ToList();
        }

        public Contact FindById(int id)
        {
            var contactById = _context.Contacts.FirstOrDefault(c => c.Id == id);
            return contactById;
        }

        public void Remove(int id)
        {
            var contactToRemove =_context.Contacts.FirstOrDefault(c => c.Id == id);
            if (contactToRemove != null)
                _context.Contacts.Remove(contactToRemove);
            _context.SaveChanges();
        }

        public void Update(Contact contact)
        {
            _context.Contacts.Update(contact);
            _context.SaveChanges();
        }
    }
}
