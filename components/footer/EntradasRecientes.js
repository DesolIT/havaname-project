import React from "react";
import Link from "next/link";

const EntradasRecientes = ()=>{
    return(
        <div>
            <h2>Entradas Recientes</h2>
            <Link href='#'>
                <a>Excursión Camagüey Colonial</a>
            </Link>
            <Link href='#'>
                <a>Excursión Trinidad</a>
            </Link>
            <Link href='#'>
                <a>Excursión Cienfuegos</a>
            </Link>
            <Link href='#'>
                <a>Excursión Habana Vieja</a>
            </Link>
        </div>
    )
}

export default EntradasRecientes