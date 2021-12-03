import java.util.Scanner;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.time.format.DateTimeFormatter;
import java.time.DayOfWeek;
import java.util.Locale;
import javax.swing.JComponent;
import javax.swing.JOptionPane;
//the imports under are not necessary but i used to get to this point.
//import java.text.SimpleDateFormat;
//import java.text.Format;
//import java.text.DateFormat;
//import java.util.Date;
//import java.lang.Object;

public class trafficDayTracker 
{
    public static String getDayStringNew(LocalDate date, Locale locale)                     //public static String getDayStringOld(Date date, Locale locale) 
    {                                                                                       //{
        DayOfWeek day = date.getDayOfWeek();                                                //   DateFormat formatter = new SimpleDateFormat("EEEE", locale);
        return day.getDisplayName(TextStyle.FULL, locale);                                  //   return formatter.format(date);      
    }                                                                                       //}
    
    public static void checkDay(String day)
    {
        if(day.equals("Mon"))
        {
            day += "day"; 
            System.out.println(day); //does nothing links to next page?
        }
        else if(day.equals("Tue"))
        {
            day += "sday"; 
            System.out.println(day); //does nothing links to next page?
        }
        else if(day.equals("day"))
        {
            day += "nesday"; 
            System.out.println(day); //does nothing links to next page?
        }
        else if(day.equals("Thu"))
        {
            day += "rsday"; 
            System.out.println(day); //does nothing links to next page?
        }
        else if(day.equals("Fri")|| day.equals("Sat") || day.equals("Sun"))
        {
            //System.out.println(dayName);   
            day += "day";                                         //System.out.println(date1 + "\n");     //System.out.println(sDate1+"\t"+date1);
            int input = JOptionPane.showConfirmDialog(null, 
            day + " is a high traffic day and would add $10 to reserve.\nWould you like to continue?", 
                "Confirmation", JOptionPane.YES_NO_CANCEL_OPTION);
            System.out.println(day);    
            
            if (input == 0)
            {
                System.out.println("Nice"); //accepts-----links to next page?
            }
            else if (input == 1)
            {
                input = JOptionPane.showConfirmDialog(null, 
                "Would you like to cancel your reservation?", "Cancel?", JOptionPane.YES_NO_OPTION);
                if (input == 0)
                {
                    System.out.println("Canceled"); //cancels-----links to beginning page?
                }
                else
                {
                    System.out.println("Not Canceled");
                    //checkDay(day);  //no cancellation goes back to read string? //might cause crash? //refresh page?
                                      //possible does nothing, doesnt contine but has to submit again to continue? what?
                }
            }
            else if (input == 2)
            {
                System.out.println(input); //cancels-----links to beginning page?
            }
        }
    }

    public static void main(String[] args)throws Exception 
    {
        Scanner sc = new Scanner(System.in); //System.in is a standard input stream 
        Locale local = new Locale("ENGLISH", "US");

        //System.out.print("Enter a string: ");                                               //String sDate1 = "2021-12-01";
        String sDate1= sc.nextLine(); //reads string ;
        sc.close();   

        LocalDate date1 = LocalDate.parse(sDate1);                                          //, DateTimeFormatter.ofPattern("dd/MM/uuuu"));

        String dayName = getDayStringNew(date1, local);                                     //String dayName = getDayStringOld(date1, local);

        //System.out.println(dayName); 

        checkDay(dayName);

    }
}