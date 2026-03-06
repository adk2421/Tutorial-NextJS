import Image from 'next/image';

export default function Page() {
  return (
    <Image
      src="/certificate/dashboard-app-certificate.jpg"
      width={1000}
      height={760}
      alt="Certificate of the Vercel dashboard app course"
    />
  );
}