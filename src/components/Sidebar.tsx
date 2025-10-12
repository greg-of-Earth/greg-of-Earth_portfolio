import Image from "next/image"

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`flex-shrink-0 h-[35vh] flex items-center md:h-screen w-full md:w-1/3 bg-gray-700 border-b md:border-r border-cyan-400 flex items-center justify-center relative ${className || ""}`}>
        <div className="flex flex-col items-center text-center">
            <Image
                src="/profile.jpg"
                alt="Profile"
                width={148}
                height={148}
                className="rounded-full mb-4"
            />        
            
            <h2 className="text-xl font-semibold text-white">
                Gregory Calderon
            </h2>
            <p className="text-md text-gray-200">
                Software Engineer
            </p>
            <a
                href="mailto:greg87calderon@gmail.com"
                className="text-xs text-cyan-300 hover:text-cyan-400 transition-colors mt-1">
                greg87calderon@gmail.com
            </a>
        </div>
    </aside>
  )
}

export default Sidebar
