import React from "react";
import { RotateCw } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface ScoreboardLayoutProps {
  leftTeam: React.ReactNode;
  rightTeam: React.ReactNode;
  onReset: () => void;
}

export function ScoreboardLayout({
  leftTeam,
  rightTeam,
  onReset,
}: ScoreboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur border">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Scoreboard</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8 mb-8">
              {leftTeam}
              {rightTeam}
            </div>

            <div className="flex justify-center mt-8">
              <Button
                onClick={onReset}
                variant="outline"
                className="hover:bg-secondary"
              >
                <RotateCw className="w-4 h-4 mr-2" />
                Reset Scores
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
