"use client";
import {supabase} from "@/lib/supabase";
import React, {useEffect, useState} from "react";
import {Button} from "./ui/button";
import PostCard from "./PostCard";
import {LoaderCircle} from "lucide-react";

type Post = {
  id: string;
  body: string;
  created_at: string;
};

export default function Wall() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const {error} = await supabase.from("posts").insert({body: postText});

    if (!error) {
      setPostText("");
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch existing posts on mount
    async function fetchPosts() {
      const {data, error} = await supabase
        .from("posts")
        .select("*")
        .order("created_at", {ascending: false});
      if (!error && data) {
        setPosts(data as Post[]);
      }
    }
    fetchPosts();

    // Subscribe to new posts
    const channel = supabase
      .channel("posts")
      .on(
        "postgres_changes",
        {event: "INSERT", schema: "public", table: "posts"},
        (payload) => {
          setPosts((current) => [payload.new as Post, ...current]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="space-y-7">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <p className="text-xl font-bold ">Write a post</p>
        <div>
          <textarea
            name="post"
            placeholder="What's on your mind?"
            className="border bg-blue-100 rounded-md border-gray-500 p-3 w-full min-h-20"
            value={postText}
            onChange={(e) => {
              if (e.target.value.length > 280) return;
              setPostText(e.target.value);
            }}
          />
          <p className="text-xs text-gray-500">
            {280 - postText.length} characters remaining
          </p>
        </div>
        <Button
          type="submit"
          className={`w-full md:w-fit md:self-end  ${
            postText.length === 0
              ? "bg-gray-400 "
              : "bg-blue-200 cursor-pointer text-blue-700 hover:bg-blue-300"
          }`}
          disabled={postText.length === 0 || loading}
        >
          {loading ? (
            <LoaderCircle className="size-6 animate-spin text-blue-700" />
          ) : (
            "Share"
          )}
        </Button>
      </form>
      <div className="space-y-2">
        <p className="text-xl font-semibold">Posts</p>
        {posts.length === 0 ? (
          <p>No posts right now</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              name="Marc William Valiente"
              post={post.body}
              time={new Date(post.created_at).toLocaleString()}
            />
          ))
        )}
      </div>
    </div>
  );
}
