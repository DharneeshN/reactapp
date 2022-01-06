// import Navlink from './Navlink'
import Service from './Service';
import Button from './Button';
import UpdatedComponent from './Hoptimeout';
import {useNavigate} from 'react-router-dom'
function Header(props){

       //fetching from api
    //  useEffect(()=> {
    //  fetch("https://jsonplaceholder.typicode.com/users")
    //  .then((response)=> response.json())
    //  .then((data)=>{
    //      console.log(data);
    //     })
    //  .catch((err)=>{
    //      console.log(err)
    //  })

    // },[])

    
    //state
    let navigate=useNavigate();

    // const navData = ["   Home   ","   About me   ","   Courses   ","   Certifications" ,"bye"]

  
    const services = [
        {
            title:"Web Development   ",
            desc:"Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services", 
            image:"https://www.theblogy.com/wp-content/uploads/2020/06/web-devwlop.png"
        },
        {
            title:"App Development",
            desc:"Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices ." ,
            image:"https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg"
        },
        {
            title:"Blockchain Development",
            desc:"Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices ." ,
            image:"https://1z1euk35x7oy36s8we4dr6lo-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg"
        }
    ]
    
    
    return (
        <div className="App-header">
            
            {/* {
                 navData.map((Value,index)=>(
                    <Navlink key={index} name={Value} />
                ))
                  
            }
            */}

     <div className="container">
    {
        services.map((service,index)=>(
            <Service key={index} title={service.title} desc={service.desc} image={service.image} />
        ))
    
}
    
     {/* <Service title ="Web Development" desc="Coming soon" /> 
        <Service title ="App Development" desc="Stay Tuned" />  */}
      </div>
      <button onClick={()=>{navigate("/")}}><Button buttonText ="Go to Home Page" /></button>
        </div>
    )



}

export default UpdatedComponent(Header);