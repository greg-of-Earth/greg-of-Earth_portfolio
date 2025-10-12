import Image from "next/image"

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`flex-shrink-0 h-[35vh] flex items-center md:h-screen w-full md:w-1/3 bg-gray-700 border-b-6 md:border-r-6 border-cyan-400 flex items-center justify-center relative ${className || ""}`}>
        <div className="flex flex-col items-center text-center md:mb-[50%]">
            <Image
                src="/profile.jpg"
                alt="Profile"
                width={148}
                height={148}
                className="rounded-full mb-4 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />        
            
            <h2 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
                Gregory Calderon
            </h2>
            <p className="text-md text-gray-200 md:text-lg lg:text-xl">
                Software Engineer
            </p>
            <a
                href="mailto:greg87calderon@gmail.com"
                className="text-xs text-cyan-300 hover:text-cyan-400 transition-colors mt-1 md:text-sm lg:text-base">
                greg87calderon@gmail.com
            </a>
        </div>
    </aside>
  )
}

export default Sidebar
