function solution(wallet, bill) {
  let answer = 0;

  const w_min = Math.min(wallet[0], wallet[1]);
  const w_max = Math.max(wallet[0], wallet[1]);

  while (true) {
    let b_min = Math.min(bill[0], bill[1]);
    let b_max = Math.max(bill[0], bill[1]);

    if (b_min <= w_min && b_max <= w_max) break;

    if (bill[0] > bill[1]) {
      bill[0] = Math.floor(bill[0] / 2);
    } else {
      bill[1] = Math.floor(bill[1] / 2);
    }

    answer++;
  }

  return answer;
}

console.log(solution([10, 7], [11, 15])); 
