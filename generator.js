/**
 * A little JavaScript problem
 *
 * In fact, this isn't about JavaScript, but that's the context I've discussed it in.
 * I encourage you to think about it in more programming languages. (are there languages in which this can't be done?)
 *
 * The problem: define functions range, map, reverse and foreach, obeying the restrictions below,
 * such that the following program works properly. It prints the squares of numbers from 1 to 10, in reverse order.
 *
 * var numbers = range(1, 10);
 * numbers = map(numbers, function (n) { return n * n });
 * numbers = reverse(numbers);
 * foreach(numbers, console.log);
 *
 * output:
 *  100
 *  81
 *  64
 *  49
 *  36
 *  25
 *  16
 *  9
 *  4
 *  1
 *
 * Restrictions
 * You must not use arrays. The square bracket characters, [ and ], are forbidden, as well as Array constructor.
 *
 * You must not use objects. The curly braces, { and }, and the dot character (.) are forbidden.
 * You may use curly braces for code blocks, but not for creating JavaScript objects.
 *
 * Should go without saying, these functions must be generic and do what their name implies.
 * They must not be hard-coded for the particular 1..10 example.
 *
 * Feel free to define utilities; you don't have to restrict your program to these 4 functions.
 * It does not matter how fast, small or elegant it is — if you can do it within the limitations above,
 * I think you're an above-average programmer and I would probably hire you. (however: I'm not hiring)
 *
 * Just for reference, my implementation (in ES6) is 8 lines of code, and it isn't totally unreadable. :-)
 */

/**
 * range
 *
 * @param {number} start
 * @param {number} end
 */
function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

/**
 * map
 *
 * @param {Generator} collection
 * @param {function} iteratee
 */
function* map(collection, iteratee) {
  for (const item of collection) {
    yield iteratee(item);
  }
}

/**
 * reverse
 *
 * @param {Generator} collection
 */
function* reverse(collection) {
  for (const item of collection) {
    yield* reverse(collection);
    yield item;
  }
}

/**
 * foreach
 *
 * @param {Generator} collection
 * @param {function} iteratee
 */
function foreach(collection, iteratee) {
  for (const item of collection) {
    iteratee(item);
  }
}
