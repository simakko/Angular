using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;
using ContactsApp.Repository;
using ContactsApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ContactsApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize("Bearer")]
    public class ContactsController : Controller
    {
        private readonly IContactService _iContactService;


        public ContactsController(IContactService iContactService)
        {
            _iContactService = iContactService;
        }

        // GET api/contacts
        [HttpGet]
        public List<Contact> Get()
        {
            return _iContactService.FindAllContacts();
        }

        // GET api/contacts/1
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _iContactService.FindContactById(id);
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _iContactService.CreateContact(contact);
        }

        // POST api/contacts/1
        [HttpPut("{id}")]
        public void Put([FromBody]Contact contact)
        {
            _iContactService.UpdateContact(contact);
        }

        // DELETE api/contacts/1
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _iContactService.DeleteContact(id);
        }
    }
}
