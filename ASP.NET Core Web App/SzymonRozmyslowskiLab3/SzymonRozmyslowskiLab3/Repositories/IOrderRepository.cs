using SzymonRozmyslowskiLab3.Models;

namespace SzymonRozmyslowskiLab3.Repositories
{
    public interface IOrderRepository
    {
        public void SaveOrder(Order order);
    }
}
