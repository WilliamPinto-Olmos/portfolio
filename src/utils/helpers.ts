function groupBy<TKey, TValue>(
  array: Array<TValue>,
  keyGetter: (item: TValue) => TKey | TKey[]
): Map<TKey, Array<TValue>> {
  const map = new Map<TKey, Array<TValue>>()

  array.forEach((item: TValue): void => {
    let keys = keyGetter(item)

    if (!Array.isArray(keys)) {
      keys = [keys]
    }

    keys.forEach((key: TKey) => {
      const group = map.get(key)

      if (!group) {
        map.set(key, [item])
      } else {
        group.push(item)
      }
    })
  })

  return map
}

export { groupBy }
