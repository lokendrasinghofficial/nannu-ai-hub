import { supabase } from "@/integrations/supabase/client";
import { allAITools } from "@/data/aiTools";

/**
 * This utility function migrates hardcoded AI tools to the database.
 * Run this once from the browser console by importing and calling it.
 * 
 * Usage in browser console:
 * import { migrateToolsToDatabase } from './utils/migrateTools';
 * migrateToolsToDatabase();
 */
export async function migrateToolsToDatabase() {
  try {
    console.log(`Starting migration of ${allAITools.length} tools...`);

    // Check if tools already exist
    const { data: existingTools } = await supabase
      .from("ai_tools")
      .select("name");

    if (existingTools && existingTools.length > 0) {
      console.log(`Database already has ${existingTools.length} tools.`);
      const confirm = window.confirm(
        "Tools already exist in database. Do you want to add more (duplicates will be created)?"
      );
      if (!confirm) {
        console.log("Migration cancelled.");
        return;
      }
    }

    // Map and insert tools
    const toolsToInsert = allAITools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      category: tool.category,
      pricing: tool.pricing,
      rating: tool.rating,
      url: tool.url,
      features: tool.features,
      keywords: (tool as any).keywords || [],
    }));

    const { data, error } = await supabase
      .from("ai_tools")
      .insert(toolsToInsert)
      .select();

    if (error) throw error;

    console.log(`✅ Successfully migrated ${data?.length || 0} tools!`);
    return data;
  } catch (error: any) {
    console.error("❌ Migration failed:", error.message);
    throw error;
  }
}
