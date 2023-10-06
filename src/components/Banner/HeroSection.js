import CommonLayout from "../Layouts/CommonLayout"
import Searchbox from "../Searchbox/Searchbox"

const HeroSection = () => {
    return (
        <section className="bg-[] min-h-screen grid place-content-center"
            style={{
                backgroundImage: "url(/assets/bannerbg.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <CommonLayout>
                <div className="grid justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-secondary font-bold text-5xl uppercase">Find Your <span className="text-primary">Soulmate</span> <br /> and Say</h3>
                        <p className="text-lg mt-2"> 'I Do' with Our Trusted Matrimony Website</p>
                    </div>
                    <div className="text-center">
                        <Searchbox/>
                    </div>
                </div>
            </CommonLayout>
        </section>
    )
}

export default HeroSection