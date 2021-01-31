import * as prismic from '../src'

test.each([
  ['[at(document.type, "product")]', 'document.type', 'product'],
  [
    '[at(document.tags, ["Macaron", "Cupcake"])]',
    'document.tags',
    ['Macaron', 'Cupcake'],
  ],
  ['[at(my.product.price, 50)]', 'my.product.price', 50],
])('%s', (expected, a, b) => expect(prismic.predicate.at(a, b)).toBe(expected))

test.each([
  ['[not(document.type, "product")]', 'document.type', 'product'],
])('%s', (expected, a, b) => expect(prismic.predicate.not(a, b)).toBe(expected))

test.each([
  [
    '[any(document.type, ["product", "blog-post"])]',
    'document.type',
    ['product', 'blog-post'],
  ],
])('%s', (expected, a, b) => expect(prismic.predicate.any(a, b)).toBe(expected))

test.each([
  [
    '[in(document.id, ["V9rIvCQAAB0ACq6y", "V9ZtvCcAALuRUzmO"])]',
    'document.id',
    ['V9rIvCQAAB0ACq6y', 'V9ZtvCcAALuRUzmO'],
  ],
  [
    '[in(my.page.uid, ["myuid1", "myuid2"])]',
    'my.page.uid',
    ['myuid1', 'myuid2'],
  ],
])('%s', (expected, a, b) => expect(prismic.predicate.in(a, b)).toBe(expected))

test.each([
  ['[fulltext(document, "banana")]', 'document', 'banana'],
  ['[fulltext(document, "banana apple")]', 'document', 'banana apple'],
  ['[fulltext(my.product.title, "phone")]', 'my.product.title', 'phone'],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.fulltext(a, b)).toBe(expected),
)

test.each([['[has(my.product.price)]', 'my.product.price']])(
  '%s',
  (expected, a) => expect(prismic.predicate.has(a)).toBe(expected),
)

test.each([['[missing(my.product.price)]', 'my.product.price']])(
  '%s',
  (expected, a) => expect(prismic.predicate.missing(a)).toBe(expected),
)

test.each([['[similar("VkRmhykAAFA6PoBj", 10)]', 'VkRmhykAAFA6PoBj', 10]])(
  '%s',
  (expected, a, b) => expect(prismic.predicate.similar(a, b)).toBe(expected),
)

test.each([
  [
    '[geopoint.near(my.restaurant.location, 9.656896299, -9.77508544, 10)]',
    'my.restaurant.location',
    9.656896299,
    -9.77508544,
    10,
  ],
])('%s', (expected, a, b, c, d) =>
  expect(prismic.predicate.geopointNear(a, b, c, d)).toBe(expected),
)

test.each([
  [
    '[number.lt(my.instructions.numberOfSteps, 10)]',
    'my.instructions.numberOfSteps',
    10,
  ],
  ['[number.lt(my.product.price, 49.99)]', 'my.product.price', 49.99],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.numberLessThan(a, b)).toBe(expected),
)

test.each([
  [
    '[number.gt(my.rental.numberOfBedrooms, 2)]',
    'my.rental.numberOfBedrooms',
    2,
  ],
  ['[number.gt(my.product.price, 9.99)]', 'my.product.price', 9.99],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.numberGreaterThan(a, b)).toBe(expected),
)

test.each([
  [
    '[number.inRange(my.album.track-count, 7, 10)]',
    'my.album.track-count',
    7,
    10,
  ],
  [
    '[number.inRange(my.product.price, 9.99, 49.99)]',
    'my.product.price',
    9.99,
    49.99,
  ],
])('%s', (expected, a, b, c) =>
  expect(prismic.predicate.numberInRange(a, b, c)).toBe(expected),
)

