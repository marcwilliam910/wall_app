import React from "react";
import {Card, CardHeader, CardTitle, CardContent} from "./ui/card";
import {Clock} from "lucide-react";

interface PostCardProps {
  name: string;
  post: string;
  time: string;
}

export default function PostCard({name, post, time}: PostCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-start justify-between">
        <CardTitle className="text-blue-700 text-base flex-1">{name}</CardTitle>
        <div className="flex items-center gap-1 text-[.60rem] sm:text-xs text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
      </CardHeader>
      <CardContent className="text-gray-800 text-sm whitespace-pre-line py-0">
        {post}
      </CardContent>
    </Card>
  );
}
