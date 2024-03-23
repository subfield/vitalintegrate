import Cards from "../components/Cards"
import Sections from "../components/Sections"
import Blogs from "../components/Blogs"
import Testimonial from "../components/Testimonial"
import CtaOne from "../components/CtaOne"
import Hero from "../components/Hero"

const Home = () => {
    return (
        <>
        {/* <div className="relative top-14"> */}
            <Hero />
        <div className="">
            <Sections />
        </div>
        <div className="">
            <Cards />
        </div>
        <div className="">
            <Testimonial />
        </div>
        <div className="">
            <CtaOne />
        </div>
        <div className="">
            <Blogs />
        </div>
        {/* </div> */}
            </>
    )
}

export default Home