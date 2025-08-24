import Company from "@/app/(components)/Company";
import Hero from "@/app/(components)/Hero";
import Navbar from "@/app/(components)/Navbar";
import Nextly from "@/app/(components)/Nextly";

export default function layout ({ children }: Readonly<{ children: React.ReactNode }>){
  return (
    <div>
        <Navbar />
        <Hero/>
        <Company/>
        <Nextly/>
        {children}
    </div>
  )
}
