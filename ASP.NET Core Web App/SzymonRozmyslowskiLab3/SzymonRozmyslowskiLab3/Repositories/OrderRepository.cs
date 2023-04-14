using SzymonRozmyslowskiLab3.Models;

namespace SzymonRozmyslowskiLab3.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DatabaseContext context;

        public OrderRepository(DatabaseContext context)
        {
            this.context = context;
        }

        public void SaveOrder(Order order)
        {
            context.Orders.Add(order);
            context.SaveChanges();
        }
    }
}
