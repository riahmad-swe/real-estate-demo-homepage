import Hero from "@/components/home/Hero";
import ComplianceBadges from "@/components/home/ComplianceBadges";
import Projects from "@/components/home/Projects";
import Quality from "@/components/home/Quality";
import VirtualTour from "@/components/home/VirtualTour";
import PropertyFinder from "@/components/home/PropertyFinder";
import InvestmentCalculator from "@/components/home/InvestmentCalculator";
import LandownerCorner from "@/components/home/LandownerCorner";
import Team from "@/components/home/Team";
import ResidentReviews from "@/components/home/ResidentReviews";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import ScrollToTop from "@/components/home/ScrollToTop";

export default function Home() {
	return (
		<main className="pt-20">
			<Hero />
			<ComplianceBadges />
			<Projects />
			<Quality />
			<Team />
			<VirtualTour />
			<PropertyFinder />
			<InvestmentCalculator />
			<LandownerCorner />
			<ResidentReviews />
			<FAQSection />
			<ContactSection />
			<ScrollToTop />
		</main>
	);
}
