using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsApp.Model
{
    public class Contact
    {
        public Contact(int id, string firstName, string lastName, string phone, string streetAddress, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phone;
            Address = streetAddress;
            City = city;
        }

        public Contact()
        {
        }

        [Key]
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string City { get; set; }
    }
}