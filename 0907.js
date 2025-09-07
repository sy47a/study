function solution(video_len, pos, op_start, op_end, commands) {
  const toSeconds = (time) => {
    const [m, s] = time.split(":").map(Number);
    return m * 60 + s;
  };

  const toTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  let now = toSeconds(pos);
  const len = toSeconds(video_len);
  const start = toSeconds(op_start);
  const end = toSeconds(op_end);

  if (start <= now && now <= end) now = end;

  for (let cmd of commands) {
    if (start <= now && now <= end) now = end;

    if (cmd === "prev") {
      now = Math.max(0, now - 10);
    } else if (cmd === "next") {
      now = Math.min(len, now + 10);
    }
  }

  if (start <= now && now <= end) now = end;

  return toTime(now);
}

console.log(solution("05:00", "00:00", "00:30", "01:00", ["next", "next", "prev"]));
