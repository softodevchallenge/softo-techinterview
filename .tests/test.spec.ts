import { solution } from '../'

export const testSolution = (n: number): number => {
  let sum = 0;
  for (let counter = 1; counter <= n; counter+=2)
    sum += counter;
  return sum;
}


describe('solution(input) method',() => {
  it('should be 2500', () => {
    expect(solution(100)).toEqual(2500)
  })

  it('should right the sum if the input is a random number', () => {
    const max = Math.floor(Math.random() * (99999));
    expect(solution(max)).toEqual(testSolution(max))
  })
}
)