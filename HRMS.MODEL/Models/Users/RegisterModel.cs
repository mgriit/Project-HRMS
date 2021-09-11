using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HRMS.MODEL.Models.Users
{
    public class RegisterModel
    {
        [Required]
        public string UserFullName { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string Designation { get; set; }
    }
}
