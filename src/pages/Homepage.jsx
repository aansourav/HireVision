import BlogSection from "../components/BlogSection";
import Brands from "../components/Brands";
import FAQAccordion from "../components/FAQAccordion";
import Feature_1 from "../components/Feature_1";
import Feature_2 from "../components/Feature_2";
import Feature_3 from "../components/Feature_3";
import Footer from "../components/Footer";
import HeroCards from "../components/HeroCards";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Included from "../components/Included";
import IncludedCards from "../components/IncludedCards";
import LastingImpression from "../components/LastingImpression";
import MetricsSection from "../components/MetricsSection";
import Navbar from "../components/Navbar";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HeroCards />
            <Brands />
            <HowItWorks />
            <Feature_1 />
            <Feature_2 />
            <Feature_3 />
            <Included />
            <IncludedCards />
            <LastingImpression />
            <MetricsSection />
            <FAQAccordion />
            <BlogSection />
            <LastingImpression />
            <Footer />
        </>
    );
};

export default Homepage;
