import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: "free" | "freemium" | "paid";
  rating: number;
  url: string;
  features: string[];
  keywords: string[];
}

export function useAITools() {
  const [tools, setTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchTools();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("ai_tools_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "ai_tools",
        },
        () => {
          fetchTools();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTools = async () => {
    try {
      const { data, error } = await supabase
        .from("ai_tools")
        .select("*")
        .order("name");

      if (error) throw error;
      setTools(data || []);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { tools, loading, error, refetch: fetchTools };
}
