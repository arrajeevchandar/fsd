// worker.js
self.onmessage = function (e) {
    const array = e.data;
    const steps = [];
  
    // Bubble sort with steps
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          steps.push([...arr]);
        }
      }
    }
  
    // Send each step slowly
    let index = 0;
    const interval = setInterval(() => {
      if (index >= steps.length) {
        clearInterval(interval);
      } else {
        postMessage(steps[index]);
        index++;
      }
    }, 50);
  };
  