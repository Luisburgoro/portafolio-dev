import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[480px] w-[480px] rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-[120px]" />

      {/* Borde */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">

        <Image
          src="/images/profile.png"
          alt="Luis Burgos"
          width={420}
          height={520}
          priority
          className="rounded-2xl object-cover"
        />

      </div>

    </div>
  );
}