import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Play, Bell, ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Home() {
  const teamMembers = [
    { name: "Cal", twitter: "cal_sosa", image: "https://pbs.twimg.com/profile_images/1886370422771326976/3BMCnufy_400x400.jpg" },
    { name: "Currency", twitter: "currency_sui", image: "https://pbs.twimg.com/profile_images/1900320335569756160/MZXhehi8_400x400.jpg" },
    { name: "Jenny", twitter: "Rainbowsdotsui", image: "https://pbs.twimg.com/profile_images/1839656892768858112/7nsSFg8M_400x400.jpg" },
  ]

  const spaces = [
    {
      title: "TRIO on the TOP!",
      date: "10th March, 8:00pm",
      location: "Twitter Spaces",
      category: "Community Talk",
      isRecorded: true,
    },
    {
      title: "Suilend with TRIO",
      date: "15th March, 9:00pm",
      location: "Twitter Spaces",
      category: "AMA Session",
      isUpcoming: true,
    },
    {
      title: "AMM's on SUI",
      date: "18th March, 9:00pm",
      location: "Twitter Spaces",
      category: "AMA Session",
      isUpcoming: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F1225] text-white relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob animation-delay-4000" />

      {/* Header */}
      <header className="container mx-auto p-4 flex items-center justify-between backdrop-blur-sm bg-white/5 rounded-b-2xl">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          TRIO
        </div>
        <nav className="flex gap-6">
          <Link href="/rewards" className="text-gray-300 hover:text-purple-400 transition-colors">
            TRIO Rewards
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
            About Us
          </Link>
        </nav>
      </header>

      {/* Meet the TRIO */}
      <section className="container mx-auto py-16 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Meet the TRIO
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group hover:shadow-lg transition-all duration-300 backdrop-blur-md bg-white/5 border-0 rounded-3xl overflow-hidden"
            >
              <CardContent className="p-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-2xl w-full object-cover aspect-square"
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 backdrop-blur-lg bg-white/10">
                <span className="font-semibold text-lg text-gray-100">{member.name}</span>
                <Link
                  href={`https://x.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elon-musk-twitter-rebrand-x-logo-2-6jXHjs5GbWTZzktg1VDfeo1DsRUOLH.png"
                    alt="X (formerly Twitter)"
                    width={20}
                    height={20}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* TRIO Spaces */}
      <section className="container mx-auto py-16 backdrop-blur-md bg-white/5 rounded-3xl relative z-10">
        <div className="px-6">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            TRIO Spaces
          </h2>
          <p className="text-gray-400 mb-8">Participate in Twitter Spaces, community meetups, and more.</p>

          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search spaces..."
                className="pl-10 bg-white/5 border-0 text-gray-200 placeholder:text-gray-500"
              />
            </div>
            <Button variant="outline" className="gap-2 text-gray-300 border-gray-700">
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 text-gray-400 font-medium">Date</th>
                  <th className="text-left py-4 text-gray-400 font-medium">Name</th>
                  <th className="text-left py-4 text-gray-400 font-medium">Location</th>
                  <th className="text-left py-4 text-gray-400 font-medium">Category</th>
                  <th className="text-right py-4"></th>
                </tr>
              </thead>
              <tbody>
                {spaces.map((space) => (
                  <tr key={space.title} className="border-b border-gray-800/50">
                    <td className="py-4 text-gray-300">{space.date}</td>
                    <td className="py-4 text-white font-medium">{space.title}</td>
                    <td className="py-4 text-gray-300">{space.location}</td>
                    <td className="py-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                        {space.category}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Button variant={space.isRecorded ? "default" : "secondary"} size="sm">
                        {space.isRecorded ? (
                          <>
                            <Play className="w-4 h-4 mr-2" /> Play
                          </>
                        ) : (
                          <>
                            <Bell className="w-4 h-4 mr-2" /> Remind
                          </>
                        )}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="container mx-auto py-16 relative">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1c30] to-[#2d1b4b] p-12 min-h-[500px]">
          <div className="absolute top-0 right-0 text-sm text-gray-400 p-6">03 • 03</div>
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 text-white">Everything Bigger with Sui</h2>
            <p className="text-gray-300 text-lg mb-6">
              Learn about the latest developments and innovations in the Sui ecosystem. Discover how TRIO is
              contributing to the growth and adoption of Sui blockchain technology through educational content and
              community engagement.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              In this series, Cal explores the expanding Sui ecosystem, from DeFi applications to gaming platforms, NFT
              marketplaces, and more. Understand how Sui's unique features enable developers to build scalable and
              efficient decentralized applications.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
          </div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/20 text-white hover:bg-black/30">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Button variant="ghost" size="icon" className="rounded-full bg-black/20 text-white hover:bg-black/30">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-12 border-t border-white/10 mt-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              TRIO
            </h3>
            <p className="text-gray-400">Sui blockchain enthusiasts creating content and fostering community growth.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest content and events.</p>
            <div className="flex">
              <Input
                placeholder="Your email"
                className="bg-white/5 border-0 text-gray-200 placeholder:text-gray-500 rounded-r-none"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TRIO. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

