//This program is made by 22CE044 Joshi Dhruvil Sandipkumar
#include <bits/stdc++.h> 
using namespace std;
int knapsack(int N,int C,int K,int W[])
{
    int i,maxobj=0;
    for(i=0;i<N;i++)
    {
        int total=0,count=0;
        for(int j=i;i<N;j++)
        {
            total=total+W[j];
            count=count+1;
            if(total>=K && total<=C)
            {
                maxobj=max(maxobj,count);
            }
            if(total>C)
            {
                break;
            }
        }
    }
    return maxobj;
}
int main()
{
    int N,C,K;
    cout<<"Enter the number of objects : ";
    cin>>N;
    cout<<"Enter the maximum capacity of knapsack : ";
    cin>>C;
    cout<<"Enter the minimum capacity of knapsack : ";
    cin>>K;
    int W[N];
    for(int i=0;i<N;i++)
    {       
        cout<<"\nEnter the weight of object "<<i+1<<": ";
        cin>>W[i];
    }
    int maxobj=knapsack(N,C,K,W);
    cout<<"\n\nThe maximum number of object to be picked are : "<<maxobj;
    cout<<"\n\nThis program is made by 22CE044 Joshi Dhruvil Sandipkumar";
    return 0;
}
