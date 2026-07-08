import { BoxElements, createElement, setIsChildren, viewBox } from './variables'

export let isDraggable = false

export const dragStart = () => {
  isDraggable = true
}

export const dragAppend = (e: DragEvent) => {
  if (isDraggable) {
    if (!e) return
    const target = e.currentTarget as HTMLElement
    collision(viewBox.value as HTMLDivElement, target)
    viewBox.value!.style.borderColor = 'orange red'
  }
}

export const dragEnd = (e: DragEvent) => {
  isDraggable = false
  viewBox.value!.style.borderColor = 'grey'
  const target = e.currentTarget as HTMLElement
  const elem = target.innerText.split('\n')[0]
  const [key, element] = createElement(viewBox.value as HTMLElement, elem as string)
  setIsChildren(true)
  const obj = BoxElements.getInstance()
  obj.addElements(key as string, element as HTMLElement)
}

const collision = (element1: HTMLElement, element2: HTMLElement) => {
  if (!element1 && !element2) return

  const rect1 = element1.getBoundingClientRect() // base element
  const rect2 = element2.getBoundingClientRect() // reacting element

  if (rect1.left < rect2.left) {
    console.log(`base: ${rect1.left} | react: ${rect2.left}`)
  } else {
    console.log(rect1, rect2)
  }
}
