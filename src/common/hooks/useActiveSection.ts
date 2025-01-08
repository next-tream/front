'use client';

import { useEffect, useRef, useState } from 'react';

const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState('');
	const sectionRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			let currentSection = '';

			sectionRef.current.forEach((section) => {
				if (section) {
					const sectionTop = section.offsetTop;
					const sectionHight = section.offsetHeight;
					if (window.scrollY >= sectionTop - sectionHight / 2) {
						currentSection = section.id;
					}
				}
			});
			setActiveSection(currentSection);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { sectionRef, activeSection };
};

export default useActiveSection;
