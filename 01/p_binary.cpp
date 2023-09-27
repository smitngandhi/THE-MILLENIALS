#include<iostream>
using namespace std;
int binarysearch(int l,int h,int key,int a[])
{
    if(l<=h)
    {
      int mid=(l+h)/2;
      if(a[mid]==key)
      {
          return mid;
      }
      else if(a[mid]>key)
      {
          binarysearch(mid+1,h,key,a);
      }
      else
      {
          binarysearch(l,mid-1,key,a);
      }
      return -1;
    }
}
int main()
{
    int n,key;
    cout<<"Enter the size of array : ";
    cin>>n;
    cout<<"Enter the target to be found : ";
    cin>>key;
    int i;
    int a[n];
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }
    int x=binarysearch(0,n-1,key,a);
    if(x==-1)
    {
        cout<<"Target not found";
    }
    else
    {
        cout<<"Target found at "<<x+1;
    }
    return 0;
}
