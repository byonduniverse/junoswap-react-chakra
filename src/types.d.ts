type Theme = {
  styles: {
    fonts: {
      header: {
        fontSize: string
        fontWeight: number
      }
      title: {
        fontSize: string
        fontWeight: number
      }
      content: {
        fontSize: string
        fontWeight: number
      }
    }
    color: {
      primary: string
      gray: string
      dark: string
    }
  }
}

interface SlideImage {
  image: string
}

interface AppItem {
  id: number
  title: string
  category: string
  color: string
}

interface Tag {
  text: string
  color: string
}

interface Step {
  index: number
  title: string
  description: string
  content: string[]
}
