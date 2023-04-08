﻿using SzymonRozmyslowskiLab3.Models;

namespace SzymonRozmyslowskiLab3.Repositories
{
    public class FakePizzaRepository : IPizzaRepository
    {
        private static readonly ICollection<Pizza> _pizzas = new List<Pizza>()
        {
            new(1, "Hawajska", 19.99M, "Najlepsza pizza na świecie z ananasem", "hawajska.png"),
            new(2, "Pepperoni", 18.99M, "Ostra pizzka z salami", "pepperoni.png"),
            new(3, "Grecka", 21.10M, "Super pizza prosto z grecji z serem feta i pomidorami", "grecka.png"),
            new(4, "Capriciosa", 23.99M, "Pyszna pizza z pieczarkami", "capriciosa.png")
        };

        public IEnumerable<Pizza> GetAll()
        {
            return _pizzas.ToList();
        }

        public Pizza? GetPizza(int id)
        {
            return _pizzas.FirstOrDefault(pizza => pizza.Id == id);
        }
    }
}
