import AnimatedBackground     from '@Components/animated-background';
import NavigationBar          from '@Components/navigation';
import Hero                   from '@Components/hero';
import SyneptoWSO2            from '@Components/synepto-wso2';
import FullstackAI            from '@Components/fullstack-ai';
import CommunitySpeakers      from '@Components/community-speakers';
import FeaturedSpeaker        from '@Components/featured-speaker';
import CommunityFirstApproach from '@Components/community-first-approach';
import ScheduledEvents        from '@Components/scheduled-events';
import CommunityStats         from '@Components/community-stats';
import CommunityTestimonials  from '@Components/community-testimonials';
import ConferencePasses       from '@Components/conference-passes';
import CommunityHighlights    from '@Components/community-highlights';
import FAQ                    from '@Components/faq';
import ConferenceUpdates      from '@Components/conference-updates';
import Footer                 from '@Components/footer';
import styles                 from './styles.module.css';


function FullStackAIConference() {
  return (
    <main className={styles['page']} role="main">
      <AnimatedBackground />
      <NavigationBar />
      <Hero />
      <SyneptoWSO2 />
      <FullstackAI />
      <CommunitySpeakers />
      <FeaturedSpeaker />
      <CommunityFirstApproach />
      <ScheduledEvents />
      <CommunityStats />
      <CommunityTestimonials />
      <ConferencePasses />
      <CommunityHighlights />
      <FAQ />
      <ConferenceUpdates />
      <Footer />
    </main>
  );
}


export default FullStackAIConference;
