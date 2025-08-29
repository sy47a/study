function solution(nickname) {
  let answer = "";

  for (const ch of nickname) {
    if (ch === 'l') {
      answer += 'I';
    } else if (ch === 'w') {
      answer += 'vv';
    } else if (ch === 'W') {
      answer += 'VV';
    } else if (ch === 'O') {
      answer += '0';
    } else {
      answer += ch;
    }
  }

  while (answer.length < 4) {
    answer += 'o';
  }

  if (answer.length > 8) {
    answer = answer.substring(0, 8);
  }

  return answer;
}

console.log(solution("NCTWISH"));
console.log(solution("COMEBACK"));
