import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";


export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row min-h-screen w-full">
          <Sidebar className="w-full md:w-1/3 border-solid-black"/>

          <MainContent className="flex-1 w-full"/>
            {children}
        </div>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import "./globals.css";
// import Sidebar from "@/components/Sidebar";
// import MainContent from "@/components/MainContent";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-50 text-slate-800">
//         <div className="flex flex-col md:flex-row min-h-screen">
          
//           {/* Sidebar */}
//           <Sidebar className="border-r border-gray-300" />

//           {/* Main content area */}
//           <main className="flex-1 flex flex-col items-center justify-start md:justify-center p-6 md:p-10">
//             <MainContent />
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }
