import Hero from "@/components/home/Hero";
import ComplianceBadges from "@/components/home/ComplianceBadges";
import Projects from "@/components/home/Projects";
import MaterialTransparency from "@/components/home/MaterialTransparency";
import VirtualTour from "@/components/home/VirtualTour";
import PropertyFinder from "@/components/home/PropertyFinder";
import InvestmentCalculator from "@/components/home/InvestmentCalculator";
import LandownerCorner from "@/components/home/LandownerCorner";
import Leadership from "@/components/home/Leadership";
import ResidentReviews from "@/components/home/ResidentReviews";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";

export default function Home() {
	return (
		<main className="pt-20">
			<Hero />
			<ComplianceBadges />
			<Projects />
			<MaterialTransparency />
			<Leadership />
			<VirtualTour />
			<PropertyFinder />
			<InvestmentCalculator />
			<LandownerCorner />
			<ResidentReviews />
			<FAQSection />
			<ContactSection />
			<Footer />
			<ScrollToTop />
		</main>
	);
}
