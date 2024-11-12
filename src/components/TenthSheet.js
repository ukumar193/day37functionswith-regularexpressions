import React, { useRef } from 'react'

function TenthSheet() {
     let firstInputRef = useRef();
     let lastInputRef = useRef();
     let emailInputRef =useRef();
     let passInputRef =useRef();
     
     let telInputRef = useRef();
     let engInputRef = useRef();
     let hinInputRef = useRef();
     let matInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();
     
     let firstSpanRef=useRef();
     let lastSpanRef =useRef();
     let emailSpanRef =useRef();
     let passSpanRef =useRef();
     let telSpanRef =useRef();
     let engSpanRef =useRef();
     let hinSpanRef =useRef();
     let matSpanRef =useRef();
     let sciSpanRef =useRef();
     let socSpanRef =useRef();
     let displayRef =useRef();
   
     let nameRegex = /^[a-zA-Z]{3,20}$/;
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     
     
     let inputonchange=(InputRef,SpanRef)=>{
      let marks=InputRef.current.value;
      if(marks >=0 && marks <=100){if(marks>=35)
        {SpanRef.current.innerHTML="pass";
          SpanRef.current.style.backgroundColor="green"}else{SpanRef.current.innerHTML="fail";
            SpanRef.current.style.backgroundColor="red"
          }}
      else{SpanRef.current.innerHTML="inavalid";
        SpanRef.current.style.backgroundColor="gray"
      }

     }
     let inputOnblur =(InputRef)=>{
      InputRef.current.style.backgroundColor="";
     }
     let inputOnFouse =(InputRef)=>{
      InputRef.current.style.backgroundColor="lightgray";
     }
     let totalOnclick=()=>{
     let first =firstInputRef.current.value;
     let last =lastInputRef.current.value;
     let telMarks=Number(telInputRef.current.value);
     let engMarks=Number(engInputRef.current.value);
     let hinMarks=Number(hinInputRef.current.value);
     let matMarks=Number(matInputRef.current.value);
     let sciMarks=Number(sciInputRef.current.value);
     let socMarks=Number(socInputRef.current.value);

     let totalMarks=telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;
     let per =(totalMarks/600)*100;
     
     let result ;
     if (telMarks>=35 && engMarks>=35 && hinMarks >=35 && sciMarks>=35 && socMarks>=35 && matMarks >=35)
    {result ="passed"}
    else{result ="failed"}
    displayRef.current.innerHTML=(`${first} ${last}  ${result} got  ${totalMarks} marks with ${per.toFixed(2)}% `);
     }
    let validateName =(InputRef,SpanRef)=>{
      let result = nameRegex.test(InputRef.current.value);
      if(result === true)
       {SpanRef.current.innerHTML="valid";
        SpanRef.current.style.backgroundColor="green"
       }
      else{SpanRef.current.innerHTML="invalid";
        SpanRef.current.style.backgroundColor="red"}
    }
    let validatepassword =(InputRef,SpanRef)=>{
      let result = passwordRegex.test(InputRef.current.value);
      if(result === true)
       {SpanRef.current.innerHTML="valid";
        SpanRef.current.style.backgroundColor="green"
       }
      else{SpanRef.current.innerHTML="invalid";
        SpanRef.current.style.backgroundColor="red"}
    }
    let validateEmail =(InputRef,SpanRef)=>{
      let result = emailRegex.test(InputRef.current.value);
      if(result === true)
       {SpanRef.current.innerHTML="valid";
        SpanRef.current.style.backgroundColor="green"
       }
      else{SpanRef.current.innerHTML="invalid";
        SpanRef.current.style.backgroundColor="red"}
    }
  return (
    <div>
     
     <form>
       <fieldset>
        <legend>Personal Details</legend>
       <div>
       <label>Frist Name</label>
       <input type="text" placeholder='First Name' ref={firstInputRef}
        onChange={() =>{validateName(firstInputRef, firstSpanRef);}}
        onFocus={()=>{inputOnFouse(firstInputRef);}}
        onBlur={()=>{inputOnblur(firstInputRef);}} 
        ></input>
       <span ref={firstSpanRef}></span>
       </div>

       <div>
       <label>Last Name</label>
       <input type="text"  placeholder='Last Name ' ref={lastInputRef}
        onChange={() =>{validateName(lastInputRef, lastSpanRef);}}
        onFocus={()=>{inputOnFouse(lastInputRef);}}
        onBlur={()=>{inputOnblur(lastInputRef);}} 
        ></input>
       <span ref={lastSpanRef}></span>
       </div>

       <div>
       <label>Email</label>
       <input type="email"  placeholder='Abcd@gamil.com ' ref={emailInputRef}
       onChange={()=>{validateEmail(emailInputRef,emailSpanRef);}}
        onFocus={()=>{inputOnFouse(emailInputRef);}}
        onBlur={()=>{inputOnblur(emailInputRef);}} 
        ></input>
       <span ref={emailSpanRef}></span>
       </div>

       <div>
       <label>Password</label>
       <input type="password"  placeholder='Abcde@1234' ref={passInputRef}
        onFocus={()=>{inputOnFouse(passInputRef);}}
        onBlur={()=>{inputOnblur(passInputRef);}} 
        onChange={()=>{validatepassword(passInputRef,passSpanRef);}}
        ></input>
       <span ref={passSpanRef}></span>
       </div>
       </fieldset>
       <br></br>
       <div>
       <label>Telugu</label>
       <input type="number" placeholder='99' ref={telInputRef}
       
       onFocus={()=>{inputOnFouse(telInputRef);}}
       onBlur={()=>{inputOnblur(telInputRef);}} 
       onChange={()=>{inputonchange(telInputRef,telSpanRef);}}
       ></input>
       <span ref={telSpanRef}></span>
       </div>

       <div>
       <label>English</label>
       <input type="number" placeholder='99'  ref={engInputRef}
        onFocus={()=>{inputOnFouse(engInputRef);}}
        onBlur={()=>{inputOnblur(engInputRef);}}
        onChange={()=>{inputonchange(engInputRef,engSpanRef);}}
         
       ></input>
       <span ref={engSpanRef}></span>
       </div>

       <div>
       <label>Hindi</label>
       <input type="number" placeholder='99'  ref={hinInputRef}
        onFocus={()=>{inputOnFouse(hinInputRef);}}
        onBlur={()=>{inputOnblur(hinInputRef);}}
        onChange={()=>{inputonchange(hinInputRef,hinSpanRef);}} 
        ></input>
       <span ref={hinSpanRef}></span>
       </div>

       <div>
       <label>Maths</label>
       <input type="number" placeholder='99'  ref={matInputRef}
        onFocus={()=>{inputOnFouse(matInputRef);}}
        onBlur={()=>{inputOnblur(matInputRef);}} 
        onChange={()=>{inputonchange(matInputRef,matSpanRef);}}
        ></input>
       <span ref={matSpanRef}></span>
       </div>

       <div>
       <label>Science</label>
       <input type="number" placeholder='99'  ref={sciInputRef}
       onFocus={()=>{inputOnFouse(sciInputRef);}}
       onBlur={()=>{inputOnblur(sciInputRef);}} 
       onChange={()=>{inputonchange(sciInputRef,sciSpanRef);}}
        ></input>
       <span ref={sciSpanRef}></span>
       </div>

       <div>
       <label>Social</label>
       <input type="number" placeholder='99'  ref={socInputRef}
      onFocus={()=>{inputOnFouse(socInputRef);}}
      onBlur={()=>{inputOnblur(socInputRef);}} 
      onChange={()=>{inputonchange(socInputRef,socSpanRef);}}
        ></input>
       <span ref={socSpanRef}></span>
       </div>
      <button type='button'onClick={()=>{
      totalOnclick();
      }}>Upload</button>
      <p ref={displayRef}>Result</p>
     </form>
    
    </div>
  )
}

export default TenthSheet