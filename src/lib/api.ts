export async function roomCreate() {
  let res = await fetch('https://ytt.iky.su/room/create', {});
  if (res.ok) {
    return await res.json();
  } else {
    return { error: 'Апи упаль(' };
  }
}
