type ArrayOrSingle<T> = T | T[]

const normalizeValue = (value: ArrayOrSingle<string | number | Date>): string =>
  Array.isArray(value)
    ? `[${value.map((v) => formatValue(v)).join(', ')}]`
    : formatValue(value)

const formatValue = (value: string | number | Date): string =>
  typeof value === 'string'
    ? `"${value}"`
    : value instanceof Date
    ? value.toISOString()
    : `${value}`

const pathPredicate = (name: string) => (path: string): string =>
  `[${name}(${path})]`

const pathWithArgsPredicate = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Args extends Array<any> = [value: ArrayOrSingle<string | number>]
>(
  name: string,
) => (path: string, ...args: Args): string =>
  `[${name}(${path}, ${args.map((arg) => normalizeValue(arg)).join(', ')})]`

export const at = pathWithArgsPredicate('at')
export const not = pathWithArgsPredicate('not')
export const any = pathWithArgsPredicate('any')
const _in = pathWithArgsPredicate('in')
export { _in as in }
export const fulltext = pathWithArgsPredicate('fulltext')
export const has = pathPredicate('has')
export const missing = pathPredicate('missing')
export const similar = pathPredicate('similar')
export const geopointNear = pathWithArgsPredicate<
  [latitude: number, longitude: number, radius: number]
>('geopoint.near')
export const numberLessThan = pathWithArgsPredicate<[value: number]>(
  'number.lt',
)
export const numberGreaterThan = pathWithArgsPredicate<[value: number]>(
  'number.gt',
)
export const numberInRange = pathWithArgsPredicate<
  [lowerLimit: number, upperLimit: number]
>('number.inRange')
export const dateAfter = pathWithArgsPredicate<[date: string | number | Date]>(
  'date.after',
)
export const dateBefore = pathWithArgsPredicate<[date: string | number | Date]>(
  'date.before',
)
export const dateBetween = pathWithArgsPredicate<
  [startDate: string | number | Date, endDate: string | number | Date]
>('date.between')
export const dateDayOfMonth = pathWithArgsPredicate<[day: number]>(
  'date.day-of-month',
)
export const dateDayOfMonthAfter = pathWithArgsPredicate<[day: number]>(
  'date.day-of-month-after',
)
export const dateDayOfMonthBefore = pathWithArgsPredicate<[day: number]>(
  'date.day-of-month-before',
)
export const dateDayOfWeek = pathWithArgsPredicate<[day: string | number]>(
  'date.day-of-week',
)
export const dateDayOfWeekAfter = pathWithArgsPredicate<[day: string | number]>(
  'date.day-of-week-after',
)
export const dateDayOfWeekBefore = pathWithArgsPredicate<
  [day: string | number]
>('date.day-of-week-before')
export const dateMonth = pathWithArgsPredicate<[month: string | number]>(
  'date.month',
)
export const dateMonthAfter = pathWithArgsPredicate<[month: string | number]>(
  'date.month-after',
)
export const dateMonthBefore = pathWithArgsPredicate<[month: string | number]>(
  'date.month-before',
)
export const dateYear = pathWithArgsPredicate<[year: number]>('date.year')
export const dateHour = pathWithArgsPredicate<[hour: number]>('date.hour')
export const dateHourAfter = pathWithArgsPredicate<[hour: number]>(
  'date.hour-after',
)
export const dateHourBefore = pathWithArgsPredicate<[hour: number]>(
  'date.hour-before',
)
