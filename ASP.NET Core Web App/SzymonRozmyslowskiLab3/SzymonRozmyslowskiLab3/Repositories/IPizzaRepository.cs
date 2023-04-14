using SzymonRozmyslowskiLab3.Models;

namespace SzymonRozmyslowskiLab3.Repositories
{
    public interface IPizzaRepository
    {
        IEnumerable<Pizza> GetAll();

        Pizza? GetPizza(int id);
    }
}
