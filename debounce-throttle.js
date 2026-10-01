// DEBOUNCE - Delay the Execution of callback to n time; 
const debounce = (fnc, time)=>{
  let timer = null;
  return (...args)=>{
    clearTimeout(timer);
    timer = setTimeout(()=>fnc.apply(this,args), time)
  }
}


// Throttle - Limit the execution of callback to n time.
const throttle = (fnc, time)=>{
  let isThrottling = false;
  return (...args)=>{
    if(!isThrottling){
      fnc(args);
      isThrottling = setTimeout(()=> isThrottling=false, time);
    }
  }
}
