 /*---
        //1. program to check if a number is prime or not

        var number = parseInt(prompt("Enter a positive number: "));
        let isPrime = true;
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }
        else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                console.log(`${number} is a prime number`);
            } else {
                console.log(`${number} is a not prime number`);
            }
        }
        else {
            console.log("The number is not a prime number.");
        }

        //2.program to check perfect square.

        function isPerfectSquare(y)
            {
                if (y >= 0) {
                    let sr = Math.sqrt(y);
                    return ((sr * sr) == y);
                }
                    return false;
            }
            let y = 17;

            if (isPerfectSquare(y))
                console.log("Yes");
            else
            console.log("No");

        //3.javascript program to check if x is fibonacci number


        function isPerfectSquare( x)
        {
            let s = parseInt(Math.sqrt(x));
            return (s * s == x);
        }
        function isFibonacci(n)
        {
            return isPerfectSquare(5 * n * n + 4) ||
            isPerfectSquare(5 * n * n - 4);
        }
        for (let i =1; i <=10; i++){
            isFibonacci(i)?
            document.write( i + " is a Fibonacci Number <br/>"):
            document.write(i + " is a not Fibonacci Number <br/>") ;
                            
        }

        //4.program to find factorial of a number

        function factorial(n){
            if(n==0) return 1;
            return n * factorial(n-1)
           
        }
        let num = 20; 
        document.write("Factorial of " + num + " is " + factorial(num));

        //program to find sum of digits
        
        function getSum(n)
        {
         var sum = 0;
            while (n != 0) {
                sum = sum + n % 10;
                n = parseInt(n / 10);
            }
            return sum;
        }
        var n = 687;
        console.log(getSum(n));


         //5.program to check given number is palindrome or not

         function isPalindrome(nmbr){
            const a=nmbr.toString()
            const b=nmbr.split("").reverse("").join("")
            return a===b
         }
         const n=prompt("enter a number")
         if(isPalindrome(n)){
            console.log(n+ "is palindrome.")
         }
         else{
            console.log(n+ "is not a palindrome.")
         }

    
        //6.program to check given number is even or odd

         function isEvenOrOdd(nmbr){
            if(nmbr%2==0){
                return nmbr
            }
         }
         const n=prompt("enter a number")
                if(isEvenOrOdd(n)){
                   console.log(n+ " is even.")
                }
                else{
                   console.log(n+ " is odd.")
                }

        //7.program to print reverse of a number

        let num1 = "rajesh";
        let result = num1.toString("").split("").reverse("").join("");
        console.log(result);
    -----*/
/*--------------Leap Year Or Not
    //program to check given year is leap year or not
    //method-1
    function isLeapYears(number){
        if(number % 100 === 0 ? number % 400 === 0 : number % 4 === 0)
        return number
    }
    const n=prompt("enter a year")
    if(isLeapYears(n)){
        console.log(n+ " is leap year.")
    }
    else{
        console.log(n+ " is not a leap year.")
    }


    //method-2
    function isLeapYear(year) {
        if (
            year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
        )
            console.log( year, "is a Leap Year");
        else
            console.log(year,"is NOT a Leap Year");
    }
    
    let w = 2020;
    isLeapYear(w);
    --------------------*/


    //program to swap 2 numbers without help of third number

	let x = 18, y = 35;
	console.log("Before Swapping: x =" +x + " , y=" + y);

	x = x * y;//x=x+y
    y = x / y;//y=x-y
    x = x / y;//x=x-y
	console.log("After Swapping: x =" +x + ", y=" + y);

    


