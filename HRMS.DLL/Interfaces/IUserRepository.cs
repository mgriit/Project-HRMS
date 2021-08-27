using HRMS.MODEL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRMS.DLL.Interfaces
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<IEnumerable<User>> GetByFilterAsync(int page, int itemsPerPage, string search, string sortBy, bool reverse);
    }
}
