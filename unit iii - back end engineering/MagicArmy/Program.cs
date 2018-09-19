using System;
using System.Collections.Generic;

namespace MagicArmy
{

    public interface IAttacker
    {
        int Attack();
    }
    public interface IHealer
    {
        int Heal();
    }

    public interface IWeapon
    {
        string tier { get; set; }
        int DoDamage();
    }

    public class Sword : IWeapon
    {
        public string tier { get; set; }
        public int DoDamage()
        {
            System.Console.WriteLine("swooosh   -/-----");
            return 4;
        }
    }
    public class Wand : IWeapon
    {
        public string tier { get; set; }
        public int DoDamage()
        {
            System.Console.WriteLine("Fireball >***<");
            return 15;
        }
    }
    public class BowAndArrow : IWeapon
    {
        public string tier { get; set; }
        public int DoDamage()
        {
            System.Console.WriteLine("Twang >>---->");
            return 10;
        }
    }

    public class Archer : IAttacker
    {

        public IWeapon Weapon { get; set; }

        public Archer(IWeapon w)
        {
            this.Weapon = w;
        }

        public int Attack()
        {
            return this.Weapon.DoDamage();
        }
    }

    public class Mage : IAttacker, IHealer
    {
        public int Attack()
        {
            System.Console.WriteLine("Fireball >***<");
            return 15;
        }

        public int Heal()
        {
            System.Console.WriteLine("Heal +1");
            return 8;
        }
    }
    public class Swordsman : IAttacker
    {
        public int Attack()
        {

        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            var legalos = new Archer(new BowAndArrow());
            var merlin = new Mage();
            var mike = new Swordsman();

            var army = new List<IAttacker> {
                legalos,
                merlin,
                mike
            };


            merlin.Heal();
            merlin.Attack();

            foreach (var soldier in army)
            {
                soldier.Attack();
            }
        }
    }
}
