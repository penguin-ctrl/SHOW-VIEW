// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import ThankYou from "./ThankYou";
// import ProtectedRiute from "./ProtectedRoute";
// const Home = () => {
// //     const [products, setProducts] = useState([])
// //     const [loading, setLoading] = useState("")
// //     const [error, setError] = useState("")

// //     const [filteredProducts, setFilteredProducts] = useState([]); //filtered data
// //     const [searchQuery, setSearchQuery] = useState(""); //search  input



// //     const navigate = useNavigate('')

// //     // specifying the image location URL
// //     const img_url = "https://DionysiusFranco.pythonanywhere.com/static/images/"
// //     const getproducts = async () => {
// //         setLoading("Please wait as we are retrieving your products...")
// //         try {
// //             const response = await axios.get(
// //                 "https://DionysiusFranco.pythonanywhere.com/api/get_products"
// //             )
// //             setProducts(response.data)
// //             console.log(response)
// //             setLoading("")
// //         } catch (error) {
// //             setLoading("")
// //             setError("There was an error")

// //         }
// //     }

// //     useEffect(() => {
// //         getproducts();
// //     }, [])

// //     // filtered logic?
// //     useEffect(() => {
// //         if (!products) return;  //prevents errors if products is defined

// //         const filtered = products.filter((product) =>
// //             product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             product.product_details.toLowerCase().includes(searchQuery.toLowerCase())
// //         );
// //         setFilteredProducts(filtered);
// //     }, [searchQuery, products]);



// //     console.log(products)
//     return (
//         <div className="row">
//             <Header />


//             <header className="App-header">
//                 <h1>Show View Hostels</h1>
//             </header>
//             <ThankYou />


//             {/* <h3 className="mt-5">Available Products</h3> */}
//             <br />

// {/* 
//             <div className="justify-content-center mb-4">
//                 <input type="text"
//                     className="shadow-sm p-2"
//                     placeholder="Serch products...."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//             </div>
//             <br />
//             {loading}
//             {error}
//  */}

//             {/* map over prooducts and display them */}
//             {/* { */}
//                 {/* filteredProducts?.map((product) => ( */}
//                     <div className="col-md-3 justify-content-center mb-4">
//                         {/* card to display a single product */}
//                         <div className="card shadow">
//                             {/* <img
//                                 className="mt-4 product_img"
//                                 src={img_url + product.product_photo}
//                                 alt=""
//                             /> */}

//                             {/* card body
//                             <div className="card-body">
//                                 <h5 className="mt-2">
//                                     {product.product_name}
//                                 </h5>  */}
//                                 {/* <img width="250" 
//                                     height="300" 
//                                     src="https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/1-4-scaled-e1726651370292.jpg.webp" 
//                                     class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" 
//                                     alt="La Roche-Posay Effaclar Duo+M 40ml" 
//                                     decoding="async"
//                                     title="La Roche-Posay Effaclar Duo+M 40ml" 
//                                     loading="lazy" data-smush-webp-fallback="{&quot;src&quot;:&quot;https:\/\/www.goodlife.co.ke\/wp-content\/uploads\/2021\/09\/1-4-scaled-e1726651370292.jpg&quot;}"></img>
//  */}

//                                 {/* <p className="text-muted">
//                                     {product.product_details.slice(0, 20)}
//                                 </p>
//                                 <b className="text-warning">
//                                     {product.product_cost}
                                    
//                                 </b>
//                                 <br />
//                                 <button onClick={() => navigate("/makepayment", { state: { product } })} className="btn btn-dark mt-2 w-100">
//                                     Purchaser Now</button>
                                    
//                             </div>
//                         </div>
//                     </div>

//                 ))
//             }
//             <Footer /> */}
//         </div>
//     {/* ) */}
// {/* } */}
// export default Home;








