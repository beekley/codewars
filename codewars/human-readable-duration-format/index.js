/**
 * @description
 * @param {Number} s
 */
const formatDuration = s => {
  if (s === 0) return 'now';
  const units = [
    { name: 'year', secs: 31536000 },
    { name: 'day', secs: 86400 },
    { name: 'hour', secs: 3600 },
    { name: 'minute', secs: 60 },
    { name: 'second', secs: 1 },
  ];

  let remainder = s;
  const results = [];
  units.forEach(unit => {
    const count = Math.floor(remainder / unit.secs);
    remainder = remainder % unit.secs;
    const result = `${count} ${unit.name}${count > 1 ? 's' : ''}`;
    if (count > 0) results.push(result);
  });
  const last = results.pop();
  return `${results.join(', ')}${results.length > 0 ? ' and ' : ''}${last}`;
};

console.log(formatDuration(3662));
