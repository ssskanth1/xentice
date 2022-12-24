import React ,{useState,useEffect} from 'react'
import './Products.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
    const [data,setData] = useState([]);
    const[filter,setFilter]=useState(data);
    const [loading,setloading] = useState(false);
    let componentMounted = true;


    useEffect(()=>{
        const getProducts = async () =>{
            setloading(true);
            const response = await fetch("https://api.xentice.com/api/postadSelect");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setloading(false);
                console.log(filter);
                console.log(data);

            }
            return () => {
                componentMounted = false;

            };
        
        }
        getProducts();
    },[]);

    const Loading = () =>{
        return <> Loading...</>
    };
    // const filterProduct = (cat) => {
    //   console.log(`hii${cat}`);
    //     const updatedList = data.filter((x)=>console.log(x.propertyType));
    //     console.log(updatedList);
    //     setFilter(updatedList)
    // }

    const ShowProducts = () => {
  return (
    <>
    <div>
    {/* <div className="buttons  justify-content-center mb-5 pb-5
        
        ">
         <div className='shop'>

         <button className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct(data)} 
          >All</button>

          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("Commercial Shop")}>Commercial Shop</button>
         </div>
         <div className='office'>
          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("Commercial Office")}>
           Commercial Office
          </button>

         </div>
         <div className='land'>

          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("Commercial Building")}>Commercial Building</button>
         </div>
         <div className='bulding'>

          <button className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("")}></button>
         </div>
    
        </div> */}
    </div>
<div className='card row '>
    <h2>Commercial Shop</h2>
    <div className='card1 wrapper col-4'>

 {filter.map((product)=>{
    return (
        <div className='details'key={product.id} >
      <Card.Img className='cdimg' src={product.images} />
      <Card.Body>
        <Card.Title>{product.location}</Card.Title>
        <Card.Text>
         {/* {product.location} */}
        </Card.Text>
        <Card.Text>
        {product.id}
        </Card.Text>
        <Card.Text>
        {product.propertyType}
        </Card.Text>
        <button variant="primary">Explore Now</button>
      </Card.Body>
        </div>
    )
 })}
  
    </div>
    {/* <div className='card2 col-4'>
   
      <Card.Img className='cdimg' variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Explore Now</Button>
      </Card.Body>
    
    </div>
    <div className='card3 col-4'>
  
      <Card.Img className='cdimg' variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Explore Now</Button>
      </Card.Body>
   
    </div> */}

  
</div>
    </>
  )
}

return (
    
<div>
    <div className='container my-5 py-5'>
        <div className='row'>
            <div className='col-12 '>
<div className='row-justify-content-center' >
    {loading?<Loading />:<ShowProducts />}
</div>
            </div>

        </div>

    </div>
</div>
)
}

export default Products
