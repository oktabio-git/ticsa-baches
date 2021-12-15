import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

const fasIcons = [
  fas.faSearchPlus,
  fas.faCloudUploadAlt,
  fas.faArrowAltCircleDown,
]

export default function registerIconsFA() {
  fasIcons.forEach((icon) => { library.add(icon) })
  // fabIcons.forEach((icon) => { library.add(icon) })
}
