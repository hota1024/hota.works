import { atom, useAtom } from 'jotai'

const atomWithLocalStorage = (key: string, initialValue: number) => {
  const getInitialValue = () => {
    const item =
      typeof localStorage === 'undefined'
        ? initialValue
        : parseInt(localStorage.getItem(key) || initialValue.toString(), 10)
    if (item !== null) {
      return item
    }
    return initialValue
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

const redAtom = atomWithLocalStorage('r', 33)
const greenAtom = atomWithLocalStorage('g', 42)
const blueAtom = atomWithLocalStorage('b', 255)

export const useRed = () => useAtom(redAtom)
export const useGreen = () => useAtom(greenAtom)
export const useBlue = () => useAtom(blueAtom)
