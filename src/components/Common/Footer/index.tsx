import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="h-320 flex gap-20 justify-center items-center">
      <p>copyright © Dothez 2024</p>
      <Image
        src="/images/mole-logo.png"
        alt="mole-logo"
        width={134}
        height={75}
      />
    </footer>
  );
}
