import { supabase_client } from "@/utils/supabase_server.js";

export default defineEventHandler(async (event) => {
    const { data, error } = await supabase_client.from('projects').select('*');
    if (error) {
      throw createError({ statusCode: 500, message: error.message });
    }
    return data;
});