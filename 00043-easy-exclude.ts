// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
]

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T
// 'a' : 'a'|'b' => never | never | c  => 'c'
// 'b' : 'a'|'b' => never
// 'c' : 'a'|'b' => c 