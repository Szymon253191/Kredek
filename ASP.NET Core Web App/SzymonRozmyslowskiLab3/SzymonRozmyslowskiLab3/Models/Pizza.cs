﻿namespace SzymonRozmyslowskiLab3.Models
{
    public class Pizza
    {
        public Pizza(int id, string name, decimal price, string description, string image)
        {
            Id = id;
            Name = name;
            Price = price;
            Description = description;
            Image = image;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
    }
}
