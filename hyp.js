var x,m,n,nn,h,s;     //enter with m<nn/2 and n<nn/2

function hyp(x,n,m,nn) {
    var nz,mz;
    if (m<n) {         //best to have n<m
    	nz=m;
		mz=n
    } else {
		nz=n;
		mz=m
    }
	var h=1,s=1,k=0,i=0;
	while (i<x) {
	    while ((s>1)&&(k<nz)) {
	    	h=h*(1-mz/(nn-k));
	    	s=s*(1-mz/(nn-k));
	    	k=k+1;
	    }
		h=h*(nz-i)*(mz-i)/(i+1)/(nn-nz-mz+i+1);
		s=s+h;
		i=i+1;
	}
	while (k<nz) {
		s=s*(1-mz/(nn-k));
		k=k+1;
	}
	return s;
}

function compute(form) {
    var Prob,nn,m,n,x;
    nn=Math.floor(eval(form.pop1.value));
    m=Math.floor(eval(form.pop2.value));
    n=Math.floor(eval(form.sample.value));
    x=Math.floor(eval(form.argument.value));
    if ((n<=0)||(m<=0)||(nn<=0)) {
    	alert("Parameters must be positive integers");
		Prob=0
    } else if ((m>nn)||(n>nn)) {
		alert("m and n must be less than N");
		Prob=0
    } else if ((x<0)||(x<n+m-nn)) {
    	Prob=0
    } else if ((x>=n)||(x>=m)) {
		Prob=1
    } else {
        if (2*m>nn) {
			if (2*n>nn) {
				Prob=hyp(nn-m-n+x,nn-n,nn-m,nn)
			} else {
				Prob=1-hyp(n-x-1,n,nn-m,nn)
			}
        } else if (2*n>nn) {
			Prob=1-hyp(m-x-1,m,nn-n,nn)
        } else {
    	    Prob=hyp(x,n,m,nn)
        }
    }
	Prob=Math.round(Prob*100000)/100000;
    form.result.value = Prob;
}
