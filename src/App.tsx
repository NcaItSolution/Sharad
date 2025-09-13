import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Play, Users, Target, Award, Phone, Mail } from 'lucide-react';
import Header from './components/Header';
import QueryModal from './components/QueryModal';
import ServiceModal from './components/ServiceModal';
import ImageCarousel from './components/ImageCarousel';
import Logo from '../public/sharad-logo.png'
import About1 from '../public/About1.jpg';
import About2 from '../public/About2.jpg';
import About3 from '../public/About3.jpg';
import Off1 from '../public/Off1.jpeg';
import Off2 from '../public/Off2.jpeg';
import Off3 from '../public/Off3.jpeg';
import Off4 from '../public/Off4.jpeg';
import Services1 from '../public/Services1.jpg';
import Services2 from '../public/Services2.jpg';
import Services3 from '../public/Services3.jpg';
import Services4 from '../public/Services4.jpg';
import Services5 from '../public/Services5.jpg';
import Services6 from '../public/Services6.jpg';
import Services7 from '../public/Services7.jpg';
import Video from '../public/SaradWebsiteVideo.mp4';


interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
}

function App() {
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const aboutImages = [
    About1,
    About2,
    About3
  ];

  const whatWeDoImages = [
    Off1,
    Off2,
    Off3,
    Off4
  ];

  const services: Service[] = [
    {
  id: '1',
  title: 'Developing the Story',
  description: 'Craft compelling narratives, characters, and plots that capture audience attention.',
  image: Services1,
  fullDescription: 'As a screenwriter, I specialize in creating engaging storylines, memorable characters, and dynamic plots. From concept to structure, I shape your ideas into a narrative that flows seamlessly, keeps audiences intrigued, and lays the foundation for a powerful script or screenplay.'
},
{
  id: '2',
  title: 'Writing the Script',
  description: 'Transform ideas into polished, industry-standard screenplays ready for production.',
  image: Services2,
  fullDescription: 'I deliver professional scripts that include dialogue, action, and vivid scene descriptions. Every script is formatted according to industry standards, ensuring smooth readability for actors and directors. Whether for film, TV, or digital content, I provide scripts that resonate with audiences and bring stories to life.'
},
{
  id: '3',
  title: 'Collaborating with Directors & Producers',
  description: 'Work closely with creative teams to align the script with vision and production goals.',
  image: Services3,
  fullDescription: 'Great storytelling is a collaborative process. I work hand-in-hand with directors, producers, and production teams to refine scripts based on feedback, audience expectations, and budget considerations. This ensures the script not only reads well but also translates effectively on screen.'
},
{
  id: '4',
  title: 'Conducting Research',
  description: 'Ensure accuracy and authenticity in storytelling through in-depth research.',
  image: Services4,
  fullDescription: 'To create believable and impactful scripts, I conduct research on the subject matter, settings, and characters. This attention to detail helps maintain authenticity and ensures that every scene resonates with realism and credibility.'
},
{
  id: '5',
  title: 'Revisions & Rewrites',
  description: 'Refine scripts through revisions while maintaining story integrity.',
  image: Services5,
  fullDescription: 'I provide professional revisions and rewrites based on director, producer, or actor feedback. My focus is on improving pacing, character arcs, and dialogue while keeping the original vision intact, ensuring the script is production-ready and impactful.'
},
{
  id: '6',
  title: 'Developing Characters',
  description: 'Create multidimensional characters with unique voices and backstories.',
  image: Services6,
  fullDescription: 'Characters are the heart of every story. I craft compelling and relatable characters with depth, individuality, and clear motivations. Each character is designed to engage the audience and drive the narrative forward.'
},
{
  id: '7',
  title: 'Types of Screenwriting',
  description: 'Offering versatility across original works, adaptations, TV writing, and more.',
  image: Services7,
  fullDescription: 'My expertise covers multiple forms of screenwriting, including: Original Screenwriting (new stories from scratch), Adaptation Screenwriting (turning books or plays into scripts), Script Doctoring (improving existing scripts), Television Writing (episodic content), Story Editing (guiding script development), and Showrunning (overseeing the full creative and production process).'
}

  ];

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+916291836498?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-black text-white">
      <Header openQueryModal={() => setIsQueryModalOpen(true)} />

      {/* Home Section */}

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={Video} type="video/mp4" />
          </video>
          {/* reduce overlay darkness */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
         
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium text-lg"
          >
            <Play size={20} />
            <span>Get Started</span>
          </button>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ImageCarousel images={aboutImages} className="h-[400px] sm:h-[450px] lg:h-[500px]" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                About <span className="text-gray-400">My Story</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I grew up in Kolkata, exploring culture, stories, and creativity from an early age. School wasn’t always easy, but it sparked my passion for storytelling and design. While others followed traditional paths, I chose to work for myself—teaching, freelancing, and diving into creative projects.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Life took me from modifying cars and street racing to working at American Express in Gurgaon, where I discovered the true anchor in my life: imagination. Writing became my way to heal, grow, and connect—leading me to craft features, shorts, episodes, and novels.

                Today, I’m deeply dedicated to storytelling. I value creativity, resilience, and open-mindedness—whether it’s Tarantino or Twilight, I look for the good in every story. Outside of writing, you’ll find me at rock gigs with a spiced rum in hand or riding my customised KTM.
              </p>

              <button
                onClick={() => openWhatsApp('Hi! I would like to know more about your story and services.')}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-200 font-medium"
              >
                <MessageCircle size={20} />
                <span>Connect with Us</span>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We offer comprehensive solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-black rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-600">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => openServiceModal(service)}
                    className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors group/btn"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="Our-Offerings" className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ImageCarousel images={whatWeDoImages} className="h-[400px] sm:h-[450px] lg:h-[500px]" />
            </div>



            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our Offerings
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A screenwriter’s job goes beyond simply writing screenplays—they create the blueprint for an entire film. While directors and producers often get more recognition, it’s the screenwriter who builds the story, dialogue, and structure that bring a movie to life. Every writer has a unique process, but the challenge remains the same: turning ideas into a compelling script. No matter the method, nearly all screenwriters rely on computers and specialized software to shape their final draft.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Blueprint of a Film</h4>
                    <p className="text-gray-400 text-sm">The screenplay outlines the story, characters, dialogue, and scenes.
</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Creative Process</h4>
                    <p className="text-gray-400 text-sm">Writers may use different methods—outlining, brainstorming, or free writing—before crafting drafts.
</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Collaboration</h4>
                    <p className="text-gray-400 text-sm">Screenwriters often work closely with directors, producers, and editors to refine the script.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp('Hi! I would like to know more about your services and how you can help my business.')}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-200 font-medium"
              >
                <MessageCircle size={20} />
                <span>Connect with Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Continuous Scrolling Images */}
      <div className="overflow-hidden py-12">
        <div className="relative">
          {/* First Row */}
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex space-x-4">
              <img src="/img1.jpg" alt="Image 1" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img2.jpg" alt="Image 2" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img3.jpg" alt="Image 3" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img4.jpg" alt="Image 4" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img5.jpg" alt="Image 5" className="w-64 h-96 object-cover rounded-lg" />
            </div>
            <div className="flex space-x-4">
              <img src="/img1.jpg" alt="Image 1" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img2.jpg" alt="Image 2" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img3.jpg" alt="Image 3" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img4.jpg" alt="Image 4" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img5.jpg" alt="Image 5" className="w-64 h-96 object-cover rounded-lg" />
            </div>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="flex animate-scroll-reverse whitespace-nowrap mt-4">
            <div className="flex space-x-4">
              <img src="/img6.jpg" alt="Image 6" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img7.jpg" alt="Image 7" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img8.jpg" alt="Image 8" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img9.jpg" alt="Image 9" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img10.jpg" alt="Image 10" className="w-64 h-96 object-cover rounded-lg" />
            </div>
            <div className="flex space-x-4">
              <img src="/img6.jpg" alt="Image 6" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img7.jpg" alt="Image 7" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img8.jpg" alt="Image 8" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img9.jpg" alt="Image 9" className="w-64 h-96 object-cover rounded-lg" />
              <img src="/img10.jpg" alt="Image 10" className="w-64 h-96 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get in <span className="text-gray-400">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to start your project? Contact us today and let's discuss how we can help your business grow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-yellow-400 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">Call us anytime</p>
                  </div>
                </div>
                <p className="text-white text-lg font-medium">+91 6291836498</p>
                <p className="text-gray-400 mt-2">Available 24/7 for urgent matters</p>
              </div>

              <div className="bg-yellow-400 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <p className="text-gray-400">Send us a message</p>
                  </div>
                </div>
                <p className="text-white text-lg font-medium">Sharadramula@gmail.com</p>
                <p className="text-gray-400 mt-2">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsQueryModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium text-lg"
              >
                <MessageCircle size={20} />
                <span>Quick Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={Logo} alt="sharad" className="w-52 h-52 object-contain mx-auto block" />
            <p className="text-gray-400">
              © 2025 SHARAD-SCRIPTWRITER. All rights reserved. Transforming ideas through innovation.
            </p>
            <p>Designed and Developed by NCA IT SOLUTION</p>
          </div>
          
        </div>
      </footer>

      {/* Modals */}
      <QueryModal
        isOpen={isQueryModalOpen}
        onClose={() => setIsQueryModalOpen(false)}
      />

      <ServiceModal
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </div>
  );
}

export default App;