// const Flickity = require('flickity');
// Or for ES2015 module
import Flickity from 'react-flickity-component'
import Image from 'next/image'
import pic1 from '../public/img/1.jpg'
import pic2 from '../public/img/2.jpg'
import pic3 from '../public/img/3.jpg'
// import 'flickity/css/Flickity.css'
// import { Flickity } from 'flickity';

const flickityOptions = {
    // initialIndex: 2,
    // wrapAround: true
}

function Slider() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        <Image src={pic1} alt="Picture of the author" />
        <Image src={pic2} alt="Picture of the author" />
        <Image src={pic3} alt="Picture of the author" />
    </Flickity>
  )
}

export default Slider