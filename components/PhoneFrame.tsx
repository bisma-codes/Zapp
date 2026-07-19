import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhoneFrame({ src, alt, className = "", priority }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-speaker" aria-hidden="true" />
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 78vw, 360px"
          className="phone-image"
        />
      </div>
    </div>
  );
}
