﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRMS.MODEL.Entities
{
    public class User
    {
        public Int64 UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string UserFullName { get; set; }
        public string Designation { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateModified { get; set; }
        public Int64? Creator { get; set; }
        public Int64? Modifier { get; set; }
        public int? TotalRow { get; set; }
    }
}