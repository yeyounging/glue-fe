import Image from 'next/image';
import { Button } from '@/components/Common';
import bg from '../../../../../../public/images/bg-temp.jpeg';

export default function ProfileBox() {
  return (
    <section className="flex flex-col  items-center mr-50">
      <div className="relative w-250 h-300 my-10 ">
        <Image src={bg} alt="profile" layout="fill" objectFit="cover" />
      </div>
      <div className="text-xl text-center mt-10 ">주에</div>
      <p className="w-200 h-3 bg-primary" />
      <Button className="bg-primary text-white font-semibold w-120 h-30 m-25">
        subscribe
      </Button>
    </section>
  );
}
