function solution(n, w, num) {
  //num이 몇 번째 층에 있는지 확인
  const row = Math.floor((num - 1) / w);
  //num이 몇 번째 위치에 있는지 확인
  const Layer = (num - 1) % w;
  
  //실제 열 위치
  const x = (row % 2 === 0) ? Layer : w - 1 - Layer; 

  // 총 몇 층인지
  const totalR = Math.ceil(n / w);
  let count = 0;

  // 현재 층부터 맨 위층까지 같은 열에 상자가 있는지 확인
  for (let r = row; r < totalR; r++) {
    //해당 층 실제 상자 개수
    const box = Math.min(w, n - r * w); 

    if (r % 2 === 0) {
      // 짝수층 (왼→오)
      if (x < box) count++;
    } else {
      // 홀수층 (오→왼)
      if (x >= (w - box)) count++;
    }
  }

  return count;
}

console.log(solution(22, 6, 8));
console.log(solution(13, 3, 6));

//문제 : https://school.programmers.co.kr/learn/courses/30/lessons/389478?language=javascript
