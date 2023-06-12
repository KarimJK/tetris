const app = () => {
  console.log('app.js')

  
  let daf = 0;

  setInterval(() => {
    daf += 1;
    console.log(daf)


  }, 1000)
  for(let i = 0; i < 10; i++) {


    console.log(i)
  }
}