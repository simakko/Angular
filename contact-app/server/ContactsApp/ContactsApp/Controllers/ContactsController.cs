using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsApp.Model;
using ContactsApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactsApp.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly IService _iService;


        public ContactsController(IService iService)
        {
            _iService = iService;
        }

        // GET api/contacts
        [HttpGet]
        public List<Contact> Get()
        {
            return _iService.FindAllContacts();
        }

        // GET api/contacts/1
        [HttpGet("{id}")]
        public Contact Get(int id)
        {
            return _iService.FindContactById(id);
        }

        // POST api/contacts
        [HttpPost]
        public void Post([FromBody]Contact contact)
        {
            _iService.CreateContact(contact);
        }

        // POST api/contacts/1
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Contact contact)
        {
            _iService.UpdateContact(id, contact);
        }

        // DELETE api/contacts/1
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _iService.DeleteContact(id);
        }
    }
}
