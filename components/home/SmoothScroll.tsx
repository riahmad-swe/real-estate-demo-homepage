"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				duration: 1.5, // স্ক্রলিং স্পিড (সেকেন্ডে)
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // প্রিমিয়াম স্মুথ ইজিং ফাংশন
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				wheelMultiplier: 1, // স্ক্রল সেন্সিটিভিটি
				touchMultiplier: 2,
			}}
		>
			{/* TypeScript Error ফিক্স করার জন্য Fragment <></> দিয়ে র‍্যাপ করা হলো */}
			<>{children}</>
		</ReactLenis>
	);
}
