namespace oop_level_2
{
    public class AddThreeNumbers : Addition{
        
        public int Z { get; set; }

        public AddThreeNumbers(int x, int y, int z)
            :base(x, y)
        {
            this.Z = z;
        }

        public int SumAllThree(){
            return this.Sum(this.X, this.Y) + this.Z;
        }
        
    }
}