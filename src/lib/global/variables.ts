import { ref } from 'vue'
import { useRerender } from '../reactive/render-vue'

export const isPropertyMode = false
export const [isHashildren, setIsChildren] = useRerender(false)
export const viewBox = ref<HTMLDivElement>()

export const createElement = (
  parent: HTMLElement,
  elementName: string,
): [string | null, HTMLElement | null] => {
  const newElement = document.createElement(elementName)
  const key = Math.floor(Math.random() * 99999999).toString()

  if (elementName == 'title') {
    const titleName = prompt('Enter title: ')

    if (titleName?.length !== 0) {
      newElement.innerText = titleName as string
      parent.append(newElement)
      return [key, newElement]
    } else {
      alert('Ttile cannot be added')
      return [null, null]
    }
  }

  newElement.classList.add('default-element')
  newElement.dataset['key'] = key
  parent.append(newElement)
  return [key, newElement]
}

export class BoxElements {
  private static instance: BoxElements
  static elements: { [key: string]: HTMLElement } = {}

  private constructor() {}

  public static getInstance(): BoxElements {
    if (!BoxElements.instance) {
      BoxElements.instance = new BoxElements()
    }
    return BoxElements.instance
  }

  addElements(key: string, element: HTMLElement) {
    BoxElements.elements[key] = element
    console.log(BoxElements.elements)
  }

  click() {
    if (!viewBox.value) return
    viewBox.value.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.default-element') as HTMLElement
      if (target) {
        console.log(BoxElements.elements[`${target.dataset.key}`])
      }
    })
  }
}
