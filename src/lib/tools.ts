export function formatTime(time: number) {
  const minutes = '' + Math.trunc((time % 3600) / 60);
  const seconds = '' + Math.trunc((time % 3600) % 60);
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}
