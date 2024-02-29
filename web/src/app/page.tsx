import AddContact from "@/components/buttonAddContact";
import ContactCard from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="mt-2">

        <input type="text" name="username" id="username" className="flex rounded-lg shadow bg-gray-50 sm:max-w-md p-4" placeholder="Digite o nome do contato" />

      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <AddContact/>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  )
}
