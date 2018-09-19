namespace oop_level_2
{
    public class Addition : IAdd {
        public int X { get; set; }
        public int Y { get; set; }

        public Addition(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }

        public int Sum(int x, int y){
            return x + y;
        }
    }
}