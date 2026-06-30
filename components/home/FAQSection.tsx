"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

// Bilingual FAQ Data (10 Items)
const faqs = [
	// Left Column Data (1-5)
	{
		id: 1,
		questionEn: "Do you facilitate home loans for buyers?",
		questionBn: "আপনারা কি ব্যাংক লোনের সুবিধা দেন?",
		answerEn:
			"Yes, we have corporate agreements with top banks and financial institutions to provide our esteemed clients with hassle-free home loan processing at competitive interest rates.",
		answerBn:
			"হ্যাঁ, আমাদের স্বনামধন্য ব্যাংক ও আর্থিক প্রতিষ্ঠানগুলোর সাথে কর্পোরেট চুক্তি রয়েছে, যার মাধ্যমে আমরা গ্রাহকদের খুব সহজেই এবং আকর্ষণীয় রেটে হোম লোন পেতে সহায়তা করি।",
	},
	{
		id: 2,
		questionEn: "What happens if the project handover is delayed?",
		questionBn: "প্রজেক্ট হস্তান্তরে দেরি হলে কী হবে?",
		answerEn:
			"We proudly maintain a 0% delay record. However, as per our legally binding agreement, if a delay occurs beyond the grace period, we compensate the buyer with a standard monthly rental equivalent.",
		answerBn:
			"আমরা নির্ধারিত সময়ে প্রজেক্ট হস্তান্তরে প্রতিশ্রুতিবদ্ধ (০% ডিলে রেকর্ড)। তারপরও যদি কোনো কারণে দেরি হয়, তবে চুক্তি অনুযায়ী আমরা ক্রেতাকে প্রতি মাসের জন্য সমপরিমাণ ভাড়ার ক্ষতিপূরণ প্রদান করি।",
	},
	{
		id: 3,
		questionEn: "Can I customize the interior design of my apartment?",
		questionBn: "ফ্ল্যাটের ভেতরের ডিজাইন কি কাস্টমাইজ করা যাবে?",
		answerEn:
			"Absolutely. If you book the apartment during the early construction phase, our design team will work with you to customize internal layouts, tiles, and fittings according to your preference.",
		answerBn:
			"অবশ্যই। প্রজেক্টের নির্মাণকাজ চলাকালীন আর্লি-স্টেজে ফ্ল্যাট বুকিং দিলে, আমাদের ডিজাইন টিমের সহায়তায় আপনি আপনার পছন্দমতো ভেতরের লেআউট, টাইলস এবং ফিটিংস কাস্টমাইজ করতে পারবেন।",
	},
	{
		id: 4,
		questionEn: "Are all your projects RAJUK/CDA approved?",
		questionBn: "আপনাদের প্রজেক্টগুলোর আইনি অনুমোদন কি ঠিক আছে?",
		answerEn:
			"100% yes. We do not initiate any construction without full legal compliance, proper land vetting, and approvals from RAJUK, CDA, or local municipal authorities.",
		answerBn:
			"শতভাগ নিশ্চিত। রাজউক, সিডিএ বা সংশ্লিষ্ট কর্তৃপক্ষের সম্পূর্ণ আইনি অনুমোদন এবং জমির সঠিক যাচাইকরণ ছাড়া আমরা কোনো প্রজেক্টের কাজ শুরু করি না।",
	},
	{
		id: 5,
		questionEn: "What is the process for Non-Resident Bangladeshis (NRBs)?",
		questionBn: "প্রবাসীরা (NRB) কীভাবে ফ্ল্যাট কিনতে পারবেন?",
		answerEn:
			"NRBs can easily purchase property through a registered Power of Attorney or directly via banking channels. We have a dedicated desk to handle international documentation seamlessly.",
		answerBn:
			"প্রবাসীরা রেজিস্টার্ড পাওয়ার অফ অ্যাটর্নি (Power of Attorney) অথবা সরাসরি ব্যাংকিং চ্যানেলের মাধ্যমে খুব সহজেই প্রোপার্টি কিনতে পারবেন। এর জন্য আমাদের একটি ডেডিকেটেড সাপোর্ট টিম রয়েছে।",
	},

	// Right Column Data (6-10)
	{
		id: 6,
		questionEn: "Who manages the building after handover?",
		questionBn: "প্রজেক্ট হ্যান্ডওভারের পর মেইনটেন্যান্স কে করবে?",
		answerEn:
			"We provide complimentary facility management for the first 12 months. Afterward, we assist in forming a Homeowners Association to take over regular maintenance.",
		answerBn:
			"হ্যান্ডওভারের পর প্রথম ১২ মাস আমরা সম্পূর্ণ বিনামূল্যে মেইনটেন্যান্স সার্ভিস দিয়ে থাকি। এরপর আমরা একটি ফ্ল্যাট ওনার্স অ্যাসোসিয়েশন গঠনে সহায়তা করি, যারা পরবর্তীতে এটি পরিচালনা করবে।",
	},
	{
		id: 7,
		questionEn: "Is car parking included in the apartment price?",
		questionBn: "গাড়ি পার্কিং এর সুবিধা কি দামের সাথে ইনক্লুডেড?",
		answerEn:
			"Car parking spaces are usually allocated separately based on availability and client preference. The pricing is mentioned transparently during the booking process.",
		answerBn:
			"গাড়ি পার্কিং স্পেস সাধারণত ক্রেতার চাহিদা এবং স্পেসের প্রাপ্যতার ওপর ভিত্তি করে আলাদাভাবে বরাদ্দ দেওয়া হয়। বুকিংয়ের সময়ই এর মূল্য স্বচ্ছভাবে জানিয়ে দেওয়া হয়।",
	},
	{
		id: 8,
		questionEn: "How is the flat registration process handled?",
		questionBn: "ফ্ল্যাট রেজিস্ট্রেশন প্রক্রিয়া কীভাবে সম্পন্ন হয়?",
		answerEn:
			"Our in-house legal team manages the entire registration and mutation (Namjari) process to ensure a hassle-free experience for our clients.",
		answerBn:
			"আমাদের নিজস্ব লিগ্যাল টিম ফ্ল্যাট রেজিস্ট্রেশন এবং নামজারি (Mutation) প্রক্রিয়ার সম্পূর্ণ দায়িত্ব পালন করে, যাতে ক্রেতাকে কোনো রকম হয়রানির শিকার হতে না হয়।",
	},
	{
		id: 9,
		questionEn:
			"Are utility connections (Gas/Electricity/Water) guaranteed?",
		questionBn: "গ্যাস, বিদ্যুৎ ও পানির সংযোগ কি রেডি থাকে?",
		answerEn:
			"We ensure individual DESCO/NESCO electric meters and WASA water connections before handover. For gas, we provide central LPG reticulation systems or cylinder provisions as per govt rules.",
		answerBn:
			"হ্যান্ডওভারের আগেই আমরা নিজস্ব ইলেকট্রিক মিটার এবং পানির লাইন নিশ্চিত করি। গ্যাসের ক্ষেত্রে সরকারি নিয়ম অনুযায়ী সেন্ট্রাল এলপিজি (LPG) সিস্টেম বা সিলিন্ডার প্রভিশন দেওয়া হয়।",
	},
	{
		id: 10,
		questionEn: "Can I visit an ongoing construction site?",
		questionBn: "আমি কি নির্মাণাধীন প্রজেক্ট ভিজিট করতে পারি?",
		answerEn:
			"Yes, we encourage it. You can schedule a guided site tour through our Concierge Desk. For safety reasons, PPE will be provided during the visit.",
		answerBn:
			"হ্যাঁ, আমরা সবসময় ক্লায়েন্টদের সাইট ভিজিটে উৎসাহিত করি। আপনি আমাদের কন্টাক্ট সেকশন থেকে ভিজিট শিডিউল করতে পারেন। নিরাপত্তার জন্য ভিজিটের সময় আমরা প্রয়োজনীয় সেফটি গিয়ার প্রদান করি।",
	},
];

