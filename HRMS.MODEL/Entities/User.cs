using QueryGenerator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRMS.MODEL.Entities
{
    [Table("Users", "Settings")]
    public class User
    {
        [PKey]
        public int UserId { get; set; }
        public string IdentityCode { get; set; }
        public string Username { get; set; }
        public string UserFullName { get; set; }
        public string Designation { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public int RoleId { get; set; }
        public bool IsActive { get; set; }
        public DateTime SetDate { get; set; }
    }
}