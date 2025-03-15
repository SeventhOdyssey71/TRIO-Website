import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Gift, Star, ArrowLeft } from "lucide-react"

export default function RewardsPage() {
  const rewards = [
    {
      title: "Early Access",
      description: "Get early access to new Sui features and products",
      icon: Star,
      points: 1000,
    },
    {
      title: "Exclusive Events",
      description: "Join private Twitter Spaces and community events",
      icon: Trophy,
      points: 2500,
    },
    {
      title: "Special NFTs",
      description: "Receive limited edition TRIO NFTs",
      icon: Gift,
      points: 5000,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F1225] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-overlay filter blur-[128px] opacity-30 animate-blob" />

      <div className="container mx-auto py-8 relative z-10">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          TRIO Rewards
        </h1>
        <p className="text-gray-200 text-center mb-12 max-w-2xl mx-auto">
          Earn points by participating in TRIO events, engaging with our content, and contributing to the Sui community.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rewards.map((reward) => (
            <Card key={reward.title} className="backdrop-blur-md bg-white/10 border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/30 flex items-center justify-center mb-4">
                  <reward.icon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{reward.title}</h3>
                <p className="text-gray-200 mb-4">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-200">Required Points</span>
                  <span className="text-purple-300 font-semibold">{reward.points}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
            Start Earning
          </Button>
        </div>
      </div>
    </div>
  )
}

