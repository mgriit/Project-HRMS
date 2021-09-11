using System;
using System.Collections.Generic;
using System.Text;

namespace HRMS.MODEL.Models.Users
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string UserFullName { get; set; }
        public string Designation { get; set; }
    }
}
