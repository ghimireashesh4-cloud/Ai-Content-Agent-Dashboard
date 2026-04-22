import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function AIDashboard() {
  const [topicType, setTopicType] = useState("motivation");
  const [topic, setTopic] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    setLoading(true);

    // Simulated API call (replace with backend endpoint)
    setTimeout(() => {
      setScript(
        `🔥 Hook: Imagine changing your life in just 30 days...\n\n` +
        `Story: This is a powerful ${topicType} story about ${topic}. ` +
        `Many people struggle, but small consistent actions lead to big changes...\n\n` +
        `Conclusion: Start today. Your future self will thank you. 🚀`
      );
      setLoading(false);
    }, 1200);
  };

  const publishVideo = () => {
    alert("Video sent to pipeline (backend integration required)");
  };

  return (
    <div className="p-6 grid gap-6">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AI Content Agent Dashboard
      </motion.h1>

      <Tabs defaultValue="create">
        <TabsList>
          <TabsTrigger value="create">Create Content</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        {/* CREATE TAB */}
        <TabsContent value="create">
          <Card>
            <CardContent className="space-y-4 p-4">
              <Input
                placeholder="Enter topic (e.g., discipline, health, history story)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />

              <select
                className="w-full p-2 border rounded"
                value={topicType}
                onChange={(e) => setTopicType(e.target.value)}
              >
                <option value="motivation">Motivation</option>
                <option value="history">History</option>
                <option value="health">Health Tips</option>
              </select>

              <Button onClick={generateScript} disabled={loading}>
                {loading ? "Generating..." : "Generate Script"}
              </Button>

              <Textarea
                rows={10}
                value={script}
                placeholder="Generated script will appear here..."
                onChange={(e) => setScript(e.target.value)}
              />

              <Button onClick={publishVideo} className="w-full">
                Send to Video Pipeline
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PIPELINE TAB */}
        <TabsContent value="pipeline">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="font-semibold">Automation Pipeline</h2>
              <ul className="list-disc pl-5 text-sm">
                <li>Script Generation (AI)</li>
                <li>Voice Conversion (TTS)</li>
                <li>Visual Assembly (Stock / AI video)</li>
                <li>Auto Subtitles</li>
                <li>YouTube Upload</li>
              </ul>
              <p className="text-sm text-gray-500">
                Backend integration required for full automation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SCHEDULE TAB */}
        <TabsContent value="schedule">
          <Card>
            <CardContent className="p-4 space-y-3">
              <h2 className="font-semibold">Publishing Schedule</h2>

              <Input placeholder="Daily upload time (e.g. 18:00)" />

              <Button>
                Save Schedule
              </Button>

              <p className="text-sm text-gray-500">
                Connect cron job or server scheduler in backend.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
