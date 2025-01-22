import { NextPage } from "next";
import CatImage from '../../public/images/cat.jpg';
import Image from "next/image";


const ImageSample: NextPage<void> = () => {
    return (
        <div>
            <h1>Image Sample</h1>
            {/* 이미지 컴포넌트를 사용하면 브라우저의 정보를 기반으로 최적화한 이미지를 제공 */}
            <Image
                src={CatImage}
                alt="cat"
                width={500}
            />
        </div>
    )
}

export default ImageSample;