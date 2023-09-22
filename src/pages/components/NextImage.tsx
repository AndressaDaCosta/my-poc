//components/HeavyImage.tsx

import Image from "next/image";

export default function HeavyImage() {
    return(
        <div>
            <h2>Imagem Next</h2>
            <Image src="/assets/imagem-leve.svg" width={300} height={100}  alt="imagem pesada"   />
            
        </div>
    )
}