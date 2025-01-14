import { NextPage } from "next";
import CatImage from '../../public/images/cat.jpg';
import Image from "next/image";


const ImageSample: NextPage<void> = () => {
    return (
        <div>
            <h1>Image Sample</h1>
            <img
                style={{
                    width: "50%"
                }}
                src="/images/cat.jpg"
                alt="cat" />
            <Image
                src={CatImage}
                alt="cat"
                width={500}
            />
        </div>
    )
}

export default ImageSample;