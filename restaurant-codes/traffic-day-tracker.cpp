#include <iostream>
#include <windows.h>
#include <sstream>
#include <string>
#include <ctime>
using namespace std;

void checkingTrafficDay(string);
void cancel(string);
void confirm(string);

struct tm
{
    int tm_mday;
    int tm_mon;
    int tm_year;
    int tm_wday;
};

int main()
{
    string date;
    cin >> date;

    checkingTrafficDay(date);
    //system("PAUSE");
    return 0;
}

void checkingTrafficDay(string d)
{
    if(d == "Friday" || d == "Saturday" || d == "Sunday" || d == "friday" || d == "saturday" || d == "sunday")
    {
        stringstream boxMessage;
        boxMessage << d <<" is a high traffic day and would cost $10 to reserve.\nWould you like to proceed?";

        int btn = MessageBox(0,boxMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
        if (btn == IDYES)
        {
            cout << "Continue\n";
            confirm(d);
            return;
        }
        else
        {
            cout << "nvm do not continue\n";
            cancel(d);
            return;
        }
    }
    else if (d == "Monday" || d == "monday" || d == "Tuesday" || d == "tuesday" || d == "Wednesday" || d == "wednesday"|| d == "Thursday" || d == "thursday")
    {
        cout << "you good\n";
    }
    else
    {
        cout << "please enter a valid date\n";
        cin >> d;
        checkingTrafficDay(d);
    }
}

void cancel(string d)
{
    stringstream bMessage;
    bMessage << "Would you like to cancel the reservation?";

    int btn = MessageBox(0,bMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
    if (btn == IDYES)
    {
        cout << "reservation canceled\n"; //recursion to try again? ask to cancel?
        exit(0);
    }
    else
    {
        cout << "reservation not canceled\n";
        checkingTrafficDay(d);
        return;

        //return;
        //confirm(r,s);
    }
}

void confirm(string d) //checking confirmation, int n doesnt need to be there, testing for funcitionality void confirm(Table r, int s) could be sufficient if text boxes tell you which tables are combined
{
    stringstream boxMessage;
    boxMessage << "Are you sure with this confirmation?";

    int btn = MessageBox(0,boxMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
    if (btn == IDYES)
    {
        cout << "confirmed\n";
        return;
    }
    else
    {
        cout << "nvm not confirmed\n";
        cancel(d);
        return;
    }
}