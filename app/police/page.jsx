"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Mic,
  FileText,
  Gavel,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Send,
  Zap,
  Target,
  BookOpen,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PoliceDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("fir-assistant")
  const [incidentText, setIncidentText] = useState("")
  const [expandedSection, setExpandedSection] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const recommendedSections = [
    {
      section: "302",
      title: "Murder",
      description: "Punishment for murder - Life imprisonment or death",
      severity: "high",
      confidence: 95,
    },
    {
      section: "323",
      title: "Voluntary Hurt",
      description: "Causing hurt voluntarily - Imprisonment up to 1 year",
      severity: "medium",
      confidence: 87,
    },
    {
      section: "379",
      title: "Theft",
      description: "Punishment for theft - Imprisonment up to 3 years",
      severity: "medium",
      confidence: 92,
    },
  ]

  const judgments = [
    {
      title: "State vs. Kumar (2023)",
      court: "Supreme Court",
      summary: "Landmark judgment on digital evidence in FIR",
      relevance: "high",
      date: "2023-08-15",
    },
    {
      title: "Rajesh vs. State (2022)",
      court: "High Court",
      summary: "Guidelines for recording witness statements",
      relevance: "medium",
      date: "2022-12-10",
    },
  ]

  const legalSections = [
    {
      section: "154",
      title: "Information in cognizable cases",
      category: "CrPC",
      description: "Every information relating to the commission of a cognizable offence...",
      usage: "high",
    },
    {
      section: "161",
      title: "Examination of witnesses by police",
      category: "CrPC",
      description: "Any police officer making an investigation may examine orally any person...",
      usage: "medium",
    },
    {
      section: "302",
      title: "Punishment for murder",
      category: "IPC",
      description: "Whoever commits murder shall be punished with death, or imprisonment for life...",
      usage: "high",
    },
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 transition-all duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <div className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border-b border-white/10 dark:border-white/5 p-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/")}
              className="text-blue-300 dark:text-blue-400 hover:text-white hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="font-bold text-white text-lg">LegalAI FIR Assistant</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-300 dark:text-blue-400">Professional Mode</span>
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-blue-200 dark:text-blue-300 font-medium">Good morning, Officer Singh</p>
              <p className="text-xs text-blue-300 dark:text-blue-400">Badge #12345 • Mumbai Police</p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-blue-300 dark:text-blue-400">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Last login: 09:30 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 p-1">
              <TabsTrigger
                value="fir-assistant"
                className="text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Zap className="h-3 w-3 mr-1" />
                FIR Assistant
              </TabsTrigger>
              <TabsTrigger
                value="draft-fir"
                className="text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <FileText className="h-3 w-3 mr-1" />
                Draft FIR
              </TabsTrigger>
              <TabsTrigger
                value="judgments"
                className="text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Gavel className="h-3 w-3 mr-1" />
                Judgments
              </TabsTrigger>
              <TabsTrigger
                value="legal-sections"
                className="text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                <BookOpen className="h-3 w-3 mr-1" />
                Legal Sections
              </TabsTrigger>
            </TabsList>

            {/* FIR Assistant Tab */}
            <TabsContent value="fir-assistant" className="space-y-6 mt-6">
              <Card className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mr-3">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    AI-Powered Incident Analysis
                    <Badge className="ml-auto bg-green-500/20 text-green-400 border-green-500/30">Beta</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative group">
                    <Textarea
                      placeholder="Describe the incident in detail... (AI will analyze and suggest relevant IPC sections)"
                      value={incidentText}
                      onChange={(e) => setIncidentText(e.target.value)}
                      className="bg-white/5 dark:bg-white/10 border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 dark:placeholder:text-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                    <Button
                      size="sm"
                      className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg"
                    >
                      <Mic className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="h-4 w-4 mr-2" />
                    Analyze Incident with AI
                  </Button>
                </CardContent>
              </Card>

              {/* AI Recommendations */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                    AI Recommendations
                  </h3>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">3 matches found</Badge>
                </div>

                {recommendedSections.map((section) => (
                  <Card
                    key={section.section}
                    className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium">
                              Section {section.section}
                            </Badge>
                            <Badge className={`${getSeverityColor(section.severity)} font-medium`}>
                              {section.severity.toUpperCase()}
                            </Badge>
                            <div className="flex items-center space-x-1">
                              <CheckCircle className="h-3 w-3 text-green-400" />
                              <span className="text-xs text-green-400">{section.confidence}% match</span>
                            </div>
                          </div>
                          <h4 className="font-bold text-white mb-2 text-lg">{section.title}</h4>
                          <p className="text-blue-200 text-sm leading-relaxed">{section.description}</p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                            <AlertTriangle className="h-5 w-5 text-blue-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Draft FIR Tab */}
            <TabsContent value="draft-fir" className="space-y-6 mt-6">
              <Card className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mr-3">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    Smart FIR Draft Generator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-300">FIR Number</label>
                      <Input
                        className="bg-white/5 dark:bg-white/10 border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 dark:placeholder:text-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="Auto-generated"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-300">Date & Time</label>
                      <Input
                        className="bg-white/5 dark:bg-white/10 border-white/20 dark:border-white/10 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        type="datetime-local"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-300">Complainant Details</label>
                    <Input
                      className="bg-white/5 dark:bg-white/10 border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 dark:placeholder:text-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Full name of complainant"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-300">Incident Description</label>
                    <Textarea
                      className="bg-white/5 dark:bg-white/10 border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 dark:placeholder:text-blue-400 min-h-[140px] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Detailed description of the incident with all relevant facts..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Generate Draft
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Save Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Judgments Tab */}
            <TabsContent value="judgments" className="space-y-6 mt-6">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-4 w-4 text-blue-300" />
                <Input
                  placeholder="Search landmark judgments, case laws..."
                  className="pl-12 bg-black/20 dark:bg-black/40 backdrop-blur-lg border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 dark:placeholder:text-blue-400 h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                {judgments.map((judgment, index) => (
                  <Card
                    key={index}
                    className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-yellow-500/30 transition-all duration-300 group"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                              {judgment.court}
                            </Badge>
                            <Badge
                              className={`${judgment.relevance === "high" ? "bg-red-500/20 text-red-400 border-red-500/30" : "bg-blue-500/20 text-blue-400 border-blue-500/30"}`}
                            >
                              {judgment.relevance} relevance
                            </Badge>
                          </div>
                          <h4 className="font-bold text-white mb-2 text-lg">{judgment.title}</h4>
                          <p className="text-blue-200 text-sm mb-2">{judgment.summary}</p>
                          <p className="text-xs text-blue-300">Date: {judgment.date}</p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                            <Gavel className="h-5 w-5 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Legal Sections Tab */}
            <TabsContent value="legal-sections" className="space-y-6 mt-6">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-4 w-4 text-blue-300" />
                <Input
                  placeholder="Search IPC, CrPC sections..."
                  className="pl-12 bg-black/20 dark:bg-black/40 backdrop-blur-lg border-white/20 dark:border-white/10 text-white placeholder:text-blue-300 dark:placeholder:text-blue-400 h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-4">
                {legalSections.map((section, index) => (
                  <Card
                    key={index}
                    className="bg-black/20 dark:bg-black/40 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div
                        className="p-5 cursor-pointer hover:bg-white/5 transition-colors"
                        onClick={() => setExpandedSection(expandedSection === section.section ? null : section.section)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-3">
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium">
                                {section.category} {section.section}
                              </Badge>
                              <Badge
                                className={`${section.usage === "high" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-blue-500/20 text-blue-400 border-blue-500/30"}`}
                              >
                                {section.usage} usage
                              </Badge>
                            </div>
                            <h4 className="font-bold text-white text-lg">{section.title}</h4>
                          </div>
                          {expandedSection === section.section ? (
                            <ChevronUp className="h-5 w-5 text-blue-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-blue-400" />
                          )}
                        </div>
                      </div>
                      {expandedSection === section.section && (
                        <div className="px-5 pb-5 border-t border-white/10 bg-white/5">
                          <p className="text-blue-200 text-sm mt-4 leading-relaxed">{section.description}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
