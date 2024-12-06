var n,i=1,sum=0;
    n= parseInt(prompt("Enter a N Value :"));

    while(i <= n)
    {
        sum = sum + i;
        i=i+1;
    }

    document.write("<h2>The Sum of Series is :"+ sum +"</h2>")
    alert("The Sum of series is :"+sum);