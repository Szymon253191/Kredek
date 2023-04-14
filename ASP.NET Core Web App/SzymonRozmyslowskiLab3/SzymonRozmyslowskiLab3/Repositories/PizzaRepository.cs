using SzymonRozmyslowskiLab3.Models;

namespace SzymonRozmyslowskiLab3.Repositories
{
    public class PizzaRepository : IPizzaRepository
    {
        private DatabaseContext context;

        public PizzaRepository(DatabaseContext context)
        {
            this.context = context;
        }

        public IEnumerable<Pizza> GetAll()
        {
            return context.Pizzas.ToList();
        }

        public Pizza? GetPizza(int id)
        {
            return context.Pizzas.FirstOrDefault(pizza => pizza.Id == id);
        }
    }
}
