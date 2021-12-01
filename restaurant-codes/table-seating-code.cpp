#include <iostream>
#include <sstream>
#include <windows.h>
using namespace std;

const int size = 59;

class Table
{
    public:
        int tSize;
      //  int section;
        int number;
        bool reserved;
};

bool tableAvailable(bool taken) 
{
    for( int i = 0; i < size; i++)
    {
        if (taken == false) //checks if a table is taken is false
            return false;
    }
    return true;
}

void tableR(Table[], int);

void confirm(Table[],int);
void cancel(Table[], int);
void newCombo(Table[], int);


int main()
{
    Table rest[59];
    //rest[].tSize = {1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,2,6,6,4,4,4,4,4,6,2,6,4,4,4,4,6,6,6,6,6,6,6,6,6,4,4,6,4,4,4,4,4,4,4,6};
    //rest[].section = {1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,9,9,9,9};
    for(int i = 0; i < size; i++)
    {
        rest[i].number = i+1;
        rest[i].reserved = true;
        if (i < 11)
        {
           // rest[i].section = 1;
            if (i <= 7)
            {
                rest[i].tSize = 1;
                rest[4].reserved = false;
            }
            else    
                rest[i].tSize = 4;
        }
        else if (i >= 11 && i < 19)
        {
           // rest[i].section = 2;
            rest[i].tSize = 4;
        }
        else if (i >= 19 && i < 26)
        {
           // rest[i].section = 3;
            if (i < 23)
                rest[i].tSize = 4;
            else if (i == 23 || i == 25) 
                rest[i].tSize = 6;
            else   
            {
                rest[i].tSize = 2;
                rest[i].reserved = false;
            }
        }
        else if (i >= 26 && i < 32)
        {
            rest[28].reserved = false;
           // rest[i].section = 4;
            if (i == 26)
                rest[i].tSize = 6;
            else
                rest[i].tSize = 4;
        }
        else if (i >= 32 && i < 39)
        {
           // rest[i-1].section = 5;
            if (i >= 35)
                rest[i].tSize = 4;
            else if (i == 32 || i == 34) 
                rest[i].tSize = 6;
            else   
                rest[i].tSize = 2;
        }
        else if (i >= 39 && i < 43)
        {
           // rest[i].section = 6;
            rest[i].tSize = 6;
            rest[i].reserved = false;
        }
        else if (i >= 43 && i < 47)
        {
          //  rest[i].section = 7;
            rest[i].tSize = 6;
        }
        else if (i >= 47 && i < 51)
        {
          //  rest[i].section = 8;
            if (i == 47)
                rest[i].tSize = 6;
            else
                rest[i].tSize = 4;
        }
        else if (i >= 51 && i < 59)
        {
         //   rest[i].section = 9;
            if (i == 58)
                rest[i].tSize = 6;
            else
                rest[i].tSize = 4;
        }
    }

    int ppl = 0;
    cout << "Enter how many people to be seated\n";
    cin >> ppl;

    cout << "There are " << ppl << " to be seated.\n";
    //int tableNum = 
    tableR(rest, ppl); //for functionality
   
    //confirm(rest, ppl);
    
    //system("PAUSE");
    return 0;
}

void confirm(Table r[], int s) //checking confirmation, int n doesnt need to be there, testing for funcitionality void confirm(Table r, int s) could be sufficient if text boxes tell you which tables are combined
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
        cancel(r, s);
        return;
    }
}

void cancel(Table r[], int s)
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
        tableR(r,s);
        return;

        //return;
        //confirm(r,s);
    }
}

void newCombo(Table r[], int person)
{
    stringstream NewMessage;
    NewMessage << "Would you like a different table?";
    int btn = MessageBox(0,NewMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
    if (btn == IDYES)
    {
        //tableR(r,person);
        cout << "trying new combo\n";
        return;
        //return i;
    }
    else
    {
        cout << "no new combo\n";
        cancel(r,person);
        return;
    }
    //checkOneTable = true;
    //continue;
}

void tableR(Table r[], int person)
{
    //bool checkOneTable = false;
    int tablesUsed = 1;
    if(person > 6)
            tablesUsed = 2;
    //for loop to check the size of party and give appropriate response to reserve the table
    for (int i = 0; i < size; i++)
    {  
        if (i == size - 1)
            tablesUsed = 2;
        if (person <= 6)
        {
            if (r[i].tSize >= person && tablesUsed == 1)
            {
                if(tableAvailable(r[i].reserved) == false)
                {
                    stringstream boxMessage;
                    boxMessage << "Table " << i+1 << " is available.\nWould you like to reserve this table?";
                    int btn = MessageBox(0,boxMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
                    if (btn == IDYES)
                    {
                        cout <<"yes, this table\n";
                        confirm(r,person);
                        r[i].reserved = true;
                        return;
                        //return i;
                    }
                    else
                    {
                        cout << "not this table\n";
                        newCombo(r, person);
                        continue;
                    }
                }
                else
                {  
                    continue;
                }
            }
        }
    }
    for (int i = 0; i < size; i++)
    {
        if (i == size - 1)
        {
            tablesUsed = 1;
            stringstream NMessage;
            NMessage << "You have gone through all possible combinations\nWould you like to retry?";
            int btn = MessageBox(0,NMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
            if (btn == IDYES)
            {
                //continue;
                cout << "retrying\n";
                tableR(r,person);
                continue;
                //return;
                //return i;
            }
            else
            {
                cout << "no retry\n";
                cancel(r,person);
                return;
                //continue;
            }
        }
        if(person <= 6)
        {
            //else if (r[i].tSize < person && tablesUsed == 2)// && checkOneTable == true)
            if (r[i].tSize < person && tablesUsed == 2)
            {  
                if(tableAvailable(r[i].reserved == false))
                {
                    for (int j = 0; j < size; j++)
                    {
                        if(tableAvailable(r[j].reserved == false && r[i].number != r[j].number))
                        {
                            int k = r[i].tSize + r[j].tSize;
                            if (k >= person)
                            {
                                stringstream boxMessage;
                                boxMessage << "Tables " << i+1 << " and " << j+1 << " combined are available to combine to adjust for your party size.\nWould you like to reserve these tables?";
                                int btn = MessageBox(0,boxMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
                                if (btn == IDYES)
                                {
                                    cout <<"yes, these tables\n";
                                    confirm(r,person);
                                    r[i].reserved = true;
                                    r[j].reserved = true;
                                    return;
                                    //return i;
                                }
                                else
                                {
                                    cout << "not these table\n";
                                    newCombo(r, person);
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (person > 6)
        {
            //return 1;
            //continue;
            if(tableAvailable(r[i].reserved == false))
            {
                for (int j = 0; j < size; j++)
                {
                    if(tableAvailable(r[j].reserved == false && r[i].number != r[j].number))
                    {
                        int k = r[i].tSize + r[j].tSize;
                        if (k >= person)
                        {
                            stringstream boxMessage;
                            boxMessage << "Tables " << i+1 << " and " << j+1 << " combined are available to combine to adjust for your party size.\nWould you like to reserve these tables?";
                            int btn = MessageBox(0,boxMessage.str().c_str(), "Message",MB_YESNO + MB_ICONQUESTION);
                            if (btn == IDYES)
                            {
                                cout <<"yes, these tables\n";
                                confirm(r,person);
                                r[i].reserved = true;
                                r[j].reserved = true;
                                return;
                                //return i;
                            }
                            else
                            {
                                cout << "not these table\n";
                                newCombo(r, person);
                                continue;
                            }
                        }
                    }
                }
            }
        }
    }   
}