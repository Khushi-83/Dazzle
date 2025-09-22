import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Storefronthero.png"
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Bottom Overlay Bar */}
      <div className="absolute bottom-0 w-full bg-[#3b2d25] text-white py-3 text-center text-sm md:text-base font-semibold tracking-wide">
        <span className="mx-4">✱ DINING SETS</span> |
        <span className="mx-4">🛏️ BEDROOM MUST–HAVES</span> |
        <span className="mx-4">🛋️ LIVING ROOM IDEAS</span>
      </div>
    </section>
  );
}
