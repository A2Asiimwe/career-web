import HeroHeader from '@/components/home/heroSection';

import ProgramsSection from '@/components/home/ProgramsSection';
import AboutSectionPreview from '@/components/home/AboutSectionPreview';
import CampusLife from '@/components/home/CampusLife';
import PartnersSection from '@/components/home/PartnersSection';
// import EventsSection from '@/components/home/EventsSection';
export default function Home() {
	return (
		<div className=''>
			<main className=''>
				<HeroHeader />
				<PartnersSection />
				<ProgramsSection />
				<AboutSectionPreview />
				<CampusLife />
				{/* <EventsSection /> */}

				<div></div>
				{/* Main Content */}
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
		</div>
	);
}
