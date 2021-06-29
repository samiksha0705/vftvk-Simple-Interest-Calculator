function cal(){
			a=document.getElementById("amount").value;
			b=document.getElementById("get").value;
			c=document.getElementById("year").value;
			result = document.getElementById("result");
			aa=document.getElementById("aa");
			bb=document.getElementById("bb");
			cc=document.getElementById("cc");
			var x=2021;
			
			if(a<=0)
			{
				alert("Enter Valid Amount")
			}
     
			aa.innerHTML = "If you deposit "+a;
			bb.innerHTML = "at an interest rate of "+b+"%";
			result.innerHTML = "You will recieve an amount of " + (a*b*c/100);
			cc.innerHTML = "in the year "+(parseInt(x)+parseInt(c));
		}
