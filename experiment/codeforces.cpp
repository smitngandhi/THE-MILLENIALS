// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;
int main() {
    int n,p,q;
    cin>>n;
    cin>>p;
    int count=1;
    int X[p];
    vector<int> answer;
    for(int i=0;i<p;i++)
    {
        cin>>X[i];
        answer.push_back(X[i]);
    }
    cin>>q;
    int Y[q];
    for(int i=0;i<q;i++)
    {
        cin>>Y[i];
        answer.push_back(Y[i]);
}
sort(answer.begin(),answer.end());
    for(int i=1;i<answer.size();i++)
    {
        if(answer[i]!=answer[i-1])
        {
            count++;
        }
    }
    cout<<count;
    if(count==n)
    {
        cout<<"I become the guy."<<endl;
    }
    else{
        cout<<"Oh, my keyboard!"<<endl;
    }
    return 0;
}