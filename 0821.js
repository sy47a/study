function solution(schedules, timelogs, startday) {
  // HM → 분을 시로 변환
  const toMinutes = (hm) => {
    const hours = Math.floor(hm / 100);
    const minutes = hm % 100;
    return hours * 60 + minutes;
  };

  const n = schedules.length;
  let answer = 0;

  const sat = (6 - startday) % 7;
  const sun = (7 - startday) % 7;

  for (let i = 0; i < n; i++) {
    const allowed = toMinutes(schedules[i]) + 10;
    let ok = true;

    for (let d = 0; d < 7; d++) {
        //주말 제외
      if (d === sat || d === sun) continue;
      if (toMinutes(timelogs[i][d]) > allowed) {
        ok = false;
        break;
      }
    }

    if (ok) answer++;
  }

  return answer;
}

const schedules = [930, 1030];
const timelogs = [
  [930, 940, 935, 940, 920, 930, 940],
  [1035, 1040, 1030, 1035, 1020, 1045, 1030]
];
const startday = 1;

console.log(solution(schedules, timelogs, startday));

//문제 : https://school.programmers.co.kr/learn/courses/30/lessons/388351
