import Image from 'next/image'

const ImagesInNext = () => {
    return ( 
        <>
            {/* <Image clssName="img-100" src="/img/freedom.jpeg" width={1000} height={650} layout="responsive" /> */}
            <Image src="/img/100x60.png" width={100} height={60} />
        </>
     );
}
 
export default ImagesInNext;