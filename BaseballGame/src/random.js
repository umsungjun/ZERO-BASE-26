export function generateRandomNumber() {
  // 1~9 까지 숫자를 이용

  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const pickedNumbers = shuffle(candidates).splice(0, 4); // random하게 섞인 배열을 0~4까지 뽑음

  return pickedNumbers;
}

function shuffle(array) {
  // Math.random(), 0~1까지의 수를 랜덤하게 뽑아줌

  return array.sort(() => {
    // [1, 2, 3, 4, 5, 6, 7, 8, 9] sort함수를 이용해서 음수를 반환할때는 내림차순 정렬을 하고 양수를 반환하면 오름차순 정렬을 함
    return Math.random() - 0.5;
  });
}
