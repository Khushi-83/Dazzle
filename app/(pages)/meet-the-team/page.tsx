import Image from "next/image";
import { Linkedin, Facebook, X } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="px-10 py-16">
      {/* Meet the Team Heading */}
      <h2 className="text-4xl font-serif text-center mb-12">Meet the Team</h2>

      {/* Team Members */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Member 1 */}
        <div className="flex items-start gap-6">
          <Image
            src="/images/member.png"
            alt="Farhana Shariff"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold">Farhana Shariff</h3>
            <p className="text-sm text-gray-600 mb-3">President and Owner</p>
            <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1 mb-4">
              <li>Two-time RESA Award winner</li>
              <li>Background in home building and renovations</li>
              <li>Passion for transforming spaces and creating emotional connections</li>
              <li>
                Goal: Make every home warm, inviting, unforgettable, and sell faster for top dollar
              </li>
            </ul>
            {/* Socials */}
            <div className="flex gap-3">
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><X size={20} /></a>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="flex items-start gap-6">
          <Image
            src="/images/member.png"
            alt="Sun Sandhu"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-lg font-semibold">Sun Sandhu</h3>
            <p className="text-sm text-gray-600 mb-3">Co-Stager and Business Operations Manager</p>
            <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1 mb-4">
              <li>Realtor and co-stager with 3+ years real estate experience</li>
              <li>Combines market expertise and interior design</li>
              <li>Focus on making properties stand out</li>
            </ul>
            {/* Socials */}
            <div className="flex gap-3">
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><X size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <section className="mt-20">
        {/* Heading aligned with list */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-200 rounded-lg h-64"></div>
          <div>
            <h2 className="text-4xl font-serif mb-8">Our Core Values</h2>
            
            <div className="space-y-8 text-gray-800">
              {/* 1 */}
              <div>
                <h3 className="font-semibold text-lg">1. Integrity</h3>
                <p className="text-sm mt-1">
                  We believe in honesty, transparency, and always doing the right thing, even when no one is looking.
                </p>
                <hr className="mt-4 border-gray-300" />
              </div>

              {/* 2 */}
              <div>
                <h3 className="font-semibold text-lg">2. Customer-Centric Service</h3>
                <p className="text-sm mt-1">
                  Your needs come first. We are dedicated to delivering exceptional service, tailored to your unique situation.
                </p>
                <hr className="mt-4 border-gray-300" />
              </div>

              {/* 3 */}
              <div>
                <h3 className="font-semibold text-lg">3. Creativity & Innovation</h3>
                <p className="text-sm mt-1">
                  We bring fresh ideas and creative solutions to every project, helping you achieve your vision while maximizing value.
                </p>
                <hr className="mt-4 border-gray-300" />
              </div>

              {/* 4 */}
              <div>
                <h3 className="font-semibold text-lg">4. Collaboration</h3>
                <p className="text-sm mt-1">
                  We work closely with you, whether you’re a homeowner, realtor, or investor, to ensure your goals are met with professionalism and care.
                </p>
                <hr className="mt-4 border-gray-300" />
              </div>

              {/* 5 */}
              <div>
                <h3 className="font-semibold text-lg">5. Excellence</h3>
                <p className="text-sm mt-1">
                  From staging to marketing, we aim for the highest standards in every detail, ensuring outstanding results every time.
                </p>
                <hr className="mt-4 border-gray-300" />
              </div>

              {/* 6 */}
              <div>
                <h3 className="font-semibold text-lg">6. Sustainability</h3>
                <p className="text-sm mt-1">
                  We are committed to using eco-friendly staging materials and practices where possible, making a positive impact on the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}