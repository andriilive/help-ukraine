import SVGs from '@/public/*.svg'

import JPGs from '@/public/*.jpg'
import JPEGs from '@/public/*.jpeg'
import PNGs from '@/public/*.png'
import GIFs from '@/public/*.gif'

const Vectors = { ...SVGs }
const Images = { ...JPGs, ...JPEGs, ...PNGs, ...GIFs }

const Assets = { ...Vectors, ...Images }
export default Assets
