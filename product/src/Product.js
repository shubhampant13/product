function Product(){

    let Products = [
        {
           name: "Item1",
           imag: "./Product1.jpg"
        },
        {
            name: "Item2",
            imag: "./Product2.jpg"
        },
        {
            name: "Item4",
            imag: "./Product3.jpg"
        },
        {
            name: "Item4",
            imag: "./Product4.jpg"
        },
        {
            name: "Item5",
            imag: "./Product5.jpg"
        }
    ]

    return(
        <div>
            <b><u><h1>ITEMS LIST</h1></u></b>
            <img src="https://www.w3schools.com/images/lamp.jpg"/>
            {
                Products.map((product,index)=>{
                        return(
                            <div key={index}>
                                <h1>{product.name}</h1>
                                <img src={product.imag}/>
                            </div>
                        );
                })
            }
        </div>
    )
}

export default Product;