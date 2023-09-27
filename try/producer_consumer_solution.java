class DISPLAY 
{
    int i=0,j=0;
   public synchronized void display1()
    {        
     i++;
        System.out.println("Producer inputs : "+ i);
    }
   public synchronized void display2()
    {
     j++;
       System.out.println("Consumer outputs : "+ j);
    }
    
}
class Producer extends Thread
{
   DISPLAY D;
   Producer(DISPLAY D)
   {
    this.D=D;
   }
   public void run()
  {
    D.display1();
  }
}
class consumer extends Thread{
 DISPLAY D;
 consumer(DISPLAY D)
 {
    this.D=D;
 }
 public void run()
  {
     D.display2();
  }
}


public class producer_consumer_solution {
    public static void main(String[] args) {
        DISPLAY D=new DISPLAY();
       
        Producer P=new Producer(D);
        consumer C=new consumer(D);
        try{
        for(int i=0;i<10;i++){
        P.start();
        C.start();
        }
        }
        catch(IllegalThreadStateException e)
        {
      }
   }
}