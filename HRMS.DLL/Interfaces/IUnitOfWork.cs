using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRMS.DLL.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository Users { get; }
    }
}
