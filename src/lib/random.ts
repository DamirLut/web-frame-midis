export function RandomID() {
  return Math.trunc(Date.now() * Math.random())
    .toString(36)
   
}

///@ts-ignore
window.RandomID = RandomID;
