import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Rocket, MessageSquare, ArrowLeft } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { label: "Community Members", value: "10K+", icon: Users },
    { label: "Twitter Spaces Hosted", value: "100+", icon: MessageSquare },
    { label: "Projects Launched", value: "25+", icon: Rocket },
  ]

  return (
    <div className="min-h-screen bg-[#0F1225] text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob" />

      <div className="container mx-auto py-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            About TRIO
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            We are a group of Sui blockchain enthusiasts dedicated to creating engaging content and fostering community
            growth through Twitter Spaces and educational resources.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="backdrop-blur-md bg-white/5 border-0 rounded-3xl">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              We aim to make the Sui blockchain ecosystem more accessible and understandable through engaging content,
              interactive discussions, and community-driven initiatives.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Join Our Community
            </Button>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="TRIO Community"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

