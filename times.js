let counter=0;
const myFunc = () => {
    console.log("Hello World");
    counter +=1;
    if (counter ===5)
    {
    console.log("done");
    clearInterval(timerId); // kill timer;
    }
};
const timerId=setInterval(myFunc,1000);