export default function FAQSection() {
	const [openId, setOpenId] = useState<number | null>(null); // 1st item open by default

	const toggleFaq = (id: number) => {
		setOpenId(openId === id ? null : id);
	};

	// Reusable FAQ Item Component
	const FaqCard = ({ faq }: { faq: (typeof faqs)[0] }) => {
		const isOpen = openId === faq.id;

		return (
			<div
				className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-linear-to-br from-slate-800 to-slate-950 group ${
					isOpen ? "border-blue-500" : ""
				}`}
			>
				<button
					onClick={() => toggleFaq(faq.id)}
					className={`w-full flex items-center justify-between p-4 ${isOpen ? "pb-0" : ""} text-left focus:outline-none`}
				>
					<div className="pr-4">
						<h4
							className={`text-[13px] md:text-base font-bold mb-1 transition-colors ${isOpen ? "text-blue-400" : "text-white group-hover:text-blue-400"}`}
						>
							{faq.questionEn}
						</h4>
						<p
							className={`text-xs md:text-sm font-medium ${isOpen ? "text-white" : "text-slate-300"}`}
						>
							{faq.questionBn}
						</p>
					</div>
					<div
						className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${isOpen ? "bg-blue-500/20 rotate-180 text-blue-400" : "bg-white/5 text-slate-300"}`}
					>
						<ChevronDown className="w-5 h-5" />
					</div>
				</button>

				{/* Animated Expandable Content using Grid trick */}
				<div
					className={`grid transition-all duration-300 ease-in-out ${
						isOpen
							? "grid-rows-[1fr] opacity-100"
							: "grid-rows-[0fr] opacity-0"
					}`}
				>
					<div className="overflow-hidden">
						<div className="p-4 pt-3">
							<p className="text-xs md:text-sm text-white leading-relaxed mb-2">
								{faq.answerEn}
							</p>
							<p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
								{faq.answerBn}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section
			id="faq"
			className="pt-16 md:pt-24 relative"
		>
			{/* Subtle Background Elements */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-100 bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none" />

			<div className="px-4 lg:px-24 2xl:px-48 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-8">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2 md:mb-4">
						<HelpCircle className="w-4 h-4" /> Client Resources
					</div>
					<h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">
						Frequently Asked{" "}
						<span className="bg-linear-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
							Questions
						</span>
					</h2>
					<p className="text-slate-600 text-sm md:text-base font-medium">
						Everything you need to know about investing with ANB
						Unique Real State.
					</p>
				</div>

				{/* Two-Column Grid Layout */}
				<div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-start">
					{faqs.map((faq) => (
						<FaqCard
							key={faq.id}
							faq={faq}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