test.each([
  [
    '[date.after(document.first_publication_date, "2017-05-18T17:00:00-0500")]',
    'document.first_publication_date',
    '2017-05-18T17:00:00-0500',
  ],
  [
    '[date.after(document.last_publication_date, 1495080000000)]',
    'document.last_publication_date',
    1495080000000,
  ],
  [
    '[date.after(my.article.release-date, "2017-01-22")]',
    'my.article.release-date',
    '2017-01-22',
  ],
  [
    '[date.after(my.article.release-date, 1485043200000)]',
    'my.article.release-date',
    Date.parse('2017-01-22'),
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateAfter(a, b)).toBe(expected),
)

test.each([
  [
    '[date.before(document.first_publication_date, "2016-09-19T14:00:00-0400")]',
    'document.first_publication_date',
    '2016-09-19T14:00:00-0400',
  ],
  [
    '[date.before(document.last_publication_date, 1476504000000)]',
    'document.last_publication_date',
    1476504000000,
  ],
  ['[date.before(my.post.date, "2017-02-24")]', 'my.post.date', '2017-02-24'],
  [
    '[date.before(my.post.date, 1487894400000)]',
    'my.post.date',
    Date.parse('2017-02-24'),
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateBefore(a, b)).toBe(expected),
)

test.each([
  [
    '[date.between(document.first_publication_date, "2017-01-16", "2017-01-20")]',
    'document.first_publication_date',
    '2017-01-16',
    '2017-01-20',
  ],
  [
    '[date.between(document.last_publication_date, "2016-09-15T05:30:00+0100", "2017-10-15T11:45:00+0100")]',
    'document.last_publication_date',
    '2016-09-15T05:30:00+0100',
    '2017-10-15T11:45:00+0100',
  ],
  [
    '[date.between(my.query-fields.date, 1483074000000, 1483333200000)]',
    'my.query-fields.date',
    1483074000000,
    1483333200000,
  ],
  [
    '[date.between(my.query-fields.date, 1483074000000, 1483333200000)]',
    'my.query-fields.date',
    new Date(1483074000000),
    new Date(1483333200000),
  ],
])('%s', (expected, a, b, c) =>
  expect(prismic.predicate.dateBetween(a, b, c)).toBe(expected),
)

test.each([
  [
    '[date.day-of-month(document.first_publication_date, 22)]',
    'document.first_publication_date',
    22,
  ],
  [
    '[date.day-of-month(document.last_publication_date, 30)]',
    'document.last_publication_date',
    30,
  ],
  ['[date.day-of-month(my.post.date, 14)]', 'my.post.date', 14],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateDayOfMonth(a, b)).toBe(expected),
)

test.each([
  [
    '[date.day-of-month-after(document.first_publication_date, 22)]',
    'document.first_publication_date',
    22,
  ],
  [
    '[date.day-of-month-after(document.last_publication_date, 10)]',
    'document.last_publication_date',
    10,
  ],
  [
    '[date.day-of-month-after(my.event.date-and-time, 15)]',
    'my.event.date-and-time',
    15,
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateDayOfMonthAfter(a, b)).toBe(expected),
)

test.each([
  [
    '[date.day-of-month-before(document.first_publication_date, 20)]',
    'document.first_publication_date',
    20,
  ],
  [
    '[date.day-of-month-before(document.last_publication_date, 10)]',
    'document.last_publication_date',
    10,
  ],
  [
    '[date.day-of-month-before(my.blog-post.release-date, 23)]',
    'my.blog-post.release-date',
    23,
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateDayOfMonthBefore(a, b)).toBe(expected),
)

test.each([
  [
    '[date.day-of-week(document.first_publication_date, "monday")]',
    'document.first_publication_date',
    'monday',
  ],
  [
    '[date.day-of-week(document.last_publication_date, "sun")]',
    'document.last_publication_date',
    'sun',
  ],
  [
    '[date.day-of-week(my.concert.show-date, "Friday")]',
    'my.concert.show-date',
    'Friday',
  ],
  ['[date.day-of-week(my.concert.show-date, 5)]', 'my.concert.show-date', 5],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateDayOfWeek(a, b)).toBe(expected),
)

test.each([
  [
    '[date.day-of-week-after(document.first_publication_date, "fri")]',
    'document.first_publication_date',
    'fri',
  ],
  [
    '[date.day-of-week-after(document.last_publication_date, "Thu")]',
    'document.last_publication_date',
    'Thu',
  ],
  [
    '[date.day-of-week-after(my.blog-post.date, "tuesday")]',
    'my.blog-post.date',
    'tuesday',
  ],
  ['[date.day-of-week-after(my.blog-post.date, 2)]', 'my.blog-post.date', 2],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateDayOfWeekAfter(a, b)).toBe(expected),
)

test.each([
  [
    '[date.day-of-week-before(document.first_publication_date, "Wed")]',
    'document.first_publication_date',
    'Wed',
  ],
  [
    '[date.day-of-week-before(document.last_publication_date, "saturday")]',
    'document.last_publication_date',
    'saturday',
  ],
  [
    '[date.day-of-week-before(my.page.release-date, "Saturday")]',
    'my.page.release-date',
    'Saturday',
  ],
  [
    '[date.day-of-week-before(my.page.release-date, 6)]',
    'my.page.release-date',
    6,
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateDayOfWeekBefore(a, b)).toBe(expected),
)

test.each([
  [
    '[date.month(document.first_publication_date, "august")]',
    'document.first_publication_date',
    'august',
  ],
  [
    '[date.month(document.last_publication_date, "Sep")]',
    'document.last_publication_date',
    'Sep',
  ],
  ['[date.month(my.blog-post.date, 1)]', 'my.blog-post.date', 1],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateMonth(a, b)).toBe(expected),
)

test.each([
  [
    '[date.month-after(document.first_publication_date, "February")]',
    'document.first_publication_date',
    'February',
  ],
  [
    '[date.month-after(document.last_publication_date, 6)]',
    'document.last_publication_date',
    6,
  ],
  ['[date.month-after(my.article.date, "oct")]', 'my.article.date', 'oct'],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateMonthAfter(a, b)).toBe(expected),
)

test.each([
  [
    '[date.month-before(document.first_publication_date, 8)]',
    'document.first_publication_date',
    8,
  ],
  [
    '[date.month-before(document.last_publication_date, "june")]',
    'document.last_publication_date',
    'june',
  ],
  [
    '[date.month-before(my.blog-post.release-date, "Sep")]',
    'my.blog-post.release-date',
    'Sep',
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateMonthBefore(a, b)).toBe(expected),
)

test.each([
  [
    '[date.year(document.first_publication_date, 2016)]',
    'document.first_publication_date',
    2016,
  ],
  [
    '[date.year(document.last_publication_date, 2017)]',
    'document.last_publication_date',
    2017,
  ],
  ['[date.year(my.employee.birthday, 1986)]', 'my.employee.birthday', 1986],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateYear(a, b)).toBe(expected),
)

test.each([
  [
    '[date.hour(document.first_publication_date, 12)]',
    'document.first_publication_date',
    12,
  ],
  [
    '[date.hour(document.last_publication_date, 8)]',
    'document.last_publication_date',
    8,
  ],
  ['[date.hour(my.event.date-and-time, 19)]', 'my.event.date-and-time', 19],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateHour(a, b)).toBe(expected),
)

test.each([
  [
    '[date.hour-after(document.first_publication_date, 21)]',
    'document.first_publication_date',
    21,
  ],
  [
    '[date.hour-after(document.last_publication_date, 8)]',
    'document.last_publication_date',
    8,
  ],
  [
    '[date.hour-after(my.blog-post.releaseDate, 16)]',
    'my.blog-post.releaseDate',
    16,
  ],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateHourAfter(a, b)).toBe(expected),
)

test.each([
  [
    '[date.hour-before(document.first_publication_date, 10)]',
    'document.first_publication_date',
    10,
  ],
  [
    '[date.hour-before(document.last_publication_date, 12)]',
    'document.last_publication_date',
    12,
  ],
  ['[date.hour-before(my.event.dateAndTime, 12)]', 'my.event.dateAndTime', 12],
])('%s', (expected, a, b) =>
  expect(prismic.predicate.dateHourBefore(a, b)).toBe(expected),
)
