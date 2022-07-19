// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
// type First<T extends any[]> = T extends [T[0], ...T[number]] ? T[0]: never
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// type First<T extends any[]> = T extends { 0: any } ? T[0] : never

// type First<T extends any[]> = T extends [infer a, ...any[]] ? a : never
type First<T extends any[]> = T extends [] ? never : T[0]